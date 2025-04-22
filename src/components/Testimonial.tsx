import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  imageUrl?: string;
}

export default function Testimonial({ 
  quote, 
  author, 
  role,
  imageUrl = '/images/testimonial-bg.jpg'
}: TestimonialProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl relative overflow-hidden">
      {imageUrl && (
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <Image
            src={imageUrl}
            alt="Testimonial background"
            width={96}
            height={96}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="testimonial mb-6">"{quote}"</div>
      <div className="font-semibold">{author}</div>
      {role && <div className="text-stone-gray">{role}</div>}
    </div>
  );
}
