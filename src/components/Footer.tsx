'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  const footerColumns = [
    {
      title: t('footer.quickLinks'),
      links: [
        { label: t('navbar.home'), href: '/' },
        { label: t('navbar.about'), href: '/about' },
        { label: t('navbar.programs'), href: '/programs' },
        { label: t('navbar.schoolPartnerships'), href: '/school-partnerships' },
        { label: t('navbar.eLearning'), href: '/e-learning' },
      ],
    },
    {
      title: t('footer.getInvolved'),
      links: [
        { label: t('navbar.volunteer'), href: '/volunteer' },
        { label: t('navbar.donate'), href: '/donate' },
        { label: t('navbar.events'), href: '/events' },
        { label: t('navbar.shop'), href: '/shop' },
        { label: 'Speakers & Mentors', href: '/speakers' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('navbar.blog'), href: '/blog' },
        { label: 'News', href: '/news' },
        { label: 'Success Stories', href: '/success-stories' },
        { label: 'Educational Resources', href: '/resources' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as 'en' | 'fr';
    setLanguage(newLang);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-white mb-5">{column.title}</h4>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-3">
                    <Link href={link.href} className="text-gray-200 hover:text-sunlight-yellow transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="text-xl font-bold text-white mb-5">{t('footer.contactUs')}</h4>
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-3">
                <Image 
                  src="/images/logo-small.png" 
                  alt="Dilulu Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-xl font-bold text-white">Dilulu</span>
            </div>
            <ul>
              <li className="mb-3 text-gray-200">Libreville, Gabon</li>
              <li className="mb-3 text-gray-200">Email: info@dilulu.org</li>
              <li className="mb-3 text-gray-200">Phone: +123 456 7890</li>
              <li className="mb-3">
                <div className="relative">
                  <select 
                    className="appearance-none bg-transparent border border-gray-400/30 text-white py-2 px-4 pr-8 rounded-md cursor-pointer"
                    aria-label={t('common.language')}
                    value={language}
                    onChange={handleLanguageChange}
                  >
                    <option value="en" className="bg-soil-brown text-white">English</option>
                    <option value="fr" className="bg-soil-brown text-white">Français</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Dilulu. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
