import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: 'green' | 'leaf' | 'orange';
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundColor = 'leaf'
}: CTASectionProps) {
  const bgColorClass = {
    green: 'bg-earth-green text-white',
    leaf: 'bg-leaf-green text-night-black',
    orange: 'bg-sunset-orange text-white'
  }[backgroundColor];

  return (
    <section className={`py-16 ${bgColorClass}`}>
      <div className="container text-center">
        <h2 className={`text-3xl font-bold mb-4 ${backgroundColor !== 'leaf' ? 'text-white' : 'text-night-black'}`}>
          {title}
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">{description}</p>
        <Link href={buttonLink} className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
