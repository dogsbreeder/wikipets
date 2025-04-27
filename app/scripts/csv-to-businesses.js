// Node.js script to convert CSV to allBusinesses.js
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const csvPath = path.join(__dirname, '../../Outscraper-20250422201418xs4e_pet_store_+44.csv');
const outputPath = path.join(__dirname, '../data/allBusinesses.js');

// Lista karakterističnih ulica/naselja za više opština
const MUNICIPALITY_STREETS = [
  {
    name: 'Stari Grad',
    streets: [
      'Kralja Petra', 'Cara Dušana', 'Studentski trg', 'Dorćol', 'Cetinjska',
      'Venizelosova', 'Francuska', 'Gospodar Jevremova', 'Skadarska',
      'Strahinjića Bana', 'Dobračina', 'Kneginje Ljubice', 'Gundulićev venac',
      'Kosančićev venac', 'Simina', 'Kapetan-Mišina', 'Braće Jugovića',
      'Palmotićeva', 'Zmaj Jovina', 'Uzun Mirkova', 'Dositejeva',
      'Kneza Mihaila', 'Rige od Fere', 'Bulevar despota Stefana',
      'Gospodar Jovanova', 'Jevremova', 'Kraljice Natalije', 'Maršala Birjuzova',
      'Obilićev venac', 'Pariska', 'Topličin venac', 'Vasina', 'Višnjićeva',
      'Zlatarska', 'Zetska', 'Đure Jakšića', 'Brace Baruh', 'Brace Krsmanovic',
      'Brace Jugovic', 'Brace Nedic', 'Brace Radovanovic', 'Brace Srnic',
      'Brace Vukadinovic', 'Brace Vujovic', 'Brace Zivanovic', 'Brace Zivkovic',
      'Brace Zlatic',
    ]
  },
  {
    name: 'Čukarica',
    streets: [
      'Požeška', 'Banovo Brdo', 'Žarkovo', 'Julino Brdo', 'Bele Vode', 'Sremčica', 'Umka', 'Rušanj', 'Čukarica', 'Golf naselje', 'Filmski grad', 'Ada Ciganlija', 'Makiš', 'Sunčana Padina', 'Cerak', 'Cerak Vinogradi', 'Vinogradska', 'Trgovačka', 'Valjevska', 'Lješka', 'Obrenovački put', 'Radnička', 'Lazarevački drum', 'Spasića i Mašere', 'Miloša Pocerca', 'Kneza Višeslava', 'Lješka', 'Miloja Zakića', 'Miloša Savkovića', 'Miloša Vasića', 'Miloša Zečevića', 'Miloša Zdravkovića', 'Miloša Zorića', 'Miloša Zubca', 'Miloša Zupca', 'Miloša Zvekića', 'Miloša Zvekića', 'Miloša Zvekića', 'Miloša Zvekića',
    ]
  },
  {
    name: 'Voždovac',
    streets: [
      'Vojvode Stepe', 'Bulevar oslobođenja', 'Medaković', 'Stepa Stepanović', 'Jajinci', 'Banjica', 'Kumodraž', 'Voždovac', 'Braće Jerković', 'Save Maškovića', 'Paunova', 'Vitanovačka', 'Vojvode Toze', 'Vojvode Skopljanca', 'Vojvode Vlahovića', 'Vojvode Brane', 'Vojvode Bogdana', 'Vojvode Milenka', 'Vojvode Mišića', 'Vojvode Putnika', 'Vojvode Tankosića', 'Vojvode Uroša', 'Vojvode Vuka', 'Vojvode Živojina', 'Vojvode Zivojina', 'Vojvode Zivojina Mišića',
    ]
  },
  {
    name: 'Vračar',
    streets: [
      'Krunska', 'Njegoševa', 'Molerova', 'Makenzijeva', 'Svetog Save', 'Cara Nikolaja II', 'Beogradska', 'Bulevar kralja Aleksandra', 'Čuburska', 'Sinđelićeva', 'Smiljanićeva', 'Kralja Milana', 'Kneginje Zorke', 'Kralja Aleksandra', 'Kralja Milutina', 'Kralja Petra', 'Kralja Vladimira', 'Kralja Vukašina', 'Kralja Zvonimira', 'Kraljevića Marka', 'Kraljevića Tomislava', 'Kraljevića Vladimira', 'Kraljevića Vukašina', 'Kraljevića Zvonimira', 'Kraljevića Marka', 'Kraljevića Tomislava', 'Kraljevića Vladimira', 'Kraljevića Vukašina', 'Kraljevića Zvonimira', 'Kraljevića Marka', 'Kraljevića Tomislava', 'Kraljevića Vladimira', 'Kraljevića Vukašina', 'Kraljevića Zvonimira', 'Kraljevića Marka', 'Kraljevića Tomislava', 'Kraljevića Vladimira', 'Kraljevića Vukašina', 'Kraljevića Zvonimira', 'Kraljevića Marka', 'Kraljevića Tomislava', 'Kraljevića Vladimira', 'Kraljevića Vukašina', 'Kraljevića Zvonimira', 'Kraljevića Marka', 'Kraljevića Tomislava', 'Kraljevića Vladimira', 'Kraljevića Vukašina', 'Kraljevića Zvonimira',
    ]
  },
];

function detectMunicipality(address) {
  if (!address) return '';
  for (const m of MUNICIPALITY_STREETS) {
    if (m.streets.some(street => address.includes(street))) {
      return m.name;
    }
  }
  return '';
}

function generateSlug(name) {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const fileContents = fs.readFileSync(csvPath, 'utf8');
const records = parse(fileContents, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

const businesses = records.map((record, index) => {
  const address = record.full_address || record.address || '';
  let municipality = detectMunicipality(address);
  return {
    id: record.id || `business-${index + 1}`,
    name: record.name,
    category: record.category || record.type || 'Pet Business',
    address,
    phone: record.phone || '',
    website: record.site || '',
    photo: record.photo || '/images/logo.png',
    rating: parseFloat(record.rating) || 0,
    reviewsCount: parseInt(record.reviews) || 0,
    latitude: record.latitude ? parseFloat(record.latitude) : null,
    longitude: record.longitude ? parseFloat(record.longitude) : null,
    municipality,
    slug: generateSlug(record.name),
  };
});

const jsContent = `// Auto-generated from CSV\nexport const allBusinesses = ${JSON.stringify(businesses, null, 2)};\n`;
fs.writeFileSync(outputPath, jsContent, 'utf8');

console.log('allBusinesses.js generated successfully!'); 