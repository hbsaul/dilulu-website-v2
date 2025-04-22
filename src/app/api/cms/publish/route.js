import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Content from '@/models/Content';
import { verifyToken } from '@/lib/auth';

export async function POST(request) {
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
    
    // Check if user has permission to publish content
    if (!['admin', 'editor'].includes(decoded.role)) {
      return NextResponse.json(
        { success: false, message: 'Not authorized to publish content' },
        { status: 403 }
      );
    }
    
    // Get request body
    const { pageId, language = 'en' } = await request.json();
    
    if (!pageId) {
      return NextResponse.json(
        { success: false, message: 'Page ID is required' },
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
    
    // Update publish status
    contentDoc.publishStatus = 'published';
    contentDoc.lastEditedBy = decoded.id;
    contentDoc.lastEditedAt = new Date();
    
    // Save changes
    await contentDoc.save();
    
    return NextResponse.json({
      success: true,
      message: 'Content published successfully',
    });
  } catch (error) {
    console.error('Content publish error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to publish content' },
      { status: 500 }
    );
  }
}
