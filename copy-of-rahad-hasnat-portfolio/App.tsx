
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
  
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('rahad_profile');
    return saved ? JSON.parse(saved) : PROFILE_DETAILS;
  });

  const [videos, setVideos] = useState<VideoProject[]>(() => {
    const saved = localStorage.getItem('rahad_videos');
    return saved ? JSON.parse(saved) : PORTFOLIO_DATA;
  });

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
