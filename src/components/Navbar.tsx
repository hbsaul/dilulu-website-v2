'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const navItems = [
    { label: t('navbar.home'), href: '/' },
    { label: t('navbar.about'), href: '/about' },
    { label: t('navbar.programs'), href: '/programs' },
    { label: t('navbar.schoolPartnerships'), href: '/school-partnerships' },
    { label: t('navbar.eLearning'), href: '/e-learning' },
    { label: t('navbar.volunteer'), href: '/volunteer' },
    { label: t('navbar.events'), href: '/events' },
    { label: t('navbar.shop'), href: '/shop' },
    { label: t('navbar.donate'), href: '/donate' },
    { label: t('navbar.blog'), href: '/blog' },
    { label: t('navbar.contact'), href: '/contact' },
  ];

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="bg-soil-brown text-white py-8 px-4 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-white flex items-center">
          <span className="mr-2">Dilulu</span>
          <Image 
            src="/images/logo-small.png" 
            alt="Dilulu Logo" 
            width={40} 
            height={40}
            className="hidden md:block"
          />
        </Link>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <button 
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center text-white hover:text-sunlight-yellow"
              aria-label={t('common.language')}
            >
              <span className="mr-1">{language.toUpperCase()}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50">
                <button 
                  onClick={() => handleLanguageChange('en')}
                  className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-gray-100 text-earth-green font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => handleLanguageChange('fr')}
                  className={`block w-full text-left px-4 py-2 text-sm ${language === 'fr' ? 'bg-gray-100 text-earth-green font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  Français
                </button>
              </div>
            )}
          </div>
          
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-earth-green md:bg-transparent">
            {navItems.map((item, index) => (
              <li key={index} className="md:ml-6 py-3 md:py-0 px-4 md:px-0">
                <Link 
                  href={item.href}
                  className="nav-link block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
