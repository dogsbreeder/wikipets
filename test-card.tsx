"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface BusinessCardProps {
  id: string;
  name: string;
  category: string;
  address?: string;
  phone?: string;
  website?: string;
  photo?: string;
  rating: number;
  reviewsCount: number;
  latitude?: number;
  longitude?: number;
}

const BusinessCard = ({
  id,
  name,
  category,
  address,
  phone,
  website,
  photo,
  rating,
  reviewsCount,
  latitude,
  longitude
}: BusinessCardProps) => {
  // State to track image loading errors
  const [imageError, setImageError] = useState(false);
  
  // Use fallback image if photo is not provided or if there was an error loading the image
  const imageUrl = (!photo || imageError) ? '/images/logo.png' : 
    photo.startsWith('https://') ? 
    `https://images.weserv.nl/?url=${encodeURIComponent(photo)}` : 
    photo;
  
  // Generate a sanitized slug from the name for the URL
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="relative h-48">
        <img 
          src={imageUrl}
          alt={name}
          className="rounded-t-lg w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full shadow-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-sm font-semibold">{rating} ({reviewsCount})</span>
        </div>
        
        {/* Category tag */}
        <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded-md text-xs">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {address && <p className="text-gray-600 text-sm mt-1">{address}</p>}
        
        <div className="mt-4 space-y-2">
          {phone && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${phone}`} className="text-sm hover:text-primary">{phone}</a>
            </div>
          )}
        </div>
        
        <div className="mt-4 grid gap-2" style={{ gridTemplateColumns: website && latitude ? '1fr 1fr' : '1fr' }}>
          {website && (
            <a 
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white text-center py-2 px-4 rounded font-medium text-sm transition-colors duration-200"
            >
              Website
            </a>
          )}
          
          {latitude && longitude && (
            <a 
              href={`https://www.google.com/maps?q=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded font-medium text-sm transition-colors duration-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Putanja
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessCard; 