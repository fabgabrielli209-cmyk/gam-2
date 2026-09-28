import React from 'react';
import { Gamepad2, ShieldAlert, PlusCircle, CodeXml } from 'lucide-react';
import { CategoryFilter } from '../types';

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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory('All');
          }}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-sky-400 transition-colors whitespace-nowrap"
        >
          <Gamepad2 className="w-5 h-5 text-sky-400 shrink-0" />
          <span>Nexus Arcade</span>
        </a>

        {/* Zone 2: 4-6 text navigation links */}
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

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenJsonModal}
            title="Inspect / Edit games.json catalog"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
          >
            <CodeXml className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">JSON</span>
          </button>

          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
          >
            <PlusCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Add Game</span>
          </button>

          <button
            onClick={onToggleCloak}
            title="Emergency Cloak / Tab Disguise (Esc)"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              isCloaked
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-sm'
                : 'bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">{isCloaked ? 'Cloak ON' : 'Panic Cloak'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
