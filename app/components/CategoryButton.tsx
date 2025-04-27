"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CategoryButtonProps {
  name: string;
  icon: string;
  businessCount: number;
  slug?: string;
}

const CategoryButton = ({ name, icon, businessCount, slug }: CategoryButtonProps) => {
  // Create a URL-friendly version of the name if slug is not provided
  const urlSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Link 
        href={`/${urlSlug}`}
        className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 border border-gray-100"
      >
        <div className="flex items-center">
          <div className="text-3xl text-primary mr-4">{icon}</div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <span className="text-sm text-gray-500">{businessCount} {businessCount === 1 ? 'biznis' : 'biznisa'}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryButton; 