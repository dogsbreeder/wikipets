"use client";

import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

export default function PetSittingPage() {
  // Filtriraj sve pet sitting usluge
  const petSittingServices = allBusinesses.filter(b => {
    const cat = b.category ? b.category.toLowerCase() : '';
    const name = b.name ? b.name.toLowerCase() : '';
    // Pet sitting filter
    const isPetSitting =
      cat.includes('pet sitting') ||
      cat.includes('dog sitting') ||
      cat.includes('cat sitting') ||
      cat.includes('pet care') ||
      cat.includes('dog care') ||
      cat.includes('cat care') ||
      cat.includes('čuvanje pasa') ||
      cat.includes('čuvanje mačaka') ||
      cat.includes('čuvanje kućnih ljubimaca') ||
      cat.includes('usluge čuvanja') ||
      name.includes('sitting') ||
      name.includes('čuvanje') ||
      name.includes('care') ||
      name.includes('nega');

    // Izbaci ne-pet sitting biznise
    const isNotPetSitting =
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
    return isPetSitting && !isNotPetSitting;
  });

  return (
    <main>
      {/* Hero sekcija */}
      <section className="relative h-96 md:h-[32rem] w-full mb-8 bg-primary-dark">
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Čuvanje kućnih ljubimaca u Beogradu"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pronađite najbolje usluge čuvanja kućnih ljubimaca u Beogradu
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Pouzdane usluge čuvanja pasa i mačaka dok ste na putovanju ili na poslu.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          {petSittingServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {petSittingServices.map((business) => (
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
              <p className="text-lg text-gray-600">Nema pronađenih usluga čuvanja kućnih ljubimaca.</p>
            </div>
          )}

          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Čuvanje kućnih ljubimaca u Srbiji - Vodič za vlasnike</h2>
            
            <p className="mb-4">
              Profesionalno čuvanje kućnih ljubimaca postaje sve popularnija usluga u Srbiji, posebno u većim gradovima kao što je Beograd. Kada putujete ili ste zauzeti poslom, važno je da vaš ljubimac ostane u sigurnim rukama. Profesionalne usluge čuvanja pružaju mir vlasnicima, znajući da su njihovi ljubimci u dobrim rukama.
            </p>

            <h3 className="text-xl font-semibold mb-3">Zašto je važno profesionalno čuvanje kućnih ljubimaca?</h3>
            
            <p className="mb-4">
              Profesionalno čuvanje kućnih ljubimaca nudi brojne prednosti u odnosu na tradicionalne metode:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Stručna nega i pažnja</li>
              <li>Redovno hranjenje i setanje</li>
              <li>Praćenje zdravstvenog stanja</li>
              <li>Socijalizacija sa drugim ljubimcima</li>
              <li>Sigurnost i zaštita</li>
              <li>Fleksibilnost u organizaciji</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Vrste usluga čuvanja kućnih ljubimaca</h3>

            <p className="mb-4">
              Moderni centri za čuvanje kućnih ljubimaca nude različite opcije prilagođene potrebama vašeg ljubimca:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Čuvanje u domu čuvara</li>
              <li>Posete kod kuće</li>
              <li>Dnevno čuvanje</li>
              <li>Noćenje</li>
              <li>Hitne usluge čuvanja</li>
              <li>Dugoročno čuvanje</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kako odabrati pravog čuvara za vašeg ljubimca?</h3>

            <p className="mb-4">
              Pri izboru usluge čuvanja, važno je obratiti pažnju na nekoliko ključnih faktora:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Iskustvo i obuka čuvara</li>
              <li>Uvjeti smještaja</li>
              <li>Dostupnost veterinarske pomoći</li>
              <li>Reference i preporuke</li>
              <li>Fleksibilnost u radu</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Savremeni pristup čuvanju kućnih ljubimaca</h3>

            <p className="mb-4">
              Moderni centri za čuvanje kućnih ljubimaca nude:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Video nadzor</li>
              <li>Redovne izvještaje vlasnicima</li>
              <li>Individualni pristup svakom ljubimcu</li>
              <li>Programe igre i socijalizacije</li>
              <li>Specijalizovane usluge za posebne potrebe</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cene usluga čuvanja</h3>

            <p className="mb-4">
              Cene usluga čuvanja variraju u zavisnosti od vrste usluge, dužine čuvanja i posebnih potreba ljubimca. Većina centara nudi različite pakete usluga, od pojedinačnih posjeta do dugoročnog čuvanja. Investicija u profesionalno čuvanje vašeg ljubimca osigurava njegovu sigurnost i dobrobit dok ste odsutni.
            </p>

            <p className="mb-4">
              Bez obzira da li vam je potrebno kratkotrajno čuvanje tokom radnog dana ili dugoročno čuvanje tokom odmora, naša lista proverenih centara za čuvanje pomoći će vam da pronađete pravog čuvara za vašeg ljubimca. Posetite neki od preporučenih centara i osigurajte najbolju moguću negu za vašeg ljubimca dok ste odsutni.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 