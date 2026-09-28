import React from 'react';

interface ThumbnailProps {
  id: string;
  category: string;
  title: string;
}

export const GameThumbnail: React.FC<ThumbnailProps> = ({ id, category }) => {
  switch (id) {
    case 'football-bros':
      return (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-emerald-600/35 via-green-950/25 to-slate-950" />
          {/* Turf Yard lines */}
          <div className="absolute inset-x-0 h-px top-1/4 bg-white/20" />
          <div className="absolute inset-x-0 h-px top-1/2 bg-white/30" />
          <div className="absolute inset-x-0 h-px top-3/4 bg-white/20" />
          <svg className="w-24 h-24 drop-shadow-[0_0_16px_rgba(34,197,94,0.5)]" viewBox="0 0 100 100" fill="none">
            {/* Goalposts in background */}
            <g opacity="0.35">
              <line x1="82" y1="18" x2="82" y2="48" stroke="#facc15" strokeWidth="2" />
              <line x1="94" y1="18" x2="94" y2="48" stroke="#facc15" strokeWidth="2" />
              <line x1="82" y1="36" x2="94" y2="36" stroke="#facc15" strokeWidth="2" />
              <line x1="88" y1="36" x2="88" y2="60" stroke="#facc15" strokeWidth="2.5" />
            </g>

            {/* Passing Spiral Wind Arc */}
            <path d="M12 70 Q30 35 60 25" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" />
            <path d="M22 80 Q40 50 68 38" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

            {/* American Football */}
            <g transform="translate(18, 16) rotate(-35 30 30)">
              {/* Football Body */}
              <ellipse cx="32" cy="32" rx="28" ry="16" fill="#92400e" stroke="#78350f" strokeWidth="2" />
              {/* Upper highlight */}
              <path d="M10 26 Q32 18 54 26" stroke="#b45309" strokeWidth="3" fill="none" opacity="0.6" />
              {/* White End Stripes */}
              <path d="M14 22 Q18 32 14 42" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M50 22 Q46 32 50 42" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              {/* Center Seam */}
              <line x1="12" y1="32" x2="52" y2="32" stroke="#451a03" strokeWidth="1.5" />
              {/* White Laces */}
              <line x1="24" y1="32" x2="40" y2="32" stroke="#ffffff" strokeWidth="2.5" />
              <line x1="26" y1="28" x2="26" y2="36" stroke="#ffffff" strokeWidth="2" />
              <line x1="30" y1="27" x2="30" y2="37" stroke="#ffffff" strokeWidth="2" />
              <line x1="34" y1="27" x2="34" y2="37" stroke="#ffffff" strokeWidth="2" />
              <line x1="38" y1="28" x2="38" y2="36" stroke="#ffffff" strokeWidth="2" />
            </g>

            {/* Sparks */}
            <circle cx="75" cy="22" r="2.5" fill="#facc15" className="animate-pulse" />
            <circle cx="84" cy="30" r="1.5" fill="#ffffff" />
          </svg>
        </div>
      );
    case 'hockey-bros':
      return (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-blue-600/30 via-sky-950/20 to-slate-950" />
          {/* Face-off circle graphic */}
          <div className="absolute w-36 h-36 rounded-full border-2 border-red-500/25 pointer-events-none" />
          <div className="absolute w-8 h-8 rounded-full border border-red-500/30 pointer-events-none" />
          <svg className="w-24 h-24 drop-shadow-[0_0_16px_rgba(59,130,246,0.5)]" viewBox="0 0 100 100" fill="none">
            {/* Ice rink red goal line */}
            <line x1="10" y1="50" x2="90" y2="50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />

            {/* Goal Net */}
            <rect x="68" y="24" width="22" height="34" rx="2" fill="none" stroke="#ef4444" strokeWidth="2" />
            <path d="M68 28 L90 28 M68 36 L90 36 M68 44 L90 44 M68 52 L90 52" stroke="#ef4444" strokeWidth="0.8" opacity="0.4" />
            <path d="M74 24 L74 58 M80 24 L80 58 M86 24 L86 58" stroke="#ef4444" strokeWidth="0.8" opacity="0.4" />

            {/* Hockey Stick */}
            <g transform="translate(18, 22) rotate(-28 30 30)">
              {/* Shaft */}
              <rect x="22" y="6" width="6" height="52" rx="1.5" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
              {/* Upper grip tape */}
              <rect x="22" y="6" width="6" height="12" rx="1" fill="#ef4444" />
              {/* Blade curve */}
              <path d="M22 56 L22 62 Q22 68 28 68 L48 68 Q52 68 52 64 L52 61 Q52 58 46 58 L28 58 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              {/* Blade white tape */}
              <line x1="34" y1="58" x2="34" y2="68" stroke="#f8fafc" strokeWidth="1.5" />
              <line x1="42" y1="58" x2="42" y2="68" stroke="#f8fafc" strokeWidth="1.5" />
            </g>

            {/* Flying Puck */}
            <g transform="translate(52, 44)">
              {/* Puck 3D cylinder */}
              <ellipse cx="12" cy="14" rx="10" ry="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="2" y="10" width="20" height="4" fill="#1e293b" />
              <ellipse cx="12" cy="10" rx="10" ry="5" fill="#334155" />
            </g>

            {/* Speed trails & ice skate sparks */}
            <path d="M38 58 L52 50" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 64 L46 55" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="58" cy="40" r="1.5" fill="#93c5fd" />
            <circle cx="64" cy="46" r="2" fill="#ffffff" className="animate-ping" />
          </svg>
        </div>
      );
    case 'snowball-io':
      return (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-cyan-500/30 via-sky-950/30 to-slate-950" />
          {/* Icy Arena Ring */}
          <div className="absolute w-44 h-44 rounded-full border border-cyan-400/20 pointer-events-none" />
          <svg className="w-24 h-24 drop-shadow-[0_0_16px_rgba(56,189,248,0.6)]" viewBox="0 0 100 100" fill="none">
            {/* Ice platform */}
            <ellipse cx="50" cy="72" rx="42" ry="16" fill="#082f49" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="50" cy="71" rx="36" ry="12" fill="#0c4a6e" />

            {/* Snow track / trail behind vehicle */}
            <path d="M18 64 C26 62 34 60 42 62" stroke="#e0f2fe" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 3" />

            {/* Snowplow Vehicle Body */}
            <g transform="translate(18, 40)">
              {/* Chassis */}
              <rect x="2" y="10" width="22" height="14" rx="3" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
              {/* Cockpit window */}
              <rect x="14" y="6" width="10" height="9" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
              {/* Wheels */}
              <circle cx="6" cy="24" r="4.5" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
              <circle cx="20" cy="24" r="4.5" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
              {/* Bumper pushing mount */}
              <rect x="22" y="12" width="6" height="8" rx="1" fill="#71717a" />
            </g>

            {/* Giant Growing Snowball */}
            <g transform="translate(42, 28)">
              {/* Snowball sphere */}
              <circle cx="24" cy="24" r="22" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="2" />
              {/* Texture shading */}
              <ellipse cx="20" cy="20" rx="16" ry="16" fill="#ffffff" />
              <path d="M12 28 C16 34 26 38 34 34" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M18 16 C22 14 30 15 36 20" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              {/* Snow sparkles */}
              <circle cx="16" cy="18" r="2" fill="#38bdf8" />
              <circle cx="30" cy="26" r="1.5" fill="#38bdf8" />
            </g>

            {/* Snow particles flying off */}
            <circle cx="72" cy="30" r="2.5" fill="#e0f2fe" />
            <circle cx="80" cy="40" r="3.5" fill="#ffffff" className="animate-pulse" />
            <circle cx="76" cy="52" r="2" fill="#bae6fd" />
            <circle cx="84" cy="26" r="1.5" fill="#bae6fd" />
          </svg>
        </div>
      );
    case 'baseball-bros':
      return (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-emerald-600/30 via-emerald-950/20 to-slate-950" />
          {/* Diamond field graphic */}
          <div className="absolute w-36 h-36 border border-emerald-500/20 rotate-45 rounded-lg pointer-events-none" />
          <svg className="w-24 h-24 drop-shadow-[0_0_16px_rgba(52,211,153,0.5)]" viewBox="0 0 100 100" fill="none">
            {/* Wooden Baseball Bat */}
            <g transform="translate(15, 20) rotate(-40 30 30)">
              {/* Bat barrel */}
              <rect x="18" y="8" width="12" height="42" rx="4" fill="#d97706" stroke="#b45309" strokeWidth="2" />
              {/* Bat handle */}
              <rect x="21" y="50" width="6" height="28" rx="2" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
              {/* Grip tape */}
              <line x1="21" y1="56" x2="27" y2="58" stroke="#78350f" strokeWidth="1.5" />
              <line x1="21" y1="62" x2="27" y2="64" stroke="#78350f" strokeWidth="1.5" />
              <line x1="21" y1="68" x2="27" y2="70" stroke="#78350f" strokeWidth="1.5" />
              {/* Knob */}
              <circle cx="24" cy="78" r="4.5" fill="#b45309" />
            </g>

            {/* Baseball Sphere */}
            <g transform="translate(48, 42)">
              <circle cx="20" cy="20" r="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
              {/* Red Curved Stitches */}
              <path d="M12 9 C8 15 8 25 12 31" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 1.5" fill="none" />
              <path d="M28 9 C32 15 32 25 28 31" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 1.5" fill="none" />
            </g>

            {/* Impact Speed Trails */}
            <path d="M42 36 L30 30" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
            <path d="M46 30 L38 22" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M52 26 L46 18" stroke="#a7f3d0" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'geometry-dash':
      return (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-indigo-950/40 to-slate-950" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-indigo-950/80 border-t-2 border-cyan-400" />
          <svg className="w-24 h-24 drop-shadow-[0_0_16px_rgba(34,211,238,0.6)]" viewBox="0 0 100 100" fill="none">
            {/* Ground grid lines */}
            <line x1="0" y1="78" x2="100" y2="78" stroke="#38bdf8" strokeWidth="2" />
            <line x1="20" y1="78" x2="20" y2="100" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="50" y1="78" x2="50" y2="100" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="80" y1="78" x2="80" y2="100" stroke="#0284c7" strokeWidth="1.5" />
            
            {/* Sharp Spikes on floor */}
            <polygon points="56,78 66,54 76,78" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
            <polygon points="74,78 84,54 94,78" fill="#ef4444" stroke="#f87171" strokeWidth="2" />

            {/* Glowing Geometry Dash Cube (Jumping/Rotating mid-air) */}
            <g transform="translate(32, 42) rotate(-15 15 15)">
              {/* Outer yellow border */}
              <rect x="0" y="0" width="30" height="30" rx="4" fill="#84cc16" stroke="#facc15" strokeWidth="3" />
              {/* Inner face panel */}
              <rect x="5" y="5" width="20" height="20" rx="2" fill="#4d7c0f" />
              {/* Eyes */}
              <rect x="8" y="9" width="5" height="5" fill="#facc15" />
              <rect x="17" y="9" width="5" height="5" fill="#facc15" />
              {/* Mouth */}
              <rect x="10" y="17" width="10" height="4" fill="#facc15" />
            </g>

            {/* Jump particles / motion trails */}
            <circle cx="20" cy="58" r="2" fill="#38bdf8" className="animate-ping" />
            <circle cx="16" cy="66" r="3" fill="#a855f7" />
            <circle cx="24" cy="72" r="2.5" fill="#facc15" />
          </svg>
        </div>
      );
    case 'cookie-clicker':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-amber-600/30 via-amber-950/20 to-transparent" />
          <svg className="w-24 h-24 drop-shadow-[0_0_16px_rgba(217,119,6,0.6)]" viewBox="0 0 100 100" fill="none">
            {/* Outer golden cookie */}
            <circle cx="50" cy="50" r="36" fill="#d97706" stroke="#b45309" strokeWidth="3" />
            <circle cx="50" cy="50" r="32" fill="#f59e0b" />
            {/* Texture spots */}
            <circle cx="42" cy="40" r="4.5" fill="#78350f" />
            <circle cx="60" cy="38" r="5" fill="#78350f" />
            <circle cx="36" cy="58" r="4" fill="#78350f" />
            <circle cx="56" cy="56" r="5.5" fill="#78350f" />
            <circle cx="48" cy="68" r="3.5" fill="#78350f" />
            <circle cx="66" cy="50" r="3" fill="#78350f" />
            <circle cx="32" cy="42" r="3" fill="#78350f" />
            {/* Chocolate highlights */}
            <circle cx="41" cy="39" r="1.5" fill="#92400e" />
            <circle cx="59" cy="37" r="1.5" fill="#92400e" />
            <circle cx="55" cy="55" r="1.8" fill="#92400e" />
            {/* Sparkles */}
            <path d="M78 22 L80 16 L82 22 L88 24 L82 26 L80 32 L78 26 L72 24 Z" fill="#fef08a" />
            <path d="M18 68 L19 64 L20 68 L24 69 L20 70 L19 74 L18 70 L14 69 Z" fill="#fef08a" />
            {/* Pointer cursor click effect */}
            <path d="M68 62 L68 80 L73 75 L77 84 L81 82 L77 73 L83 73 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'subway-surfers':
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-radial from-amber-500/25 via-sky-500/10 to-transparent" />
          <svg className="w-24 h-24 drop-shadow-[0_0_14px_rgba(245,158,11,0.5)]" viewBox="0 0 100 100" fill="none">
            {/* Perspective tracks */}
            <path d="M20 90 L42 45 M80 90 L58 45" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="75" x2="70" y2="75" stroke="#94a3b8" strokeWidth="2.5" />
            <line x1="37" y1="60" x2="63" y2="60" stroke="#94a3b8" strokeWidth="2" />
            <line x1="42" y1="50" x2="58" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Subway Train Front */}
            <rect x="34" y="20" width="32" height="34" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            {/* Train windshield */}
            <rect x="38" y="24" width="24" height="12" rx="2" fill="#0f172a" />
            {/* Headlights */}
            <circle cx="40" cy="46" r="3" fill="#facc15" />
            <circle cx="60" cy="46" r="3" fill="#facc15" />
            <line x1="47" y1="46" x2="53" y2="46" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            {/* Golden Coin floating in foreground */}
            <circle cx="50" cy="72" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
            <text x="50" y="75" textAnchor="middle" fill="#78350f" fontSize="7" fontWeight="bold">$</text>
            {/* Speed streaks */}
            <line x1="12" y1="55" x2="28" y2="55" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="72" y1="55" x2="88" y2="55" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>
      );
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
