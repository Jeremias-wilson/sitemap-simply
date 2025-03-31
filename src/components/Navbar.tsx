
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="font-serif text-2xl font-bold text-petfolk-brown">Petfolk</Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="flex items-center text-petfolk-brown">
          <PhoneCall size={18} className="mr-2" />
          <span>Call Us</span>
        </Link>
        <Button className="bg-petfolk-orange hover:bg-petfolk-brown text-white">
          Book now
        </Button>
      </div>
      
      <div className="md:hidden">
        <Menu className="text-petfolk-brown h-6 w-6" />
      </div>
    </nav>
  );
};

export default Navbar;
