import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="WikiPets Logo" 
                width={40} 
                height={40} 
                className="rounded-full mr-2" 
              />
              <span className="text-xl font-bold">WikiPets</span>
            </div>
            <p className="text-gray-300">
              Sveobuhvatan direktorijum za usluge i poslovanje sa kućnim ljubimcima u Beogradu, Srbija.
            </p>
          </div>

          {/* Quick Links - Centered */}
          <div className="space-y-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold">Brzi linkovi</h3>
            <ul className="space-y-2 text-center">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Početna</Link></li>
              <li><Link href="/o-nama" className="text-gray-300 hover:text-white transition-colors duration-200">O nama</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>

          {/* Marketing Button and Sitemap - Centered */}
          <div className="flex flex-col items-center space-y-4">
            <Link 
              href="/kontakt/" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-200 w-full md:w-auto text-center"
            >
              Marketing
            </Link>
            <Link 
              href="/sitemap.xml" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Sitemap
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WikiPets.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 