"use client";

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import BusinessCard from './components/BusinessCard';
import CategoryButton from './components/CategoryButton';
import MunicipalityCard from './components/MunicipalityCard';
import Faq from './components/Faq';
import BlogPostCard from './components/BlogPostCard';
import { allBusinesses } from './data/allBusinesses';
import { getAllPosts } from './utils/blog';
import Link from 'next/link';

// Prevodi za srpski i engleski jezik
const translations = {
  'sr': {
    topRatedBusinesses: 'Ove pet biznise preporucujemo',
    highlyRatedBusinesses: 'Pogledajte najbolje ocenjene biznise za kućne ljubimce u Beogradu',
    browseByMunicipality: 'Pretraži po opštini',
    findPetBusinesses: 'Pronađite biznise za kućne ljubimce po opštinama Beograda',
    browseByBusinessType: 'Pretraži po tipu biznisa',
    findSpecificServices: 'Pronađite specifične usluge za vašeg ljubimca',
    latestBlogPosts: 'Najnoviji blog postovi',
    readMoreBlogPosts: 'Pročitajte više korisnih saveta i informacija o brigi o vašem ljubimcu',
    readMore: 'Pogledaj sve postove'
  },
  'en': {
    topRatedBusinesses: 'Top Rated Pet Businesses',
    highlyRatedBusinesses: 'Check out the highest rated pet businesses in Belgrade',
    browseByMunicipality: 'Browse by Municipality',
    findPetBusinesses: 'Find pet businesses by Belgrade municipalities',
    browseByBusinessType: 'Browse by Business Type',
    findSpecificServices: 'Find specific services for your pet',
    latestBlogPosts: 'Latest Blog Posts',
    readMoreBlogPosts: 'Read more useful tips and information about pet care',
    readMore: 'View all posts'
  }
};

// Подаци о општинама
const MUNICIPALITIES = [
  { name: 'Stari Grad', icon: '🏛️', businessCount: 28 },
  { name: 'Novi Beograd', icon: '🏙️', businessCount: 42 },
  { name: 'Voždovac', icon: '🏘️', businessCount: 23 },
  { name: 'Vračar', icon: '🏢', businessCount: 19 },
  { name: 'Zvezdara', icon: '⭐', businessCount: 24 },
  { name: 'Zemun', icon: '🏞️', businessCount: 18 },
  { name: 'Čukarica', icon: '🌉', businessCount: 15 },
  { name: 'Rakovica', icon: '🏡', businessCount: 11 },
  { name: 'Savski venac', icon: '🌳', businessCount: 14 },
  { name: 'Palilula', icon: '🏬', businessCount: 21 }
];

// Podaci o kategorijama poslovanja
const CATEGORIES = [
  { name: 'Prodavnice za kućne ljubimce', nameEn: 'Pet Stores', icon: '🦮', businessCount: 52, slug: 'prodavnice-za-kucne-ljubimce' },
  { name: 'Veterinarske usluge', nameEn: 'Veterinary Services', icon: '🩺', businessCount: 43, slug: 'veterinari' },
  { name: 'Šišanje kućnih ljubimaca', nameEn: 'Pet Grooming', icon: '✂️', businessCount: 28, slug: 'pet-grooming' },
  { name: 'Kremiranje/groblje za kućne ljubimce', nameEn: 'Pet Cremation/Cemetery', icon: '🕊️', businessCount: 5, slug: 'groblje-kucnih-ljubimaca' },
  { name: 'Trening kućnih ljubimaca', nameEn: 'Pet Training', icon: '🏆', businessCount: 12, slug: 'pet-trening' },
  { name: 'Pansioni za kućne ljubimce', nameEn: 'Pet Boarding', icon: '🏨', businessCount: 15, slug: 'pansioni-za-kucne-ljubimce' },
  { name: 'Šetanje/čuvanje kućnih ljubimaca', nameEn: 'Pet Walking/Sitting', icon: '🚶', businessCount: 20, slug: 'pet-sitting' },
  { name: 'Odgajivači kućnih ljubimaca', nameEn: 'Pet Breeders', icon: '🐾', businessCount: 18, slug: 'odgajivaci' },
];

export default function Home() {
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');
  const t = translations[language];

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };
    window.addEventListener('languageChange' as any, handleLanguageChange);
    return () => {
      window.removeEventListener('languageChange' as any, handleLanguageChange);
    };
  }, []);

  // Select top 9 businesses by rating, prefer those with a photo URL
  const dynamicFeatured = allBusinesses
    .filter(b => b.photo && b.photo.startsWith('http'))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 9);

  return (
    <main>
      <Hero />
      
      {/* Featured Businesses Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">{t.topRatedBusinesses}</h2>
            <p className="text-gray-600">{t.highlyRatedBusinesses}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dynamicFeatured.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Municipality Section */}
      <section id="municipality-section" className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">{t.browseByMunicipality}</h2>
            <p className="text-gray-600">{t.findPetBusinesses}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {MUNICIPALITIES.map((municipality) => (
              <MunicipalityCard 
                key={municipality.name}
                name={municipality.name}
                icon={municipality.icon}
                businessCount={municipality.businessCount}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Category Section */}
      <section id="category-section" className="py-10 bg-white">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">{t.browseByBusinessType}</h2>
            <p className="text-gray-600">{t.findSpecificServices}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORIES.map((category) => (
              <CategoryButton 
                key={category.name}
                name={language === 'sr' ? category.name : category.nameEn}
                icon={category.icon}
                businessCount={category.businessCount}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <Faq />

      {/* Latest Blog Posts Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">{t.latestBlogPosts}</h2>
            <p className="text-gray-600">{t.readMoreBlogPosts}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getAllPosts().slice(0, 3).map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                imageUrl={post.image}
                slug={post.slug}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200"
            >
              {t.readMore}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 

