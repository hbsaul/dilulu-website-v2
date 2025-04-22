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
    
    // Check if user has permission to view history
    if (!['admin', 'editor'].includes(decoded.role)) {
      return NextResponse.json(
        { success: false, message: 'Not authorized to view content history' },
        { status: 403 }
      );
    }
    
    // Find content
    const contentDoc = await Content.findOne({ pageId, language })
      .populate('previousVersions.editedBy', 'name email')
      .populate('lastEditedBy', 'name email');
    
    if (!contentDoc) {
      return NextResponse.json(
        { success: false, message: 'Content not found' },
        { status: 404 }
      );
    }
    
    // Return history
    return NextResponse.json({
      success: true,
      history: contentDoc.previousVersions,
      currentVersion: {
        version: contentDoc.version,
        editedBy: contentDoc.lastEditedBy,
        editedAt: contentDoc.lastEditedAt
      }
    });
  } catch (error) {
    console.error('Content history fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch content history' },
      { status: 500 }
    );
  }
}
