import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'WikiPets - Direktorijum Poslovanja za Kućne Ljubimce u Beogradu',
  description: 'Sveobuhvatan direktorijum poslovanja sa kućnim ljubimcima u Beogradu, Srbija, uključujući prodavnice za kućne ljubimce, veterinarske usluge i više.',
  keywords: 'kućni ljubimci, beograd, srbija, prodavnica za kućne ljubimce, veterinar, usluge za kućne ljubimce, poslovanje sa kućnim ljubimcima',
  verification: {
    other: {
      'msvalidate.01': '6644A96842A0EA4002BA88B5EA3D6D2A',
    },
  },
  openGraph: {
    title: 'WikiPets - Direktorijum Poslovanja za Kućne Ljubimce u Beogradu',
    description: 'Sveobuhvatan direktorijum poslovanja sa kućnim ljubimcima u Beogradu, Srbija, uključujući prodavnice za kućne ljubimce, veterinarske usluge i više.',
    url: 'https://wikipets.org',
    siteName: 'WikiPets',
    images: [
      {
        url: 'https://wikipets.org/logo.png',
        width: 800,
        height: 600,
        alt: 'WikiPets Logo',
      },
    ],
    locale: 'sr_RS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@WikiPets',
    title: 'WikiPets - Direktorijum Poslovanja za Kućne Ljubimce u Beogradu',
    description: 'Sveobuhvatan direktorijum poslovanja sa kućnim ljubimcima u Beogradu, Srbija.',
    images: ['https://wikipets.org/logo.png'],
  },
  metadataBase: new URL('https://wikipets.org'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        <meta name="msvalidate.01" content="6644A96842A0EA4002BA88B5EA3D6D2A" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
} 