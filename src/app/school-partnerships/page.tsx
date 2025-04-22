'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

export default function SchoolPartnershipsPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title={t('schoolPartnerships.heroTitle')}
        subtitle={t('schoolPartnerships.heroSubtitle')}
        imageUrl="/images/school-partnerships-hero.jpg"
        height="md"
      />
      
      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title={t('schoolPartnerships.introTitle')} 
            alignment="center"
          />
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              {t('schoolPartnerships.introPara1')}
            </p>
            <p className="text-gray-700">
              {t('schoolPartnerships.introPara2')}
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/school-garden-class.jpg" 
                alt={t('schoolPartnerships.introImageAlt')}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-earth-green mb-4">{t('schoolPartnerships.benefitsTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('schoolPartnerships.benefit1')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('schoolPartnerships.benefit2')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('schoolPartnerships.benefit3')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('schoolPartnerships.benefit4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Programs Section */}
      <section className="py-16 px-4 bg-earth-green-light">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title={t('schoolPartnerships.programsTitle')} 
            alignment="center"
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-green mb-3 text-center">{t('schoolPartnerships.program1Title')}</h3>
              <p className="text-gray-700 mb-6">{t('schoolPartnerships.program1Desc')}</p>
              <Link href="/programs/gardening" className="block text-center text-earth-green font-bold hover:underline">
                {t('schoolPartnerships.learnMore')} →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-green mb-3 text-center">{t('schoolPartnerships.program2Title')}</h3>
              <p className="text-gray-700 mb-6">{t('schoolPartnerships.program2Desc')}</p>
              <Link href="/programs/composting" className="block text-center text-earth-green font-bold hover:underline">
                {t('schoolPartnerships.learnMore')} →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-green mb-3 text-center">{t('schoolPartnerships.program3Title')}</h3>
              <p className="text-gray-700 mb-6">{t('schoolPartnerships.program3Desc')}</p>
              <Link href="/e-learning" className="block text-center text-earth-green font-bold hover:underline">
                {t('schoolPartnerships.learnMore')} →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title={t('schoolPartnerships.successTitle')} 
            alignment="center"
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div className="bg-earth-green-light p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/school-success-1.jpg" 
                    alt={t('schoolPartnerships.school1Name')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-earth-green">{t('schoolPartnerships.school1Name')}</h3>
                  <p className="text-gray-700">{t('schoolPartnerships.school1Location')}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {t('schoolPartnerships.school1Story')}
              </p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{t('schoolPartnerships.studentsImpacted')}: 450+</span>
                <span>{t('schoolPartnerships.partnerSince')}: 2018</span>
              </div>
            </div>
            
            <div className="bg-earth-green-light p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/school-success-2.jpg" 
                    alt={t('schoolPartnerships.school2Name')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-earth-green">{t('schoolPartnerships.school2Name')}</h3>
                  <p className="text-gray-700">{t('schoolPartnerships.school2Location')}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {t('schoolPartnerships.school2Story')}
              </p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{t('schoolPartnerships.studentsImpacted')}: 320+</span>
                <span>{t('schoolPartnerships.partnerSince')}: 2019</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Partner Section */}
      <section className="py-16 px-4 bg-earth-green-light">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeader 
            title={t('schoolPartnerships.howToPartnerTitle')} 
            alignment="center"
          />
          
          <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-earth-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-earth-green mb-2">{t('schoolPartnerships.step1Title')}</h3>
                  <p className="text-gray-700">{t('schoolPartnerships.step1Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-earth-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-earth-green mb-2">{t('schoolPartnerships.step2Title')}</h3>
                  <p className="text-gray-700">{t('schoolPartnerships.step2Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-earth-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-earth-green mb-2">{t('schoolPartnerships.step3Title')}</h3>
                  <p className="text-gray-700">{t('schoolPartnerships.step3Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-earth-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-earth-green mb-2">{t('schoolPartnerships.step4Title')}</h3>
                  <p className="text-gray-700">{t('schoolPartnerships.step4Desc')}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-earth-green text-white font-bold py-3 px-8 rounded-md hover:bg-earth-green-dark transition">
                {t('schoolPartnerships.contactButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader 
            title={t('schoolPartnerships.faqTitle')} 
            alignment="center"
          />
          
          <div className="mt-8 space-y-6">
            <div className="bg-earth-green-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-earth-green mb-2">{t('schoolPartnerships.faqQuestion1')}</h3>
              <p className="text-gray-700">{t('schoolPartnerships.faqAnswer1')}</p>
            </div>
            
            <div className="bg-earth-green-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-earth-green mb-2">{t('schoolPartnerships.faqQuestion2')}</h3>
              <p className="text-gray-700">{t('schoolPartnerships.faqAnswer2')}</p>
            </div>
            
            <div className="bg-earth-green-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-earth-green mb-2">{t('schoolPartnerships.faqQuestion3')}</h3>
              <p className="text-gray-700">{t('schoolPartnerships.faqAnswer3')}</p>
            </div>
            
            <div className="bg-earth-green-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-earth-green mb-2">{t('schoolPartnerships.faqQuestion4')}</h3>
              <p className="text-gray-700">{t('schoolPartnerships.faqAnswer4')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
