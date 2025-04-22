import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProgramCard({ title, description, imageUrl, link }: ProgramCardProps) {
  return (
    <div className="card overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-earth-green text-xl font-bold mb-3">{title}</h3>
        <p className="mb-4">{description}</p>
        <Link href={link} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
}
