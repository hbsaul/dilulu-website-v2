"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';
import CourseCard from '@/components/CourseCard';

export default function ELearningPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero 
        title={t('eLearning.heroTitle')}
        subtitle={t('eLearning.heroSubtitle')}
        imageUrl="/images/elearning-hero.jpg"
      />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionHeader 
            title={t('eLearning.introTitle')}
            alignment="center"
          />
          <p className="text-gray-700 mt-4">
            {t('eLearning.introPara1')}
          </p>
          <p className="text-gray-700 mt-4">
            {t('eLearning.introPara2')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <CourseCard 
            title={t('eLearning.course1Title')}
            description={t('eLearning.course1Desc')}
            imageUrl="/images/course1.jpg"
            level={t('eLearning.beginnerLevel')}
            duration={t('eLearning.course1Duration')}
            price={t('eLearning.course1Price')}
            url="/e-learning/courses/intro-to-gardening"
          />
          
          <CourseCard 
            title={t('eLearning.course2Title')}
            description={t('eLearning.course2Desc')}
            imageUrl="/images/course2.jpg"
            level={t('eLearning.intermediateLevel')}
            duration={t('eLearning.course2Duration')}
            price={t('eLearning.course2Price')}
            url="/e-learning/courses/composting-basics"
          />
          
          <CourseCard 
            title={t('eLearning.course3Title')}
            description={t('eLearning.course3Desc')}
            imageUrl="/images/course3.jpg"
            level={t('eLearning.advancedLevel')}
            duration={t('eLearning.course3Duration')}
            price={t('eLearning.course3Price')}
            url="/e-learning/courses/sustainable-living"
          />
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('eLearning.featuresTitle')}
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('eLearning.feature1Title')}</h3>
              <p className="text-gray-600">{t('eLearning.feature1Desc')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('eLearning.feature2Title')}</h3>
              <p className="text-gray-600">{t('eLearning.feature2Desc')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('eLearning.feature3Title')}</h3>
              <p className="text-gray-600">{t('eLearning.feature3Desc')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <SectionHeader 
          title={t('eLearning.freeResourcesTitle')}
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src="/images/resource1.jpg" 
                alt={t('eLearning.resource1Title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('eLearning.resource1Title')}</h3>
              <p className="text-gray-600 mb-4">{t('eLearning.resource1Desc')}</p>
              <Link href="/e-learning/resources/gardening-guide" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                {t('eLearning.downloadButton')}
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src="/images/resource2.jpg" 
                alt={t('eLearning.resource2Title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('eLearning.resource2Title')}</h3>
              <p className="text-gray-600 mb-4">{t('eLearning.resource2Desc')}</p>
              <Link href="/e-learning/resources/composting-guide" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                {t('eLearning.downloadButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
              <div className="md:flex items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('eLearning.ctaTitle')}</h2>
                  <p className="text-gray-700 mb-6">{t('eLearning.ctaDesc')}</p>
                  <Link href="/e-learning/courses" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                    {t('eLearning.exploreCoursesButton')}
                  </Link>
                </div>
                <div className="md:w-1/3">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image 
                      src="/images/elearning-cta.jpg" 
                      alt={t('eLearning.ctaTitle')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
