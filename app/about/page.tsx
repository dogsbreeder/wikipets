import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'About WikiPets | Pet Business Directory Belgrade',
  description: 'Learn about WikiPets, your comprehensive directory for pet services and businesses in Belgrade, Serbia.',
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="absolute inset-0 opacity-20 bg-pattern"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About WikiPets</h1>
              <p className="text-xl opacity-90">Your comprehensive guide to pet businesses in Belgrade</p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At WikiPets, we're passionate about connecting pet owners in Belgrade with the services they need. 
                  We understand that pets are family members, and finding the right care for them is important.
                </p>
                <p className="text-gray-700 mb-4">
                  Our mission is to create the most comprehensive, up-to-date, and user-friendly directory of pet businesses 
                  in Belgrade, making it easier for pet owners to discover and connect with quality services for their companions.
                </p>
                <p className="text-gray-700">
                  Whether you're looking for a trusted veterinarian, a specialty pet store, grooming services, or more, 
                  WikiPets is designed to help you find exactly what you're looking for in your area.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Pet care in Belgrade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl text-primary mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Directory</h3>
                <p className="text-gray-600">
                  A complete listing of pet businesses in Belgrade, organized by municipality and category for easy navigation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl text-primary mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-3">Ratings & Reviews</h3>
                <p className="text-gray-600">
                  See ratings from other pet owners to help you make informed decisions about which businesses to visit.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl text-primary mb-4">📍</div>
                <h3 className="text-xl font-bold mb-3">Location-Based Search</h3>
                <p className="text-gray-600">
                  Find pet businesses near you with our municipality-based organization and GPS coordinates for easy navigation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-primary rounded-lg p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Have Questions or Suggestions?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                We're constantly working to improve WikiPets and add more features to help Belgrade's pet owners.
                If you have any questions, suggestions, or would like to list your pet business, we'd love to hear from you.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 