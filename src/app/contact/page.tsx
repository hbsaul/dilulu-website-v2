'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title={t('contact.heroTitle')}
        subtitle={t('contact.heroSubtitle')}
        imageUrl="/images/contact-hero.jpg"
        height="sm"
      />
      
      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeader 
                title={t('contact.formTitle')} 
                alignment="left"
              />
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-earth-green focus:border-earth-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-earth-green focus:border-earth-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.subjectLabel')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-earth-green focus:border-earth-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-earth-green focus:border-earth-green"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-earth-green text-white font-bold py-3 px-6 rounded-md hover:bg-earth-green-dark transition"
                  >
                    {t('contact.submitButton')}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="bg-earth-green-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-earth-green mb-6">{t('contact.contactInfo')}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.addressTitle')}</h4>
                  <p className="text-gray-700">{t('contact.addressLine1')}</p>
                  <p className="text-gray-700">{t('contact.addressLine2')}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.phoneTitle')}</h4>
                  <p className="text-gray-700">{t('contact.phoneNumber')}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.emailTitle')}</h4>
                  <p className="text-gray-700">{t('contact.emailAddress')}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.hoursTitle')}</h4>
                  <p className="text-gray-700">{t('contact.hoursLine1')}</p>
                  <p className="text-gray-700">{t('contact.hoursLine2')}</p>
                  <p className="text-gray-700">{t('contact.hoursLine3')}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/images/office-map.jpg" 
                    alt="Dilulu office location map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
