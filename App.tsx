
import React, { useState, useEffect, useRef } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { LiveInterface } from './components/LiveInterface';
import { FeedbackModal } from './components/FeedbackModal';
import { ReferralModal } from './components/ReferralModal';
import { AppMode, GeoLocation, Language } from './types';
import { TRANSLATIONS } from './utils/translations';

function App() {
  const [mode, setMode] = useState<AppMode>(AppMode.CHAT);
  const [lang, setLang] = useState<Language>('ru');
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Search state for locations
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);

  // Map ref for scrolling
  const mapRef = useRef<HTMLDivElement>(null);

  // Using the Meta Test Number
  const WHATSAPP_NUMBER = "15551707116"; 
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Start chat')}`;

  const t = TRANSLATIONS[lang];

  // Initial setup
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => { console.warn("Location error:", error); }
      );
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTestDetails = (testName: string) => {
    setIsChatOpen(true);
  };

  const handleViewOnMap = (originalIndex: number) => {
    setSelectedBranchIndex(originalIndex);
    // Scroll map into view on mobile
    if (mapRef.current && window.innerWidth < 1024) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter branches
  const filteredBranches = t.branches.filter(b => 
    b.city.toLowerCase().includes(locationSearch.toLowerCase()) || 
    b.address.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* --- Live Mode Overlay --- */}
      {mode === AppMode.LIVE && (
        <div className="fixed inset-0 z-50 animate-fade-in">
          <LiveInterface onClose={() => setMode(AppMode.CHAT)} />
        </div>
      )}

      {/* --- Floating Chat Widget (Bottom Left) --- */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4 print:hidden">
        {/* Chat Window Popup */}
        {isChatOpen && (
           <div className="w-[90vw] sm:w-[400px] h-[500px] sm:h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-fade-in-up origin-bottom-left transition-all">
              {/* Header */}
              <div className="bg-rose-600 p-4 flex justify-between items-center text-white shadow-sm">
                 <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                    <div>
                       <h3 className="font-bold text-sm leading-tight">{t.ui.chatTitle}</h3>
                       <p className="text-[10px] text-rose-100 opacity-90">{t.ui.chatPower}</p>
                    </div>
                 </div>
                 <button 
                   onClick={() => setIsChatOpen(false)}
                   className="p-1.5 hover:bg-rose-700 rounded-lg transition-colors"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
              </div>
              {/* Chat Content */}
              <div className="flex-1 overflow-hidden relative">
                 <ChatInterface location={location} lang={lang} />
              </div>
           </div>
        )}

        {/* Toggle Button */}
        {!isChatOpen && (
           <button 
             onClick={() => setIsChatOpen(true)}
             className="w-14 h-14 bg-rose-600 text-white rounded-full shadow-lg shadow-rose-600/30 hover:bg-rose-700 hover:scale-110 transition-all flex items-center justify-center group"
             title="Open AI Assistant"
           >
              <div className="relative">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                 <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-rose-600"></span>
                 </span>
              </div>
           </button>
        )}
      </div>

      {/* --- Navbar --- */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 print:hidden ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-rose-600 text-white p-2 rounded-lg">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <div className="leading-none">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">{t.ui.title}</h1>
              <span className="text-xs text-rose-600 font-semibold tracking-wider uppercase">{t.ui.subtitle}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('services')} className="hover:text-rose-600 transition-colors">{t.ui.navTests}</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-rose-600 transition-colors">{t.ui.navAbout}</button>
            <button onClick={() => scrollToSection('locations')} className="hover:text-rose-600 transition-colors">{t.ui.navLocations}</button>
          </div>

          <div className="flex items-center gap-3">
             {/* Language Switcher */}
             <div className="flex items-center bg-slate-100 rounded-lg p-1">
                {(['ru', 'kk', 'en'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${lang === l ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
             </div>

             <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-green-600 transition-colors bg-white px-3 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="md:inline">WhatsApp</span>
             </a>
             <button
                onClick={() => setIsFeedbackOpen(true)}
                className="p-2 text-slate-500 hover:text-rose-600 transition-colors text-xs font-semibold"
             >
                {t.ui.support}
             </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[80vh] justify-center print:hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            {t.ui.onlineBadge}
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {t.ui.heroTitle} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
              {t.ui.heroSubtitle}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t.ui.heroDesc}
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
             <button 
               onClick={() => setMode(AppMode.LIVE)}
               className="px-8 py-4 bg-rose-600 text-white rounded-full font-semibold shadow-lg shadow-rose-600/30 hover:bg-rose-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
             >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                {t.ui.btnSpeak}
             </button>
             <button 
                onClick={() => setIsChatOpen(true)}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-colors shadow-sm"
             >
                {t.ui.btnAsk}
             </button>
             <button
                onClick={() => setIsReferralOpen(true)}
                className="px-8 py-4 bg-white text-rose-600 border border-rose-200 rounded-full font-semibold hover:bg-rose-50 transition-colors shadow-sm flex items-center gap-2"
             >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                {t.ui.btnGetReferral}
             </button>
             <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-50 text-green-700 border border-green-200 rounded-full font-semibold hover:bg-green-100 transition-colors shadow-sm flex items-center gap-2"
             >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                {t.ui.btnGetResults}
             </a>
          </div>

          <div className="flex items-center gap-6 pt-12 text-sm text-slate-500 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-400">
                    {i}
                 </div>
               ))}
            </div>
            <p>{t.ui.trustedBy}</p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="bg-white py-20 px-4 sm:px-6 lg:px-8 print:hidden">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.ui.servicesTitle}</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">{t.ui.servicesDesc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: 'Alex2 Multiplex', icon: '🧬', desc: 'Comprehensive allergy test. 300 allergens.' },
                 { title: 'Antibiotic Sensitivity', icon: '💊', desc: 'Precision microbiology for effective treatment.' },
                 { title: 'Hormone Panel', icon: '🧪', desc: 'Complete analysis of hormones.' }
               ].map((service, idx) => (
                 <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100 group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                       {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                       {service.desc}
                    </p>
                    <button 
                        onClick={() => handleTestDetails(service.title)}
                        className="text-rose-600 font-semibold text-sm hover:underline flex items-center gap-1"
                    >
                       {t.ui.btnDetails}
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.ui.aboutTitle}</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    {t.ui.aboutDesc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-rose-600 mb-1">15+</div>
                        <div className="text-sm text-slate-500">{t.ui.statExperience}</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-rose-600 mb-1">200k</div>
                        <div className="text-sm text-slate-500">{t.ui.statTests}</div>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-80 w-full rounded-2xl overflow-hidden relative shadow-lg">
                <img 
                    src="https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=1000" 
                    alt="Laboratory" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </section>

      {/* --- Locations Section --- */}
      <section id="locations" className="bg-white py-20 px-4 sm:px-6 lg:px-8 print:hidden">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.ui.locationsTitle}</h2>
               <p className="text-slate-600">{t.ui.locationsDesc}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row h-auto min-h-[800px] lg:h-[600px]">
                {/* Search and List */}
                <div className="h-[400px] lg:h-full lg:w-1/3 bg-slate-50 border-r border-slate-100 flex flex-col">
                    <div className="p-4 border-b border-slate-200 bg-white">
                        <div className="relative">
                            <input 
                                type="text"
                                placeholder={t.ui.searchPlaceholder}
                                value={locationSearch}
                                onChange={(e) => setLocationSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 outline-none text-sm transition-all"
                            />
                            <svg className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto">
                        {filteredBranches.length > 0 ? (
                            filteredBranches.map((branch, idx) => {
                                const originalIdx = t.branches.findIndex(b => b.address === branch.address);
                                return (
                                <div 
                                    key={idx}
                                    onClick={() => handleViewOnMap(originalIdx)}
                                    className={`p-4 border-b border-slate-100 cursor-pointer transition-colors hover:bg-white ${
                                        selectedBranchIndex === originalIdx
                                        ? 'bg-white border-l-4 border-l-rose-500' 
                                        : 'transparent border-l-4 border-l-transparent'
                                    }`}
                                >
                                    <h4 className="font-bold text-slate-900 mb-1">{branch.city}</h4>
                                    <p className="text-sm text-slate-600 mb-2">{branch.address}</p>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        {branch.phone}
                                    </div>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleViewOnMap(originalIdx);
                                        }}
                                        className="mt-3 text-xs text-rose-600 font-semibold hover:underline flex items-center gap-1 lg:hidden"
                                    >
                                        {t.ui.viewOnMap}
                                    </button>
                                </div>
                            )})
                        ) : (
                            <div className="p-8 text-center text-slate-400 text-sm">
                                {t.ui.noResults}
                            </div>
                        )}
                    </div>
                </div>

                {/* Map Display */}
                <div ref={mapRef} className="h-[400px] lg:h-full lg:w-2/3 bg-slate-200 relative">
                    <iframe 
                        src={t.branches[selectedBranchIndex]?.mapEmbedUrl || ""} 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy"
                        className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                    
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white max-w-sm hidden md:block animate-fade-in-up">
                        <h3 className="font-bold text-slate-900">{t.branches[selectedBranchIndex]?.city}</h3>
                        <p className="text-sm text-slate-600 mb-3">{t.branches[selectedBranchIndex]?.address}</p>
                        <a 
                            href={`tel:${t.branches[selectedBranchIndex]?.phone}`}
                            className="w-full block text-center bg-rose-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors"
                        >
                            {t.ui.callBranch}: {t.branches[selectedBranchIndex]?.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-auto print:hidden">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
               <h3 className="text-white font-bold text-lg mb-1">{t.ui.title}</h3>
               <p className="text-sm">{t.ui.subtitle}</p>
               <p className="text-xs text-slate-500 mt-2">{t.ui.referralLicense}</p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
               <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">{t.ui.navAbout}</button>
               <button onClick={() => setIsFeedbackOpen(true)} className="hover:text-white transition-colors">{t.ui.support}</button>
            </div>
            <div className="text-xs text-slate-600">
               © 2024 AllergoExpress. {t.ui.footerRights}
            </div>
         </div>
      </footer>

      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} lang={lang} />
      <ReferralModal isOpen={isReferralOpen} onClose={() => setIsReferralOpen(false)} lang={lang} />
    </div>
  );
}

export default App;
