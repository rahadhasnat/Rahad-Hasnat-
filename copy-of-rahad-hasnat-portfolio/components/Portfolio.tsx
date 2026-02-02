
import React, { useState } from 'react';
import { CATEGORIES, Category, VideoProject } from '../constants';

interface PortfolioProps {
  videos: VideoProject[];
  onVideoSelect: (video: VideoProject) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ videos, onVideoSelect }) => {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0]);

  const filteredProjects = videos.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
            <p className="text-slate-400 max-w-md text-lg">A curated selection of my favorite projects from various niches.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer bg-slate-900 border border-white/5"
              onClick={() => onVideoSelect(project)}
            >
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">{project.category}</span>
                <h3 className="text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{project.title}</h3>
                <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all delay-100">{project.description}</p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-dashed border-slate-800">
            <p className="text-slate-500 italic">No projects added in this category yet. Use the Admin Panel to add some!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
