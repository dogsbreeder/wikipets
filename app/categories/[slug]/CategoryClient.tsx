"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BusinessCard from '../../components/BusinessCard';

// Tip za podatke kategorije
interface Category {
  name: string;
  nameEn: string;
  icon: string;
  businessCount: number;
  slug: string;
}

// Tip za podatke biznisa
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

interface CategoryClientProps {
  category: Category;
  businesses: Business[];
}

export default function CategoryClient({ category, businesses }: CategoryClientProps) {
  return (
    <div>
      <Navbar />
      
      <main>
        {/* Hero/Header Section */}
        <section className="bg-primary text-white py-12">
          <div className="container-custom">
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl mr-4">{category.icon}</span>
              <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
            </div>
            <p className="text-center text-xl opacity-90">
              Najpouzdaniji izbor za vas i vaše ljubimce
            </p>
          </div>
        </section>
        
        {/* Businesses Grid */}
        <section className="py-12">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                {businesses.length} {category.name} u Beogradu
              </h2>
            </div>
            
            {businesses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses.map((business) => (
                  <BusinessCard 
                    key={business.id}
                    id={business.id}
                    name={business.name}
                    category={business.category}
                    address={business.address}
                    phone={business.phone}
                    website={business.website}
                    photo={business.photo || undefined}
                    rating={business.rating}
                    reviewsCount={business.reviewsCount}
                    latitude={business.latitude}
                    longitude={business.longitude}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-lg text-gray-600">
                  Nema pronađenih poslovanja u ovoj kategoriji. Molimo pokušajte drugu kategoriju.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Additional Information Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">O {category.name} u Beogradu</h2>
            <div className="prose max-w-none">
              <p>
                Beograd nudi razne {category.name.toLowerCase()} za vlasnike kućnih ljubimaca. 
                Ovi biznisi pružaju osnovne usluge za negu i dobrobit kućnih ljubimaca.
              </p>
              <p>
                Prilikom izbora {category.name.toLowerCase().slice(0, -1)} biznisa, razmotrite faktore 
                poput lokacije, recenzija, ponuđenih usluga i stručnosti sa vašom specifičnom vrstom ljubimca.
              </p>
              <p>
                Pregledajte naše liste da biste pronašli savršene {category.name.toLowerCase()} 
                za vašeg ljubimca u Beogradu.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 