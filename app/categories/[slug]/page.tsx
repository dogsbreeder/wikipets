import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BusinessCard from '../../components/BusinessCard';
import CategoryClient from './CategoryClient';
import { businessesByCategory } from '../../data/businessesByCategory';

// Define our Business interface to match what CategoryClient expects
interface Business {
  id: string;
  name: string;
  category: string;
  address?: string;
  phone?: string;
  website?: string;
  photo?: string | null;
  rating: number;
  reviewsCount: number;
  latitude?: number;
  longitude?: number;
}

// Define businesses by category type
interface BusinessesByCategory {
  [key: string]: Business[];
}

// Helper function to convert our imported data to the correct type
function convertBusinessData(): BusinessesByCategory {
  const result: BusinessesByCategory = {};
  
  for (const [key, businesses] of Object.entries(businessesByCategory)) {
    result[key] = businesses.map(business => ({
      id: business.id,
      name: business.name,
      category: business.category,
      address: business.address,
      phone: business.phone,
      website: business.website,
      photo: business.photo,
      rating: business.rating,
      reviewsCount: business.reviewsCount,
      latitude: business.latitude || undefined,
      longitude: business.longitude || undefined
    }));
  }
  
  return result;
}

// Convert the imported data to the expected format
const typedBusinessesByCategory = convertBusinessData();

// Podaci o kategorijama poslovanja
const CATEGORIES = [
  { name: 'Prodavnice za kućne ljubimce', nameEn: 'Pet Stores', icon: '🦮', businessCount: 52, slug: 'pet-stores' },
  { name: 'Veterinarske usluge', nameEn: 'Veterinary Services', icon: '🩺', businessCount: 43, slug: 'veterinary-services' },
  { name: 'Šišanje kućnih ljubimaca', nameEn: 'Pet Grooming', icon: '✂️', businessCount: 28, slug: 'pet-grooming' },
  { name: 'Kremiranje/groblje za kućne ljubimce', nameEn: 'Pet Cremation/Cemetery', icon: '🕊️', businessCount: 5, slug: 'pet-cremation-cemetery' },
  { name: 'Trening kućnih ljubimaca', nameEn: 'Pet Training', icon: '🏆', businessCount: 12, slug: 'pet-training' },
  { name: 'Pansioni za kućne ljubimce', nameEn: 'Pet Boarding', icon: '🏨', businessCount: 15, slug: 'pet-boarding' },
  { name: 'Šetanje/čuvanje kućnih ljubimaca', nameEn: 'Pet Walking/Sitting', icon: '🚶', businessCount: 20, slug: 'pet-walking-sitting' },
];

// Update category business counts based on imported data
for (const category of CATEGORIES) {
  const categoryBusinesses = typedBusinessesByCategory[category.slug] || [];
  category.businessCount = categoryBusinesses.length;
}

// Generate metadata for the category page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Find category by slug
  const category = CATEGORIES.find(c => 
    c.slug === params.slug
  );
  
  if (!category) {
    return {
      title: 'Category Not Found | WikiPets Belgrade',
      description: 'The pet business category you are looking for could not be found in our Belgrade directory.',
    };
  }
  
  return {
    title: `${category.name} in Belgrade | WikiPets`,
    description: `Find the best ${category.name.toLowerCase()} in Belgrade.`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  
  // Find category by slug
  const category = CATEGORIES.find(c => c.slug === slug);
  
  // Get businesses in this category from our imported data
  const businesses = typedBusinessesByCategory[slug] || [];
  
  if (!category) {
    return (
      <main>
        <Navbar />
        <section className="py-12">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Kategorija nije pronađena</h1>
            <p>Kategorija poslovanja sa kućnim ljubimcima koju tražite ne postoji u našoj bazi.</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
  
  return <CategoryClient category={category} businesses={businesses} />;
} 