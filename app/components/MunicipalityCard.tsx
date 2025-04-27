"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface MunicipalityCardProps {
  name: string;
  icon: string;
  businessCount: number;
}

// Helper function to create a URL-friendly slug (transliterate)
function municipalityToSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/č/g, 'c')
    .replace(/ć/g, 'c')
    .replace(/š/g, 's')
    .replace(/đ/g, 'dj')
    .replace(/ž/g, 'z')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const MunicipalityCard = ({ name, icon, businessCount }: MunicipalityCardProps) => {
  const slug = municipalityToSlug(name);
  
  return (
    <Link href={`/${slug}`} legacyBehavior>
      <a className="block">
        <motion.div 
          whileHover={{ y: -5 }}
          className="card cursor-pointer"
        >
          <div className="block p-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-primary mb-4">{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
              <span className="text-sm text-gray-500">{businessCount} businesses</span>
            </div>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default MunicipalityCard; 