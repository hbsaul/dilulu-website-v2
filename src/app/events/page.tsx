"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero 
        title={t('events.heroTitle')}
        subtitle={t('events.heroSubtitle')}
        imageUrl="/images/events-hero.jpg"
      />
      
      <section className="container mx-auto px-4 py-16">
        <SectionHeader 
          title={t('events.upcomingTitle')}
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Event 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src="/images/event1.jpg" 
                alt={t('events.event1Title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {t('events.workshop')}
                </div>
                <div className="ml-2 text-sm text-gray-600">
                  {t('events.event1Date')}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('events.event1Title')}</h3>
              <p className="text-gray-600 mb-4">{t('events.event1Desc')}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{t('events.event1Location')}</span>
              </div>
              <Link href="/events/workshop-1" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                {t('events.registerButton')}
              </Link>
            </div>
          </div>
          
          {/* Event 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src="/images/event2.jpg" 
                alt={t('events.event2Title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {t('events.seminar')}
                </div>
                <div className="ml-2 text-sm text-gray-600">
                  {t('events.event2Date')}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('events.event2Title')}</h3>
              <p className="text-gray-600 mb-4">{t('events.event2Desc')}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{t('events.event2Location')}</span>
              </div>
              <Link href="/events/seminar-1" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                {t('events.registerButton')}
              </Link>
            </div>
          </div>
          
          {/* Event 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src="/images/event3.jpg" 
                alt={t('events.event3Title')}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {t('events.conference')}
                </div>
                <div className="ml-2 text-sm text-gray-600">
                  {t('events.event3Date')}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('events.event3Title')}</h3>
              <p className="text-gray-600 mb-4">{t('events.event3Desc')}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{t('events.event3Location')}</span>
              </div>
              <Link href="/events/conference-1" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                {t('events.registerButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('events.pastEventsTitle')}
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Past Event 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/past-event1.jpg" 
                  alt={t('events.pastEvent1Title')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">
                  {t('events.pastEvent1Date')}
                </div>
                <h3 className="text-xl font-bold mb-2">{t('events.pastEvent1Title')}</h3>
                <p className="text-gray-600 mb-4">{t('events.pastEvent1Desc')}</p>
                <Link href="/events/past/workshop-1" className="text-green-600 hover:text-green-800 font-medium">
                  {t('events.viewRecapButton')} →
                </Link>
              </div>
            </div>
            
            {/* Past Event 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/past-event2.jpg" 
                  alt={t('events.pastEvent2Title')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">
                  {t('events.pastEvent2Date')}
                </div>
                <h3 className="text-xl font-bold mb-2">{t('events.pastEvent2Title')}</h3>
                <p className="text-gray-600 mb-4">{t('events.pastEvent2Desc')}</p>
                <Link href="/events/past/seminar-1" className="text-green-600 hover:text-green-800 font-medium">
                  {t('events.viewRecapButton')} →
                </Link>
              </div>
            </div>
            
            {/* Past Event 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/past-event3.jpg" 
                  alt={t('events.pastEvent3Title')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">
                  {t('events.pastEvent3Date')}
                </div>
                <h3 className="text-xl font-bold mb-2">{t('events.pastEvent3Title')}</h3>
                <p className="text-gray-600 mb-4">{t('events.pastEvent3Desc')}</p>
                <Link href="/events/past/conference-1" className="text-green-600 hover:text-green-800 font-medium">
                  {t('events.viewRecapButton')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <div className="bg-green-50 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('events.hostEventTitle')}</h2>
              <p className="text-gray-700 mb-6">{t('events.hostEventDesc')}</p>
              <Link href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                {t('events.contactUsButton')}
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image 
                  src="/images/host-event.jpg" 
                  alt={t('events.hostEventTitle')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
