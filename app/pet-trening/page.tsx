"use client";

import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

export default function PetTrainingPage() {
  // Filtriraj sve trenere za kućne ljubimce
  const trainingServices = allBusinesses.filter(b => {
    const cat = b.category ? b.category.toLowerCase() : '';
    const name = b.name ? b.name.toLowerCase() : '';
    // Pet training filter
    const isTraining =
      cat.includes('pet trainer') ||
      cat.includes('dog trainer') ||
      cat.includes('dog training') ||
      cat.includes('pet training') ||
      cat.includes('dog school') ||
      cat.includes('pet school') ||
      cat.includes('trener pasa') ||
      cat.includes('škola za pse') ||
      cat.includes('dresura pasa') ||
      cat.includes('obuka pasa') ||
      name.includes('training') ||
      name.includes('trainer') ||
      name.includes('trening') ||
      name.includes('trener') ||
      name.includes('škola') ||
      name.includes('dresura') ||
      name.includes('obuka');

    // Izbaci ne-training biznise
    const isNotTraining =
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
    return isTraining && !isNotTraining;
  });

  return (
    <main>
      {/* Hero sekcija */}
      <section className="relative h-96 md:h-[32rem] w-full mb-8 bg-primary-dark">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Trening kućnih ljubimaca u Beogradu"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pronađite najbolje trenere za kućne ljubimce u Beogradu
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Otkrijte profesionalne trenere, škole za obuku i dresuru vaših ljubimaca na jednom mestu.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          {trainingServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingServices.map((business) => (
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
              <p className="text-lg text-gray-600">Nema pronađenih trenera za kućne ljubimce.</p>
            </div>
          )}

          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Trening i dresura kućnih ljubimaca u Srbiji - Vodič za vlasnike</h2>
            
            <p className="mb-4">
              Profesionalni trening i dresura kućnih ljubimaca predstavljaju ključni aspekt odgovornog vlasništva. U Beogradu i širom Srbije, stručni treneri pružaju specijalizovane usluge obuke koje pomažu u stvaranju skladnog odnosa između vas i vašeg ljubimca. Bez obzira da li imate štene koje tek treba da nauči osnovne komande ili odraslog psa kojem je potrebna napredna obuka, naši sertifikovani treneri su tu da pomognu.
            </p>

            <h3 className="text-xl font-semibold mb-3">Zašto je važan profesionalni trening kućnih ljubimaca?</h3>
            
            <p className="mb-4">
              Stručna obuka nije samo o učenju komandi - ona je temelj za razvoj dobro socijalizovanog i poslušnog ljubimca. Profesionalni trening donosi brojne prednosti:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Razvoj osnovnih veština poslušnosti</li>
              <li>Rešavanje problematičnog ponašanja</li>
              <li>Socijalizacija sa drugim životinjama i ljudima</li>
              <li>Jačanje veze između vlasnika i ljubimca</li>
              <li>Prevencija agresivnog ponašanja</li>
              <li>Stvaranje zdravih životnih navika</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Vrste treninga i obuke koje nudimo</h3>

            <p className="mb-4">
              Naši sertifikovani treneri specijalizovani su za različite vrste obuke, prilagođene individualnim potrebama vašeg ljubimca:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Osnovna obuka za štence</li>
              <li>Napredna dresura pasa</li>
              <li>Korekcija problematičnog ponašanja</li>
              <li>Agility trening</li>
              <li>Socijalizacija</li>
              <li>Individualni i grupni časovi</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kako odabrati pravog trenera za vašeg ljubimca?</h3>

            <p className="mb-4">
              Pri izboru trenera za vašeg ljubimca, važno je obratiti pažnju na nekoliko ključnih faktora:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Iskustvo i sertifikati</li>
              <li>Metode treninga koje koriste</li>
              <li>Reference i preporuke</li>
              <li>Pristup individualnim potrebama</li>
              <li>Fleksibilnost u radu</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Savremene metode treninga</h3>

            <p className="mb-4">
              Moderni pristup treningu kućnih ljubimaca zasniva se na pozitivnom pojačanju i razumevanju psihologije životinja. Naši treneri koriste naučno dokazane metode koje su:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Humane i nenasilne</li>
              <li>Efikasne i dugotrajne</li>
              <li>Prilagođene individualnom temperamentu</li>
              <li>Zasnovane na pozitivnoj motivaciji</li>
              <li>Usmerene na jačanje veze sa vlasnikom</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Koliko traje obuka i šta očekivati?</h3>

            <p className="mb-4">
              Trajanje obuke zavisi od više faktora, uključujući starost ljubimca, željene ciljeve i intenzitet treninga. Generalno, osnovni program obuke traje 4-8 nedelja, dok napredni programi mogu trajati i duže. Važno je razumeti da je trening proces koji zahteva:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Redovno vežbanje</li>
              <li>Doslednost u primeni naučenog</li>
              <li>Strpljenje i posvećenost</li>
              <li>Aktivno učešće vlasnika</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cene treninga i obuke</h3>

            <p className="mb-4">
              Investicija u profesionalni trening vašeg ljubimca varira u zavisnosti od vrste obuke, dužine programa i individualnih potreba. Većina trenera nudi različite pakete usluga, od pojedinačnih časova do kompletnih programa obuke. Dugoročno, ova investicija se višestruko isplati kroz bolje ponašanje i kvalitetniji život vašeg ljubimca.
            </p>

            <p className="mb-4">
              Bez obzira da li vam je potrebna osnovna obuka za štene ili rešavanje specifičnih problema u ponašanju, naša lista proverenih trenera pomoći će vam da pronađete pravog stručnjaka za vašeg ljubimca. Posetite neki od preporučenih centara za obuku i započnite put ka bolje treniranom i srećnijem ljubimcu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 