"use client";

import { useState } from 'react';
import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';
import Footer from '../components/Footer';

// Definiši poznate Zemun ulice
const knownStreets = [
  'Glavna', 'Gornji grad', 'Donji grad', 'Cara Dušana', 'Kej oslobođenja',
  'Savska', 'Prilaz', 'Ugrinovačka', 'Bežanijska', 'Zemunski kej',
  'Dubrovacka', 'Tošin bunar', 'Pregrevica', 'Luka Vukalovića',
  'Lovačka', 'Sime Šolaje', 'Svetosavska', 'Šumadijska', 'Karamatina',
  'Avijatičarski trg', 'Batajnički drum'
];

// Definiši tip
interface Business {
  id: string;
  name: string;
  category: string;
  address?: string;
  phone?: string;
  website?: string;
  photo?: string | null;
  rating: number;
  reviewsCount: number;
  latitude?: number;
  longitude?: number;
  municipality?: string;
}

export default function ZemunPage() {
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');
  const translations = {
    'sr': {
      title: 'Pet biznisi na opštini Zemun',
      subtitle: 'Poslovanja sa kućnim ljubimcima u opštini Zemun',
      businessCount: (count: number) => `${count} ${count === 1 ? 'biznis pronađen' : 'biznisa pronađeno'}`,
      noBusinesses: 'Nema pronađenih poslovanja u ovoj opštini.',
      aboutMunicipality: 'O opštini Zemun',
      aboutText: 'Opština Zemun je poznata po bogatoj ponudi usluga za kućne ljubimce. Ovde možete pronaći sve što je potrebno za brigu o vašim ljubimcima, od prodavnica hrane i opreme do veterinarskih usluga.',
      aboutText2: 'Pogledajte listu iznad za kompletnu ponudu poslovanja vezanih za kućne ljubimce u opštini Zemun. Svako poslovanje prikazuje ključne informacije poput adrese, kontakt podataka i prosečne ocene korisnika.',
      toggleLanguage: 'English'
    },
    'en': {
      title: 'Pet Businesses in Zemun Municipality',
      subtitle: 'Pet businesses in Zemun Municipality',
      businessCount: (count: number) => `${count} ${count === 1 ? 'business found' : 'businesses found'}`,
      noBusinesses: 'No businesses found in this municipality.',
      aboutMunicipality: 'About Zemun Municipality',
      aboutText: 'Zemun Municipality is known for its rich offer of pet services. Here you can find everything you need for your pets, from food and equipment stores to veterinary services.',
      aboutText2: 'Check the list above for a complete offer of pet-related businesses in Zemun Municipality. Each business displays key information such as address, contact details, and average user rating.',
      toggleLanguage: 'Srpski'
    }
  };
  const t = translations[language];

  // Filter za Zemun
  const forbidden = [
    /supermarket/i, /bakalnica/i, /mesara/i, /restoran/i, /restaurant/i, /grocery/i, /ribarnica/i, /fish/i, /butcher/i, /food/i, /market/i, /convenience/i, /deli/i, /bar/i, /cafe/i, /pekara/i, /bakery/i, /insurance/i, /osiguranje/i, /broker/i, /apoteka/i, /pharmacy/i, /fast food/i,
    /hotel/i, /hostel/i, /apartman/i, /apartment/i, /lodging/i, /accommodation/i, /motel/i, /inn/i, /guesthouse/i, /pansion/i, /bed and breakfast/i,
    /maxi/i, /idea/i, /shop&go/i, /shop and go/i, /prodavnica sunce/i, /lidl/i, /dis-kont/i, /diskont/i, /sunce/i, /shop n go/i, /shopngo/i, /shop n' go/i, /grocery store/i, /grocer/i
  ];
  const businesses = allBusinesses.filter((b: Business) => {
    const address = b.address?.toLowerCase() || '';
    const isZemun = b.municipality?.toLowerCase() === 'zemun';
    const inKnownStreet = knownStreets.some(street => address.includes(street.toLowerCase()));
    // Isključi Cane Corso kennel
    const isCaneCorsoKennel = b.name?.toLowerCase().includes('cane corso kennel');
    return (
      (isZemun || address.includes('zemun') || inKnownStreet)
      && !isCaneCorsoKennel
      && !forbidden.some((rx: RegExp) =>
        rx.test(b.category || '') ||
        rx.test(b.name || '')
      )
    );
  });

  return (
    <main>
      {/* Hero/Header Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Kućni ljubimci Zemun"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 to-primary/50"></div>
        </div>
        <div className="relative z-10 container-custom h-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4 mt-12">
            <span className="text-5xl mr-4">🏞️</span>
            <h1 className="text-3xl md:text-4xl font-bold">{t.title}</h1>
          </div>
          <p className="text-center text-xl opacity-90">{t.subtitle}</p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setLanguage(language === 'sr' ? 'en' : 'sr')}
              className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.toggleLanguage}
            </button>
          </div>
        </div>
      </div>
      {/* Grid Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {t.businessCount(businesses.length)}
            </h2>
          </div>
          {businesses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses.map((business) => (
                <BusinessCard 
                  key={business.id}
                  business={{ ...business, full_address: business.address, reviews: business.reviewsCount, photo: (business.photo && business.photo.startsWith('http')) ? business.photo : '/images/logo.png' }}
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-lg text-gray-600">{t.noBusinesses}</p>
            </div>
          )}
        </div>
      </section>
      {/* Additional Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">Pet biznisi Zemun – Najbolje prodavnice, saloni i veterinari</h2>
          <div className="prose max-w-none">
            <p>{t.aboutText}</p>
            <p>{t.aboutText2}</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 