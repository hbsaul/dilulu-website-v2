import React from 'react';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  registrationLink: string;
}

export default function EventCard({
  title,
  date,
  location,
  description,
  imageUrl,
  registrationLink
}: EventCardProps) {
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
        <div className="flex items-center text-sm text-stone-gray mb-3">
          <span className="mr-3">📅 {date}</span>
          <span>📍 {location}</span>
        </div>
        <p className="mb-4">{description}</p>
        <a 
          href={registrationLink} 
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
