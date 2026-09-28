import React from 'react';
import { Star, Heart, Play } from 'lucide-react';
import { Game } from '../types';
import { GameThumbnail } from './GameThumbnails';

interface GameCardProps {
  game: Game;
  isFavorite: boolean;
  onToggleFavorite: (gameId: string) => void;
  onPlay: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  isFavorite,
  onToggleFavorite,
  onPlay,
}) => {
  return (
    <div
      onClick={() => onPlay(game)}
      className="group flex flex-col bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/60"
    >
      {/* Thumbnail Area */}
      <div className="relative aspect-4/3 w-full bg-slate-950 overflow-hidden border-b border-slate-800/80">
        <GameThumbnail id={game.id} category={game.category} title={game.title} />

        {/* Favorite button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(game.id);
          }}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-lg backdrop-blur-md transition-all ${
            isFavorite
              ? 'bg-rose-500 text-white shadow-md'
              : 'bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-900/80'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        {/* Badge tag if any */}
        {game.badge && (
          <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-slate-950/80 text-sky-400 border border-slate-700/60 backdrop-blur-md">
            {game.badge}
          </div>
        )}

        {/* Play hover overlay */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Details Area */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Unboxed Metadata (Zero-Pill rule: clean inline text separated by dots) */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="font-medium text-slate-300">{game.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 font-mono text-amber-400">
            <Star className="w-3 h-3 fill-amber-400" />
            {game.rating.toFixed(1)}
          </span>
          <span aria-hidden="true">·</span>
          <span className="font-mono tabular-nums text-slate-500">
            {game.plays >= 1000 ? `${(game.plays / 1000).toFixed(1)}k` : game.plays} plays
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white group-hover:text-sky-400 transition-colors line-clamp-1">
          {game.title}
        </h3>

        {/* Brief description */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {game.description}
        </p>

        {/* Bottom tags */}
        <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/60">
          <span className="truncate max-w-[150px]">
            {game.tags.slice(0, 2).join(' · ')}
          </span>
          <span className="text-sky-400 font-medium group-hover:underline">Play Now &rarr;</span>
        </div>
      </div>
    </div>
  );
};
