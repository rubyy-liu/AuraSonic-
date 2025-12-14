import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mic2 } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/shows', label: 'MadGigz' },
    { path: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-aura-900/90 backdrop-blur-md border-b border-aura-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-aura-accent/20 rounded-full group-hover:bg-aura-accent/40 transition-colors">
              <Mic2 className="w-6 h-6 text-aura-accent group-hover:text-aura-cream transition-colors" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-aura-cream group-hover:text-aura-highlight transition-colors">
              AURASONIC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300',
                    isActive(link.path)
                      ? 'text-aura-highlight bg-aura-cream/10'
                      : 'text-aura-cream/70 hover:text-aura-cream hover:bg-aura-cream/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-aura-cream/70 hover:text-aura-cream hover:bg-aura-cream/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-aura-900 border-b border-aura-cream/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  isActive(link.path)
                    ? 'text-aura-highlight bg-black/20'
                    : 'text-aura-cream/70 hover:text-aura-cream hover:bg-aura-cream/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;