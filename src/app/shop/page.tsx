"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero 
        title={t('shop.heroTitle')}
        subtitle={t('shop.heroSubtitle')}
        imageUrl="/images/shop-hero.jpg"
      />
      
      <section className="container mx-auto px-4 py-16">
        <SectionHeader 
          title={t('shop.featuredTitle')}
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <ProductCard 
            name={t('shop.product1Name')}
            description={t('shop.product1Desc')}
            price="$24.99"
            imageUrl="/images/product1.jpg"
            addToCartLink="/shop/cart/add?id=1"
            inStock={true}
          />
          
          <ProductCard 
            name={t('shop.product2Name')}
            description={t('shop.product2Desc')}
            price="$18.50"
            imageUrl="/images/product2.jpg"
            addToCartLink="/shop/cart/add?id=2"
            inStock={true}
          />
          
          <ProductCard 
            name={t('shop.product3Name')}
            description={t('shop.product3Desc')}
            price="$32.00"
            imageUrl="/images/product3.jpg"
            addToCartLink="/shop/cart/add?id=3"
            inStock={true}
          />
          
          <ProductCard 
            name={t('shop.product4Name')}
            description={t('shop.product4Desc')}
            price="$15.75"
            imageUrl="/images/product4.jpg"
            addToCartLink="/shop/cart/add?id=4"
            inStock={false}
          />
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('shop.categoriesTitle')}
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Category 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/category-seeds.jpg" 
                  alt={t('shop.category1Title')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{t('shop.category1Title')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{t('shop.category1Desc')}</p>
                <Link href="/shop/seeds" className="text-green-600 hover:text-green-800 font-medium">
                  {t('shop.browseCategory')} →
                </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/category-tools.jpg" 
                  alt={t('shop.category2Title')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{t('shop.category2Title')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{t('shop.category2Desc')}</p>
                <Link href="/shop/tools" className="text-green-600 hover:text-green-800 font-medium">
                  {t('shop.browseCategory')} →
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/category-books.jpg" 
                  alt={t('shop.category3Title')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{t('shop.category3Title')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{t('shop.category3Desc')}</p>
                <Link href="/shop/books" className="text-green-600 hover:text-green-800 font-medium">
                  {t('shop.browseCategory')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <div className="bg-green-50 rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('shop.impactTitle')}</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">{t('shop.impactDesc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('shop.impact1Title')}</h3>
              <p className="text-gray-600">{t('shop.impact1Desc')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('shop.impact2Title')}</h3>
              <p className="text-gray-600">{t('shop.impact2Desc')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('shop.impact3Title')}</h3>
              <p className="text-gray-600">{t('shop.impact3Desc')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('shop.testimonialsTitle')}
            alignment="center"
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src="/images/testimonial1.jpg" 
                      alt={t('shop.testimonial1Author')}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-4">"{t('shop.testimonial1Text')}"</p>
                  <p className="font-bold">{t('shop.testimonial1Author')}</p>
                  <p className="text-sm text-gray-500">{t('shop.testimonial1Location')}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src="/images/testimonial2.jpg" 
                      alt={t('shop.testimonial2Author')}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-4">"{t('shop.testimonial2Text')}"</p>
                  <p className="font-bold">{t('shop.testimonial2Author')}</p>
                  <p className="text-sm text-gray-500">{t('shop.testimonial2Location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
