import React from 'react';
import Image from 'next/image';

interface SchoolCardProps {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  partnerSince: string;
  programsOffered: string[];
}

export default function SchoolCard({
  name,
  location,
  description,
  imageUrl,
  partnerSince,
  programsOffered
}: SchoolCardProps) {
  return (
    <div className="card overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-earth-green text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center text-sm text-stone-gray mb-3">
          <span className="mr-3">📍 {location}</span>
          <span>🤝 Partner since {partnerSince}</span>
        </div>
        <p className="mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Programs Offered:</h4>
          <div className="flex flex-wrap gap-2">
            {programsOffered.map((program, index) => (
              <span 
                key={index} 
                className="bg-leaf-green bg-opacity-20 text-earth-green px-3 py-1 rounded-full text-sm"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
