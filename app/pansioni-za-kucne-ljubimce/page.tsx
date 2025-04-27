"use client";

import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

export default function PetBoardingPage() {
  // Filtriraj sve pansione za kućne ljubimce
  const petBoardingServices = allBusinesses.filter(b => {
    const cat = b.category ? b.category.toLowerCase() : '';
    const name = b.name ? b.name.toLowerCase() : '';
    // Pet boarding filter
    const isPetBoarding =
      cat.includes('pet boarding') ||
      cat.includes('dog boarding') ||
      cat.includes('cat boarding') ||
      cat.includes('pansion za pse') ||
      cat.includes('pansion za mačke') ||
      cat.includes('pansion za kućne ljubimce') ||
      cat.includes('hotel za pse') ||
      cat.includes('hotel za mačke') ||
      name.includes('pansion') ||
      name.includes('hotel') ||
      name.includes('boarding') ||
      name.includes('smještaj') ||
      name.includes('smestaj');

    // Izbaci ne-relevantne biznise
    const isNotPetBoarding =
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
    return isPetBoarding && !isNotPetBoarding;
  });

  return (
    <main>
      {/* Hero sekcija */}
      <section className="relative h-96 md:h-[32rem] w-full mb-8 bg-primary-dark">
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Pansioni za kućne ljubimce u Beogradu"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pronađite najbolje pansione za kućne ljubimce u Beogradu
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Komforan smještaj za vaše ljubimce dok ste na putovanju - profesionalna nega i pažnja.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          {petBoardingServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {petBoardingServices.map((business) => (
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
              <p className="text-lg text-gray-600">Nema pronađenih pansiona za kućne ljubimce.</p>
            </div>
          )}

          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Pansioni za kućne ljubimce u Srbiji - Vodič za vlasnike</h2>
            
            <p className="mb-4">
              Profesionalni pansioni za kućne ljubimce postaju sve popularnija opcija za vlasnike koji putuju ili su zauzeti poslom. U Beogradu i širom Srbije, moderni pansioni pružaju komforan smještaj i profesionalnu negu za vaše ljubimce. Bez obzira da li vam je potreban kratkotrajni ili dugoročni smještaj, profesionalni pansioni osiguravaju da vaš ljubimac dobije pažnju i negu koja mu je potrebna.
            </p>

            <h3 className="text-xl font-semibold mb-3">Zašto je važan profesionalni pansion za kućne ljubimce?</h3>
            
            <p className="mb-4">
              Profesionalni pansioni za kućne ljubimce nudi brojne prednosti:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Siguran i komforan smještaj</li>
              <li>Redovno hranjenje i setanje</li>
              <li>Stručna nega i pažnja</li>
              <li>Socijalizacija sa drugim ljubimcima</li>
              <li>Praćenje zdravstvenog stanja</li>
              <li>Fleksibilnost u organizaciji</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Vrste usluga pansiona za kućne ljubimce</h3>

            <p className="mb-4">
              Moderni pansioni za kućne ljubimce nude različite opcije:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Individualne sobe</li>
              <li>Grupni smještaj</li>
              <li>Dnevni boravak</li>
              <li>Dugoročni smještaj</li>
              <li>Specijalizovana nega</li>
              <li>Dodatne usluge (trening, grooming)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kako odabrati pravi pansion za vašeg ljubimca?</h3>

            <p className="mb-4">
              Pri izboru pansiona, važno je obratiti pažnju na:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Uvjeti smještaja</li>
              <li>Iskustvo osoblja</li>
              <li>Dostupnost veterinarske pomoći</li>
              <li>Program igre i socijalizacije</li>
              <li>Reference i preporuke</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Savremeni pristup smještaju kućnih ljubimaca</h3>

            <p className="mb-4">
              Moderni pansioni nude:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Video nadzor</li>
              <li>Redovne izvještaje vlasnicima</li>
              <li>Individualni pristup svakom ljubimcu</li>
              <li>Programe igre i socijalizacije</li>
              <li>Specijalizovane usluge za posebne potrebe</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cene smještaja u pansionima</h3>

            <p className="mb-4">
              Cene smještaja variraju u zavisnosti od vrste usluge, dužine boravka i posebnih potreba ljubimca. Većina pansiona nudi različite pakete usluga, od osnovnog smještaja do kompleksne nege. Investicija u profesionalni smještaj vašeg ljubimca osigurava njegovu sigurnost i dobrobit dok ste odsutni.
            </p>

            <p className="mb-4">
              Bez obzira da li vam je potreban kratkotrajni smještaj tokom radnog dana ili dugoročni smještaj tokom odmora, naša lista proverenih pansiona za kućne ljubimce pomoći će vam da pronađete pravo mesto za vašeg ljubimca. Posetite neki od preporučenih pansiona i osigurajte najbolju moguću negu za vašeg ljubimca dok ste odsutni.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 