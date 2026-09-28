import { Game } from '../types';

export const DEFAULT_GAMES: Game[] = [
  {
    id: "baseball-bros",
    title: "Baseball Bros",
    slug: "baseball-bros",
    category: "Action",
    description: "Step up to the plate in Baseball Bros! Swing for the fences, time your hits, pitch strikes, and hit epic grand slams in fast-paced arcade baseball action.",
    iframeUrl: "https://baseballbros.io/",
    thumbnail: "baseball-bros",
    controls: [
      "Mouse / Space: Swing bat & pitch",
      "Arrow Keys / WASD: Aim pitch & steer runner",
      "Fullscreen: Click maximize button for best view"
    ],
    tags: ["Sports", "Baseball", "Action", "Arcade", "Multiplayer"],
    badge: "NEW",
    rating: 4.96,
    plays: 28400,
    featured: true,
    aspectRatio: "16:9"
  },
  {
    id: "geometry-dash",
    title: "Geometry Dash",
    slug: "geometry-dash",
    category: "Arcade",
    description: "Jump, fly, and flip your way through dangerous obstacles, rhythm-based spike corridors, and gravity portals in the authentic full version of Geometry Dash!",
    iframeUrl: "https://web-dashers.github.io/",
    thumbnail: "geometry-dash",
    controls: [
      "Space / Up Arrow / Click: Jump & Fly",
      "P: Pause game",
      "R: Quick restart"
    ],
    tags: ["Rhythm", "Platformer", "Action", "Arcade", "Music"],
    badge: "HOT",
    rating: 4.98,
    plays: 62400,
    featured: false,
    aspectRatio: "16:9"
  },
  {
    id: "cookie-clicker",
    title: "Cookie Clicker",
    slug: "cookie-clicker",
    category: "Strategy",
    description: "The classic idle clicking game! Bake cookies, buy cursors, grandmas, farms, factories, mines, shipments, and alchemy labs. Runs locally with zero blockable dependencies!",
    iframeUrl: "./games/cookie-clicker.html",
    thumbnail: "cookie-clicker",
    controls: [
      "Left Click: Click cookie & buy upgrades",
      "Store: Purchase automated production",
      "Auto-save: Saves automatically every 5s"
    ],
    tags: ["Idle", "Strategy", "Clicker", "Classic", "Casual"],
    badge: "POPULAR",
    rating: 4.97,
    plays: 78500,
    featured: false,
    aspectRatio: "16:9"
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    slug: "subway-surfers",
    category: "Action",
    description: "Dash through train tracks, dodge moving subway cars, leap over obstacles, and surf on hoverboards in this legendary 3D endless runner!",
    iframeUrl: "https://szhong.4399.com/4399swf//upload_swf/ftp35/liuxinyu/20210324/jj01/index.html",
    thumbnail: "subway-surfers",
    controls: [
      "Arrow Keys / WASD: Move left, right, jump, roll",
      "Space: Activate hoverboard",
      "Mouse / Swipe: Dodge and steer"
    ],
    tags: ["Action", "Runner", "3D", "Endless", "Arcade"],
    badge: "POPULAR",
    rating: 4.95,
    plays: 48900,
    featured: false,
    aspectRatio: "16:9"
  },
  {
    id: "retro-snake",
    title: "Retro Snake",
    slug: "retro-snake",
    category: "Arcade",
    description: "The timeless arcade classic. Eat glowing apples, grow your serpentine body, and avoid crashing into walls or your own tail!",
    iframeUrl: "./games/snake.html",
    thumbnail: "snake",
    controls: [
      "Arrow Keys / WASD: Steer snake",
      "Space: Pause / Resume",
      "R: Restart game"
    ],
    tags: ["Arcade", "Retro", "Classic", "High Score"],
    badge: "CLASSIC",
    rating: 4.9,
    plays: 14250,
    featured: false,
    aspectRatio: "4:3"
  }
];
