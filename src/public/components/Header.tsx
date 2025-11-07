import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const location = useLocation();

  // Check if the current path starts with /admin
  const isAdminPath = location.pathname.startsWith('/admin');

  if (isAdminPath) {
    return null; // Don't render header for admin pages
  }

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Flazz
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${location.pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${location.pathname === '/contact' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Contact
            </Link>
            <Link 
              to="/privacy" 
              className={`font-medium ${location.pathname === '/privacy' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className={`font-medium ${location.pathname === '/terms' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Terms
            </Link>
          </nav>
          
          {/* Admin Link */}
          <Link 
            to="/admin" 
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Admin
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 font-medium ${location.pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 font-medium ${location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 font-medium ${location.pathname === '/contact' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link 
              to="/privacy" 
              className={`block py-2 font-medium ${location.pathname === '/privacy' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              onClick={toggleMobileMenu}
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className={`block py-2 font-medium ${location.pathname === '/terms' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              onClick={toggleMobileMenu}
            >
              Terms
            </Link>
            <Link 
              to="/admin" 
              className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors mt-2 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Admin
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;