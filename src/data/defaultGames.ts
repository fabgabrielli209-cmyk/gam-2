import { Game } from '../types';

export const DEFAULT_GAMES: Game[] = [
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
    featured: true,
    aspectRatio: "16:9"
  },
  {
    id: "cookie-clicker",
    title: "Cookie Clicker",
    slug: "cookie-clicker",
    category: "Strategy",
    description: "The original idle clicking game! Bake billions of cookies, purchase grandma bakeries, factories, and cosmic portals to exponentially grow your cookie empire.",
    iframeUrl: "https://ozh.github.io/cookieclicker/",
    thumbnail: "cookie-clicker",
    controls: [
      "Left Click: Click giant cookie & buy upgrades",
      "Mouse Wheel: Scroll store & upgrades",
      "Auto-save: Game progress saves automatically"
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
