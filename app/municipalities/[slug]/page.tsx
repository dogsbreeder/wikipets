"use client";

import { useState } from 'react';
import BusinessCard from '../../components/BusinessCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { businessesByMunicipality } from '../../data/businessesByMunicipality';

// Define business type to match what BusinessCard expects
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
}

// Define businesses by municipality type
interface BusinessesByMunicipality {
  [key: string]: Business[];
}

// Type assertion for imported data
const typedBusinessesByMunicipality = businessesByMunicipality as BusinessesByMunicipality;

// Helper function to convert municipality name to slug
function municipalityToSlug(name: string): string {
  return name.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, '-');
}

// Podaci o opštinama
const MUNICIPALITIES = [
  { name: 'Stari Grad', icon: '🏛️', businessCount: 0, slug: 'stari-grad' },
  { name: 'Novi Beograd', icon: '🏙️', businessCount: 0, slug: 'novi-beograd' },
  { name: 'Voždovac', icon: '🏘️', businessCount: 0, slug: 'vozdovac' },
  { name: 'Vračar', icon: '🏢', businessCount: 0, slug: 'vracar' },
  { name: 'Zvezdara', icon: '⭐', businessCount: 0, slug: 'zvezdara' },
  { name: 'Zemun', icon: '🏞️', businessCount: 0, slug: 'zemun' },
  { name: 'Čukarica', icon: '🌉', businessCount: 0, slug: 'cukarica' },
  { name: 'Rakovica', icon: '🏡', businessCount: 0, slug: 'rakovica' },
  { name: 'Palilula', icon: '🏬', businessCount: 0, slug: 'palilula' },
  { name: 'Savski venac', icon: '🏢', businessCount: 0, slug: 'savski-venac' },
];

// Update municipality business counts based on imported data
for (const municipality of MUNICIPALITIES) {
  const municipalityBusinesses = typedBusinessesByMunicipality[municipality.name] || [];
  municipality.businessCount = municipalityBusinesses.length;
}

export default function MunicipalityPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params;
  
  // Find municipality by slug
  const municipality = MUNICIPALITIES.find(m => m.slug === slug);
  
  // Get businesses in this municipality based on the municipality name
  const municipalityName = municipality?.name || '';
  const businesses = typedBusinessesByMunicipality[municipalityName] || [];
  
  if (!municipality) {
    return (
      <main>
        <Navbar />
        <section className="py-12">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Opština nije pronađena</h1>
            <p>Opština koju tražite ne postoji u našoj bazi.</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
  
  return (
    <main>
      <Navbar />
      
      {/* Hero/Header Section */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom">
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl mr-4">{municipality?.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold">{municipality?.name}</h1>
          </div>
          <p className="text-center text-xl opacity-90">
            Poslovanja sa kućnim ljubimcima u opštini {municipality?.name}
          </p>
        </div>
      </section>
      
      {/* Businesses Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {businesses.length} {businesses.length === 1 ? 'biznis pronađen' : 'biznisa pronađeno'}
            </h2>
          </div>
          
          {businesses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses.map((business) => (
                <BusinessCard 
                  key={business.id}
                  business={{
                    ...business,
                    full_address: business.address || "",
                    reviews: business.reviewsCount,
                    photo: business.photo ? business.photo : "/images/logo.png",
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-lg text-gray-600">
                Nema pronađenih poslovanja u ovoj opštini. Molimo pokušajte drugu opštinu.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Additional Information Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">O opštini {municipality?.name}</h2>
          <div className="prose max-w-none">
            <p>
              Opština {municipality?.name} je jedan od ključnih delova Beograda sa raznovrsnim uslugama za kućne ljubimce.
              Ovde možete pronaći sve što je potrebno za brigu o vašim ljubimcima, od prodavnica hrane i opreme do veterinarskih usluga.
            </p>
            <p>
              Pogledajte listu iznad za kompletnu ponudu poslovanja vezanih za kućne ljubimce u opštini {municipality?.name}.
              Svako poslovanje prikazuje ključne informacije poput adrese, kontakt podataka i prosečne ocene korisnika.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 