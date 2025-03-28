import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`relative z-50 transition-all duration-300 ${
        isHome ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={
                isHome
                  ? '/lovable-uploads/DETELINA LOGO 2025 white-02.png'
                  : '/lovable-uploads/DETELINA LOGO 2025 black-02.png'
              }
              alt="Detelina Logo"
              className="h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" active={isHome} isHome={isHome}>
              Home
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'} isHome={isHome}>
              About Us
            </NavLink>
            <NavLink to="/products" active={location.pathname === '/products'} isHome={isHome}>
              Products
            </NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'} isHome={isHome}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-detelina-dark hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
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
          <MobileNavLink to="/" active={isHome}>
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

const NavLink = ({
  to,
  active,
  children,
  isHome
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
  isHome: boolean;
}) => {
  const base = 'nav-link py-2 font-medium text-base transition-colors';
  const activeStyle = isHome ? 'text-white' : 'text-detelina-green';
  const inactiveStyle = isHome
    ? 'text-white/80 hover:text-white'
    : 'text-gray-800 hover:text-detelina-green';

  return (
    <Link to={to} className={`${base} ${active ? activeStyle : inactiveStyle}`}>
      {children}
    </Link>
  );
};

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
