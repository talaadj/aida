import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    clinic: '',
    patientName: '',
    dob: '',
    doctor: '',
    otherDrug: '',
    selectedDrugs: [] as string[]
  });

  const t = TRANSLATIONS[lang];

  if (!isOpen) return null;

  const handleDrugToggle = (drug: string) => {
    setFormData(prev => ({
      ...prev,
      selectedDrugs: prev.selectedDrugs.includes(drug)
        ? prev.selectedDrugs.filter(d => d !== drug)
        : [...prev.selectedDrugs, drug]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  // The Content Component (Reused for both Display and Print to ensure WYSIWYG)
  const ReferralFormContent = ({ isPrint = false }: { isPrint?: boolean }) => (
    <div className={`bg-white p-8 max-w-2xl mx-auto relative ${isPrint ? 'w-full max-w-none p-0' : 'border-2 border-slate-800'}`}>
      
      {/* Form Header */}
      <div className="flex justify-between items-start mb-8">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-black uppercase tracking-wider mb-2">{t.ui.referralTitle}</h1>
            <p className="text-sm font-semibold text-black max-w-sm leading-snug">{t.ui.referralSubtitle}</p>
          </div>
          <div className="text-right flex flex-col items-end">
            {/* Site Logo Style */}
            <div className="flex items-center gap-2 mb-1">
                <div className="bg-rose-600 text-white p-1.5 rounded-lg print:bg-rose-600 print:text-white -print-color-adjust:exact">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div className="leading-none text-left">
                  <h2 className="text-lg font-bold text-black tracking-tight">AllergoExpress</h2>
                  <span className="text-[10px] text-rose-600 font-bold tracking-wider uppercase block">IMMUNOLAB</span>
                </div>
            </div>
          </div>
      </div>

      {/* Patient Info Inputs */}
      <div className="space-y-5 mb-8">
          <div className="flex items-end gap-4">
              <label className="text-sm font-bold text-black min-w-[70px]">{t.ui.referralClinic}</label>
              {isPrint ? (
                 <div className="flex-1 border-b border-black px-2 py-1 font-medium text-black">{formData.clinic}</div>
              ) : (
                <>
                  <input 
                      list="clinic-list-print"
                      type="text" 
                      value={formData.clinic}
                      onChange={e => setFormData({...formData, clinic: e.target.value})}
                      className="flex-1 border-b border-black focus:border-rose-500 outline-none px-2 py-1 bg-transparent font-medium text-black"
                      placeholder={t.ui.referralClinicPlaceholder}
                  />
                  <datalist id="clinic-list-print">
                      {t.branches.map((branch, index) => (
                          <option key={index} value={branch.address} />
                      ))}
                  </datalist>
                </>
              )}
          </div>
          <div className="flex items-end gap-4">
              <label className="text-sm font-bold text-black min-w-[70px]">{t.ui.referralPatient}</label>
              {isPrint ? (
                 <div className="flex-1 border-b border-black px-2 py-1 font-medium text-black">{formData.patientName}</div>
              ) : (
                <input 
                    type="text" 
                    value={formData.patientName}
                    onChange={e => setFormData({...formData, patientName: e.target.value})}
                    className="flex-1 border-b border-black focus:border-rose-500 outline-none px-2 py-1 bg-transparent font-medium text-black"
                />
              )}
          </div>
          <div className="flex items-end gap-4">
              <label className="text-sm font-bold text-black min-w-[70px]">{t.ui.referralBirthDate}</label>
              {isPrint ? (
                 <div className="flex-1 border-b border-black px-2 py-1 font-medium text-black">{formData.dob}</div>
              ) : (
                <input 
                    type="text" 
                    value={formData.dob}
                    onChange={e => setFormData({...formData, dob: e.target.value})}
                    className="flex-1 border-b border-black focus:border-rose-500 outline-none px-2 py-1 bg-transparent font-medium text-black"
                />
              )}
          </div>
      </div>

      {/* Warning / Price */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 print:flex-row">
            <div className="bg-white border-2 border-red-500 p-3 rounded-lg flex-1 flex items-center justify-center print:border-red-500">
              <p className="text-red-600 font-bold text-xs uppercase text-center leading-tight print:text-red-600 print-color-adjust-exact">
                  {t.ui.referralFasting}
              </p>
            </div>
            <div className="bg-white border-2 border-rose-300 p-3 rounded-lg flex-1 flex items-center justify-center print:border-rose-300">
              <p className="text-rose-700 font-bold text-xs uppercase text-center leading-tight print:text-rose-700 print-color-adjust-exact">
                  {t.ui.referralPrice}
              </p>
            </div>
      </div>
      
      {/* Dashed Blue Box - Blood Sampling */}
      <div className="mb-8 border-2 border-dashed border-blue-400 p-4 text-center bg-blue-50/50 print:bg-transparent print:border-blue-400">
          <p className="text-blue-600 font-bold uppercase text-sm tracking-widest print:text-blue-600 print-color-adjust-exact">
              {t.ui.referralBloodSampling}
          </p>
      </div>

      {/* Drug List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-xs mb-8 print:grid-cols-2">
          {t.referralDrugs.map((drug, idx) => (
              <label key={idx} className="flex items-start gap-2 cursor-pointer group p-0.5 rounded">
                  <div className={`mt-0.5 w-4 h-4 border border-black rounded flex items-center justify-center flex-shrink-0 ${formData.selectedDrugs.includes(drug) ? 'bg-black' : 'bg-white'} print-color-adjust-exact`}>
                      {formData.selectedDrugs.includes(drug) && <span className="text-white text-[10px]">✓</span>}
                  </div>
                  {/* Hidden checkbox for logic in edit mode, visual div for print */}
                  {!isPrint && (
                    <input 
                      type="checkbox" 
                      checked={formData.selectedDrugs.includes(drug)}
                      onChange={() => handleDrugToggle(drug)}
                      className="hidden"
                    />
                  )}
                  <span className={`text-black leading-snug ${formData.selectedDrugs.includes(drug) ? 'font-bold' : ''}`}>
                      {drug}
                  </span>
              </label>
          ))}
          <div className="flex items-center gap-2 mt-4 col-span-1 md:col-span-2">
                <span className="font-bold text-black">{t.ui.referralOther}</span>
                {isPrint ? (
                   <div className="flex-1 border-b border-black px-2 py-0 text-black">{formData.otherDrug}</div>
                ) : (
                  <input 
                    type="text" 
                    value={formData.otherDrug}
                    onChange={e => setFormData({...formData, otherDrug: e.target.value})}
                    className="flex-1 border-b border-black outline-none px-2 py-0 bg-transparent text-black"
                  />
                )}
          </div>
      </div>

        {/* Results Text */}
      <div className="text-center mb-10">
          <p className="text-blue-600 font-extrabold text-xl uppercase print:text-blue-600 tracking-wide print-color-adjust-exact">
              {t.ui.referralResults}
          </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end mt-4 pt-4 border-t-2 border-black">
          <div className="flex items-end gap-2 w-1/2">
              <span className="text-sm font-bold text-black">{t.ui.referralDoctor}</span>
              {isPrint ? (
                 <div className="flex-1 border-b border-black text-black">{formData.doctor}</div>
              ) : (
                <input 
                  type="text" 
                  value={formData.doctor}
                  onChange={e => setFormData({...formData, doctor: e.target.value})}
                  className="flex-1 border-b border-black outline-none bg-transparent text-black"
                />
              )}
          </div>
          <div className="flex flex-col items-end gap-2 w-1/3">
              <div className="flex items-end gap-2 w-full">
                  <span className="text-sm font-bold text-black">{t.ui.referralDate}</span>
                  <div className="flex-1 border-b border-black text-center text-black font-medium">
                    {new Date().toLocaleDateString()}
                  </div>
              </div>
          </div>
      </div>
      
      {/* License */}
      <div className="mt-8 pt-2 text-center flex flex-col gap-1">
            <p className="text-[10px] text-black font-bold uppercase tracking-wide">
              {t.ui.referralLicense}
            </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Modal UI */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm print:hidden">
        <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
          
          {/* Header */}
          <div className="bg-slate-800 px-6 py-4 flex justify-between items-center flex-shrink-0">
            <h2 className="text-white font-semibold text-lg">{t.ui.btnGetReferral}</h2>
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Scrollable Content (Editing Mode) */}
          <div className="flex-1 overflow-y-auto p-8">
             <ReferralFormContent isPrint={false} />
          </div>

          {/* Actions */}
          <div className="bg-slate-50 p-6 flex justify-end gap-4 border-t border-slate-200">
              <button 
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium"
              >
                  {t.ui.btnCancel}
              </button>
              <button 
                  onClick={handlePrint}
                  className="px-6 py-2 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 shadow-md flex items-center gap-2"
              >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  {t.ui.btnPrint}
              </button>
          </div>
        </div>
      </div>

      {/* Hidden Print Container - visible only during print */}
      <div className="hidden print:block print:absolute print:top-0 print:left-0 print:w-full print:h-full print:z-[9999] print:bg-white">
         <ReferralFormContent isPrint={true} />
      </div>

      <style>{`
        @media print {
            body > *:not(.print\\:block) {
                display: none !important;
            }
            @page {
                margin: 1cm;
                size: A4;
            }
            /* Force background colors for chrome/safari */
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
        }
      `}</style>
    </>
  );
};