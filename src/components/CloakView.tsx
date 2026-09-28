import React, { useState } from 'react';
import { ShieldCheck, FileText, Check } from 'lucide-react';

interface CloakViewProps {
  onDeactivate: () => void;
}

export const CloakView: React.FC<CloakViewProps> = ({ onDeactivate }) => {
  const [docText, setDocText] = useState(
    'Assignment 3: AP World History - The Industrial Revolution\n\nSection 1: Mechanization and Urbanization\nDuring the late 18th century, Great Britain experienced profound socioeconomic transformation. The emergence of steam-powered machinery accelerated textile production and catalyzed massive demographic shifts from agrarian countryside to industrial centers such as Manchester and Birmingham...\n\nKey Concepts:\n- Steam Engine (James Watt)\n- Flying Shuttle (John Kay)\n- Enclosure Acts\n- Railway expansion and trade logistics'
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans">
      {/* Fake Google Docs Top Bar */}
      <header className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg shadow-xs">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-900">AP History Paper Notes</span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Check className="w-3 h-3 text-slate-400" /> Saved to Drive
              </span>
            </div>
            <div className="flex gap-3 text-xs text-slate-600 mt-0.5">
              <span className="cursor-pointer hover:text-slate-900">File</span>
              <span className="cursor-pointer hover:text-slate-900">Edit</span>
              <span className="cursor-pointer hover:text-slate-900">View</span>
              <span className="cursor-pointer hover:text-slate-900">Insert</span>
              <span className="cursor-pointer hover:text-slate-900">Format</span>
              <span className="cursor-pointer hover:text-slate-900">Tools</span>
            </div>
          </div>
        </div>

        {/* Exit Cloak button discreetly disguised */}
        <button
          onClick={onDeactivate}
          title="Exit Panic Cloak"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Exit Cloak (Esc)</span>
        </button>
      </header>

      {/* Fake Google Docs Document Canvas */}
      <main className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center bg-slate-200/70">
        <div className="w-full max-w-3xl bg-white shadow-md border border-slate-300 min-h-[800px] p-12 rounded-sm flex flex-col">
          <textarea
            value={docText}
            onChange={(e) => setDocText(e.target.value)}
            className="w-full flex-1 border-0 focus:outline-none text-slate-800 text-sm leading-relaxed resize-none font-serif"
            spellCheck={false}
          />
        </div>
      </main>
    </div>
  );
};
