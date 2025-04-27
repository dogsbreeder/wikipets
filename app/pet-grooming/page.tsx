"use client";

import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

export default function PetGroomingPage() {
  // Filtriraj sve frizere za kućne ljubimce
  const groomingServices = allBusinesses.filter(b => {
    const cat = b.category ? b.category.toLowerCase() : '';
    const name = b.name ? b.name.toLowerCase() : '';
    // Pet grooming filter
    const isGrooming =
      cat.includes('pet groomer') ||
      cat.includes('pet salon') ||
      cat.includes('pet grooming') ||
      cat.includes('pet spa') ||
      cat.includes('frizerski salon za pse') ||
      cat.includes('frizerski salon za mačke') ||
      cat.includes('frizerski salon za kućne ljubimce') ||
      name.includes('grooming') ||
      name.includes('frizerski') ||
      name.includes('salon');
    // Izbaci ne-grooming biznise
    const isNotGrooming =
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
    return isGrooming && !isNotGrooming;
  });

  return (
    <main>
      {/* Hero sekcija */}
      <section className="relative h-96 md:h-[32rem] w-full mb-8 bg-primary-dark">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Kućni ljubimci u Beogradu"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pronađite najbolje frizere za kućne ljubimce u Beogradu
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Otkrijte profesionalne frizere, salone i spa centre za vaše ljubimce na jednom mestu.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          {groomingServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groomingServices.map((business) => (
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
              <p className="text-lg text-gray-600">Nema pronađenih frizerskih salona za kućne ljubimce.</p>
            </div>
          )}

          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Pet Grooming u Srbiji - Profesionalna nega i šišanje kućnih ljubimaca</h2>
            
            <p className="mb-4">
              Profesionalna nega i šišanje kućnih ljubimaca (pet grooming) postaje sve važniji aspekt brige o ljubimcima u Srbiji. Naša platforma vam predstavlja najbolje pet grooming salone u Beogradu i okolini, gde stručni frizeri za pse i mačke pružaju vrhunske usluge nege vašim četvoronožnim prijateljima.
            </p>

            <h3 className="text-xl font-semibold mb-3">Šta je Pet Grooming i zašto je važan?</h3>
            
            <p className="mb-4">
              Pet grooming predstavlja sveobuhvatnu negu kućnih ljubimaca koja uključuje šišanje, kupanje, češljanje, trimovanje i osnovnu higijenu. Redovan grooming nije samo pitanje estetike - on je ključan za zdravlje vašeg ljubimca. Profesionalni pet grooming saloni u Beogradu nude širok spektar usluga:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Profesionalno šišanje pasa svih rasa</li>
              <li>Trimovanje i održavanje dlake</li>
              <li>Kupanje sa specijalnim šamponima</li>
              <li>Nega problematične kože i dlake</li>
              <li>Sečenje noktiju i čišćenje ušiju</li>
              <li>Tretmani protiv parazita</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kako izabrati najbolji Pet Grooming salon?</h3>

            <p className="mb-4">
              Pri odabiru pet grooming salona, važno je obratiti pažnju na nekoliko ključnih faktora. Iskusni pet groomeri znaju kako pristupiti različitim rasama i temperamentima životinja. Kvalitetan salon će imati:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Sertifikovane pet groomere sa iskustvom</li>
              <li>Modernu opremu za šišanje i negu</li>
              <li>Prirodne i hipoalergenske proizvode</li>
              <li>Prijatno i čisto okruženje</li>
              <li>Pozitivne recenzije klijenata</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Profesionalni Pet Grooming za različite rase pasa</h3>

            <p className="mb-4">
              Svaka rasa psa ima jedinstvene potrebe kada je u pitanju nega dlake. Profesionalni pet groomeri u Beogradu specijalizovani su za rad sa različitim rasama:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Pudle - zahtevaju redovno šišanje i održavanje kovrdžave dlake</li>
              <li>Jorkširski terijeri - potrebno posebno održavanje svilenkaste dlake</li>
              <li>Šnauceri - specifično trimovanje i održavanje teksture dlake</li>
              <li>Labradori - redovno četkanje i kontrola linjanja</li>
              <li>Persijske mačke - sprečavanje stvaranja čvorova u dlaci</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Savremeni trendovi u Pet Grooming industriji</h3>

            <p className="mb-4">
              Pet grooming industrija konstantno evoluira, donoseći nove tehnike i tretmane. Moderni saloni u Beogradu prate svetske trendove i nude inovativne usluge poput:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Spa tretmana za kućne ljubimce</li>
              <li>Aromaterapije i masaže</li>
              <li>Prirodnih tretmana za negu dlake</li>
              <li>Kreativnog šišanja i farbanja</li>
              <li>Tretmana za relaksaciju</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Koliko često je potreban Pet Grooming?</h3>

            <p className="mb-4">
              Učestalost poseta pet grooming salonu zavisi od rase vašeg ljubimca i tipa dlake. Generalno, preporučuje se:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Kratka dlaka: svakih 8-12 nedelja</li>
              <li>Srednja dlaka: svakih 6-8 nedelja</li>
              <li>Duga dlaka: svakih 4-6 nedelja</li>
              <li>Kovrdžava dlaka: svakih 3-4 nedelje</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cene Pet Grooming usluga u Beogradu</h3>

            <p className="mb-4">
              Cene pet grooming usluga variraju u zavisnosti od veličine psa, vrste dlake i potrebnih tretmana. Većina salona nudi pakete usluga koji mogu uključivati osnovnu negu, kompletno šišanje ili spa tretmane. Investicija u profesionalnu negu vašeg ljubimca dugoročno se isplati kroz bolje zdravlje i izgled.
            </p>

            <p className="mb-4">
              Bez obzira da li je vašem ljubimcu potrebno redovno održavanje, kompletno šišanje ili spa tretman, naša lista proverenih pet grooming salona pomoći će vam da pronađete najbolju uslugu. Posetite neki od preporučenih salona i pružite svom ljubimcu vrhunsku negu koju zaslužuje.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 