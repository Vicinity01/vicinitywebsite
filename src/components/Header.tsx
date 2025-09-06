import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Founder', path: '/founder' },
    { name: 'Services', path: '/services' },
  ];

  const scrollToConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    const consultationForm = document.getElementById('consultation');
    if (consultationForm) {
      consultationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 nav-blur shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Globe className="w-8 h-8 text-primary-600 mr-2" />
              <span className="text-xl font-montserrat font-bold">
                <span className="text-primary-500">Vicinity</span>{' '}
                <span className="text-primary-900">Global</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                    isActive
                      ? 'text-primary-500 font-semibold'
                      : 'text-primary-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="/#consultation"
              onClick={scrollToConsultation}
              className="btn btn-primary text-sm"
            >
              Free Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary-900 hover:text-primary-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t mt-2"
        >
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-300 px-2 py-2 rounded-md ${
                      isActive
                        ? 'text-primary-500 bg-primary-50 font-semibold'
                        : 'text-primary-900 hover:bg-secondary-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href="/#consultation"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  scrollToConsultation(e);
                }}
                className="btn btn-primary text-sm w-full justify-center"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;