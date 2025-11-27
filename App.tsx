import React, { useState } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { LiveInterface } from './components/LiveInterface';
import { FeedbackModal } from './components/FeedbackModal';
import { ReferralModal } from './components/ReferralModal';
import { AppMode, Language } from './types';
import { TRANSLATIONS } from './utils/translations';

const WHATSAPP_NUMBER = "15551707116"; 

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.CHAT);
  const [lang, setLang] = useState<Language>('ru');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];

  const handleLiveStart = () => setMode(AppMode.LIVE);
  const handleLiveEnd = () => setMode(AppMode.CHAT);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-rose-600 text-white p-2 rounded-lg">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <div className="leading-none">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">{t.ui.title}</h1>
              <span className="text-xs text-rose-600 font-bold tracking-wider uppercase block">{t.ui.subtitle}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#tests" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">{t.ui.navTests}</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">{t.ui.navAbout}</a>
            <a href="#locations" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">{t.ui.navLocations}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex bg-slate-100 rounded-lg p-1">
              {(['ru', 'kk', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                    lang === l ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-50 text-green-600 px-3 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp
            </a>

            <button 
              onClick={() => setIsFeedbackOpen(true)}
              className="text-sm font-medium text-slate-500 hover:text-rose-600 transition-colors"
            >
              {t.ui.support}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-rose-50 to-white py-16 lg:py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 backdrop-blur-3xl -skew-x-12 transform translate-x-20" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wide">
                  <div className="w-2 h-2 bg-rose-600 rounded-full animate-pulse" />
                  {t.ui.onlineBadge}
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  {t.ui.heroTitle} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
                    {t.ui.heroSubtitle}
                  </span>
                </h1>
                
                <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                  {t.ui.heroDesc}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setIsChatOpen(true)}
                    className="px-8 py-4 bg-rose-600 text-white rounded-full font-bold shadow-lg hover:bg-rose-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    {t.ui.btnAsk}
                  </button>
                  <button 
                    onClick={() => setIsReferralOpen(true)}
                    className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    {t.ui.btnGetReferral}
                  </button>
                   <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-green-50 text-green-700 border border-green-200 rounded-full font-bold shadow-sm hover:bg-green-100 transition-all flex items-center gap-2"
                  >
                    {t.ui.btnGetResults}
                  </a>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">88-95%</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{t.ui.trustedBy}</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div>
                    <p className="text-2xl font-bold text-slate-900">200k+</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{t.ui.statTests}</p>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                 {/* Floating Abstract Shapes */}
                 <div className="absolute top-0 right-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
                 <div className="absolute top-0 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
                 <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
                 
                 {/* 3D-like Card */}
                 <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Alex2 Multiplex</h3>
                            <p className="text-xs text-slate-500">Allergy Explorer</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 bg-slate-100 rounded-full w-3/4" />
                        <div className="h-2 bg-slate-100 rounded-full w-full" />
                        <div className="h-2 bg-slate-100 rounded-full w-5/6" />
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                        <p className="text-sm text-slate-600">
                            Comprehensive analysis of <span className="font-bold text-rose-600">295+ allergens</span>.
                            Molecular precision for better treatment.
                        </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="tests" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.ui.servicesTitle}</h2>
              <p className="text-slate-600">{t.ui.servicesDesc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🧬', title: 'IgE Anesthetics', desc: 'Articaine, Lidocaine, Mepivacaine...' },
                { icon: '💊', title: 'IgE Antibiotics', desc: 'Penicillin, Cephalosporins, Macrolides...' },
                { icon: '🦠', title: 'IgE NSAIDs', desc: 'Aspirin, Ibuprofen, Paracetamol...' }
              ].map((service, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                  <button 
                    onClick={() => setIsChatOpen(true)}
                    className="text-rose-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {t.ui.btnDetails} <span className="text-lg">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.ui.aboutTitle}</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            {t.ui.aboutDesc}
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="text-4xl font-bold text-rose-600 mb-2">15+</h4>
                                <p className="text-sm font-medium text-slate-500 uppercase">{t.ui.statExperience}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="text-4xl font-bold text-rose-600 mb-2">200k</h4>
                                <p className="text-sm font-medium text-slate-500 uppercase">{t.ui.statTests}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-80 w-full rounded-2xl overflow-hidden relative shadow-lg bg-slate-200 flex items-center justify-center">
                        {/* Robust Placeholder instead of potentially broken image */}
                        <div className="bg-gradient-to-br from-rose-100 to-purple-100 w-full h-full flex flex-col items-center justify-center text-rose-300">
                             <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                             <span className="font-bold text-xl uppercase tracking-widest opacity-50">Laboratory</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto min-h-[800px] lg:h-[600px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.ui.locationsTitle}</h2>
                    <p className="text-slate-600">{t.ui.locationsDesc}</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row h-full">
                    {/* List */}
                    <div className="w-full lg:w-1/3 border-r border-slate-100 flex flex-col h-[400px] lg:h-full">
                        <div className="p-4 border-b border-slate-100 bg-slate-50">
                            <input 
                                type="text" 
                                placeholder={t.ui.searchPlaceholder}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none text-sm"
                            />
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {t.branches.map((branch, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => setSelectedBranch(branch.mapEmbedUrl)}
                                    className="p-4 border-b border-slate-100 hover:bg-rose-50 cursor-pointer transition-colors group"
                                >
                                    <h4 className="font-bold text-slate-800 group-hover:text-rose-700">{branch.address}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{branch.city}</p>
                                    <div className="flex gap-2 mt-3">
                                        <button className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600 group-hover:border-rose-200 group-hover:text-rose-600">
                                            {t.ui.viewOnMap}
                                        </button>
                                        <a href={`tel:${branch.phone}`} className="text-xs bg-rose-600 text-white px-2 py-1 rounded hover:bg-rose-700">
                                            {t.ui.callBranch}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Map */}
                    <div className="w-full lg:w-2/3 bg-slate-100 h-[400px] lg:h-full">
                        <iframe 
                            src={selectedBranch || t.branches[0].mapEmbedUrl}
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-rose-600 text-white p-1.5 rounded">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">AllergoExpress</span>
                    </div>
                    <p className="text-sm max-w-xs">
                        Advanced immunology laboratory specializing in drug allergy diagnostics.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Contacts</h4>
                    <ul className="space-y-2 text-sm">
                        <li>+7 707 566 8899</li>
                        <li>Almaty, Kazakhstan</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#tests" className="hover:text-white">Tests</a></li>
                        <li><a href="#about" className="hover:text-white">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs">© 2025 AllergoExpress Immunolab. {t.ui.footerRights}</p>
                <p className="text-xs text-slate-600">{t.ui.referralLicense}</p>
            </div>
        </div>
      </footer>

      {/* Chat Floating Button (Bottom-Left) */}
      <button
        onClick={toggleChat}
        className="fixed left-6 bottom-6 z-40 w-14 h-14 bg-rose-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-rose-700 hover:scale-110 transition-all duration-300 group"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        
        {/* Tooltip */}
        <div className="absolute left-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {t.ui.btnAsk}
        </div>
      </button>

      {/* Chat Widget Modal */}
      {isChatOpen && (
        <div className="fixed left-6 bottom-24 z-40 w-[90vw] md:w-[400px] h-[60vh] md:h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-fade-in-up">
            {/* Chat Header */}
            <div className="bg-slate-900 px-4 py-3 flex justify-between items-center flex-shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm">{t.ui.chatTitle}</span>
                </div>
                <div className="flex items-center gap-2">
                    {/* Toggle Mode */}
                    <button 
                        onClick={mode === AppMode.CHAT ? handleLiveStart : handleLiveEnd}
                        className={`p-1.5 rounded-lg transition-colors ${mode === AppMode.LIVE ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                        title={t.ui.btnSpeak}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    </button>
                    <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 relative overflow-hidden">
                {mode === AppMode.CHAT ? (
                    <ChatInterface location={null} lang={lang} />
                ) : (
                    <LiveInterface onClose={handleLiveEnd} />
                )}
            </div>
        </div>
      )}

      {/* Other Modals */}
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} lang={lang} />
      <ReferralModal isOpen={isReferralOpen} onClose={() => setIsReferralOpen(false)} lang={lang} />
    </div>
  );
};

export default App;