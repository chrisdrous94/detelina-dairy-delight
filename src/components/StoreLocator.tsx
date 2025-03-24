
import { useState } from 'react';
import { MapPin, Phone, Mail, Building, ChevronRight } from 'lucide-react';

interface StoreLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
}

const storeLocations: StoreLocation[] = [
  {
    id: 1,
    name: "Detelina Factory Store",
    address: "15 Agias Zonis, Limassol",
    city: "Limassol",
    phone: "+357 25 123 456",
    hours: "Mon-Fri: 9:00-19:00, Sat: 9:00-15:00"
  },
  {
    id: 2,
    name: "Alpha Mega Supermarket",
    address: "28 Limassol Avenue, Nicosia",
    city: "Nicosia",
    phone: "+357 22 123 456",
    hours: "Mon-Sun: 7:00-21:00"
  },
  {
    id: 3,
    name: "Papantoniou Supermarket",
    address: "43 Georgiou A', Paphos",
    city: "Paphos",
    phone: "+357 26 123 456",
    hours: "Mon-Sun: 8:00-20:00"
  },
  {
    id: 4,
    name: "Metro Supermarket",
    address: "12 Larnaca Avenue, Larnaca",
    city: "Larnaca",
    phone: "+357 24 123 456",
    hours: "Mon-Sat: 7:30-20:30, Sun: 9:00-19:00"
  }
];

const cities = ["All", ...Array.from(new Set(storeLocations.map(loc => loc.city)))];

const StoreLocator = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  
  const filteredLocations = selectedCity === "All" 
    ? storeLocations 
    : storeLocations.filter(loc => loc.city === selectedCity);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Our Products</h2>
          <p className="text-gray-600">
            Our products are available at select retail locations throughout Cyprus.
            Visit our factory store or find Detelina at these partner locations.
          </p>
        </div>

        {/* City filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCity === city
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Store locations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map(location => (
            <div 
              key={location.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-lg">{location.name}</h3>
                  <p className="text-sm text-gray-500">{location.city}</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{location.address}</span>
                </div>
                <div className="flex">
                  <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex">
                  <div className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4">Looking for wholesale inquiries?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-5 py-2 bg-secondary text-white font-medium rounded-full hover:bg-secondary-dark transition-colors"
          >
            Contact Us
            <ChevronRight className="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
