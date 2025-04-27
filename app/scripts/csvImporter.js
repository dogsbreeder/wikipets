// Import necessary node modules
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Mapping business types from CSV to our application categories
const categoryMapping = {
  'Pet store': 'Prodavnice za kućne ljubimce',
  'Pet supply store': 'Prodavnice za kućne ljubimace',
  'Veterinarian': 'Veterinarske usluge',
  'Veterinary care': 'Veterinarske usluge',
  'Veterinary clinic': 'Veterinarske usluge',
  'Pet groomer': 'Šišanje kućnih ljubimaca',
  'Dog groomer': 'Šišanje kućnih ljubimaca',
  'Pet cemetery': 'Kremiranje/groblje za kućne ljubimace',
  'Pet crematorium': 'Kremiranje/groblje za kućne ljubimace',
  'Dog trainer': 'Trening kućnih ljubimaca',
  'Pet trainer': 'Trening kućnih ljubimaca',
  'Pet boarding service': 'Pansioni za kućne ljubimce',
  'Kennel': 'Pansioni za kućne ljubimce',
  'Pet sitter': 'Šetanje/čuvanje kućnih ljubimaca',
  'Dog walker': 'Šetanje/čuvanje kućnih ljubimaca',
};

// Category slug mapping
const categorySlugMapping = {
  'Prodavnice za kućne ljubimce': 'pet-stores',
  'Veterinarske usluge': 'veterinary-services',
  'Šišanje kućnih ljubimaca': 'pet-grooming',
  'Kremiranje/groblje za kućne ljubimace': 'pet-cremation-cemetery',
  'Trening kućnih ljubimaca': 'pet-training',
  'Pansioni za kućne ljubimce': 'pet-boarding',
  'Šetanje/čuvanje kućnih ljubimaca': 'pet-walking-sitting',
};

// Municipality mapping (you'll need to customize this based on your data)
const municipalityMapping = {
  'Stari Grad': 'Stari Grad',
  'Novi Beograd': 'Novi Beograd',
  'Voždovac': 'Voždovac',
  'Vračar': 'Vračar',
  'Zvezdara': 'Zvezdara',
  'Zemun': 'Zemun',
  'Čukarica': 'Čukarica',
  'Rakovica': 'Rakovica',
  'Palilula': 'Palilula',
  'Savski venac': 'Savski venac',
};

// Array of default pet images to cycle through
const petImages = [
  '/images/dog1.png',
  '/images/dog2.png',
  '/images/dog3.png',
  '/images/dog4.png'
];

// Parse CSV and create business objects
const businessesFromCSV = [];
let counter = 1000; // Starting ID to avoid conflicts with existing data
let imageIndex = 0; // For cycling through pet images

fs.createReadStream(path.join(__dirname, '../../Outscraper-20250422201418xs4e_pet_store_+44.csv'))
  .pipe(csv())
  .on('data', (row) => {
    // Extract coordinates from Google Maps link if available
    let latitude = null;
    let longitude = null;
    
    if (row.google_maps_link) {
      const mapsLinkMatch = row.google_maps_link.match(/@([-\d.]+),([-\d.]+)/);
      if (mapsLinkMatch && mapsLinkMatch.length >= 3) {
        latitude = parseFloat(mapsLinkMatch[1]);
        longitude = parseFloat(mapsLinkMatch[2]);
      }
    }
    
    // Determine the business category
    let category = 'Prodavnice za kućne ljubimce'; // Default
    if (row.business_types) {
      const types = row.business_types.split(',').map(type => type.trim());
      for (const type of types) {
        if (categoryMapping[type]) {
          category = categoryMapping[type];
          break;
        }
      }
    }
    
    // Create rating value
    const rating = row.rating ? parseFloat(row.rating) : 4.0;
    const reviewsCount = row.reviews_count ? parseInt(row.reviews_count) : 0;
    
    // Extract municipality from address if possible
    let municipality = null;
    if (row.address) {
      for (const [key, value] of Object.entries(municipalityMapping)) {
        if (row.address.includes(key)) {
          municipality = value;
          break;
        }
      }
    }
    
    // Use the photo URL from CSV instead of local images
    const photoPath = row.photo || petImages[imageIndex % petImages.length];
    imageIndex = (imageIndex + 1) % petImages.length; // Cycle through images for fallback
    
    const business = {
      id: `csv-${counter++}`,
      name: row.name || '',
      category: category,
      address: row.address || '',
      phone: row.phone_number || '',
      website: row.website || '',
      photo: photoPath,
      rating: rating,
      reviewsCount: reviewsCount,
      latitude: latitude,
      longitude: longitude,
      municipality: municipality,
      slug: categorySlugMapping[category] || 'pet-stores',
    };
    
    businessesFromCSV.push(business);
  })
  .on('end', () => {
    console.log(`Processed ${businessesFromCSV.length} businesses from CSV`);
    
    // Create a structured business list organized by categories
    const businessesByCategory = {};
    const businessesByMunicipality = {};
    
    // Initialize category arrays
    Object.values(categorySlugMapping).forEach(slug => {
      businessesByCategory[slug] = [];
    });
    
    // Initialize municipality arrays
    Object.values(municipalityMapping).forEach(municipality => {
      businessesByMunicipality[municipality] = [];
    });
    
    // Populate businesses by category and municipality
    businessesFromCSV.forEach(business => {
      // Add to category
      if (business.slug && businessesByCategory[business.slug]) {
        businessesByCategory[business.slug].push(business);
      }
      
      // Add to municipality
      if (business.municipality && businessesByMunicipality[business.municipality]) {
        businessesByMunicipality[business.municipality].push(business);
      }
    });
    
    // Write businesses by category to a file
    fs.writeFileSync(
      path.join(__dirname, '../data/businessesByCategory.js'),
      `// Generated from CSV data\n\nexport const businessesByCategory = ${JSON.stringify(businessesByCategory, null, 2)};\n`
    );
    
    // Write businesses by municipality to a file
    fs.writeFileSync(
      path.join(__dirname, '../data/businessesByMunicipality.js'),
      `// Generated from CSV data\n\nexport const businessesByMunicipality = ${JSON.stringify(businessesByMunicipality, null, 2)};\n`
    );
    
    // Write all businesses to a file
    fs.writeFileSync(
      path.join(__dirname, '../data/allBusinesses.js'),
      `// Generated from CSV data\n\nexport const allBusinesses = ${JSON.stringify(businessesFromCSV, null, 2)};\n`
    );
    
    console.log('Data files created successfully!');
  }); 