import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import AdminDashboard from './components/AdminDashboard';
import { VideoProject, PORTFOLIO_DATA, PROFILE_DETAILS } from './constants';

const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  // Load data from LocalStorage first, if not available use constants.tsx
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('rahad_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return PROFILE_DETAILS;
      }
    }
    return PROFILE_DETAILS;
  });

  const [videos, setVideos] = useState<VideoProject[]>(() => {
    const saved = localStorage.getItem('rahad_videos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return PORTFOLIO_DATA;
      }
    }
    return PORTFOLIO_DATA;
  });

  // Automatically save to local browser for instant preview
  useEffect(() => {
    localStorage.setItem('rahad_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('rahad_videos', JSON.stringify(videos));
  }, [videos]);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 bg-slate-950 text-white overflow-x-hidden">
      <Navbar onAdminClick={() => setIsAdminOpen(true)} profile={profile} />
      
      <main>
        <div id="about">
          <Hero profile={profile} />
        </div>
        
        <Portfolio 
          videos={videos} 
          onVideoSelect={(video) => setSelectedVideo(video)} 
        />
        
        <Contact profile={profile} />
      </main>

      <Footer onAdminClick={() => setIsAdminOpen(true)} profile={profile} />

      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}

      {isAdminOpen && (
        <AdminDashboard 
          profile={profile}
          setProfile={setProfile}
          videos={videos}
          setVideos={setVideos}
          onClose={() => setIsAdminOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
