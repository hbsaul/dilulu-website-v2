import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Course from '@/models/Course';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get all courses
    const courses = await Course.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: courses
    });
    
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const { title, slug, description, imageUrl, level, duration, modules, instructor } = await req.json();
    
    // Validate input
    if (!title || !slug || !description || !imageUrl || !level || !duration) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }
    
    // Check if course with slug already exists
    const existingCourse = await Course.findOne({ slug });
    
    if (existingCourse) {
      return NextResponse.json(
        { success: false, message: 'Course with this slug already exists' },
        { status: 400 }
      );
    }
    
    // Create course
    const course = await Course.create({
      title,
      slug,
      description,
      imageUrl,
      level,
      duration,
      modules: modules || [],
      instructor
    });
    
    return NextResponse.json({
      success: true,
      data: course
    });
    
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
