
import React from 'react';

interface FooterProps {
  onAdminClick: () => void;
  profile: any;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick, profile }) => {
  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <p className="text-xl font-bold mb-2">
            <span className="text-indigo-500">{profile.siteName.split('.')[0]}</span>.{profile.siteName.split('.')[1] || ''}
          </p>
          <p className="text-slate-600 text-sm italic">{profile.footerTagline}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <a href="#about" className="text-sm text-slate-500 hover:text-white transition-colors">About</a>
          <a href="#portfolio" className="text-sm text-slate-500 hover:text-white transition-colors">Work</a>
          <a href="#contact" className="text-sm text-slate-500 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button 
            onClick={onAdminClick}
            className="mt-4 text-[10px] text-slate-800 hover:text-indigo-500 uppercase tracking-[4px] font-bold transition-all"
          >
            Admin Panel
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
