'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  height?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink = '#',
  secondaryButtonText,
  secondaryButtonLink = '#',
  imageUrl = '/images/hero-bg.jpg',
  height
}: HeroProps) {
  const { t } = useLanguage();
  
  return (
    <section className="hero relative py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={t('common.heroBackground')}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="container relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-white">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryButtonText && (
            <a href={primaryButtonLink} className="btn btn-primary">
              {primaryButtonText}
            </a>
          )}
          {secondaryButtonText && (
            <a href={secondaryButtonLink} className="btn btn-secondary">
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
