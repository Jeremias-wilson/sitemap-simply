
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-petfolk-peach">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-6 text-petfolk-brown">Welcome to Petfolk</h1>
        <p className="text-xl text-petfolk-brown mb-8">Your trusted partner in pet health</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-petfolk-orange hover:bg-petfolk-brown text-white">
            Book an Appointment
          </Button>
          <Link to="/sitemap">
            <Button variant="outline" className="border-petfolk-brown text-petfolk-brown hover:bg-petfolk-brown hover:text-white">
              View Sitemap
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
