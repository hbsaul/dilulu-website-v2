import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProgramsGridProps {
  programs: {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }[];
}

export default function ProgramsGrid({ programs }: ProgramsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programs.map((program, index) => (
        <div key={index} className="card overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
          <div className="relative h-48 w-full">
            <Image 
              src={program.imageUrl} 
              alt={program.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="p-6">
            <h3 className="text-earth-green text-xl font-bold mb-3">{program.title}</h3>
            <p className="mb-4">{program.description}</p>
            <Link href={program.link} className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
