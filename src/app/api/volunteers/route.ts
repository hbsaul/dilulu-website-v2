import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Volunteer from '@/models/Volunteer';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get all volunteers
    const volunteers = await Volunteer.find({}).populate('user', 'name email').sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: volunteers
    });
    
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const { user, skills, availability, interests, experience, location } = await req.json();
    
    // Validate input
    if (!user || !availability || !location) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }
    
    // Create volunteer
    const volunteer = await Volunteer.create({
      user,
      skills: skills || [],
      availability,
      interests: interests || [],
      experience: experience || '',
      location
    });
    
    return NextResponse.json({
      success: true,
      data: volunteer
    });
    
  } catch (error) {
    console.error('Error registering volunteer:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
