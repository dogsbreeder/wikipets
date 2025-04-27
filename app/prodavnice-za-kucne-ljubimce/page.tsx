"use client";

import BusinessCard from '../components/BusinessCard';
import { allBusinesses } from '../data/allBusinesses';

export default function PetStoresPage() {
  // Filtriraj sve prodavnice za kućne ljubimce po kategoriji i izbacujem ne-pet biznise
  const petStores = allBusinesses.filter(b => {
    const cat = b.category ? b.category.toLowerCase() : '';
    const name = b.name ? b.name.toLowerCase() : '';
    // Pet shop/store filter
    const isPet =
      cat.includes('pet store') ||
      cat.includes('pet shop') ||
      cat.includes('pet supply') ||
      cat.includes('pet groomer') ||
      cat.includes('pet salon') ||
      cat.includes('pet adoption') ||
      cat.includes('pet pharmacy') ||
      cat.includes('pet food') ||
      cat.includes('pet hotel') ||
      cat.includes('pet boarding') ||
      cat.includes('pet care') ||
      cat.includes('pet clinic') ||
      cat.includes('pet vet') ||
      cat.includes('pet grooming') ||
      cat.includes('pet spa') ||
      cat.includes('pet boutique') ||
      cat.includes('pet accessories') ||
      cat.includes('pet bakery') ||
      cat.includes('продавница кућних љубимаца') ||
      cat.includes('pet supply store') ||
      cat.includes('pet supply') ||
      cat.includes('pet salon') ||
      cat.includes('pet spa') ||
      cat.includes('pet hotel') ||
      cat.includes('pet boarding') ||
      cat.includes('pet care') ||
      cat.includes('pet clinic') ||
      cat.includes('pet vet') ||
      cat.includes('pet grooming') ||
      cat.includes('pet boutique') ||
      cat.includes('pet accessories') ||
      cat.includes('pet bakery') ||
      cat.includes('pet pharmacy');
    // Izbaci ne-pet biznise
    const isNotPet =
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
    return isPet && !isNotPet;
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
              Pronađite najbolje usluge za kućne ljubimce u Beogradu
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Otkrijte prodavnice za kućne ljubimce, veterinarske klinike, frizere i još mnogo toga na jednom mestu.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Lista prodavnica</h2>
            <p className="text-gray-600 text-lg">Pronađite najbolje prodavnice hrane, opreme i igračaka za kućne ljubimce.</p>
          </div>
          {petStores.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {petStores.map((business) => (
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
              <p className="text-lg text-gray-600">Nema pronađenih prodavnica za kućne ljubimce.</p>
            </div>
          )}

          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Prodavnice za kućne ljubimce u Srbiji - Sve što treba da znate</h2>
            
            <p className="mb-4">
              Pronalaženje pouzdanih prodavnica za kućne ljubimce u Srbiji nikada nije bilo lakše. Naša platforma vam pruža detaljan pregled najboljih prodavnica hrane, opreme i igračaka za vaše ljubimce. Bez obzira da li tražite specijalizovane prodavnice za pse, mačke, ptice ili druge kućne ljubimce, ovde ćete pronaći sve što vam je potrebno.
            </p>

            <h3 className="text-xl font-semibold mb-3">Zašto je važno birati kvalitetne prodavnice za kućne ljubimce?</h3>
            
            <p className="mb-4">
              Kvalitetne prodavnice za kućne ljubimce nude širok asortiman proizvoda koji zadovoljavaju najviše standarde bezbednosti i kvaliteta. Od premium hrane do igračaka i opreme, važno je da vaš ljubimac dobije najbolje što novac može da kupi. Naša lista prodavnica uključuje samo provjerene lokacije koje nude:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Kvalitetnu hranu poznatih brendova</li>
              <li>Sigurne i trajne igračke</li>
              <li>Ergonomičnu opremu</li>
              <li>Stručno osoblje</li>
              <li>Povoljne cene i akcije</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kako izabrati najbolju prodavnicu za vašeg ljubimca?</h3>

            <p className="mb-4">
              Prilikom odabira prodavnice za kućne ljubimce, važno je uzeti u obzir nekoliko faktora. Lokacija je ključna - lak pristup će vam omogućiti da redovno obnavljate zalihe. Asortiman proizvoda treba da bude širok i da uključuje različite brendove i cene. Stručno osoblje koje može da vam da savete o ishrani i negi ljubimaca je neprocenjivo.
            </p>

            <h3 className="text-xl font-semibold mb-3">Online prodavnice za kućne ljubimce</h3>

            <p className="mb-4">
              U današnje vreme, sve više ljudi bira online kupovinu za svoje ljubimce. Online prodavnice za kućne ljubimce nude praktičnost i širok izbor proizvoda, često po povoljnijim cenama. Mnoge od njih nude i besplatnu dostavu za veće porudžbine, što dodatno čini online kupovinu atraktivnom opcijom.
            </p>

            <h3 className="text-xl font-semibold mb-3">Specijalizovane prodavnice za različite vrste ljubimaca</h3>

            <p className="mb-4">
              Svaka vrsta ljubimca ima svoje specifične potrebe. Specijalizovane prodavnice za pse nude širok izbor hrane, igračaka i opreme prilagođene različitim rasama i veličinama pasa. Prodavnice za mačke fokusiraju se na mačju hranu, peškire i mačje kućice. Za vlasnike ptica, ribica ili drugih egzotičnih ljubimaca, postoje prodavnice koje se specijalizuju za njihove specifične potrebe.
            </p>

            <p className="mb-4">
              Bez obzira na to da li tražite osnovne potrepštine ili specijalizovane proizvode za vašeg ljubimca, naša lista prodavnica za kućne ljubimce u Srbiji će vam pomoći da pronađete najbolje opcije. Posetite naše preporučene lokacije i uverite se u kvalitet usluge i proizvoda koje nude.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 