import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Business type definition based on the data structure observed in the page.tsx
export interface Business {
  id: string;
  name: string;
  slug?: string;
  category: string;
  subcategory?: string;
  municipality?: string;
  address?: string;
  full_address: string;
  phone?: string;
  website?: string;
  photo?: string;
  rating: number;
  reviews: number;
  reviewsCount: number;
  latitude?: number;
  longitude?: number;
  working_hours?: string;
  description?: string;
  about?: string;
}

// Cache for business data to avoid reading the file multiple times
let businessCache: Business[] | null = null;

// Load business data from the CSV file
export async function loadBusinessData(): Promise<Business[]> {
  // Return cached data if available
  if (businessCache) {
    return businessCache;
  }

  try {
    // Path to the CSV file
    const csvPath = path.join(process.cwd(), 'Outscraper-20250422201418xs4e_pet_store_+44.csv');
    const fileContents = fs.readFileSync(csvPath, 'utf8');

    // Parse CSV file contents
    const records = parse(fileContents, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    // Transform CSV data to Business objects
    const businesses: Business[] = records.map((record: any, index: number) => {
      // Generate a unique ID if not provided
      const id = record.id || `business-${index + 1}`;
      
      // Generate a slug from the business name
      const slug = generateSlug(record.name);
      
      // Extract municipality from address if available
      const municipality = extractMunicipality(record.full_address);
      
      // Parse rating and reviews count
      const rating = parseFloat(record.rating) || 4.0;
      const reviews = parseInt(record.reviews_count) || 0;
      
      // Parse coordinates if available
      const latitude = record.latitude ? parseFloat(record.latitude) : undefined;
      const longitude = record.longitude ? parseFloat(record.longitude) : undefined;
      
      return {
        id,
        name: record.name,
        slug,
        category: record.type || 'Pet Business',
        subcategory: record.subtypes,
        municipality,
        address: record.full_address || record.address || '',
        full_address: record.full_address || record.address || '',
        phone: record.phone,
        website: record.site,
        photo: record.photos_sample ? record.photos_sample.split(',')[0].trim() : '/images/logo.png',
        rating,
        reviews,
        reviewsCount: reviews,
        latitude: record.latitude ? parseFloat(record.latitude) : undefined,
        longitude: record.longitude ? parseFloat(record.longitude) : undefined,
        working_hours: record.working_hours,
        description: record.description,
        about: record.about_sample,
      };
    });
    
    // Cache the parsed business data
    businessCache = businesses;
    
    return businesses;
  } catch (error) {
    console.error('Error loading business data:', error);
    return [];
  }
}

// Generate a URL-friendly slug from a business name
function generateSlug(name: string): string {
  if (!name) return '';
  
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove consecutive hyphens
    .trim();
}

// Extract municipality from address
function extractMunicipality(address?: string): string | undefined {
  if (!address) return undefined;
  
  // List of Belgrade municipalities to check for in the address
  const municipalities = [
    'Čukarica', 'Novi Beograd', 'Palilula', 'Rakovica', 'Savski Venac',
    'Stari Grad', 'Vračar', 'Zemun', 'Zvezdara', 'Voždovac', 'Grocka',
    'Mladenovac', 'Obrenovac', 'Sopot', 'Surčin', 'Barajevo', 'Lazarevac'
  ];
  
  // Check if any municipality is mentioned in the address
  for (const municipality of municipalities) {
    if (address.includes(municipality)) {
      return municipality;
    }
  }
  
  return undefined;
}

// Get a business by its slug
export function getBusinessBySlug(businesses: Business[], slug: string): Business | undefined {
  return businesses.find(business => business.slug === slug);
}

// Get businesses by category
export function getBusinessesByCategory(businesses: Business[], category: string): Business[] {
  return businesses.filter(business => 
    business.category.toLowerCase() === category.toLowerCase() ||
    business.category.toLowerCase().includes(category.toLowerCase())
  );
}

// Get businesses by municipality
export function getBusinessesByMunicipality(businesses: Business[], municipality: string): Business[] {
  return businesses.filter(business => 
    business.municipality?.toLowerCase() === municipality.toLowerCase()
  );
}

// Get top-rated businesses
export function getTopRatedBusinesses(businesses: Business[], limit: number = 6): Business[] {
  return [...businesses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
} 