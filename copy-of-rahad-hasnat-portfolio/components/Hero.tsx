
import React from 'react';

interface HeroProps {
  profile: any;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
            <span className="text-indigo-400 text-sm font-bold tracking-wider uppercase">Available for freelance</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            I'm <span className="text-indigo-500">{profile.name}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl font-medium text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>
          
          <p className="text-lg text-slate-400 mb-10 max-w-xl">
            {profile.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/20 text-center">
              View My Work
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-2xl text-lg font-bold transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-indigo-500/30 p-2 overflow-hidden bg-slate-800 shadow-2xl">
              <img 
                src={profile.profilePhoto} 
                alt={profile.name} 
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
