import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Program from '@/models/Program';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get all programs
    const programs = await Program.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: programs
    });
    
  } catch (error) {
    console.error('Error fetching programs:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const { title, slug, description, content, imageUrl, featured } = await req.json();
    
    // Validate input
    if (!title || !slug || !description || !content || !imageUrl) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }
    
    // Check if program with slug already exists
    const existingProgram = await Program.findOne({ slug });
    
    if (existingProgram) {
      return NextResponse.json(
        { success: false, message: 'Program with this slug already exists' },
        { status: 400 }
      );
    }
    
    // Create program
    const program = await Program.create({
      title,
      slug,
      description,
      content,
      imageUrl,
      featured: featured || false
    });
    
    return NextResponse.json({
      success: true,
      data: program
    });
    
  } catch (error) {
    console.error('Error creating program:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
