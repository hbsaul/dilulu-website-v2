import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Donation from '@/models/Donation';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get all donations
    const donations = await Donation.find({}).populate('user', 'name email').sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: donations
    });
    
  } catch (error) {
    console.error('Error fetching donations:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const { 
      user, 
      amount, 
      currency, 
      paymentMethod, 
      isRecurring, 
      recurringFrequency, 
      projectDesignation, 
      message, 
      isAnonymous 
    } = await req.json();
    
    // Validate input
    if (!amount || !paymentMethod) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }
    
    // Create donation
    const donation = await Donation.create({
      user,
      amount,
      currency: currency || 'USD',
      paymentMethod,
      status: 'pending',
      isRecurring: isRecurring || false,
      recurringFrequency: isRecurring ? recurringFrequency : undefined,
      projectDesignation: projectDesignation || '',
      message: message || '',
      isAnonymous: isAnonymous || false
    });
    
    return NextResponse.json({
      success: true,
      data: donation
    });
    
  } catch (error) {
    console.error('Error processing donation:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
