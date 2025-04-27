"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Business } from '../utils/data';

type BusinessCardProps = {
  business?: Business;
};

export default function BusinessCard({ business }: BusinessCardProps) {
  const [imageError, setImageError] = useState(false);

  // Handle case when business is undefined
  if (!business) {
    return null;
  }

  const {
    id,
    name,
    address,
    phone,
    rating,
    reviewsCount,
    photo,
    slug,
    category,
    website,
    latitude,
    longitude,
  } = business;

  // Use fallback image if photo is not provided or if there was an error loading the image
  const imageUrl = (!photo || imageError) 
    ? '/images/logo.png' 
    : photo.startsWith('http') 
      ? photo  // Use external URLs directly
      : photo;  // Use local image paths directly

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-lg shadow-md bg-white overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
        
        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full shadow-md flex items-center z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-sm font-semibold">{rating} ({reviewsCount})</span>
        </div>
        
        {/* Category tag */}
        <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded-md text-xs z-10">
          {category}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        {address && (
          <div className="flex items-center mb-1">
            <FaMapMarkerAlt className="text-gray-500 mr-2" size={14} />
            <p className="text-gray-600 text-sm">{address}</p>
          </div>
        )}
        {phone && (
          <div className="flex items-center mb-4">
            <FaPhone className="text-gray-500 mr-2" size={14} />
            <a href={`tel:${phone}`} className="text-gray-600 text-sm hover:text-primary">{phone}</a>
          </div>
        )}
        <div className="mt-auto flex gap-2">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="bg-purple-700 text-white font-bold py-2 px-4 rounded-md text-sm flex-1 text-center transition-colors duration-200 hover:bg-purple-800">Website</a>
          )}
          {latitude && longitude && (
            <a href={`https://www.google.com/maps?q=${latitude},${longitude}`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md text-sm flex-1 text-center transition-colors duration-200 hover:bg-orange-600">Putanja</a>
          )}
        </div>
      </div>
    </motion.div>
  );
}