
import React, { useEffect } from 'react';
import { VideoProject } from '../constants';

interface VideoModalProps {
  video: VideoProject;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Video Player Container */}
        <div className="aspect-video bg-black">
          <iframe 
            src={video.videoUrl} 
            className="w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title={video.title}
          ></iframe>
        </div>

        {/* Info Bar */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-lg uppercase tracking-widest mb-3">
              {video.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{video.title}</h2>
            {video.description && (
                <p className="text-slate-400 mt-2 text-lg">{video.description}</p>
            )}
          </div>
          
          <div className="flex shrink-0 gap-4">
            <a 
              href="#contact" 
              onClick={onClose}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
