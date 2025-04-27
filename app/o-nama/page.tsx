import Image from 'next/image';

export const metadata = {
  title: 'O nama | Wikipets',
  description: 'Saznajte više o Wikipets direktorijumu pet biznisa u Beogradu. Povezujemo vlasnike ljubimaca sa najboljim uslugama u gradu.',
  openGraph: {
    title: 'O nama | Wikipets',
    description: 'Saznajte više o Wikipets direktorijumu pet biznisa u Beogradu. Povezujemo vlasnike ljubimaca sa najboljim uslugama u gradu.',
    url: 'https://wikipets.org/o-nama',
    images: [
      {
        url: '/images/o-nama.jpg',
        width: 800,
        height: 400,
        alt: 'O nama Wikipets',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://wikipets.org/o-nama',
  },
};

export default function AboutPage() {
  return (
    <main className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">O nama</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <Image
            src="/images/o-nama.jpg"
            alt="O nama Wikipets"
            width={600}
            height={400}
            className="rounded-lg shadow"
            priority
          />
        </div>
        <div className="flex-1 prose prose-lg">
          <p>
            Dobrodošli u direktorijum pet biznisa u Beogradu, vaš vodič kroz svet posvećen ljubimcima! Ja sam Željko, odgajivač pasa i strastveni ljubitelj životinja, i osnovao sam ovaj sajt kako bih povezao vlasnike kućnih ljubimaca sa najboljim uslugama u gradu. Od pansiona i veterinarskih klinika do prodavnica hrane i opreme – ovde ćete pronaći sve što vašem ljubimcu treba.
          </p>
          <p>
            Moj cilj je da olakšam brigu o vašim četvoronožnim prijateljima i pomognem im da žive srećno i zdravo. Pridružite nam se u ovoj misiji i otkrijte pouzdane pet biznise u Beogradu!
          </p>
        </div>
      </div>
      {/* JSON-LD strukturalni podaci */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "headline": "O nama | Wikipets",
            "description": "Saznajte više o Wikipets direktorijumu pet biznisa u Beogradu. Povezujeme vlasnike ljubimaca sa najboljim uslugama u gradu.",
            "image": "https://wikipets.org/images/o-nama.jpg",
            "author": {
              "@type": "Person",
              "name": "Željko"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Wikipets"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://wikipets.org/o-nama"
            }
          }),
        }}
      />
    </main>
  );
} 