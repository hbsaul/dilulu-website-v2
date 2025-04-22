import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Content from '@/models/Content';
import { verifyToken } from '@/lib/auth';

export async function GET(request) {
  await dbConnect();
  
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get('pageId');
    const language = searchParams.get('language') || 'en';
    
    if (!pageId) {
      return NextResponse.json(
        { success: false, message: 'Page ID is required' },
        { status: 400 }
      );
    }
    
    // Find content
    const content = await Content.findOne({ 
      pageId, 
      language,
      publishStatus: 'published'
    });
    
    if (!content) {
      return NextResponse.json(
        { success: false, message: 'Content not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error('Content fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  await dbConnect();
  
  try {
    // Get token from cookies
    const token = request.cookies.get('token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }
    
    // Verify token
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return NextResponse.json(
        { success: false, message: 'Invalid token' },
        { status: 401 }
      );
    }
    
    // Check if user has permission to edit content
    if (!['admin', 'editor'].includes(decoded.role)) {
      return NextResponse.json(
        { success: false, message: 'Not authorized to edit content' },
        { status: 403 }
      );
    }
    
    // Get request body
    const { pageId, sectionId, content: newContent, language = 'en' } = await request.json();
    
    if (!pageId || !sectionId || !newContent) {
      return NextResponse.json(
        { success: false, message: 'Page ID, section ID, and content are required' },
        { status: 400 }
      );
    }
    
    // Find content
    const contentDoc = await Content.findOne({ pageId, language });
    
    if (!contentDoc) {
      return NextResponse.json(
        { success: false, message: 'Content not found' },
        { status: 404 }
      );
    }
    
    // Save current version to history
    const currentVersion = contentDoc.version;
    contentDoc.previousVersions.push({
      content: contentDoc.toObject(),
      editedBy: decoded.id,
      editedAt: new Date(),
      version: currentVersion
    });
    
    // Update section content
    const sectionIndex = contentDoc.sections.findIndex(
      section => section.sectionId === sectionId
    );
    
    if (sectionIndex === -1) {
      return NextResponse.json(
        { success: false, message: 'Section not found' },
        { status: 404 }
      );
    }
    
    contentDoc.sections[sectionIndex].content = newContent;
    contentDoc.lastEditedBy = decoded.id;
    contentDoc.lastEditedAt = new Date();
    contentDoc.version = currentVersion + 1;
    
    // Save changes
    await contentDoc.save();
    
    return NextResponse.json({
      success: true,
      message: 'Content updated successfully',
    });
  } catch (error) {
    console.error('Content update error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update content' },
      { status: 500 }
    );
  }
}
