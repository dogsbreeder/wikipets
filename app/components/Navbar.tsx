"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
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

  // Prikazuj samo srpsku verziju linkova
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
        
        <div className="flex space-x-6 items-center">
          {currentItems.map((item, index) => (
            <NavLink key={index} href={item.href}>{item.title}</NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

// Helper NavLink component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-700 hover:text-primary transition-colors duration-200">
    {children}
  </Link>
);

export default Navbar; 