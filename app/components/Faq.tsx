"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqItems: FaqItemProps[] = [
    {
      question: "Koje su najbolje prodavnice za kućne ljubimce u Beogradu?",
      answer: "Beograd nudi brojne kvalitetne prodavnice za kućne ljubimce. Neke od najbolje ocenjenih uključuju Pet Centar, Premium Pet i URBAN PETS. Ove prodavnice nude širok asortiman hrane za ljubimce, opreme i potrepština sa stručnim osobljem koje vam može pomoći da pronađete tačno ono što vaš ljubimac treba."
    },
    {
      question: "Gde mogu pronaći veterinarske usluge u Beogradu?",
      answer: "Beograd ima mnogo odličnih veterinarskih klinika u svim opštinama. Popularne opcije uključuju Pet-Vet Care, Veterinar PETAR CENTAR i 5ШОП lokacije koje kombinuju veterinarske usluge s prodavnicama za kućne ljubimce. Za hitne slučajeve, potražite klinike koje nude 24-časovnu negu."
    },
    {
      question: "Da li su dostupne usluge šišanja kućnih ljubimaca u Beogradu?",
      answer: "Da, mnogi biznisi za kućne ljubimce u Beogradu nude usluge šišanja. Možete pronaći namenske salone za šišanje ili prodavnice kućnih ljubimaca koje nude šišanje uz druge usluge. Preporučuje se da nazovete unapred i rezervišete termin, posebno za specijalizovane potrebe šišanja."
    },
    {
      question: "Kako mogu pronaći smeštaj koji prima kućne ljubimce u Beogradu?",
      answer: "Mnogi hoteli i apartmani u Beogradu primaju kućne ljubimce, ali pravila variraju. Prilikom rezervacije smeštaja, uvek proverite njihovu politiku o kućnim ljubimcima u vezi sa ograničenjima veličine, dodatnim naknadama i specifičnim pravilima. WikiPets vam može pomoći da pronađete opcije koje primaju kućne ljubimce širom grada."
    },
    {
      question: "Gde mogu da usvojim kućnog ljubimca u Beogradu?",
      answer: "Beograd ima nekoliko skloništa za životinje i organizacija za spasavanje gde možete usvojiti kućne ljubimce. To uključuje ORCA, BETA i razna opštinska skloništa. Usvajanje obično uključuje proces prijave i ponekad proveru doma kako bi se osiguralo da životinja odlazi u odgovarajući dom."
    }
  ];
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Često postavljana pitanja</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {faqItems.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq; 