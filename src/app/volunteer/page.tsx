'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';

export default function VolunteerPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero 
        title={t('volunteer.heroTitle')}
        subtitle={t('volunteer.heroSubtitle')}
        imageUrl="/images/volunteer-hero.jpg"
      />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title={t('volunteer.introTitle')}
              alignment="left"
            />
            <p className="mt-4 text-lg text-gray-700">
              {t('volunteer.introPara1')}
            </p>
            <p className="mt-4 text-lg text-gray-700">
              {t('volunteer.introPara2')}
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/volunteer-intro.jpg" 
              alt={t('volunteer.introImageAlt')}
              fill
              style={{objectFit: 'cover'}}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title={t('volunteer.opportunitiesTitle')}
            alignment="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-4">{t('volunteer.opportunity1Title')}</h3>
              <p className="text-gray-700">{t('volunteer.opportunity1Desc')}</p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  {t('volunteer.timeCommitment')}: {t('volunteer.opportunity1Time')}
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-4">{t('volunteer.opportunity2Title')}</h3>
              <p className="text-gray-700">{t('volunteer.opportunity2Desc')}</p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  {t('volunteer.timeCommitment')}: {t('volunteer.opportunity2Time')}
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-4">{t('volunteer.opportunity3Title')}</h3>
              <p className="text-gray-700">{t('volunteer.opportunity3Desc')}</p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  {t('volunteer.timeCommitment')}: {t('volunteer.opportunity3Time')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title={t('volunteer.processTitle')}
          alignment="center"
        />
        
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">1</div>
            <h3 className="text-xl font-bold mt-4 mb-2">{t('volunteer.step1Title')}</h3>
            <p className="text-gray-700">{t('volunteer.step1Desc')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">2</div>
            <h3 className="text-xl font-bold mt-4 mb-2">{t('volunteer.step2Title')}</h3>
            <p className="text-gray-700">{t('volunteer.step2Desc')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">3</div>
            <h3 className="text-xl font-bold mt-4 mb-2">{t('volunteer.step3Title')}</h3>
            <p className="text-gray-700">{t('volunteer.step3Desc')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">4</div>
            <h3 className="text-xl font-bold mt-4 mb-2">{t('volunteer.step4Title')}</h3>
            <p className="text-gray-700">{t('volunteer.step4Desc')}</p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('volunteer.ctaTitle')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('volunteer.ctaText')}</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300">
            {t('volunteer.ctaButton')}
          </Link>
        </div>
      </section>
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <SectionHeader 
          title={t('volunteer.faqTitle')}
          alignment="center"
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 mb-3">{t('volunteer.faqQuestion1')}</h3>
            <p className="text-gray-700">{t('volunteer.faqAnswer1')}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 mb-3">{t('volunteer.faqQuestion2')}</h3>
            <p className="text-gray-700">{t('volunteer.faqAnswer2')}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 mb-3">{t('volunteer.faqQuestion3')}</h3>
            <p className="text-gray-700">{t('volunteer.faqAnswer3')}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 mb-3">{t('volunteer.faqQuestion4')}</h3>
            <p className="text-gray-700">{t('volunteer.faqAnswer4')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
