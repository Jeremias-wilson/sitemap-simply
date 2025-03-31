
import React from 'react';
import { Link } from 'react-router-dom';

interface SitemapSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SitemapSection: React.FC<SitemapSectionProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`sitemap-section ${className}`}>
      <h2>{title}</h2>
      <div className="sitemap-list">
        {children}
      </div>
    </div>
  );
};

interface LocationSectionProps {
  city: string;
  locations: string[];
  className?: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({ city, locations, className = "" }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h3>{city}</h3>
      {locations.map((location, index) => (
        <Link key={index} to={`/locations/${city.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`} className="block py-1 sitemap-link">
          {location}
        </Link>
      ))}
    </div>
  );
};

interface ServiceSectionProps {
  title: string;
  services: string[];
  className?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, services, className = "" }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h3>{title}</h3>
      {services.map((service, index) => (
        <Link key={index} to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="block py-1 sitemap-link">
          {service}
        </Link>
      ))}
    </div>
  );
};

const Sitemap: React.FC = () => {
  return (
    <div className="sitemap-container bg-petfolk-peach py-10 px-6 md:px-12 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Sitemap</h1>
      
      <div>
        <h2 className="text-3xl font-medium mb-8">Petfolk Locations</h2>
        
        {/* Grid for locations - desktop 3 columns, mobile 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <LocationSection 
            city="Atlanta" 
            locations={["Cumming", "East Cobb", "Marietta", "Kennesaw", "Peachtree Corners", "Sandy Springs"]} 
          />
          
          <LocationSection 
            city="Charlotte" 
            locations={["Ballantyne", "Concord", "Fort Mill", "Huntersville", "South Park"]} 
          />
          
          <LocationSection 
            city="Dallas" 
            locations={["Allen", "Flower Mound", "Lakewood", "Mansfield", "North Dallas", "Southlake"]} 
          />
          
          <LocationSection 
            city="Houston" 
            locations={["Pearland", "Vintage Park"]} 
          />
          
          <LocationSection 
            city="Orlando" 
            locations={["Altamonte Springs", "Lake Buena Vista", "Lake Mary", "Oviedo", "Windermere"]} 
          />
          
          <LocationSection 
            city="Phoenix" 
            locations={["Scottsdale"]} 
          />
          
          <LocationSection 
            city="Raleigh" 
            locations={["Cary", "Holly Springs", "North Hills", "Wake Forest"]} 
          />
          
          <LocationSection 
            city="San Antonio" 
            locations={["Far North Central"]} 
          />
          
          <LocationSection 
            city="South Florida" 
            locations={["Boynton Beach", "North Miami Biscayne", "Pinecrest", "Wellington"]} 
          />
        </div>
        
        <div className="my-8">
          <Link to="/locations" className="text-lg sitemap-link font-medium">All Locations</Link>
        </div>
        
        <h2 className="text-3xl font-medium my-8">Petfolk Services</h2>
        
        {/* Grid for services - desktop 3 columns, mobile 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceSection 
            title="Medical Services" 
            services={["All Services", "Pet Dental Care", "Pet Behavior Consulting", "Pet Euthanasia"]} 
          />
          
          <ServiceSection 
            title="Preventive Care" 
            services={["Pet Nutrition", "Pet Surgery", "Pet Vaccinations", "Veterinary Diagnostics"]} 
          />
          
          <ServiceSection 
            title="Specialized Care" 
            services={["Primary Pet Care", "Spay Neuter", "Pet Urgent Care", "Virtual Vet Care"]} 
          />
        </div>
        
        <h2 className="text-3xl font-medium my-8">Customer Service</h2>
        
        {/* Grid for customer service - desktop 3 columns, mobile 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-8">
            <div className="sitemap-list">
              <Link to="/appointment" className="block py-1 sitemap-link">Book an Appointment</Link>
              <Link to="/pricing" className="block py-1 sitemap-link">Pricing</Link>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="sitemap-list">
              <Link to="/contact" className="block py-1 sitemap-link">Contact us</Link>
              <Link to="/privacy" className="block py-1 sitemap-link">Privacy Policy</Link>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="sitemap-list">
              <Link to="/password/reset" className="block py-1 sitemap-link">Set New Password</Link>
              <Link to="/terms" className="block py-1 sitemap-link">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-medium my-8">Memberships</h2>
        
        {/* Grid for memberships - desktop 3 columns, mobile 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-8">
            <div className="sitemap-list">
              <Link to="/login" className="block py-1 sitemap-link">Login</Link>
              <Link to="/memberships" className="block py-1 sitemap-link">Discover Memberships</Link>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="sitemap-list">
              <Link to="/join" className="block py-1 sitemap-link">Join Membership</Link>
              <Link to="/terms" className="block py-1 sitemap-link">Terms of service</Link>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="sitemap-list">
              <Link to="/petfolk-flex" className="block py-1 sitemap-link">Petfolk Flex</Link>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-medium my-8">About Petfolk</h2>
        
        {/* Grid for about - desktop 3 columns, mobile 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-8">
            <div className="sitemap-list">
              <Link to="/about" className="block py-1 sitemap-link">About us</Link>
              <Link to="/partner" className="block py-1 sitemap-link">Petfolk Partner</Link>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="sitemap-list">
              <Link to="/careers" className="block py-1 sitemap-link">Careers</Link>
              <Link to="/petfolklore" className="block py-1 sitemap-link">Petfolklore</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
