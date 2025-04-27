"use client";

import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

export default function VeterinariPage() {
  // Filtriraj sve veterinarske usluge
  const veterinaryServices = allBusinesses.filter(b => {
    const cat = b.category ? b.category.toLowerCase() : '';
    const name = b.name ? b.name.toLowerCase() : '';
    // Veterinary filter
    const isVeterinary =
      cat.includes('veterinarian') ||
      cat.includes('veterinary') ||
      cat.includes('vet') ||
      cat.includes('veterinar') ||
      cat.includes('veterinarska stanica') ||
      cat.includes('veterinarska ambulanta') ||
      cat.includes('veterinarska klinika') ||
      name.includes('veterinar') ||
      name.includes('veterinarska') ||
      name.includes('vet') ||
      name.includes('ambulanta') ||
      name.includes('klinika');

    // Izbaci ne-veterinarske biznise
    const isNotVeterinary =
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
    return isVeterinary && !isNotVeterinary;
  });

  return (
    <main>
      {/* Hero sekcija */}
      <section className="relative h-96 md:h-[32rem] w-full mb-8 bg-primary-dark">
        <img
          src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Veterinarske usluge u Beogradu"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pronađite najbolje veterinare u Beogradu
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Profesionalna veterinarska nega za vaše kućne ljubimce - od rutinskih pregleda do hitnih intervencija.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          {veterinaryServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {veterinaryServices.map((business) => (
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
              <p className="text-lg text-gray-600">Nema pronađenih veterinarskih usluga.</p>
            </div>
          )}

          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Veterinarske usluge u Srbiji - Vodič za vlasnike</h2>
            
            <p className="mb-4">
              Profesionalna veterinarska nega predstavlja ključni aspekt odgovornog vlasništva kućnih ljubimaca. U Beogradu i širom Srbije, stručni veterinari pružaju sveobuhvatnu medicinsku negu za vaše ljubimce, od rutinskih pregleda do specijalizovanih tretmana. Bez obzira da li vam je potrebna preventivna nega ili hitna veterinarska intervencija, naši sertifikovani veterinari su tu da pomognu.
            </p>

            <h3 className="text-xl font-semibold mb-3">Zašto je važna redovna veterinarska nega?</h3>
            
            <p className="mb-4">
              Redovne posete veterinaru nisu samo o lečenju bolesti - one su temelj za dug i zdrav život vašeg ljubimca. Profesionalna veterinarska nega donosi brojne prednosti:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Rano otkrivanje potencijalnih zdravstvenih problema</li>
              <li>Preventivna zaštita od bolesti</li>
              <li>Redovno vakcinisanje</li>
              <li>Kontrola parazita</li>
              <li>Savetovanje o ishrani i negi</li>
              <li>Pravilno praćenje razvoja ljubimca</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Vrste veterinarskih usluga</h3>

            <p className="mb-4">
              Moderni veterinarski centri nude različite usluge prilagođene potrebama vašeg ljubimca:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Rutinski pregledi</li>
              <li>Vakcinacija</li>
              <li>Laboratorijske analize</li>
              <li>Dentalna nega</li>
              <li>Hirurške intervencije</li>
              <li>Specijalističke usluge</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kako odabrati pravog veterinara?</h3>

            <p className="mb-4">
              Pri izboru veterinara, važno je obratiti pažnju na nekoliko ključnih faktora:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Iskustvo i stručnost</li>
              <li>Opremljenost ordinacije</li>
              <li>Dostupnost hitne pomoći</li>
              <li>Reference i preporuke</li>
              <li>Pristup individualnim potrebama</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Savremeni pristup veterinarskoj nezi</h3>

            <p className="mb-4">
              Moderni veterinarski centri nude:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Digitalni pregled</li>
              <li>Online zakazivanje</li>
              <li>Elektronski zdravstveni karton</li>
              <li>Savremenu dijagnostiku</li>
              <li>Individualni pristup svakom ljubimcu</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cene veterinarskih usluga</h3>

            <p className="mb-4">
              Cene veterinarskih usluga variraju u zavisnosti od vrste usluge, kompleksnosti tretmana i potrebnih dijagnostičkih postupaka. Većina veterinara nudi različite pakete usluga, od osnovnih pregleda do kompleksnih tretmana. Investicija u redovnu veterinarsku negu vašeg ljubimca osigurava njegovo dugo i zdravo življenje.
            </p>

            <p className="mb-4">
              Bez obzira da li vam je potreban rutinski pregled ili specijalistički tretman, naša lista proverenih veterinara pomoći će vam da pronađete pravog stručnjaka za vašeg ljubimca. Posetite neki od preporučenih veterinarskih centara i osigurajte najbolju moguću negu za vašeg ljubimca.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 