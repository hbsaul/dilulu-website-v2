import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SpeakerCardProps {
  name: string;
  expertise: string;
  bio: string;
  imageUrl: string;
  topics: string[];
  contactLink: string;
}

export default function SpeakerCard({
  name,
  expertise,
  bio,
  imageUrl,
  topics,
  contactLink
}: SpeakerCardProps) {
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
        <div className="text-stone-gray mb-3 font-semibold">{expertise}</div>
        <p className="mb-4">{bio}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Speaking Topics:</h4>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span 
                key={index} 
                className="bg-sky-blue bg-opacity-20 text-sky-blue px-3 py-1 rounded-full text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
        <Link href={contactLink} className="btn btn-primary w-full">
          Book Speaker
        </Link>
      </div>
    </div>
  );
}
