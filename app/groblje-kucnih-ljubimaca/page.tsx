"use client";

import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

export default function PetCemeteryPage() {
  // Filtriraj sve usluge groblja za kućne ljubimce
  const petCemeteryServices = allBusinesses.filter(b => {
    const cat = b.category ? b.category.toLowerCase() : '';
    const name = b.name ? b.name.toLowerCase() : '';
    // Pet cemetery filter
    const isPetCemetery =
      cat.includes('pet cemetery') ||
      cat.includes('pet cremation') ||
      cat.includes('pet burial') ||
      cat.includes('groblje za pse') ||
      cat.includes('groblje za mačke') ||
      cat.includes('groblje za kućne ljubimce') ||
      cat.includes('kremacija kućnih ljubimaca') ||
      cat.includes('sahrana kućnih ljubimaca') ||
      name.includes('groblje') ||
      name.includes('kremacija') ||
      name.includes('sahrana') ||
      name.includes('cemetery') ||
      name.includes('cremation') ||
      name.includes('burial');

    // Izbaci ne-relevantne biznise
    const isNotPetCemetery =
      cat.includes('maxi') || name.includes('maxi') ||
      cat.includes('idea') || name.includes('idea') ||
      cat.includes('aman') || name.includes('aman') ||
      cat.includes('mesara') || name.includes('mesara') ||
      cat.includes('market') || name.includes('market') ||
      cat.includes('supermarket') || name.includes('supermarket') ||
      cat.includes('restoran') || name.includes('restoran') ||
      cat.includes('osiguranje') || name.includes('osiguranje') ||
      cat.includes('insurance') || name.includes('insurance') ||
      cat.includes('ribarnica') || name.includes('ribarnica') ||
      cat.includes('bakery') || name.includes('bakery') ||
      cat.includes('pekara') || name.includes('pekara');
    return isPetCemetery && !isNotPetCemetery;
  });

  return (
    <main>
      {/* Hero sekcija */}
      <section className="relative h-96 md:h-[32rem] w-full mb-8 bg-primary-dark">
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Groblje kućnih ljubimaca u Beogradu"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pronađite groblja za kućne ljubimce u Beogradu
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Dostojanstveno oproštaj od vaših voljenih ljubimaca - sahrana i kremacija kućnih ljubimaca.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          {petCemeteryServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {petCemeteryServices.map((business) => (
                <BusinessCard
                  key={business.id}
                  business={{
                    ...business,
                    full_address: business.address,
                    reviews: business.reviewsCount,
                    photo: (business.photo && business.photo.startsWith('http')) ? business.photo : '/images/logo.png',
                    municipality: business.municipality || undefined,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-lg text-gray-600">Nema pronađenih usluga groblja za kućne ljubimce.</p>
            </div>
          )}

          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Groblja za kućne ljubimce u Srbiji - Vodič za vlasnike</h2>
            
            <p className="mb-4">
              Oproštaj od voljenog kućnog ljubimca je težak trenutak za svakog vlasnika. U Beogradu i širom Srbije, specijalizovane usluge pružaju dostojanstven način da se oprostite od vašeg ljubimca. Bez obzira da li se odlučujete za sahranu ili kremaciju, profesionalne usluge osiguravaju da vaš ljubimac dobije poštovanje koje zaslužuje.
            </p>

            <h3 className="text-xl font-semibold mb-3">Zašto je važno profesionalno groblje za kućne ljubimce?</h3>
            
            <p className="mb-4">
              Profesionalno groblje za kućne ljubimce nudi brojne prednosti:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Dostojanstveno mesto za oproštaj</li>
              <li>Pravilno održavanje grobnog mesta</li>
              <li>Mogućnost posete i sećanja</li>
              <li>Profesionalna organizacija ceremonije</li>
              <li>Emocionalna podrška vlasnicima</li>
              <li>Pravilno postupanje sa ostacima</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Vrste usluga za oproštaj od kućnih ljubimaca</h3>

            <p className="mb-4">
              Moderni centri za oproštaj od kućnih ljubimaca nude različite opcije:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Tradicionalna sahrana</li>
              <li>Kremacija</li>
              <li>Individualni urni</li>
              <li>Spomenici i oznake</li>
              <li>Organizacija ceremonije</li>
              <li>Emocionalna podrška</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kako odabrati pravo groblje za kućne ljubimce?</h3>

            <p className="mb-4">
              Pri izboru usluge za oproštaj od ljubimca, važno je obratiti pažnju na:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Lokacija i pristupačnost</li>
              <li>Uvjeti održavanja</li>
              <li>Dostupne usluge</li>
              <li>Profesionalnost osoblja</li>
              <li>Emocionalna podrška</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Savremeni pristup oproštaju od kućnih ljubimaca</h3>

            <p className="mb-4">
              Moderni centri za oproštaj nude:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Individualni pristup svakom slučaju</li>
              <li>Dostojanstvene ceremonije</li>
              <li>Trajne spomenike</li>
              <li>Mogućnost online posete</li>
              <li>Emocionalnu podršku</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cene usluga groblja za kućne ljubimce</h3>

            <p className="mb-4">
              Cene usluga variraju u zavisnosti od vrste usluge, lokacije i dodatnih opcija. Većina centara nudi različite pakete usluga, od osnovnih do kompleksnih ceremonija. Investicija u dostojanstven oproštaj od vašeg ljubimca osigurava da će njegova memorija biti poštovana na odgovarajući način.
            </p>

            <p className="mb-4">
              Bez obzira da li se odlučujete za sahranu ili kremaciju, naša lista proverenih centara za oproštaj od kućnih ljubimaca pomoći će vam da pronađete pravo mesto za dostojanstven oproštaj od vašeg voljenog ljubimca. Posetite neki od preporučenih centara i osigurajte da vaš ljubimac dobije poštovanje koje zaslužuje.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 