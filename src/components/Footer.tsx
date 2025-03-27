
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/DETELINA LOGO 2025 white-02.png" 
                alt="Detelina Dairy Logo" 
                className="h-15 w-auto mr-5" 
              />

            </div>
            <p className="text-gray-600 mb-4">
              Authentic dairy products made in Cyprus using traditional recipes and natural fermentation processes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/detelinadairy?igsh=Z2l6NWt3M25oaDY2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/share/12CkQE5zyXR/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-600 hover:text-primary transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/kefir" className="text-gray-600 hover:text-primary transition-colors">
                  Kefir
                </Link>
              </li>
              <li>
                <Link to="/products/ryazhenka" className="text-gray-600 hover:text-primary transition-colors">
                  Ryazhenka
                </Link>
              </li>
              <li>
                <Link to="/products/smetana" className="text-gray-600 hover:text-primary transition-colors">
                  Smetana
                </Link>
              </li>
              <li>
                <Link to="/products/tvorog" className="text-gray-600 hover:text-primary transition-colors">
                  Tvorog
                </Link>
              </li>
              <li>
                <Link to="/products/protein-kefir" className="text-gray-600 hover:text-primary transition-colors">
                  Protein Kefir
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  15 Agias Zonis, Limassol, Cyprus
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  +357 25 123 456
                </span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@detelina-dairy.com" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  info@detelina-dairy.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Detelina Dairy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
