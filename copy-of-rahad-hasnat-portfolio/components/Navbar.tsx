
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onAdminClick: () => void;
  profile: any;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick, profile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-slate-950/80 backdrop-blur-xl py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#about" onClick={closeMobileMenu} className="text-2xl font-extrabold tracking-tighter text-white">
          <span className="text-indigo-500">{profile.siteName.split('.')[0]}</span>.{profile.siteName.split('.')[1] || ''}
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#about" className="text-sm font-medium hover:text-indigo-400 transition-colors uppercase tracking-widest">About</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-indigo-400 transition-colors uppercase tracking-widest">Work</a>
          <a href="#contact" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/20">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 absolute top-full left-0 right-0 border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-6 text-center">
            <a href="#about" onClick={closeMobileMenu} className="text-lg font-medium hover:text-indigo-400">About</a>
            <a href="#portfolio" onClick={closeMobileMenu} className="text-lg font-medium hover:text-indigo-400">Work</a>
            <a href="#contact" onClick={closeMobileMenu} className="inline-block px-6 py-4 bg-indigo-600 rounded-2xl text-lg font-bold">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
