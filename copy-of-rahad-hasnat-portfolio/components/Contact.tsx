
import React from 'react';

interface ContactProps {
  profile: any;
}

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'facebook': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>;
    case 'instagram': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
    case 'linkedin': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.064zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
    case 'youtube': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>;
    default: return <span>{name[0].toUpperCase()}</span>;
  }
};

const Contact: React.FC<ContactProps> = ({ profile }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden text-center p-12 md:p-20 border border-white/10 shadow-2xl relative">
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Let's Create Something <span className="text-indigo-500">Viral</span></h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects or opportunities to elevate your content. Reach out directly!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group p-8 bg-slate-800/40 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all">
              <div className="w-14 h-14 bg-indigo-600/20 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-indigo-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Email Address</p>
              <a href={`mailto:${profile.email}`} className="text-xl font-medium hover:text-indigo-400 transition-colors break-all">
                {profile.email}
              </a>
            </div>

            <div className="group p-8 bg-slate-800/40 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all">
              <div className="w-14 h-14 bg-indigo-600/20 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-indigo-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Direct Call</p>
              <a href={`tel:${profile.phone}`} className="text-xl font-medium hover:text-indigo-400 transition-colors">
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5">
            <p className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-500">Connect Socially</p>
            <div className="flex justify-center gap-5">
              {Object.entries(profile.socials).map(([name, url]: [string, any]) => (
                <a 
                  key={name} 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-14 h-14 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-2xl flex items-center justify-center transition-all transform hover:-translate-y-1"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a 
          href={profile.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.161 1.44 4.881 1.441 5.432 0 9.851-4.419 9.854-9.853.001-2.632-1.026-5.105-2.895-6.974s-4.341-2.896-6.974-2.895c-5.437 0-9.854 4.415-9.856 9.853-.001 1.916.536 3.791 1.554 5.396l-1.02 3.722 3.817-1.001l.47.279zm11.382-4.608c-.312-.156-1.848-.912-2.134-1.017-.286-.104-.494-.156-.701.156-.207.312-.804 1.017-.986 1.226-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.549-.928-.827-1.554-1.849-1.736-2.161-.182-.312-.019-.481.137-.636.141-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.701-1.691-.961-2.313-.253-.606-.511-.524-.701-.534-.18-.009-.387-.011-.595-.011s-.545.078-.831.39c-.286.312-1.091 1.066-1.091 2.601 0 1.535 1.117 3.016 1.273 3.224.156.208 2.197 3.355 5.323 4.704.744.321 1.323.512 1.774.656.748.237 1.429.204 1.967.123.599-.091 1.848-.755 2.108-1.483.26-.728.26-1.353.182-1.483-.078-.13-.286-.208-.598-.364z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
