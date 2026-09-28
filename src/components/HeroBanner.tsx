import React from 'react';
import { Play, Sparkles, Shuffle, Star } from 'lucide-react';
import { Game } from '../types';
import { GameThumbnail } from './GameThumbnails';

interface HeroBannerProps {
  featuredGame: Game | null;
  onPlayGame: (game: Game) => void;
  onRandomGame: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  featuredGame,
  onPlayGame,
  onRandomGame,
}) => {
  if (!featuredGame) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-6 md:p-8 mb-10 shadow-2xl">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          {/* Metadata line (Zero-Pill discipline: unboxed text with separators) */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1 text-sky-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Featured Spotlight
            </span>
            <span aria-hidden="true">·</span>
            <span>{featuredGame.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-amber-400 font-mono">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              {featuredGame.rating.toFixed(1)}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{featuredGame.plays.toLocaleString()} plays</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance leading-tight">
            {featuredGame.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            {featuredGame.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onPlayGame(featuredGame)}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-all shadow-lg shadow-sky-500/25 active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Play Now</span>
            </button>

            <button
              onClick={onRandomGame}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-850 hover:text-white border border-slate-700/80 rounded-xl transition-colors"
            >
              <Shuffle className="w-4 h-4 text-indigo-400" />
              <span>Random Game</span>
            </button>
          </div>
        </div>

        {/* Right Thumbnail Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onClick={() => onPlayGame(featuredGame)}
            className="group relative w-full max-w-sm aspect-4/3 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 cursor-pointer shadow-xl transition-transform hover:-translate-y-1"
          >
            <GameThumbnail
              id={featuredGame.id}
              category={featuredGame.category}
              title={featuredGame.title}
            />
            <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
              <div className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
