
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
          <img
           src="/lovable-uploads/DETELINA LOGO 2025 white-02.png"
          alt="Detelina Logo"
          className="h-20 w-auto"
          />
         </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>
              About Us
            </NavLink>
            <NavLink to="/products" active={location.pathname === '/products'}>
              Products
            </NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full text-detelina-dark hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 p-8">
          <MobileNavLink to="/" active={location.pathname === '/'}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" active={location.pathname === '/about'}>
            About Us
          </MobileNavLink>
          <MobileNavLink to="/products" active={location.pathname === '/products'}>
            Products
          </MobileNavLink>
          <MobileNavLink to="/contact" active={location.pathname === '/contact'}>
            Contact
          </MobileNavLink>
        </div>
      </div>
    </header>
  );
};

// Desktop navigation link
const NavLink = ({ 
  to, 
  active, 
  children 
}: { 
  to: string;
  active: boolean;
  children: React.ReactNode;
}) => (
  <Link 
    to={to} 
    className={`nav-link py-2 font-medium text-base transition-colors ${
      active ? 'text-detelina-green after:scale-x-100' : 'text-gray-700 hover:text-detelina-green'
    }`}
  >
    {children}
  </Link>
);

// Mobile navigation link
const MobileNavLink = ({ 
  to, 
  active, 
  children 
}: { 
  to: string;
  active: boolean;
  children: React.ReactNode;
}) => (
  <Link 
    to={to} 
    className={`py-4 text-xl font-medium border-b border-gray-100 ${
      active ? 'text-detelina-green' : 'text-gray-700'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
