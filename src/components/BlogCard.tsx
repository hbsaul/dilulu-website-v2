import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  url?: string;
  slug?: string;
  category?: string;
}

export default function BlogCard({ 
  title, 
  excerpt, 
  date, 
  author, 
  imageUrl, 
  slug,
  url,
  category
}: BlogCardProps) {
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
        <div className="flex items-center text-sm text-stone-gray mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
          {category && (
            <>
              <span className="mx-2">•</span>
              <span>{category}</span>
            </>
          )}
        </div>
        <h3 className="text-earth-green text-xl font-bold mb-3">{title}</h3>
        <p className="mb-4">{excerpt}</p>
        <Link href={url || (slug ? `/blog/${slug}` : '#')} className="text-earth-green font-semibold hover:text-leaf-green">
          Read More →
        </Link>
      </div>
    </div>
  );
}
