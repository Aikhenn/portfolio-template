// src/app/layout.tsx


import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Created by Khen',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className="font-sans bg-[#201b1c] text-white min-h-screen">
        <div className=" grid grid-rows-[20px_1fr] items-start justify-items-center min-h-screen pt-8 gap-16">
          <header>
           <Navigation/>
          </header>

          <main className="w-full">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
