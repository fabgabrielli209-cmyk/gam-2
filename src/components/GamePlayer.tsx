import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Maximize2,
  Minimize2,
  RotateCcw,
  ExternalLink,
  Heart,
  Share2,
  Tv,
  Keyboard,
  ThumbsUp,
  Check,
} from 'lucide-react';
import { Game } from '../types';
import { GameCard } from './GameCard';

interface GamePlayerProps {
  game: Game;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  allGames: Game[];
  onSelectGame: (game: Game) => void;
  favorites: string[];
}

export const GamePlayer: React.FC<GamePlayerProps> = ({
  game,
  onBack,
  isFavorite,
  onToggleFavorite,
  allGames,
  onSelectGame,
  favorites,
}) => {
  const [isTheater, setIsTheater] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(Math.floor(game.plays * 0.42));
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch((err) => {
        console.error('Fullscreen request error:', err);
      });
    } else {
      document.exitFullscreen?.().catch((err) => {
        console.error('Exit fullscreen error:', err);
      });
    }
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  const handleOpenNewTab = () => {
    // Open game in about:blank cloaked tab
    const win = window.open('about:blank', '_blank');
    if (win) {
      win.document.title = 'Google Docs';
      const iframe = win.document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.position = 'fixed';
      iframe.style.top = '0';
      iframe.style.left = '0';
      const resolvedUrl = new URL(game.iframeUrl, window.location.href).href;
      iframe.src = resolvedUrl;
      iframe.allow = 'autoplay; fullscreen; gamepad; focus-without-user-activation *';
      win.document.body.style.margin = '0';
      win.document.body.style.padding = '0';
      win.document.body.style.overflow = 'hidden';
      win.document.body.appendChild(iframe);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setHasLiked(true);
      setLikesCount((prev) => prev + 1);
    } else {
      setHasLiked(false);
      setLikesCount((prev) => prev - 1);
    }
  };

  const relatedGames = allGames
    .filter((g) => g.id !== game.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-200">
      {/* Navigation & Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="text-white font-semibold">{game.title}</span>
          <span aria-hidden="true">·</span>
          <span>{game.category}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono tabular-nums">{game.plays.toLocaleString()} plays</span>
        </div>
      </div>

      {/* Main Iframe Player Container */}
      <div
        ref={containerRef}
        className={`relative flex flex-col bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-300 ${
          isTheater ? 'w-full' : 'max-w-5xl mx-auto w-full'
        } ${isFullscreen ? 'h-screen rounded-none border-0' : ''}`}
      >
        {/* Player Toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-300">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white font-semibold">{game.title}</span>
            <span className="hidden sm:inline text-slate-500">({game.iframeUrl})</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleReload}
              title="Restart Game"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsTheater((prev) => !prev)}
              title={isTheater ? 'Default view' : 'Theater mode'}
              className={`p-1.5 rounded-lg transition-colors ${
                isTheater
                  ? 'bg-sky-500 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <Tv className="w-4 h-4" />
            </button>

            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handleOpenNewTab}
              title="Pop out in cloaked tab (about:blank)"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Iframe Viewport */}
        <div
          className={`relative w-full bg-slate-950 flex items-center justify-center ${
            isFullscreen
              ? 'flex-1 h-full'
              : isTheater
              ? 'h-[75vh] min-h-[550px]'
              : 'aspect-16/10 min-h-[480px] max-h-[680px]'
          }`}
        >
          <iframe
            key={iframeKey}
            ref={iframeRef}
            src={game.iframeUrl}
            title={game.title}
            className="w-full h-full border-0 focus:outline-none"
            allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope; display-capture"
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
          />
        </div>
      </div>

      {/* Under Player Action & Info Row */}
      <div className={`flex flex-col md:flex-row items-start justify-between gap-6 ${isTheater ? 'w-full' : 'max-w-5xl mx-auto w-full'}`}>
        {/* Left: Description & Controls */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-bold text-white">{game.title}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{game.description}</p>
          </div>

          {/* Controls cheat sheet */}
          {game.controls && game.controls.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                <Keyboard className="w-4 h-4 text-sky-400" />
                <span>Controls Guide</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {game.controls.map((ctrl, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>{ctrl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-400">Tags:</span>
            {game.tags.map((t, idx) => (
              <React.Fragment key={t}>
                <span>{t}</span>
                {idx < game.tags.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: Actions (Rate, Favorite, Share) */}
        <div className="flex md:flex-col items-center md:items-stretch gap-2.5 shrink-0 w-full md:w-48">
          <button
            onClick={handleLike}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border ${
              hasLiked
                ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:bg-slate-800'
            }`}
          >
            <ThumbsUp className={`w-4 h-4 ${hasLiked ? 'fill-white' : ''}`} />
            <span>{likesCount.toLocaleString()} Likes</span>
          </button>

          <button
            onClick={() => onToggleFavorite(game.id)}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border ${
              isFavorite
                ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Share Game'}</span>
          </button>
        </div>
      </div>

      {/* Related Games Row */}
      <div className={`mt-8 pt-8 border-t border-slate-800 ${isTheater ? 'w-full' : 'max-w-5xl mx-auto w-full'}`}>
        <h3 className="text-lg font-bold text-white mb-4">More Unblocked Games</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedGames.map((relGame) => (
            <GameCard
              key={relGame.id}
              game={relGame}
              isFavorite={favorites.includes(relGame.id)}
              onToggleFavorite={onToggleFavorite}
              onPlay={onSelectGame}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
