
import React, { useState } from 'react';
import { Category, CATEGORIES, VideoProject } from '../constants';

interface AdminDashboardProps {
  profile: any;
  setProfile: (profile: any) => void;
  videos: VideoProject[];
  setVideos: (videos: VideoProject[]) => void;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ profile, setProfile, videos, setVideos, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState<'profile' | 'videos' | 'socials' | 'save'>('profile');
  
  const [newVideo, setNewVideo] = useState<Partial<VideoProject>>({
    title: '',
    category: 'Reels',
    thumbnail: '',
    videoUrl: '',
    description: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'rahad123') setIsLoggedIn(true);
    else alert('ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন।');
  };

  const generateConstantsCode = () => {
    return `export const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)} as const;

export type Category = typeof CATEGORIES[number];

export interface VideoProject {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  videoUrl: string;
  description?: string;
}

export const PORTFOLIO_DATA: VideoProject[] = ${JSON.stringify(videos, null, 2)};

export const PROFILE_DETAILS = ${JSON.stringify(profile, null, 2)};`;
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-6 backdrop-blur-md">
        <div className="max-w-md w-full bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 text-center shadow-2xl">
          <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-600/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">এডিটর লগইন</h2>
          <p className="text-slate-400 mb-8">সবকিছু পরিবর্তন করার জন্য পাসওয়ার্ড দিন</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              autoFocus 
              type="password" 
              placeholder="পাসওয়ার্ড লিখুন..." 
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white text-center text-lg focus:ring-2 ring-indigo-500 focus:outline-none transition-all" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-600/20 transition-all">লগইন করুন</button>
            <button type="button" onClick={onClose} className="w-full text-slate-500 font-medium">ফিরে যান</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-slate-900 border-b md:border-b-0 md:border-r border-white/10 flex flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-black tracking-tighter mb-2"><span className="text-indigo-500">{profile.siteName}</span> এডিটর</h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">এখান থেকে সব চেঞ্জ করুন</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <button onClick={() => setTab('profile')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${tab === 'profile' ? 'bg-indigo-600 shadow-lg shadow-indigo-600/20 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            বেসিক প্রোফাইল
          </button>
          <button onClick={() => setTab('socials')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${tab === 'socials' ? 'bg-indigo-600 shadow-lg shadow-indigo-600/20 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.1 1.1" /></svg>
            লিঙ্ক ও সোশ্যাল
          </button>
          <button onClick={() => setTab('videos')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${tab === 'videos' ? 'bg-indigo-600 shadow-lg shadow-indigo-600/20 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z" /></svg>
            ভিডিও গ্যালারি
          </button>
          <button onClick={() => setTab('save')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${tab === 'save' ? 'bg-green-600 shadow-lg shadow-green-600/20 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            সব সেভ করুন
          </button>
        </nav>

        <div className="p-6 mt-auto">
          <button onClick={onClose} className="w-full py-3 border border-white/10 rounded-xl text-slate-400 font-bold hover:bg-white/5">এডিটর বন্ধ করুন</button>
        </div>
      </div>

      {/* Form Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-slate-950">
        <div className="max-w-2xl mx-auto">
          {tab === 'profile' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-3xl font-bold">প্রোফাইল সেটিংস</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">লোগো নাম (Navbar Logo)</label>
                  <input className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 ring-indigo-500 focus:outline-none" value={profile.siteName} onChange={(e) => setProfile({...profile, siteName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">আপনার পুরো নাম</label>
                  <input className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 ring-indigo-500 focus:outline-none" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">ট্যাগলাইন (Hero Tagline)</label>
                  <input className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 ring-indigo-500 focus:outline-none" value={profile.tagline} onChange={(e) => setProfile({...profile, tagline: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">বায়ো (Bio Description)</label>
                  <textarea rows={4} className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 ring-indigo-500 focus:outline-none" value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">প্রোফাইল ফটো URL</label>
                  <input className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 ring-indigo-500 focus:outline-none" value={profile.profilePhoto} onChange={(e) => setProfile({...profile, profilePhoto: e.target.value})} />
                </div>
              </div>
            </div>
          )}

          {tab === 'socials' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-3xl font-bold">লিঙ্ক ও সোশ্যাল মিডিয়া</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">ইমেইল</label>
                  <input className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">ফোন নাম্বার</label>
                  <input className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3" value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})} />
                </div>
                <div className="space-y-2 col-span-full">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">WhatsApp লিঙ্ক (wa.me/...)</label>
                  <input className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3" value={profile.whatsappUrl} onChange={(e) => setProfile({...profile, whatsappUrl: e.target.value})} />
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold">সোশ্যাল মিডিয়া লিঙ্কসমূহ</h3>
                {Object.keys(profile.socials).map((social) => (
                  <div key={social} className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">{social}</label>
                    <input 
                      className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3" 
                      value={profile.socials[social]} 
                      onChange={(e) => setProfile({
                        ...profile, 
                        socials: { ...profile.socials, [social]: e.target.value }
                      })} 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'videos' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-3xl font-bold">ভিডিও ম্যানেজমেন্ট</h2>
              <div className="bg-slate-900 p-6 rounded-3xl border border-white/5 space-y-4">
                <input placeholder="ভিডিওর নাম" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3" value={newVideo.title} onChange={e => setNewVideo({...newVideo, title: e.target.value})} />
                <div className="grid grid-cols-2 gap-4">
                  <select className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3" value={newVideo.category} onChange={e => setNewVideo({...newVideo, category: e.target.value as Category})}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input placeholder="থাম্বনেইল লিঙ্ক" className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3" value={newVideo.thumbnail} onChange={e => setNewVideo({...newVideo, thumbnail: e.target.value})} />
                </div>
                <input placeholder="ভিডিও এমবেড লিঙ্ক (YouTube Embed)" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3" value={newVideo.videoUrl} onChange={e => setNewVideo({...newVideo, videoUrl: e.target.value})} />
                <button onClick={() => {
                   if (!newVideo.title || !newVideo.videoUrl) return alert('নাম ও লিঙ্ক দিন');
                   setVideos([{ ...newVideo as VideoProject, id: Date.now().toString() }, ...videos]);
                   setNewVideo({ title: '', category: 'Reels', thumbnail: '', videoUrl: '', description: '' });
                }} className="w-full py-4 bg-indigo-600 rounded-xl font-bold">গ্যালারিতে যোগ করুন</button>
              </div>

              <div className="space-y-3">
                {videos.map(video => (
                  <div key={video.id} className="bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                      <img src={video.thumbnail} className="w-12 h-8 object-cover rounded shadow" />
                      <span className="font-bold text-sm truncate max-w-[150px]">{video.title}</span>
                    </div>
                    <button onClick={() => setVideos(videos.filter(v => v.id !== video.id))} className="text-red-500 font-bold text-xs uppercase">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'save' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 text-center">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-bold">সবাইকে দেখানোর জন্য সেভ করুন</h2>
              <p className="text-slate-400">নিচের কোডটি কপি করে GitHub-এর <span className="text-white font-mono">constants.tsx</span> ফাইলে পেস্ট করলেই ওয়েবসাইট লাইভ আপডেট হয়ে যাবে।</p>
              
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(generateConstantsCode());
                  alert('কোড কপি হয়েছে! এবার GitHub-এ পেস্ট করে দিন।');
                }}
                className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-black text-2xl shadow-xl shadow-indigo-600/30 transition-all"
              >
                কপি কোড (COPY CODE)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
