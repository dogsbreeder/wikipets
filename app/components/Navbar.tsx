"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = {
    sr: [
      { title: 'Početna', href: '/' },
      { title: 'O nama', href: '/o-nama/' },
      { title: 'Po opštini', href: '/#municipality-section' },
      { title: 'Po kategoriji', href: '/#category-section' },
      { title: 'Blog', href: '/blog' },
      { title: 'Kontakt', href: '/kontakt/' },
    ],
    en: [
      { title: 'Home', href: '/' },
      { title: 'About Us', href: '/about' },
      { title: 'By Municipality', href: '/municipalities' },
      { title: 'By Category', href: '/categories' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ]
  };

  const currentItems = navItems['sr'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 shadow-md bg-white"
    >
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="WikiPets Logo" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-primary">WikiPets</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {currentItems.map((item, index) => (
            <NavLink key={index} href={item.href}>{item.title}</NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="container-custom py-4">
          <div className="flex flex-col space-y-4">
            {currentItems.map((item, index) => (
              <NavLink 
                key={index} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Helper NavLink component
const NavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link 
    href={href} 
    className="text-gray-700 hover:text-primary transition-colors duration-200 block py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar; 