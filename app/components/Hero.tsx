"use client";

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Kućni ljubimci u Beogradu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 to-primary/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container-custom h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Pronađite najbolje usluge za kućne ljubimce u Beogradu
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Otkrijte prodavnice za kućne ljubimce, veterinarske klinike, frizere i još mnogo toga na jednom mestu.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#municipality-section" 
              className="btn bg-white text-primary hover:bg-gray-100 font-semibold text-center"
            >
              Pretraga po opštini
            </a>
            <a 
              href="#category-section" 
              className="btn bg-primary-dark text-white hover:bg-opacity-90 font-semibold text-center"
            >
              Pretraga po kategoriji
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 