import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      
      <main className="container-custom py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-600 max-w-lg mb-8">
            Sorry, we couldn't find the page you're looking for. The page might have been removed, 
            had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/" 
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Return Home
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8 w-full">
            <h3 className="text-xl font-semibold mb-4">Looking for something?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="text-primary hover:underline"
              >
                About WikiPets
              </Link>
              <Link 
                href="/" 
                className="text-primary hover:underline"
              >
                Browse Businesses
              </Link>
              <Link 
                href="/contact" 
                className="text-primary hover:underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 