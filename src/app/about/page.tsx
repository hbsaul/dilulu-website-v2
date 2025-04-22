'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title={t('about.heroTitle')}
        subtitle={t('about.heroSubtitle')}
        imageUrl="/images/about-hero.jpg"
        height="md"
      />
      
      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title={t('about.ourStoryTitle')} 
            alignment="left"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <p className="text-gray-700 mb-4">
                {t('about.ourStoryPara1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('about.ourStoryPara2')}
              </p>
              <p className="text-gray-700">
                {t('about.ourStoryPara3')}
              </p>
            </div>
            <div className="relative h-80 md:h-auto rounded-lg overflow-hidden">
              <Image 
                src="/images/about-story.jpg" 
                alt={t('about.ourStoryImageAlt')}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-16 px-4 bg-earth-green-light">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title={t('about.ourMissionTitle')} 
            alignment="center"
          />
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              {t('about.ourMissionPara1')}
            </p>
            <p className="text-gray-700">
              {t('about.ourMissionPara2')}
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-earth-green mb-3">{t('about.valueTitle1')}</h3>
              <p className="text-gray-700">{t('about.valueDesc1')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-earth-green mb-3">{t('about.valueTitle2')}</h3>
              <p className="text-gray-700">{t('about.valueDesc2')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-earth-green mb-3">{t('about.valueTitle3')}</h3>
              <p className="text-gray-700">{t('about.valueDesc3')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title={t('about.ourTeamTitle')} 
            alignment="center"
          />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team-1.jpg" 
                  alt={t('about.teamMember1Name')}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.teamMember1Name')}</h3>
              <p className="text-earth-green font-medium">{t('about.teamMember1Role')}</p>
              <p className="text-gray-700 mt-2">{t('about.teamMember1Bio')}</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team-2.jpg" 
                  alt={t('about.teamMember2Name')}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.teamMember2Name')}</h3>
              <p className="text-earth-green font-medium">{t('about.teamMember2Role')}</p>
              <p className="text-gray-700 mt-2">{t('about.teamMember2Bio')}</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team-3.jpg" 
                  alt={t('about.teamMember3Name')}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.teamMember3Name')}</h3>
              <p className="text-earth-green font-medium">{t('about.teamMember3Role')}</p>
              <p className="text-gray-700 mt-2">{t('about.teamMember3Bio')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA Section */}
      <section className="py-16 px-4 bg-earth-green text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.joinUsTitle')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t('about.joinUsDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/volunteer" className="bg-white text-earth-green font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition">
              {t('about.volunteerButton')}
            </Link>
            <Link href="/donate" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-md hover:bg-white hover:text-earth-green transition">
              {t('about.donateButton')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
