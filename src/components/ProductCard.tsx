import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title?: string;
  name?: string;
  price: number | string;
  description: string;
  imageUrl: string;
  addToCartLink: string;
  inStock: boolean;
}

export default function ProductCard({
  title,
  name,
  price,
  description,
  imageUrl,
  addToCartLink,
  inStock
}: ProductCardProps) {
  const displayTitle = title || name || '';
  
  const formatPrice = (price: number | string) => {
    if (typeof price === 'number') {
      return `$${price.toFixed(2)}`;
    }
    return price;
  };
  return (
    <div className="card overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={displayTitle}
          fill
          style={{ objectFit: 'cover' }}
        />
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-sunset-orange text-white px-4 py-2 rounded-md font-bold">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-earth-green text-xl font-bold">{displayTitle}</h3>
          <span className="text-sunset-orange font-bold">{formatPrice(price)}</span>
        </div>
        <p className="mb-4">{description}</p>
        <button 
          className={`btn ${inStock ? 'btn-primary' : 'btn-outline opacity-50 cursor-not-allowed'}`}
          disabled={!inStock}
          onClick={() => inStock && (window.location.href = addToCartLink)}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
