"use client";

import React from 'react';
import { useState } from 'react';

const Kontakt = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending the data to an API
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Kontaktirajte nas</h1>
      <p className="mb-6">
        Dobrodošli na našu kontakt stranicu! Ako želite da se vaš biznis nađe na najdetaljnijem direktorijumu za pet biznise, na pravom ste mestu. Naša platforma je posvećena povezivanju ljubitelja kućnih ljubimaca sa najboljim uslugama i proizvodima. Pridružite se našoj zajednici i iskoristite priliku da vaš biznis bude vidljiviji i dostupniji široj publici. Kontaktirajte nas putem forme ispod i saznajte kako možemo pomoći vašem biznisu da raste i napreduje.
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Ime
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            placeholder="Vaše ime"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Vaš email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Poruka
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Vaša poruka"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pošalji
          </button>
        </div>
      </form>
    </div>
  );
};

export default Kontakt; 