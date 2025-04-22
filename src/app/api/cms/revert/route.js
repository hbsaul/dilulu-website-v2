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
    
    // Check if user has permission to revert content
    if (!['admin', 'editor'].includes(decoded.role)) {
      return NextResponse.json(
        { success: false, message: 'Not authorized to revert content' },
        { status: 403 }
      );
    }
    
    // Get request body
    const { pageId, version, language = 'en' } = await request.json();
    
    if (!pageId || !version) {
      return NextResponse.json(
        { success: false, message: 'Page ID and version are required' },
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
    
    // Find the version to revert to
    const versionToRevert = contentDoc.previousVersions.find(
      v => v.version === version
    );
    
    if (!versionToRevert) {
      return NextResponse.json(
        { success: false, message: 'Version not found' },
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
    
    // Revert to previous version
    contentDoc.sections = versionToRevert.content.sections;
    contentDoc.title = versionToRevert.content.title;
    contentDoc.lastEditedBy = decoded.id;
    contentDoc.lastEditedAt = new Date();
    contentDoc.version = currentVersion + 1;
    
    // Save changes
    await contentDoc.save();
    
    return NextResponse.json({
      success: true,
      message: 'Content reverted successfully',
    });
  } catch (error) {
    console.error('Content revert error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to revert content' },
      { status: 500 }
    );
  }
}
