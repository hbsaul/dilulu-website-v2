"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';
import BlogCard from '@/components/BlogCard';

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero 
        title={t('blog.heroTitle')}
        subtitle={t('blog.heroSubtitle')}
        imageUrl="/images/blog-hero.jpg"
      />
      
      <section className="container mx-auto px-4 py-16">
        <SectionHeader 
          title={t('blog.featuredPostsTitle')}
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <BlogCard 
            title={t('blog.featuredPost1Title')}
            excerpt={t('blog.featuredPost1Excerpt')}
            imageUrl="/images/blog-post1.jpg"
            date={t('blog.featuredPost1Date')}
            author={t('blog.featuredPost1Author')}
            category={t('blog.categoryGardening')}
            url="/blog/sustainable-gardening-practices"
          />
          
          <BlogCard 
            title={t('blog.featuredPost2Title')}
            excerpt={t('blog.featuredPost2Excerpt')}
            imageUrl="/images/blog-post2.jpg"
            date={t('blog.featuredPost2Date')}
            author={t('blog.featuredPost2Author')}
            category={t('blog.categoryComposting')}
            url="/blog/composting-for-beginners"
          />
          
          <BlogCard 
            title={t('blog.featuredPost3Title')}
            excerpt={t('blog.featuredPost3Excerpt')}
            imageUrl="/images/blog-post3.jpg"
            date={t('blog.featuredPost3Date')}
            author={t('blog.featuredPost3Author')}
            category={t('blog.categoryEducation')}
            url="/blog/environmental-education-impact"
          />
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('blog.categoriesTitle')}
            alignment="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <Link href="/blog/category/gardening" className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10-.001 0H10zm1 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('blog.categoryGardening')}</h3>
              <p className="text-gray-600">{t('blog.categoryGardeningDesc')}</p>
            </Link>
            
            <Link href="/blog/category/composting" className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('blog.categoryComposting')}</h3>
              <p className="text-gray-600">{t('blog.categoryCompostingDesc')}</p>
            </Link>
            
            <Link href="/blog/category/education" className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('blog.categoryEducation')}</h3>
              <p className="text-gray-600">{t('blog.categoryEducationDesc')}</p>
            </Link>
            
            <Link href="/blog/category/sustainability" className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('blog.categorySustainability')}</h3>
              <p className="text-gray-600">{t('blog.categorySustainabilityDesc')}</p>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <SectionHeader 
          title={t('blog.recentPostsTitle')}
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <BlogCard 
            title={t('blog.recentPost1Title')}
            excerpt={t('blog.recentPost1Excerpt')}
            imageUrl="/images/blog-recent1.jpg"
            date={t('blog.recentPost1Date')}
            author={t('blog.recentPost1Author')}
            category={t('blog.categorySustainability')}
            url="/blog/zero-waste-living"
          />
          
          <BlogCard 
            title={t('blog.recentPost2Title')}
            excerpt={t('blog.recentPost2Excerpt')}
            imageUrl="/images/blog-recent2.jpg"
            date={t('blog.recentPost2Date')}
            author={t('blog.recentPost2Author')}
            category={t('blog.categoryGardening')}
            url="/blog/seasonal-planting-guide"
          />
          
          <BlogCard 
            title={t('blog.recentPost3Title')}
            excerpt={t('blog.recentPost3Excerpt')}
            imageUrl="/images/blog-recent3.jpg"
            date={t('blog.recentPost3Date')}
            author={t('blog.recentPost3Author')}
            category={t('blog.categoryEducation')}
            url="/blog/teaching-sustainability"
          />
          
          <BlogCard 
            title={t('blog.recentPost4Title')}
            excerpt={t('blog.recentPost4Excerpt')}
            imageUrl="/images/blog-recent4.jpg"
            date={t('blog.recentPost4Date')}
            author={t('blog.recentPost4Author')}
            category={t('blog.categoryComposting')}
            url="/blog/advanced-composting-techniques"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog/archive" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            {t('blog.viewAllPostsButton')}
          </Link>
        </div>
      </section>
      
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('blog.subscribeTitle')}</h2>
            <p className="text-gray-700 mb-8">{t('blog.subscribeDesc')}</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder={t('blog.emailPlaceholder')} 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                {t('blog.subscribeButton')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
