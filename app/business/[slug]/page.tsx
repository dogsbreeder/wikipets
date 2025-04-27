import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { loadBusinessData, getBusinessBySlug, Business } from '../../utils/data';

// Generate metadata for the business page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const businesses = await loadBusinessData();
  const business = getBusinessBySlug(businesses, params.slug);
  
  if (!business) {
    return {
      title: 'Business Not Found | WikiPets Belgrade',
      description: 'The pet business you are looking for could not be found in our Belgrade directory.',
    };
  }
  
  return {
    title: `${business.name} | WikiPets Belgrade`,
    description: `View details for ${business.name} - ${business.category} in ${business.municipality || 'Belgrade'}, including contact information, ratings, and location.`,
  };
}

// Parse working hours from JSON string
function parseWorkingHours(workingHoursString?: string): Record<string, string> | null {
  if (!workingHoursString) return null;
  
  try {
    return JSON.parse(workingHoursString);
  } catch (error) {
    console.error('Error parsing working hours:', error);
    return null;
  }
}

// Format rating to display with star icon
function formatRating(rating: number): JSX.Element {
  return (
    <div className="flex items-center">
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}

export default async function BusinessPage({ params }: { params: { slug: string } }) {
  const businesses = await loadBusinessData();
  const business = getBusinessBySlug(businesses, params.slug);
  
  if (!business) {
    notFound();
  }
  
  const workingHours = parseWorkingHours(business.working_hours);
  
  // Direktan pristup slici (kao u PHP)
  const imageUrl = business.photo || '/images/logo.png';
  
  return (
    <div>
      <Navbar />
      
      <main>
        {/* Hero/Header Section */}
        <div className="bg-primary text-white py-6">
          <div className="container-custom">
            <div className="mb-2">
              <Link href="/" className="text-white/80 hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <Link href={`/categories/${business.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-white/80 hover:text-white">
                {business.category}
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{business.name}</h1>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Business Image */}
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <img 
                  src={imageUrl}
                  alt={business.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to logo if the image fails to load
                    (e.target as HTMLImageElement).onerror = null;
                    (e.target as HTMLImageElement).src = '/images/logo.png';
                  }}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              </div>
              
              {/* Business Information */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">About {business.name}</h2>
                  <div className="flex items-center">
                    {formatRating(business.rating)}
                    <span className="ml-2 text-gray-500">({business.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {business.category}
                  </span>
                  {business.municipality && (
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {business.municipality}
                    </span>
                  )}
                  {business.subcategory && (
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {business.subcategory}
                    </span>
                  )}
                </div>
                
                {business.description && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-700">{business.description}</p>
                  </div>
                )}
                
                {business.about && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Business Details</h3>
                    <div className="text-gray-700">
                      {/* Parse and render the JSON about field */}
                      <pre className="whitespace-pre-wrap">{JSON.stringify(JSON.parse(business.about), null, 2)}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">{business.full_address}</p>
                    </div>
                  </div>
                  
                  {business.phone && (
                    <div className="flex">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href={`tel:${business.phone}`} className="text-primary hover:underline">{business.phone}</a>
                      </div>
                    </div>
                  )}
                  
                  {business.website && (
                    <div className="flex">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Website</h4>
                        <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">
                          {business.website.replace(/^https?:\/\//i, '')}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                
                {business.latitude && business.longitude && (
                  <div className="mt-6">
                    <a 
                      href={`https://www.google.com/maps?q=${business.latitude},${business.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-2 px-4 rounded-md transition-colors duration-200"
                    >
                      Navigate to Business
                    </a>
                  </div>
                )}
              </div>
              
              {/* Working Hours */}
              {workingHours && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
                  
                  <ul className="space-y-2">
                    {Object.entries(workingHours).map(([day, hours]) => (
                      <li key={day} className="flex justify-between">
                        <span className="font-medium">{day}</span>
                        <span className="text-gray-600">{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 