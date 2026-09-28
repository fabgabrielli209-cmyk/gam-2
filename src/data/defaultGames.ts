import { Game } from '../types';

export const DEFAULT_GAMES: Game[] = [
  {
    id: "slope",
    title: "Slope",
    slug: "slope",
    category: "Arcade",
    description: "Drive a ball down a steep, randomized 3D neon course in this adrenaline-pumping endless speed run! Avoid red blocks, maintain your balance, and survive the endless descent.",
    iframeUrl: "./games/slope.html",
    thumbnail: "slope",
    controls: [
      "A / D or Left / Right Arrows: Steer ball",
      "Stay centered: Avoid flying off edges",
      "Dodge red obstacles: Red blocks are instant game over"
    ],
    tags: ["3D", "Arcade", "Endless", "Speed", "Action"],
    badge: "POPULAR",
    rating: 4.96,
    plays: 85200,
    featured: false,
    aspectRatio: "16:9"
  },
  {
    id: "football-bros",
    title: "Football Bros",
    slug: "football-bros",
    category: "Action",
    description: "Touchdown! Lead your team down the field in Football Bros. Dodge tackles, throw deep spiral passes, run routes, and celebrate epic end zone touchdowns!",
    iframeUrl: "./games/football-bros.html",
    thumbnail: "football-bros",
    controls: [
      "Arrow Keys / WASD: Move quarterback & runner",
      "Space / Click: Snap, throw pass & tackle",
      "Shift: Turbo speed boost",
      "Fullscreen: Maximize player view"
    ],
    tags: ["Sports", "Football", "Action", "Arcade", "Multiplayer"],
    badge: "NEW",
    rating: 4.98,
    plays: 36800,
    featured: true,
    aspectRatio: "16:9"
  },
  {
    id: "basketball-bros",
    title: "Basketball Bros",
    slug: "basketball-bros",
    category: "Action",
    description: "Hit the hardwood in Basketball Bros! Break ankles with wicked crossovers, drain step-back three-pointers, and execute thunderous slam dunks in electric 1v1 and 2v2 streetball games.",
    iframeUrl: "https://basketball-bros.io/",
    thumbnail: "basketball-bros",
    controls: [
      "WASD / Arrow Keys: Dribble, move & aim shot",
      "Space / Click: Jump shot, dunk & steal",
      "Shift: Turbo sprint speed boost",
      "Fullscreen: Expand player for full court view"
    ],
    tags: ["Sports", "Basketball", "Action", "Arcade", "Multiplayer"],
    badge: "HOT",
    rating: 4.99,
    plays: 49500,
    featured: false,
    aspectRatio: "16:9"
  },
  {
    id: "hockey-bros",
    title: "Hockey Bros",
    slug: "hockey-bros",
    category: "Action",
    description: "Hit the rink in Hockey Bros! Skate past defenders, deke out goalies, unleash devastating slap shots, and score game-winning goals in thrilling arcade hockey matches.",
    iframeUrl: "https://hockeybros.io/",
    thumbnail: "hockey-bros",
    controls: [
      "WASD / Arrow Keys: Skate & maneuver",
      "Space / Click: Pass & shoot puck",
      "Shift: Speed boost sprint",
      "Fullscreen: Expand player for immersive view"
    ],
    tags: ["Sports", "Hockey", "Action", "Arcade", "Multiplayer"],
    badge: "NEW",
    rating: 4.97,
    plays: 33100,
    featured: false,
    aspectRatio: "16:9"
  },
  {
    id: "snowball-io",
    title: "Snowball.io",
    slug: "snowball-io",
    category: "Action",
    description: "Roll up gigantic snowballs, blast opponents off the icy arena platform, and be the last snow fighter standing in this thrilling fast-paced multiplayer battle!",
    iframeUrl: "https://snowball-io.io/",
    thumbnail: "snowball-io",
    controls: [
      "Mouse / WASD / Arrow Keys: Move & roll snowball",
      "Release Left Click / Space: Launch snowball",
      "Stay on platform: Avoid falling into icy water"
    ],
    tags: ["Multiplayer", "Action", "IO Game", "Arena", "Casual"],
    badge: "HOT",
    rating: 4.95,
    plays: 41200,
    featured: false,
    aspectRatio: "16:9"
  },
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
    badge: "HOT",
    rating: 4.96,
    plays: 28400,
    featured: false,
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
    description: "The classic 2013 idle clicking game! Bake cookies, buy cursors, grandmas, farms, factories, mines, shipments, and alchemy labs. Runs with zero external blockers!",
    iframeUrl: "./games/cookie-clicker.html",
    thumbnail: "cookie-clicker",
    controls: [
      "Left Click: Click giant cookie & buy upgrades",
      "Store: Purchase automated CPS production",
      "Auto-save: Saves progress automatically every 5s"
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
    description: "Dash through vibrant train tracks, dodge roaring subway trains, leap over hurdles, and surf on hoverboards in this legendary 3D endless runner!",
    iframeUrl: "https://dddavit.github.io/subway/",
    thumbnail: "subway-surfers",
    controls: [
      "Arrow Keys / WASD: Move left, right, jump, roll",
      "Space: Activate hoverboard",
      "Mouse / Swipe: Dodge obstacles & steer"
    ],
    tags: ["Action", "Runner", "3D", "Endless", "Arcade"],
    badge: "POPULAR",
    rating: 4.96,
    plays: 68400,
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
