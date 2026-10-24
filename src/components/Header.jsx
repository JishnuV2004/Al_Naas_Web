import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, Menu as MenuIcon, X, Utensils } from 'lucide-react';

export default function Header({ cartCount, onOpenCart, onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-50 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo Image */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo/al-naaz-mandi-logo-transparent.png"
              alt="Al Naaz Mandi"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-md"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-amber-100/80 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-amber-100/80 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-amber-100/80 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>


          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg bg-amber-600/20 border border-amber-500/30 text-amber-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-charcoal-950 font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-amber-100 hover:text-amber-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-950/98 border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 space-y-3">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left py-2 px-3 text-amber-100 hover:bg-amber-900/30 rounded-md font-medium text-base"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('craft-story')}
            className="block w-full text-left py-2 px-3 text-amber-100 hover:bg-amber-900/30 rounded-md font-medium text-base"
          >
            The Craft &amp; Story
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="block w-full text-left py-2 px-3 text-amber-100 hover:bg-amber-900/30 rounded-md font-medium text-base"
          >
            Menu Categories
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="block w-full text-left py-2 px-3 text-amber-100 hover:bg-amber-900/30 rounded-md font-medium text-base"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 px-3 text-amber-100 hover:bg-amber-900/30 rounded-md font-medium text-base"
          >
            Contact &amp; Location
          </button>

          <div className="pt-4 border-t border-amber-900/40 grid grid-cols-2 gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
              className="w-full py-2.5 px-3 rounded-lg border border-amber-500/40 text-amber-300 font-semibold text-xs flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Reserve Table</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
              className="w-full py-2.5 px-3 rounded-lg gold-gradient-bg text-center font-bold text-xs flex items-center justify-center gap-1.5 text-white"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
