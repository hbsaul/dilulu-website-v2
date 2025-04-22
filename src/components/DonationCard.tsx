import React from 'react';
import Image from 'next/image';

interface DonationCardProps {
  title: string;
  amount: number;
  description: string;
  imageUrl: string;
  benefits: string[];
}

export default function DonationCard({
  title,
  amount,
  description,
  imageUrl,
  benefits
}: DonationCardProps) {
  return (
    <div className="card overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-earth-green text-xl font-bold mb-2">{title}</h3>
        <div className="text-sunset-orange text-2xl font-bold mb-3">${amount}</div>
        <p className="mb-4">{description}</p>
        {benefits.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Benefits:</h4>
            <ul className="list-disc pl-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="mb-1">{benefit}</li>
              ))}
            </ul>
          </div>
        )}
        <button className="btn btn-primary w-full">Donate Now</button>
      </div>
    </div>
  );
}
