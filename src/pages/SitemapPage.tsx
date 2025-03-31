
import React from 'react';
import Navbar from '@/components/Navbar';
import Sitemap from '@/components/Sitemap';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Sitemap />
      </main>
      <footer className="bg-white py-6 px-6 md:px-12 text-center">
        <p className="text-petfolk-brown">&copy; {new Date().getFullYear()} Petfolk. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SitemapPage;
