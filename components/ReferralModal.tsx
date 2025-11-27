import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang];

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto print:absolute print:inset-0 print:bg-white print:p-0 print:z-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh] print:shadow-none print:max-h-none print:w-full print:max-w-none print:m-0 print:rounded-none">
        
        {/* Header - Hide on Print */}
        <div className="bg-rose-600 px-6 py-4 flex justify-between items-center flex-shrink-0 print:hidden">
          <h2 className="text-white font-semibold text-lg">
            {t.ui.btnGetReferral}
          </h2>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 bg-slate-50 flex-1 print:p-0 print:bg-white print:overflow-visible">
            <div className="bg-white p-8 shadow-sm border border-slate-200 mx-auto max-w-[210mm] min-h-[297mm] print:shadow-none print:border-none print:w-full print:max-w-none print:min-h-0">
                {/* Form Header */}
                <div className="text-center border-b-2 border-rose-600 pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-rose-600 uppercase tracking-wide">{t.ui.referralTitle}</h1>
                    <p className="text-sm text-slate-600 mt-1 font-medium">{t.ui.referralSubtitle}</p>
                </div>

                {/* Patient Info */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{t.ui.referralPatient}</label>
                        <div className="border-b border-slate-300 h-8 w-full"></div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{t.ui.referralBirthDate}</label>
                         <div className="border-b border-slate-300 h-8 w-full"></div>
                    </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{t.ui.referralDoctor}</label>
                        <div className="border-b border-slate-300 h-8 w-full"></div>
                    </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{t.ui.referralDate}</label>
                        <div className="border-b border-slate-300 h-8 w-full"></div>
                    </div>
                    <div className="col-span-2">
                         <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{t.ui.referralClinic}</label>
                         <div className="border-b border-slate-300 h-8 w-full"></div>
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-rose-50 border border-rose-100 p-4 rounded-lg mb-6 print:border-slate-200 print:bg-white">
                     <p className="text-sm font-bold text-rose-700 mb-1 print:text-black">⚠️ {t.ui.referralFasting}</p>
                </div>

                {/* Drug List */}
                <div className="mb-6">
                    <h3 className="font-bold text-slate-800 mb-3 border-b border-slate-200 pb-1">{t.chips.find(c => c.id === 'list')?.label || 'Drug List'}</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        {t.referralDrugs.map((drug, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                                <div className="w-4 h-4 border border-slate-300 rounded mt-0.5 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-tight">{drug}</span>
                            </div>
                        ))}
                         <div className="flex items-center gap-2 col-span-2 mt-2 pt-2 border-t border-slate-100">
                             <span className="text-slate-700 font-medium">{t.ui.referralOther}:</span>
                             <div className="border-b border-slate-300 h-6 flex-1"></div>
                         </div>
                    </div>
                </div>

                 {/* Pricing & Footer */}
                 <div className="mt-8 pt-4 border-t-2 border-slate-100">
                    <div className="flex justify-between items-end">
                        <div className="text-xs text-slate-500 max-w-[60%]">
                             <p className="font-bold text-slate-700">{t.ui.referralResults}</p>
                             <p>{t.ui.referralBloodSampling}</p>
                             <p className="mt-2 opacity-75">{t.ui.referralLicense}</p>
                        </div>
                        <div className="text-right">
                             <p className="text-lg font-bold text-rose-600">{t.ui.referralPrice}</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* Footer Actions - Hide on Print */}
        <div className="bg-white p-4 border-t border-slate-200 flex justify-end gap-3 flex-shrink-0 print:hidden">
             <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {t.ui.btnCancel}
            </button>
            <button
                onClick={handlePrint}
                className="px-4 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors shadow-sm flex items-center gap-2"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                {t.ui.btnPrint}
            </button>
        </div>
      </div>
    </div>
  );
};
