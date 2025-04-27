"use client";

import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

export default function BreedersPage() {
  // Filtriraj sve odgajivačnice i uzgajivače
  const breedingServices = allBusinesses.filter(b => {
    const cat = b.category ? b.category.toLowerCase() : '';
    const name = b.name ? b.name.toLowerCase() : '';
    // Pet breeder filter
    const isBreeder =
      cat.includes('pet breeder') ||
      cat.includes('dog breeder') ||
      cat.includes('cat breeder') ||
      cat.includes('odgajivačnica') ||
      cat.includes('uzgajivačnica') ||
      cat.includes('odgajivač pasa') ||
      cat.includes('odgajivač mačaka') ||
      cat.includes('uzgajivač pasa') ||
      cat.includes('uzgajivač mačaka') ||
      name.includes('odgajivačnica') ||
      name.includes('uzgajivačnica') ||
      name.includes('odgajivač') ||
      name.includes('uzgajivač') ||
      name.includes('breeder') ||
      name.includes('kennel');

    // Izbaci ne-relevantne biznise
    const isNotBreeder =
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
    return isBreeder && !isNotBreeder;
  });

  return (
    <main>
      {/* Hero sekcija */}
      <section className="relative h-96 md:h-[32rem] w-full mb-8 bg-primary-dark">
        <img
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Odgajivači kućnih ljubimaca u Beogradu"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pronađite pouzdane odgajivače kućnih ljubimaca u Beogradu
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Registrovane odgajivačnice i profesionalni uzgajivači rasnih pasa i mačaka.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          {breedingServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {breedingServices.map((business) => (
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
              <p className="text-lg text-gray-600">Nema pronađenih odgajivača kućnih ljubimaca.</p>
            </div>
          )}

          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Odgajivači kućnih ljubimaca u Srbiji - Vodič za buduće vlasnike</h2>
            
            <p className="mb-4">
              Izbor pouzdanog odgajivača je ključni korak u nabavci rasnog kućnog ljubimca. U Beogradu i širom Srbije, profesionalni odgajivači pružaju mogućnost nabavke zdravih i pravilno socijalizovanih štenaca i mačića. Registrovane odgajivačnice garantuju poreklo i zdravstveno stanje ljubimaca, uz svu potrebnu dokumentaciju i podršku novim vlasnicima.
            </p>

            <h3 className="text-xl font-semibold mb-3">Zašto je važno izabrati registrovanog odgajivača?</h3>
            
            <p className="mb-4">
              Profesionalni odgajivači nude brojne prednosti:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Garantovano poreklo i rodovnik</li>
              <li>Zdravstveni pregledi i vakcinacije</li>
              <li>Pravilna socijalizacija od rođenja</li>
              <li>Stručni saveti i podrška</li>
              <li>Transparentnost u radu</li>
              <li>Praćenje razvoja štenaca/mačića</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Šta očekivati od profesionalnog odgajivača?</h3>

            <p className="mb-4">
              Kvalitetni odgajivači pružaju:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Kompletnu dokumentaciju</li>
              <li>Zdravstvene garancije</li>
              <li>Mogućnost upoznavanja roditelja</li>
              <li>Uvid u uslove odgoja</li>
              <li>Savete o ishrani i nezi</li>
              <li>Dugoročnu podršku</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kako prepoznati pouzdanog odgajivača?</h3>

            <p className="mb-4">
              Pri izboru odgajivača, obratite pažnju na:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Registracija i licence</li>
              <li>Uslovi držanja životinja</li>
              <li>Zdravstvena dokumentacija</li>
              <li>Reference i iskustvo</li>
              <li>Transparentnost u radu</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Savremeni pristup odgoju kućnih ljubimaca</h3>

            <p className="mb-4">
              Profesionalni odgajivači primenjuju:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Genetska testiranja</li>
              <li>Moderne metode socijalizacije</li>
              <li>Redovne veterinarske kontrole</li>
              <li>Praćenje razvoja mladunaca</li>
              <li>Edukaciju novih vlasnika</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cene i uslovi nabavke</h3>

            <p className="mb-4">
              Cene rasnih ljubimaca variraju u zavisnosti od rase, porekla i kvaliteta odgajivačnice. Profesionalni odgajivači nude transparentne uslove kupovine, sa svom potrebnom dokumentacijom i zdravstvenim garancijama. Investicija u ljubimca od registrovanog odgajivača osigurava zdravog i pravilno socijalizovanog ljubimca.
            </p>

            <p className="mb-4">
              Bez obzira da li tražite štene ili mače određene rase, naša lista proverenih odgajivača pomoći će vam da pronađete pravog partnera za nabavku vašeg budućeg ljubimca. Posetite neku od preporučenih odgajivačnica i uverite se u kvalitet njihovog rada i posvećenost dobrobiti životinja.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 