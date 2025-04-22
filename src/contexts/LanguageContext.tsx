'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = 'en';

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, any>>({
    en: {},
    fr: {},
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load saved language preference from localStorage if available
    const savedLanguage = localStorage.getItem('dilulu-language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage as Language);
    }

    // Load translations
    const loadTranslations = async () => {
      try {
        const enTranslations = await import('@/translations/en.json');
        const frTranslations = await import('@/translations/fr.json');
        
        setTranslations({
          en: enTranslations.default,
          fr: frTranslations.default,
        });
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to empty translations if files can't be loaded
        setTranslations({
          en: {},
          fr: {},
        });
      } finally {
        setIsLoaded(true);
      }
    };

    loadTranslations();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('dilulu-language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  // Translation function
  const t = (key: string): string => {
    if (!isLoaded) return key;
    
    const keys = key.split('.');
    if (keys.length === 1) {
      return translations[language]?.[key] || translations.en?.[key] || key;
    }
    
    let result: any = translations[language];
    for (const k of keys) {
      if (!result || typeof result !== 'object') return key;
      result = result[k];
    }
    
    if (typeof result !== 'string') {
      result = key;
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
