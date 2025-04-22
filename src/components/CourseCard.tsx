import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  instructor?: string;
  duration: string;
  level: string;
  description: string;
  imageUrl: string;
  courseLink?: string;
  url?: string;
  price?: string;
}

export default function CourseCard({
  title,
  instructor,
  duration,
  level,
  description,
  imageUrl,
  courseLink,
  url,
  price
}: CourseCardProps) {
  const getLevelColorClass = (level: string) => {
    if (level.includes('Beginner') || level.includes('Débutant')) return 'bg-leaf-green';
    if (level.includes('Intermediate') || level.includes('Intermédiaire')) return 'bg-earth-green';
    if (level.includes('Advanced') || level.includes('Avancé')) return 'bg-soil-brown';
    return 'bg-sky-blue'; // Default or All Levels
  };

  const levelColorClass = getLevelColorClass(level);

  return (
    <div className="card overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={`absolute top-0 right-0 ${levelColorClass} text-white px-3 py-1 m-2 text-sm font-semibold rounded`}>
          {level}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-earth-green text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-sm text-stone-gray mb-3">
          {instructor && <span className="mr-3">👨‍🏫 {instructor}</span>}
          <span>⏱️ {duration}</span>
          {price && <span className="ml-3">💰 {price}</span>}
        </div>
        <p className="mb-4">{description}</p>
        <Link href={url || courseLink || '#'} className="btn btn-primary">
          View Course
        </Link>
      </div>
    </div>
  );
}
