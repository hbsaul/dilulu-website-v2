'use client';

import React from 'react';
import Hero from '@/components/Hero';
import ProgramsGrid from '@/components/ProgramsGrid';
import CTASection from '@/components/CTASection';
import Testimonial from '@/components/Testimonial';
import StatItem from '@/components/StatItem';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  const programs = [
    {
      title: t('programs.gardening'),
      description: t('home.gardeningDesc'),
      imageUrl: '/images/garden.jpg',
      link: '/programs/gardening',
    },
    {
      title: t('programs.composting'),
      description: t('home.compostingDesc'),
      imageUrl: '/images/compost.jpg',
      link: '/programs/composting',
    },
    {
      title: t('programs.education'),
      description: t('home.educationDesc'),
      imageUrl: '/images/education.jpg',
      link: '/programs/education',
    },
    {
      title: t('programs.naturalLiving'),
      description: t('home.naturalLivingDesc'),
      imageUrl: '/images/natural-living.jpg',
      link: '/programs/natural-living',
    },
    {
      title: t('programs.zeroWaste'),
      description: t('home.zeroWasteDesc'),
      imageUrl: '/images/zero-waste.jpg',
      link: '/programs/zero-waste',
    },
  ];

  const stats = [
    { number: '500+', label: t('home.familiesTrained') },
    { number: '20', label: t('home.schoolGardens') },
    { number: '10', label: t('home.wasteComposted') },
    { number: '5000+', label: t('home.childrenImpacted') },
  ];

  return (
    <div>
      <Hero
        title={t('home.heroTitle')}
        subtitle={t('home.heroSubtitle')}
        primaryButtonText={t('home.ourPrograms')}
        primaryButtonLink="/programs"
        secondaryButtonText={t('home.getInvolved')}
        secondaryButtonLink="/volunteer"
        imageUrl="/images/hero-bg.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl font-bold text-earth-green">{t('about.missionTitle')}</h2>
            <p className="text-lg max-w-3xl mx-auto">
              {t('home.missionStatement')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <StatItem key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl font-bold text-earth-green">{t('home.ourPrograms')}</h2>
            <p className="text-lg max-w-3xl mx-auto">
              {t('home.programsDescription')}
            </p>
          </div>

          <ProgramsGrid programs={programs} />
        </div>
      </section>

      <CTASection
        title={t('home.volunteerCTA')}
        description={t('home.volunteerDescription')}
        buttonText={t('home.volunteerNow')}
        buttonLink="/volunteer"
        backgroundColor="green"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl font-bold text-earth-green">{t('home.successStories')}</h2>
            <p className="text-lg max-w-3xl mx-auto">
              {t('home.testimonialDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Testimonial
              quote={t('home.testimonial1')}
              author={t('home.testimonial1Author')}
              role={t('home.testimonial1Role')}
            />
            <Testimonial
              quote={t('home.testimonial2')}
              author={t('home.testimonial2Author')}
              role={t('home.testimonial2Role')}
            />
            <Testimonial
              quote={t('home.testimonial3')}
              author={t('home.testimonial3Author')}
              role={t('home.testimonial3Role')}
            />
          </div>
        </div>
      </section>

      <CTASection
        title={t('home.donateCTA')}
        description={t('home.donateDescription')}
        buttonText={t('home.donateNow')}
        buttonLink="/donate"
        backgroundColor="orange"
      />
    </div>
  );
}
