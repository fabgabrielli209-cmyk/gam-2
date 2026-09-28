import React from 'react';

interface ThumbnailProps {
  id: string;
  category: string;
  title: string;
}

export const GameThumbnail: React.FC<ThumbnailProps> = ({ id, category }) => {
  switch (id) {
    case 'retro-snake':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-emerald-500/20 via-transparent to-transparent" />
          <svg className="w-24 h-24 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="30" width="16" height="16" rx="4" fill="#10b981" />
            <rect x="38" y="30" width="16" height="16" rx="4" fill="#10b981" />
            <rect x="56" y="30" width="16" height="16" rx="4" fill="#34d399" />
            <rect x="56" y="48" width="16" height="16" rx="4" fill="#34d399" />
            <rect x="56" y="66" width="16" height="16" rx="4" fill="#6ee7b7" />
            <circle cx="26" cy="66" r="8" fill="#ef4444" className="animate-pulse" />
          </svg>
        </div>
      );
    case 'block-master-tetris':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-cyan-500/20 via-transparent to-transparent" />
          <svg className="w-24 h-24 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]" viewBox="0 0 100 100" fill="none">
            {/* T-piece */}
            <rect x="25" y="25" width="15" height="15" rx="3" fill="#a855f7" />
            <rect x="42" y="25" width="15" height="15" rx="3" fill="#a855f7" />
            <rect x="59" y="25" width="15" height="15" rx="3" fill="#a855f7" />
            <rect x="42" y="42" width="15" height="15" rx="3" fill="#c084fc" />
            {/* I-piece */}
            <rect x="25" y="62" width="15" height="15" rx="3" fill="#06b6d4" />
            <rect x="42" y="62" width="15" height="15" rx="3" fill="#06b6d4" />
            <rect x="59" y="62" width="15" height="15" rx="3" fill="#06b6d4" />
            <rect x="76" y="62" width="15" height="15" rx="3" fill="#22d3ee" />
          </svg>
        </div>
      );
    case 'game-2048':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-amber-500/20 via-transparent to-transparent" />
          <div className="grid grid-cols-2 gap-2 p-3 bg-slate-800/80 rounded-xl border border-slate-700 shadow-xl">
            <div className="w-10 h-10 rounded-lg bg-amber-500 text-white font-extrabold flex items-center justify-center text-xs shadow-md">1024</div>
            <div className="w-10 h-10 rounded-lg bg-rose-500 text-white font-black flex items-center justify-center text-xs shadow-lg animate-pulse">2048</div>
            <div className="w-10 h-10 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-xs">256</div>
            <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">512</div>
          </div>
        </div>
      );
    case 'flappy-wings':
      return (
        <div className="w-full h-full bg-sky-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-sky-950 to-emerald-950" />
          <svg className="w-24 h-24 drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]" viewBox="0 0 100 100" fill="none">
            {/* Pipe */}
            <rect x="70" y="0" width="18" height="35" rx="2" fill="#22c55e" />
            <rect x="68" y="30" width="22" height="8" rx="2" fill="#16a34a" />
            <rect x="70" y="65" width="18" height="35" rx="2" fill="#22c55e" />
            <rect x="68" y="62" width="22" height="8" rx="2" fill="#16a34a" />
            {/* Flappy bird */}
            <circle cx="35" cy="50" r="16" fill="#facc15" />
            <circle cx="42" cy="46" r="4" fill="#ffffff" />
            <circle cx="44" cy="46" r="2" fill="#0f172a" />
            <polygon points="46,50 56,53 46,56" fill="#f97316" />
            <ellipse cx="28" cy="52" rx="7" ry="5" fill="#eab308" />
          </svg>
        </div>
      );
    case 'cyber-breakout':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-indigo-500/20 via-transparent to-transparent" />
          <svg className="w-24 h-24 drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]" viewBox="0 0 100 100" fill="none">
            {/* Bricks */}
            <rect x="15" y="20" width="18" height="8" rx="2" fill="#ef4444" />
            <rect x="36" y="20" width="18" height="8" rx="2" fill="#f97316" />
            <rect x="57" y="20" width="18" height="8" rx="2" fill="#eab308" />
            <rect x="15" y="32" width="18" height="8" rx="2" fill="#22c55e" />
            <rect x="36" y="32" width="18" height="8" rx="2" fill="#06b6d4" />
            <rect x="57" y="32" width="18" height="8" rx="2" fill="#8b5cf6" />
            {/* Ball */}
            <circle cx="45" cy="55" r="5" fill="#ffffff" />
            {/* Paddle */}
            <rect x="30" y="75" width="40" height="8" rx="4" fill="#38bdf8" />
          </svg>
        </div>
      );
    case 'star-defender':
      return (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-violet-600/25 via-transparent to-transparent" />
          <svg className="w-24 h-24 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]" viewBox="0 0 100 100" fill="none">
            {/* Space Alien */}
            <rect x="30" y="25" width="40" height="24" rx="6" fill="#a855f7" />
            <rect x="38" y="31" width="6" height="6" rx="1" fill="#ffffff" />
            <rect x="56" y="31" width="6" height="6" rx="1" fill="#ffffff" />
            <rect x="25" y="32" width="5" height="12" rx="2" fill="#c084fc" />
            <rect x="70" y="32" width="5" height="12" rx="2" fill="#c084fc" />
            {/* Laser */}
            <rect x="48" y="55" width="4" height="12" rx="2" fill="#facc15" />
            {/* Cannon */}
            <polygon points="44,82 50,70 56,82" fill="#38bdf8" />
            <rect x="36" y="82" width="28" height="6" rx="2" fill="#0284c7" />
          </svg>
        </div>
      );
    case 'pong-legends':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-sky-500/20 via-transparent to-transparent" />
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
            <line x1="50" y1="10" x2="50" y2="90" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            <rect x="15" y="30" width="6" height="35" rx="3" fill="#38bdf8" />
            <rect x="79" y="45" width="6" height="35" rx="3" fill="#f43f5e" />
            <circle cx="42" cy="48" r="5" fill="#ffffff" className="animate-pulse" />
          </svg>
        </div>
      );
    case 'desert-dino-run':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-amber-500/20 via-transparent to-transparent" />
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
            {/* Ground */}
            <line x1="10" y1="75" x2="90" y2="75" stroke="#475569" strokeWidth="3" />
            {/* Dino */}
            <rect x="25" y="38" width="20" height="32" rx="4" fill="#38bdf8" />
            <rect x="38" y="42" width="3" height="3" fill="#0f172a" />
            {/* Cactus */}
            <rect x="65" y="48" width="8" height="26" rx="3" fill="#22c55e" />
            <rect x="58" y="55" width="7" height="4" rx="2" fill="#22c55e" />
            <rect x="73" y="52" width="7" height="4" rx="2" fill="#22c55e" />
          </svg>
        </div>
      );
    case 'minesweeper-classic':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-rose-500/20 via-transparent to-transparent" />
          <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-800 rounded-lg border border-slate-700 shadow-lg">
            <div className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-sky-400">1</div>
            <div className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-emerald-400">2</div>
            <div className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs">🚩</div>
            <div className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-rose-400">3</div>
            <div className="w-7 h-7 bg-rose-900/60 border border-rose-500/50 rounded flex items-center justify-center text-xs">💣</div>
            <div className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-indigo-400">1</div>
          </div>
        </div>
      );
    case 'highway-rush-2d':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-cyan-500/20 via-transparent to-transparent" />
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
            {/* Road */}
            <rect x="20" y="10" width="60" height="80" rx="4" fill="#1e293b" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6" />
            {/* Enemy Car */}
            <rect x="30" y="20" width="14" height="24" rx="3" fill="#ef4444" />
            {/* Player Car */}
            <rect x="56" y="55" width="14" height="26" rx="3" fill="#0284c7" />
            <circle cx="37" cy="68" r="4" fill="#eab308" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-indigo-500/20 via-transparent to-transparent" />
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-3xl">🎮</span>
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{category}</span>
          </div>
        </div>
      );
  }
};
