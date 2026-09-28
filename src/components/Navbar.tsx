import React, { useState, useEffect } from 'react';
import { ShieldCheck, ShieldAlert, PlusCircle, CodeXml, ExternalLink, Eye, ChevronDown } from 'lucide-react';
import { CategoryFilter } from '../types';
import { DISGUISE_PRESETS, DisguiseType, applyDisguise, getCurrentDisguise, launchAboutBlank } from '../utils/camouflage';
import { LOGO_DATA_URL } from '../data/logoBase64';

interface NavbarProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  onOpenAddModal: () => void;
  onOpenJsonModal: () => void;
  onToggleCloak: () => void;
  isCloaked: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenAddModal,
  onOpenJsonModal,
  onToggleCloak,
  isCloaked,
}) => {
  const categories: CategoryFilter[] = ['All', 'Strategy', 'Action', 'Arcade', 'Favorites'];
  const [currentDisguise, setCurrentDisguise] = useState<DisguiseType>(getCurrentDisguise());
  const [isDisguiseMenuOpen, setIsDisguiseMenuOpen] = useState(false);

  useEffect(() => {
    applyDisguise(currentDisguise);
  }, [currentDisguise]);

  const handleSelectDisguise = (type: DisguiseType) => {
    setCurrentDisguise(type);
    applyDisguise(type);
    setIsDisguiseMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('All');
            }}
            className="flex items-center gap-2.5 text-xl font-black tracking-tight text-white hover:text-sky-400 transition-colors whitespace-nowrap"
          >
            <img
              src={LOGO_DATA_URL}
              alt="gam- 2 Logo"
              className="w-8 h-8 rounded-lg object-cover ring-1 ring-cyan-500/40 shadow-sm shadow-cyan-500/30"
            />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent font-extrabold tracking-wide">
              gam- 2
            </span>
          </a>
        </div>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`whitespace-nowrap transition-colors py-1 relative ${
                  isActive
                    ? 'text-sky-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Anti-Block & Primary actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* About:Blank Anti-Block Launcher */}
          <button
            onClick={() => launchAboutBlank(currentDisguise)}
            title="Open in an unblocked about:blank cloaked tab (bypasses Securly/GoGuardian URL inspection)"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/50 hover:border-emerald-400 transition-all shadow-xs whitespace-nowrap"
          >
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Anti-Block Window</span>
            <span className="sm:hidden">Anti-Block</span>
          </button>

          {/* Disguise / Tab Camouflage Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDisguiseMenuOpen(!isDisguiseMenuOpen)}
              title="Change browser tab disguise title & favicon"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
            >
              <Eye className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden lg:inline">Disguise</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isDisguiseMenuOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Tab Disguise Presets
                </div>
                {DISGUISE_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectDisguise(p.id)}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors ${
                      currentDisguise === p.id ? 'text-sky-400 font-semibold bg-slate-800/60' : 'text-slate-300'
                    }`}
                  >
                    <span>{p.label}</span>
                    {currentDisguise === p.id && <span className="text-[10px] text-sky-400 font-bold">ACTIVE</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onOpenJsonModal}
            title="Inspect / Edit games.json catalog"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
          >
            <CodeXml className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline">JSON</span>
          </button>

          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
          >
            <PlusCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Add Game</span>
          </button>

          {/* Panic Cloak */}
          <button
            onClick={onToggleCloak}
            title="Instant Fake Notes Camouflage (Esc)"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              isCloaked
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-sm'
                : 'bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">{isCloaked ? 'Cloak ON' : 'Panic (Esc)'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
