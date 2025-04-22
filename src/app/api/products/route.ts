import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get all products
    const products = await Product.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: products
    });
    
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const { name, slug, description, price, category, imageUrl, inventory, isAvailable } = await req.json();
    
    // Validate input
    if (!name || !slug || !description || !price || !category || !imageUrl || inventory === undefined) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }
    
    // Check if product with slug already exists
    const existingProduct = await Product.findOne({ slug });
    
    if (existingProduct) {
      return NextResponse.json(
        { success: false, message: 'Product with this slug already exists' },
        { status: 400 }
      );
    }
    
    // Create product
    const product = await Product.create({
      name,
      slug,
      description,
      price,
      category,
      imageUrl,
      inventory,
      isAvailable: isAvailable !== undefined ? isAvailable : true
    });
    
    return NextResponse.json({
      success: true,
      data: product
    });
    
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
