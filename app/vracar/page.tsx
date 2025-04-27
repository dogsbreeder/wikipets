"use client";

import { useState } from 'react';
import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

const translations = {
  'sr': {
    title: 'Pet biznisi na opštini Vračar',
    subtitle: 'Poslovanja sa kućnim ljubimcima u opštini Vračar',
    businessCount: (count: number) => `${count} ${count === 1 ? 'biznis pronađen' : 'biznisa pronađeno'}`,
    noBusinesses: 'Nema pronađenih poslovanja u ovoj opštini.',
    toggleLanguage: 'English'
  },
  'en': {
    title: 'Pet Businesses in Vračar Municipality',
    subtitle: 'Pet businesses in Vračar Municipality',
    businessCount: (count: number) => `${count} ${count === 1 ? 'business found' : 'businesses found'}`,
    noBusinesses: 'No businesses found in this municipality.',
    toggleLanguage: 'Srpski'
  }
};

export default function VracarPage() {
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');
  const t = translations[language];

  const forbidden = [
    /supermarket/i, /bakalnica/i, /mesara/i, /restoran/i, /restaurant/i, /grocery/i, /ribarnica/i, /fish/i, /butcher/i, /food/i, /market/i, /convenience/i, /deli/i, /bar/i, /cafe/i, /pekara/i, /bakery/i, /insurance/i, /osiguranje/i, /broker/i, /apoteka/i, /pharmacy/i, /fast food/i,
    /hotel/i, /hostel/i, /apartman/i, /apartment/i, /lodging/i, /accommodation/i, /motel/i, /inn/i, /guesthouse/i, /pansion/i, /bed and breakfast/i,
    /maxi/i, /idea/i, /shop&go/i, /shop and go/i, /prodavnica sunce/i, /lidl/i, /dis-kont/i, /diskont/i, /sunce/i, /shop n go/i, /shopngo/i, /shop n' go/i, /grocery store/i, /grocer/i
  ];

  const knownStreets = [
    'Krunska', 'Njegoševa', 'Molerova', 'Makenzijeva', 'Svetog Save',
    'Cara Nikolaja II', 'Beogradska', 'Bulevar kralja Aleksandra', 'Čuburska',
    'Sinđelićeva', 'Smiljanićeva', 'Kralja Milana', 'Kneginje Zorke',
    'Kralja Aleksandra', 'Kralja Milutina', 'Kralja Petra', 'Kralja Vladimira',
    'Kralja Vukašina', 'Kralja Zvonimira', 'Kraljevića Marka', 'Kraljevića Tomislava',
    'Kraljevića Vladimira', 'Kraljevića Vukašina', 'Kraljevića Zvonimira',
    'Čuburski park', 'Braničevska', 'Hadži Milentijeva', 'Sazonova', 'Mutapova',
    'Golsvordijeva', 'Rudnička', 'Mileševska', 'Gospodara Vučića', 'Baba Višnjina',
    'Južni bulevar', 'Radoslava Grujića', 'Vojvode Dragomira', 'Vojvode Šupljikca',
    'Vojvode Brane', 'Vojvode Milenka', 'Vojvode Stepe', 'Vojvode Mišića',
    'Vojvode Putnika', 'Vojvode Tankosića', 'Vojvode Uroša', 'Vojvode Vuka',
    'Vojvode Živojina', 'Kičevska', 'Petrogradska', 'Svetozara Markovića',
    'Resavska', 'Birčaninova', 'Deligradska', 'Kursulina', 'Bore Stankovića',
    'Aleksandra Nenadovića', 'Aleksandra Stambolijskog', 'Aleksandra Tirnanića',
    'Aleksandra Ugrenovića', 'Aleksandra Vojinovića', 'Aleksandra Vučića'
  ];
  const businesses = allBusinesses.filter(b =>
    (
      b.municipality === 'Vračar' ||
      (b.address && b.address.toLowerCase().includes('vračar')) ||
      (b.address && knownStreets.some(street => b.address.toLowerCase().includes(street.toLowerCase())))
    )
    && !forbidden.some(rx =>
      rx.test(b.category || '') ||
      rx.test(b.name || '')
    )
  );

  return (
    <main>
      {/* Hero/Header Section sa Unsplash slikom i overlay-om */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Kućni ljubimci u Beogradu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 to-primary/50"></div>
        </div>
        <div className="relative z-10 container-custom h-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4 mt-12">
            <span className="text-5xl mr-4">🏢</span>
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
      {/* Businesses Grid */}
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
      {/* SEO sekcija */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">Pet biznisi Vračar – Najbolje prodavnice, saloni i veterinari</h2>
          <div className="prose max-w-none">
            <p>Pronađite sve pet shopove, salone za šišanje, veterinare i pansione za kućne ljubimce na opštini Vračar. Najveći izbor i najbolje ocene na jednom mestu. WikiPets – Vaš vodič za ljubimce na Vračaru!</p>
          </div>
        </div>
      </section>
    </main>
  );
} 