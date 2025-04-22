import React from 'react';
import Image from 'next/image';

interface VolunteerCardProps {
  name: string;
  role: string;
  location: string;
  bio: string;
  imageUrl: string;
  skills: string[];
}

export default function VolunteerCard({
  name,
  role,
  location,
  bio,
  imageUrl,
  skills
}: VolunteerCardProps) {
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
          <span className="mr-3">🌱 {role}</span>
          <span>📍 {location}</span>
        </div>
        <p className="mb-4">{bio}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-sunset-orange bg-opacity-20 text-sunset-orange px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
