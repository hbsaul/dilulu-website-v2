'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

export default function DonatePage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title={t('donate.heroTitle')}
        subtitle={t('donate.heroSubtitle')}
        imageUrl="/images/donate-hero.jpg"
        height="md"
      />
      
      {/* Why Donate Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title={t('donate.whyDonateTitle')} 
            alignment="center"
          />
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              {t('donate.whyDonatePara1')}
            </p>
            <p className="text-gray-700">
              {t('donate.whyDonatePara2')}
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-earth-green-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-green mb-3">{t('donate.impactTitle1')}</h3>
              <p className="text-gray-700">{t('donate.impactDesc1')}</p>
            </div>
            
            <div className="bg-earth-green-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-green mb-3">{t('donate.impactTitle2')}</h3>
              <p className="text-gray-700">{t('donate.impactDesc2')}</p>
            </div>
            
            <div className="bg-earth-green-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-green mb-3">{t('donate.impactTitle3')}</h3>
              <p className="text-gray-700">{t('donate.impactDesc3')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Options Section */}
      <section className="py-16 px-4 bg-earth-green-light">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title={t('donate.optionsTitle')} 
            alignment="center"
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* One-time Donation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-earth-green mb-4">{t('donate.oneTimeTitle')}</h3>
              <p className="text-gray-700 mb-6">{t('donate.oneTimeDesc')}</p>
              <div className="space-y-4 mb-8">
                <button className="w-full py-2 border-2 border-earth-green text-earth-green font-bold rounded-md hover:bg-earth-green hover:text-white transition">$25</button>
                <button className="w-full py-2 border-2 border-earth-green text-earth-green font-bold rounded-md hover:bg-earth-green hover:text-white transition">$50</button>
                <button className="w-full py-2 border-2 border-earth-green text-earth-green font-bold rounded-md hover:bg-earth-green hover:text-white transition">$100</button>
                <button className="w-full py-2 border-2 border-earth-green text-earth-green font-bold rounded-md hover:bg-earth-green hover:text-white transition">{t('donate.customAmount')}</button>
              </div>
              <button className="w-full bg-earth-green text-white font-bold py-3 px-6 rounded-md hover:bg-earth-green-dark transition">
                {t('donate.donateNowButton')}
              </button>
            </div>
            
            {/* Monthly Donation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-earth-green mb-4">{t('donate.monthlyTitle')}</h3>
              <p className="text-gray-700 mb-6">{t('donate.monthlyDesc')}</p>
              <div className="space-y-4 mb-8">
                <button className="w-full py-2 border-2 border-earth-green text-earth-green font-bold rounded-md hover:bg-earth-green hover:text-white transition">$10/month</button>
                <button className="w-full py-2 border-2 border-earth-green text-earth-green font-bold rounded-md hover:bg-earth-green hover:text-white transition">$25/month</button>
                <button className="w-full py-2 border-2 border-earth-green text-earth-green font-bold rounded-md hover:bg-earth-green hover:text-white transition">$50/month</button>
                <button className="w-full py-2 border-2 border-earth-green text-earth-green font-bold rounded-md hover:bg-earth-green hover:text-white transition">{t('donate.customAmount')}</button>
              </div>
              <button className="w-full bg-earth-green text-white font-bold py-3 px-6 rounded-md hover:bg-earth-green-dark transition">
                {t('donate.becomeMonthlyButton')}
              </button>
            </div>
            
            {/* Other Ways to Give */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-earth-green mb-4">{t('donate.otherWaysTitle')}</h3>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('donate.otherWay1')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('donate.otherWay2')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('donate.otherWay3')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-earth-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('donate.otherWay4')}</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-earth-green text-white font-bold py-3 px-6 rounded-md hover:bg-earth-green-dark transition">
                {t('donate.contactUsButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-earth-green">{t('donate.testimonialTitle')}</h2>
          <div className="bg-earth-green-light p-8 rounded-lg">
            <p className="text-xl italic text-gray-700 mb-6">
              "{t('donate.testimonialQuote')}"
            </p>
            <div className="flex items-center justify-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                <Image 
                  src="/images/donor-testimonial.jpg" 
                  alt={t('donate.testimonialAuthor')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">{t('donate.testimonialAuthor')}</p>
                <p className="text-earth-green">{t('donate.testimonialRole')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-earth-green-light">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader 
            title={t('donate.faqTitle')} 
            alignment="center"
          />
          <div className="mt-8 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-earth-green mb-2">{t('donate.faqQuestion1')}</h3>
              <p className="text-gray-700">{t('donate.faqAnswer1')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-earth-green mb-2">{t('donate.faqQuestion2')}</h3>
              <p className="text-gray-700">{t('donate.faqAnswer2')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-earth-green mb-2">{t('donate.faqQuestion3')}</h3>
              <p className="text-gray-700">{t('donate.faqAnswer3')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-earth-green mb-2">{t('donate.faqQuestion4')}</h3>
              <p className="text-gray-700">{t('donate.faqAnswer4')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
