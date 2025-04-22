import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';
import Product from '@/models/Product';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get all orders
    const orders = await Order.find({})
      .populate('user', 'name email')
      .populate('products.product')
      .sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: orders
    });
    
  } catch (error) {
    console.error('Error fetching orders:', error);
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
      products, 
      totalAmount, 
      shippingAddress, 
      paymentMethod
    } = await req.json();
    
    // Validate input
    if (!user || !products || !totalAmount || !shippingAddress || !paymentMethod) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }
    
    // Validate products and check inventory
    for (const item of products) {
      const product = await Product.findById(item.product);
      
      if (!product) {
        return NextResponse.json(
          { success: false, message: `Product ${item.product} not found` },
          { status: 400 }
        );
      }
      
      if (product.inventory < item.quantity) {
        return NextResponse.json(
          { success: false, message: `Not enough inventory for ${product.name}` },
          { status: 400 }
        );
      }
      
      // Update inventory
      product.inventory -= item.quantity;
      await product.save();
    }
    
    // Create order
    const order = await Order.create({
      user,
      products,
      totalAmount,
      shippingAddress,
      paymentMethod,
      paymentStatus: 'pending',
      orderStatus: 'processing'
    });
    
    return NextResponse.json({
      success: true,
      data: order
    });
    
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
