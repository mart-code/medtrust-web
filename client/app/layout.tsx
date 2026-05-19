import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'MedTrust — Your Health, Connected',
  description:
    'Connecting patients to doctors, health programmes, and medical centres near you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Load Material Symbols for the icons in page.tsx */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased min-h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
