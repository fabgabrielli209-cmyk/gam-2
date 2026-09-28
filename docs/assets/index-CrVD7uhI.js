(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`retro-snake`,title:`Retro Snake`,slug:`retro-snake`,category:`Arcade`,description:`The timeless arcade classic. Eat glowing apples, grow your serpentine body, and avoid crashing into walls or your own tail!`,iframeUrl:`./games/snake.html`,thumbnail:`snake`,controls:[`Arrow Keys / WASD: Steer snake`,`Space: Pause / Resume`,`R: Restart game`],tags:[`Arcade`,`Retro`,`Classic`,`High Score`],badge:`HOT`,rating:4.9,plays:14250,featured:!0},{id:`block-master-tetris`,title:`Block Master`,slug:`block-master`,category:`Puzzle`,description:`Stack, rotate, and clear falling tetromino blocks. Plan your drops, clear multiple lines for tetris combos, and climb the speed levels.`,iframeUrl:`./games/tetris.html`,thumbnail:`tetris`,controls:[`Left / Right: Shift block`,`Up / X: Rotate`,`Down: Soft drop`,`Space: Hard drop`,`C: Hold piece`],tags:[`Puzzle`,`Retro`,`Strategy`,`Brain`],badge:`POPULAR`,rating:4.95,plays:22400,featured:!0},{id:`game-2048`,title:`2048 Deluxe`,slug:`2048-deluxe`,category:`Puzzle`,description:`Slide numbered tiles on the 4x4 grid. When two tiles with the same number touch, they merge into one! Can you reach the legendary 2048 tile?`,iframeUrl:`./games/2048.html`,thumbnail:`2048`,controls:[`Arrow Keys / Swipe: Move tiles`,`U: Undo move`,`R: New Game`],tags:[`Puzzle`,`Math`,`Casual`,`Strategy`],badge:`CLASSIC`,rating:4.8,plays:18900,featured:!1},{id:`flappy-wings`,title:`Flappy Wings`,slug:`flappy-wings`,category:`Arcade`,description:`Tap or press space to flap your wings and navigate through treacherous green pipes. One slight mistake means game over!`,iframeUrl:`./games/flappy.html`,thumbnail:`flappy`,controls:[`Space / Click / Tap: Flap wings`,`P: Pause`,`R: Quick Restart`],tags:[`Arcade`,`Skill`,`Runner`,`Challenging`],badge:`HOT`,rating:4.7,plays:16800,featured:!1},{id:`cyber-breakout`,title:`Cyber Breakout`,slug:`cyber-breakout`,category:`Arcade`,description:`High-octane brick breaking action. Bounce the neon energy ball, collect power-ups like multi-ball, laser cannon, and wide paddle to shatter all bricks.`,iframeUrl:`./games/breakout.html`,thumbnail:`breakout`,controls:[`Mouse / Arrow Keys: Move paddle`,`Space: Launch ball / Fire lasers`,`P: Pause`],tags:[`Arcade`,`Action`,`Neon`,`Retro`],badge:`NEW`,rating:4.85,plays:11300,featured:!0},{id:`star-defender`,title:`Star Defender`,slug:`star-defender`,category:`Action`,description:`Defend the solar system against cascading waves of hostile alien invaders. Dodge alien plasma and destroy the mothership for bonus points.`,iframeUrl:`./games/space-invaders.html`,thumbnail:`space-invaders`,controls:[`A / D or Left / Right: Move cannon`,`Space: Fire blaster`,`P: Pause`],tags:[`Action`,`Retro`,`Shooter`,`Sci-Fi`],badge:`CLASSIC`,rating:4.75,plays:13900,featured:!1},{id:`pong-legends`,title:`Pong Legends`,slug:`pong-legends`,category:`Sports`,description:`The grandmother of all video games! Play solo against 3 difficulty levels of AI bot or challenge a friend in 2-Player local versus mode.`,iframeUrl:`./games/pong.html`,thumbnail:`pong`,controls:[`Player 1: W / S or Up / Down`,`Player 2 (2P Mode): Up / Down Arrows`,`Space: Serve ball`,`1 / 2: Toggle 1P vs 2P Mode`],tags:[`Sports`,`2-Player`,`Retro`,`Classic`],badge:`POPULAR`,rating:4.65,plays:9400,featured:!1},{id:`desert-dino-run`,title:`Desert Dino Run`,slug:`desert-dino-run`,category:`Arcade`,description:`Hop over cacti and duck under flying pterodactyls in this fast-paced prehistoric endless runner with seamless day-to-night cycles.`,iframeUrl:`./games/dino.html`,thumbnail:`dino`,controls:[`Space / Up Arrow: Jump`,`Down Arrow: Duck / Fast drop`,`R: Restart`],tags:[`Arcade`,`Runner`,`Endless`,`Pixel`],badge:`HOT`,rating:4.88,plays:25100,featured:!1},{id:`minesweeper-classic`,title:`Minesweeper Classic`,slug:`minesweeper-classic`,category:`Strategy`,description:`Deduce mine locations using number clues, place flags with surgical precision, and uncover the entire safe grid. Includes 3 grid difficulties.`,iframeUrl:`./games/minesweeper.html`,thumbnail:`minesweeper`,controls:[`Left Click: Uncover tile`,`Right Click / Long Press: Flag mine`,`Smiley Face: Restart`],tags:[`Strategy`,`Puzzle`,`Logic`,`Windows Classic`],badge:`CLASSIC`,rating:4.7,plays:8600,featured:!1},{id:`highway-rush-2d`,title:`Highway Rush 2D`,slug:`highway-rush-2d`,category:`Action`,description:`Weave through thick highway traffic at breakneck speeds. Collect gold coins, snatch nitro boosts, and avoid devastating rear-end crashes!`,iframeUrl:`./games/highway-racer.html`,thumbnail:`racer`,controls:[`Left / Right or A / D: Steer car`,`Up / W: Nitro Boost`,`Down / S: Brakes`,`Space: Horn / Flash`],tags:[`Action`,`Driving`,`Racing`,`Arcade`],badge:`NEW`,rating:4.82,plays:15400,featured:!0}],t={games:e,selectedGame:null,activeCategory:`All`,searchQuery:``,sortOption:`popular`,favorites:[],isCloaked:!1,isAddModalOpen:!1,isJsonModalOpen:!1,isTheater:!1,likedGames:{}};function n(){try{let e=localStorage.getItem(`nexus_favorites`);e&&(t.favorites=JSON.parse(e))}catch{}try{let e=localStorage.getItem(`nexus_games_catalog`);if(e){let n=JSON.parse(e);Array.isArray(n)&&n.length>0&&(t.games=n)}}catch{}fetch(new URL(`games.json`,window.location.href).href).then(e=>e.ok?e.json():null).then(e=>{Array.isArray(e)&&e.length>0&&!localStorage.getItem(`nexus_games_catalog`)&&(t.games=e,a())}).catch(()=>{}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&!t.isAddModalOpen&&!t.isJsonModalOpen&&(t.isCloaked=!t.isCloaked,document.title=t.isCloaked?`AP World History - Google Docs`:`Nexus Arcade - Unblocked Games Portal`,a())}),a()}function r(){return t.games.filter(e=>{if(t.activeCategory===`Favorites`){if(!t.favorites.includes(e.id))return!1}else if(t.activeCategory!==`All`&&e.category!==t.activeCategory)return!1;if(t.searchQuery.trim()){let n=t.searchQuery.toLowerCase(),r=e.title.toLowerCase().includes(n),i=e.description.toLowerCase().includes(n),a=e.category.toLowerCase().includes(n),o=(e.tags||[]).some(e=>e.toLowerCase().includes(n));return r||i||a||o}return!0}).sort((e,n)=>t.sortOption===`popular`?(n.plays||0)-(e.plays||0):t.sortOption===`rating`?(n.rating||0)-(e.rating||0):t.sortOption===`az`?e.title.localeCompare(n.title):0)}function i(e,t){switch(e){case`retro-snake`:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-radial from-emerald-500/20 via-transparent to-transparent"></div>
          <svg class="w-20 h-20 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="30" width="16" height="16" rx="4" fill="#10b981" />
            <rect x="38" y="30" width="16" height="16" rx="4" fill="#10b981" />
            <rect x="56" y="30" width="16" height="16" rx="4" fill="#34d399" />
            <rect x="56" y="48" width="16" height="16" rx="4" fill="#34d399" />
            <rect x="56" y="66" width="16" height="16" rx="4" fill="#6ee7b7" />
            <circle cx="26" cy="66" r="8" fill="#ef4444" />
          </svg>
        </div>`;case`block-master-tetris`:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-radial from-cyan-500/20 via-transparent to-transparent"></div>
          <svg class="w-20 h-20 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="25" width="15" height="15" rx="3" fill="#a855f7" />
            <rect x="42" y="25" width="15" height="15" rx="3" fill="#a855f7" />
            <rect x="59" y="25" width="15" height="15" rx="3" fill="#a855f7" />
            <rect x="42" y="42" width="15" height="15" rx="3" fill="#c084fc" />
            <rect x="25" y="62" width="15" height="15" rx="3" fill="#06b6d4" />
            <rect x="42" y="62" width="15" height="15" rx="3" fill="#06b6d4" />
            <rect x="59" y="62" width="15" height="15" rx="3" fill="#06b6d4" />
            <rect x="76" y="62" width="15" height="15" rx="3" fill="#22d3ee" />
          </svg>
        </div>`;case`game-2048`:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-radial from-amber-500/20 via-transparent to-transparent"></div>
          <div class="grid grid-cols-2 gap-1.5 p-2.5 bg-slate-800/80 rounded-xl border border-slate-700 shadow-xl">
            <div class="w-9 h-9 rounded-lg bg-amber-500 text-white font-extrabold flex items-center justify-center text-[10px]">1024</div>
            <div class="w-9 h-9 rounded-lg bg-rose-500 text-white font-black flex items-center justify-center text-[10px]">2048</div>
            <div class="w-9 h-9 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-[10px]">256</div>
            <div class="w-9 h-9 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">512</div>
          </div>
        </div>`;case`flappy-wings`:return`
        <div class="w-full h-full bg-sky-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-gradient-to-b from-sky-900 via-sky-950 to-emerald-950"></div>
          <svg class="w-20 h-20 drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]" viewBox="0 0 100 100" fill="none">
            <rect x="70" y="0" width="18" height="35" rx="2" fill="#22c55e" />
            <rect x="70" y="65" width="18" height="35" rx="2" fill="#22c55e" />
            <circle cx="35" cy="50" r="16" fill="#facc15" />
            <circle cx="42" cy="46" r="4" fill="#ffffff" />
            <circle cx="44" cy="46" r="2" fill="#0f172a" />
            <polygon points="46,50 56,53 46,56" fill="#f97316" />
          </svg>
        </div>`;case`cyber-breakout`:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-radial from-indigo-500/20 via-transparent to-transparent"></div>
          <svg class="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <rect x="15" y="20" width="18" height="8" rx="2" fill="#ef4444" />
            <rect x="36" y="20" width="18" height="8" rx="2" fill="#f97316" />
            <rect x="57" y="20" width="18" height="8" rx="2" fill="#eab308" />
            <rect x="15" y="32" width="18" height="8" rx="2" fill="#22c55e" />
            <rect x="36" y="32" width="18" height="8" rx="2" fill="#06b6d4" />
            <circle cx="45" cy="55" r="5" fill="#ffffff" />
            <rect x="30" y="75" width="40" height="8" rx="4" fill="#38bdf8" />
          </svg>
        </div>`;case`star-defender`:return`
        <div class="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-radial from-violet-600/25 via-transparent to-transparent"></div>
          <svg class="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <rect x="30" y="25" width="40" height="24" rx="6" fill="#a855f7" />
            <rect x="38" y="31" width="6" height="6" rx="1" fill="#ffffff" />
            <rect x="56" y="31" width="6" height="6" rx="1" fill="#ffffff" />
            <polygon points="44,82 50,70 56,82" fill="#38bdf8" />
          </svg>
        </div>`;case`pong-legends`:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <svg class="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <line x1="50" y1="10" x2="50" y2="90" stroke="#334155" stroke-width="2" stroke-dasharray="4 4" />
            <rect x="15" y="30" width="6" height="35" rx="3" fill="#38bdf8" />
            <rect x="79" y="45" width="6" height="35" rx="3" fill="#f43f5e" />
            <circle cx="42" cy="48" r="5" fill="#ffffff" />
          </svg>
        </div>`;case`desert-dino-run`:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <svg class="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <line x1="10" y1="75" x2="90" y2="75" stroke="#475569" stroke-width="3" />
            <rect x="25" y="38" width="20" height="32" rx="4" fill="#38bdf8" />
            <rect x="65" y="48" width="8" height="26" rx="3" fill="#22c55e" />
          </svg>
        </div>`;case`minesweeper-classic`:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div class="grid grid-cols-2 gap-2 p-2 bg-slate-800 rounded-lg border border-slate-700">
            <div class="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-sky-400">1</div>
            <div class="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-emerald-400">2</div>
            <div class="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs">🚩</div>
            <div class="w-7 h-7 bg-rose-900/60 border border-rose-500/50 rounded flex items-center justify-center text-xs">💣</div>
          </div>
        </div>`;case`highway-rush-2d`:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <svg class="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="10" width="60" height="80" rx="4" fill="#1e293b" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="#facc15" stroke-width="2" stroke-dasharray="6 6" />
            <rect x="30" y="20" width="14" height="24" rx="3" fill="#ef4444" />
            <rect x="56" y="55" width="14" height="26" rx="3" fill="#0284c7" />
          </svg>
        </div>`;default:return`
        <div class="w-full h-full bg-slate-900 flex items-center justify-center text-slate-400">
          <span class="text-3xl">🎮</span>
        </div>`}}function a(){let e=document.getElementById(`root`);if(!e)return;if(t.isCloaked){e.innerHTML=s(),d();return}let n=r(),a=t.games.find(e=>e.featured)||t.games[0];e.innerHTML=`
    <div class="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <!-- Navbar (3-Zone Top Bar Contract) -->
      <header class="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <!-- Zone 1: Wordmark -->
          <a href="#" id="brand-home" class="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-sky-400 transition-colors whitespace-nowrap">
            <svg class="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 11h4V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/>
            </svg>
            <span>Nexus Arcade</span>
          </a>

          <!-- Zone 2: Nav Links -->
          <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
            ${[`All`,`Arcade`,`Puzzle`,`Action`,`Retro`,`Favorites`].map(e=>`
              <button data-cat="${e}" class="nav-cat-btn whitespace-nowrap transition-colors py-1 relative ${t.activeCategory===e?`text-sky-400 font-semibold`:`text-slate-400 hover:text-slate-200`}">
                ${e}
                ${t.activeCategory===e?`<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full"></span>`:``}
              </button>
            `).join(``)}
          </nav>

          <!-- Zone 3: Primary Actions -->
          <div class="flex items-center gap-2.5 shrink-0">
            <button id="open-json-btn" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
              <span>JSON</span>
            </button>
            <button id="open-add-btn" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
              <span>+ Add Game</span>
            </button>
            <button id="toggle-cloak-btn" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20 transition-colors">
              <span>Panic Cloak (Esc)</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Body -->
      <main class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full">
        ${t.selectedGame?o(t.selectedGame):`
          <!-- Featured Spotlight Hero -->
          ${t.activeCategory===`All`&&!t.searchQuery&&a?`
            <div class="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-6 md:p-8 mb-10 shadow-2xl">
              <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-7 flex flex-col items-start gap-3">
                  <div class="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span class="text-sky-400 font-semibold uppercase tracking-wider">★ Featured Spotlight</span>
                    <span aria-hidden="true">·</span>
                    <span>${a.category}</span>
                    <span aria-hidden="true">·</span>
                    <span class="text-amber-400 font-mono">★ ${a.rating}</span>
                    <span aria-hidden="true">·</span>
                    <span class="font-mono tabular-nums">${(a.plays||0).toLocaleString()} plays</span>
                  </div>
                  <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">${a.title}</h1>
                  <p class="text-sm text-slate-300 max-w-xl leading-relaxed">${a.description}</p>
                  <div class="flex items-center gap-3 pt-2">
                    <button data-play-id="${a.id}" class="play-btn-trigger px-6 py-3 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-all shadow-lg shadow-sky-500/25">
                      Play Now
                    </button>
                    <button id="random-btn" class="px-4 py-3 text-sm font-medium text-slate-300 bg-slate-800 hover:text-white border border-slate-700 rounded-xl transition-colors">
                      Random Game
                    </button>
                  </div>
                </div>
                <div class="lg:col-span-5 flex justify-center">
                  <div data-play-id="${a.id}" class="play-btn-trigger group relative w-full max-w-sm aspect-4/3 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 cursor-pointer shadow-xl transition-transform hover:-translate-y-1">
                    ${i(a.id,a.category)}
                  </div>
                </div>
              </div>
            </div>
          `:``}

          <!-- Filter & Search Controls -->
          <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              ${[`All`,`Arcade`,`Puzzle`,`Action`,`Retro`,`Sports`,`Strategy`,`Favorites`].map(e=>`
                <button data-cat="${e}" class="filter-tab-btn px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${t.activeCategory===e?`bg-sky-500 text-white shadow-sm`:`bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/80`}">
                  <span>${e}</span>
                  ${e===`Favorites`&&t.favorites.length>0?`<span class="bg-slate-800 text-slate-300 text-[10px] px-1.5 py-0.2 rounded-full">${t.favorites.length}</span>`:``}
                </button>
              `).join(``)}
            </div>

            <div class="flex items-center gap-2.5">
              <div class="relative flex-1 sm:w-64">
                <input id="search-input" type="text" value="${t.searchQuery}" placeholder="Search games..." class="w-full pl-3 pr-8 py-1.5 text-xs bg-slate-900 border border-slate-800 focus:border-sky-500 rounded-lg text-white placeholder-slate-500 outline-none" />
                ${t.searchQuery?`<button id="clear-search-btn" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white">✕</button>`:``}
              </div>
              <div class="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-400">
                <select id="sort-select" class="bg-transparent text-slate-300 text-xs focus:outline-none cursor-pointer pr-1">
                  <option value="popular" ${t.sortOption===`popular`?`selected`:``}>Most Popular</option>
                  <option value="rating" ${t.sortOption===`rating`?`selected`:``}>Highest Rated</option>
                  <option value="az" ${t.sortOption===`az`?`selected`:``}>A to Z</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section Heading -->
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold text-white tracking-tight">
              ${t.activeCategory===`All`?`All Unblocked Games`:`${t.activeCategory} Games`}
              <span class="text-xs text-slate-500 font-mono tabular-nums ml-2">(${n.length})</span>
            </h2>
          </div>

          <!-- Games Grid -->
          ${n.length>0?`
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              ${n.map(e=>`
                <div data-play-id="${e.id}" class="game-card group flex flex-col bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/60">
                  <div class="relative aspect-4/3 w-full bg-slate-950 overflow-hidden border-b border-slate-800/80">
                    ${i(e.id,e.category)}
                    <button data-fav-id="${e.id}" class="fav-toggle-btn absolute top-2.5 right-2.5 z-10 p-2 rounded-lg backdrop-blur-md transition-all ${t.favorites.includes(e.id)?`bg-rose-500 text-white shadow-md`:`bg-slate-950/60 text-slate-300 hover:text-white`}">
                      ♥
                    </button>
                    ${e.badge?`<div class="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-950/80 text-sky-400 border border-slate-700/60 backdrop-blur-md">${e.badge}</div>`:``}
                  </div>
                  <div class="flex flex-col flex-1 p-4 gap-2">
                    <div class="flex items-center gap-1.5 text-xs text-slate-400">
                      <span class="font-medium text-slate-300">${e.category}</span>
                      <span aria-hidden="true">·</span>
                      <span class="text-amber-400 font-mono">★ ${(e.rating||5).toFixed(1)}</span>
                      <span aria-hidden="true">·</span>
                      <span class="font-mono tabular-nums text-slate-500">${((e.plays||0)/1e3).toFixed(1)}k plays</span>
                    </div>
                    <h3 class="text-base font-semibold text-white group-hover:text-sky-400 transition-colors line-clamp-1">${e.title}</h3>
                    <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">${e.description}</p>
                    <div class="mt-auto pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/60">
                      <span class="truncate max-w-[150px]">${(e.tags||[]).slice(0,2).join(` · `)}</span>
                      <span class="text-sky-400 font-medium group-hover:underline">Play Now →</span>
                    </div>
                  </div>
                </div>
              `).join(``)}
            </div>
          `:`
            <div class="py-20 text-center rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
              <h3 class="text-base font-bold text-white mb-2">No games found</h3>
              <p class="text-xs text-slate-400 max-w-sm mx-auto mb-4">Try clearing your search query or choosing another category.</p>
              <button id="reset-search-btn" class="px-4 py-2 text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-lg hover:bg-sky-500/20">
                Show All Games
              </button>
            </div>
          `}
        `}
      </main>

      <!-- Footer -->
      <footer class="border-t border-slate-800/80 bg-slate-950 py-8 px-4 sm:px-6 mt-16 text-slate-500 text-xs">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="font-semibold text-slate-400">Nexus Arcade</span>
            <span aria-hidden="true">·</span>
            <span>HTML5 Unblocked Games Catalog</span>
            <span aria-hidden="true">·</span>
            <span class="font-mono">${t.games.length} Games in JSON</span>
          </div>
          <div class="flex items-center gap-4 text-slate-400">
            <button id="footer-json-btn" class="hover:text-sky-400 transition-colors">View games.json</button>
            <span aria-hidden="true">·</span>
            <button id="footer-random-btn" class="hover:text-sky-400 transition-colors">Random Play</button>
          </div>
        </div>
      </footer>

      <!-- Modals Container -->
      <div id="modal-container"></div>
    </div>
  `,u()}function o(e){let n=t.favorites.includes(e.id),r=t.likedGames[e.id]||Math.floor((e.plays||1e3)*.42),i=new URL(e.iframeUrl,window.location.href).href;return`
    <div class="flex flex-col gap-6 w-full animate-fade-in">
      <div class="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
        <button id="back-to-catalog-btn" class="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-lg transition-colors">
          ← Back to Catalog
        </button>
        <div class="flex items-center gap-2 text-xs text-slate-400">
          <span class="text-white font-semibold">${e.title}</span>
          <span aria-hidden="true">·</span>
          <span>${e.category}</span>
          <span aria-hidden="true">·</span>
          <span class="font-mono tabular-nums">${(e.plays||0).toLocaleString()} plays</span>
        </div>
      </div>

      <!-- Player Frame Container -->
      <div id="player-container" class="relative flex flex-col bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-300 ${t.isTheater?`w-full`:`max-w-5xl mx-auto w-full`}">
        <div class="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-300">
          <div class="flex items-center gap-2 font-medium">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-white font-semibold">${e.title}</span>
            <span class="hidden sm:inline text-slate-500">(${e.iframeUrl})</span>
          </div>
          <div class="flex items-center gap-2">
            <button id="reload-iframe-btn" title="Restart Game" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white">↻</button>
            <button id="toggle-theater-btn" title="Toggle Theater Mode" class="p-1.5 rounded-lg ${t.isTheater?`bg-sky-500 text-white`:`bg-slate-800 text-slate-300`}">📺</button>
            <button id="toggle-fullscreen-btn" title="Fullscreen" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white">⛶</button>
            <button id="popout-tab-btn" title="Pop out in cloaked tab (about:blank)" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white">↗</button>
          </div>
        </div>

        <div class="relative w-full bg-slate-950 flex items-center justify-center ${t.isTheater?`h-[75vh] min-h-[550px]`:`aspect-16/10 min-h-[480px] max-h-[680px]`}">
          <iframe
            id="game-iframe"
            src="${i}"
            title="${e.title}"
            class="w-full h-full border-0 focus:outline-none"
            allow="autoplay; fullscreen; gamepad; focus-without-user-activation *"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          ></iframe>
        </div>
      </div>

      <!-- Controls & Details -->
      <div class="flex flex-col md:flex-row items-start justify-between gap-6 ${t.isTheater?`w-full`:`max-w-5xl mx-auto w-full`}">
        <div class="flex-1 flex flex-col gap-4">
          <div class="flex flex-col gap-1.5">
            <h2 class="text-2xl font-bold text-white">${e.title}</h2>
            <p class="text-sm text-slate-300 leading-relaxed">${e.description}</p>
          </div>

          ${e.controls&&e.controls.length>0?`
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-2.5">
              <div class="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                <span>⌨ Controls Guide</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                ${e.controls.map(e=>`
                  <div class="flex items-center gap-2 bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800/80">
                    <span class="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                    <span>${e}</span>
                  </div>
                `).join(``)}
              </div>
            </div>
          `:``}
        </div>

        <div class="flex md:flex-col items-center md:items-stretch gap-2.5 shrink-0 w-full md:w-48">
          <button id="player-like-btn" class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors">
            👍 <span>${r} Likes</span>
          </button>
          <button id="player-fav-btn" class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border ${n?`bg-rose-500 text-white border-rose-400`:`bg-slate-900 text-slate-300 hover:text-white border-slate-800`}">
            ♥ <span>${n?`Favorited`:`Favorite`}</span>
          </button>
          <button id="player-share-btn" class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors">
            🔗 <span>Share Game</span>
          </button>
        </div>
      </div>
    </div>
  `}function s(){return`
    <div class="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans">
      <header class="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between shadow-xs">
        <div class="flex items-center gap-3">
          <div class="w-8 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">📄</div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold text-slate-900">AP World History - Research Notes</span>
              <span class="text-[11px] text-slate-400">✓ Saved to Drive</span>
            </div>
            <div class="flex gap-3 text-xs text-slate-600 mt-0.5">
              <span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Tools</span>
            </div>
          </div>
        </div>
        <button id="exit-cloak-btn" class="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">
          Exit Cloak (Esc)
        </button>
      </header>
      <main class="flex-1 overflow-auto p-4 sm:p-8 flex justify-center bg-slate-200/70">
        <div class="w-full max-w-3xl bg-white shadow-md border border-slate-300 min-h-[800px] p-12 rounded-sm flex flex-col">
          <textarea class="w-full flex-1 border-0 focus:outline-none text-slate-800 text-sm leading-relaxed resize-none font-serif" spellcheck="false">
Assignment 3: The Industrial Revolution and Global Demographics

Section 1: Mechanization and Urbanization
During the late 18th century, Great Britain experienced a rapid technological and economic transition. The expansion of steam power dramatically accelerated manufacturing efficiency, drawing millions from rural farming into dense metropolitan hubs.

Key Factors:
1. James Watt's improved steam engine (1776)
2. Abundant domestic coal reserves in Northern England
3. Expansion of rail transport networks
4. Global trade corridors and colonial raw material supplies
          </textarea>
        </div>
      </main>
    </div>
  `}function c(){let e=document.getElementById(`modal-container`);e&&(e.innerHTML=`
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div class="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div class="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div>
            <h3 class="text-lg font-bold text-white">Add Custom Iframe Game</h3>
            <p class="text-xs text-slate-400 mt-0.5">Add any web game embed to your personal unblocked games catalog</p>
          </div>
          <button id="close-modal-btn" class="p-1 rounded-lg text-slate-400 hover:text-white">✕</button>
        </div>
        <form id="add-game-form" class="p-6 flex flex-col gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Game Title *</label>
            <input id="new-title" type="text" required placeholder="e.g. Pixel Runner" class="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg text-white outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Category</label>
            <select id="new-category" class="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg text-white outline-none">
              <option value="Arcade">Arcade</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Action">Action</option>
              <option value="Retro">Retro</option>
              <option value="Sports">Sports</option>
              <option value="Strategy">Strategy</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Iframe / Embed URL *</label>
            <input id="new-url" type="text" required placeholder="./games/snake.html or https://..." class="w-full px-3.5 py-2 text-sm font-mono bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg text-white outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Description</label>
            <textarea id="new-desc" rows="2" placeholder="Brief gameplay summary..." class="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg text-white outline-none resize-none"></textarea>
          </div>
          <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button type="button" id="cancel-add-btn" class="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">Cancel</button>
            <button type="submit" class="px-5 py-2 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors">Add to Catalog</button>
          </div>
        </form>
      </div>
    </div>
  `,document.getElementById(`close-modal-btn`)?.addEventListener(`click`,()=>{e.innerHTML=``}),document.getElementById(`cancel-add-btn`)?.addEventListener(`click`,()=>{e.innerHTML=``}),document.getElementById(`add-game-form`)?.addEventListener(`submit`,n=>{n.preventDefault();let r=document.getElementById(`new-title`).value.trim(),i=document.getElementById(`new-category`).value,o=document.getElementById(`new-url`).value.trim(),s=document.getElementById(`new-desc`).value.trim();if(!r||!o)return;let c={id:`custom-`+Date.now(),title:r,slug:r.toLowerCase().replace(/[^a-z0-9]+/g,`-`),category:i,description:s||`Custom game loaded via iframe.`,iframeUrl:o,thumbnail:`custom`,controls:[`Arrow Keys: Move`,`Space: Action`],tags:[i,`Custom`],rating:5,plays:1,badge:`NEW`};t.games.unshift(c),localStorage.setItem(`nexus_games_catalog`,JSON.stringify(t.games)),e.innerHTML=``,t.selectedGame=c,a()}))}function l(){let n=document.getElementById(`modal-container`);if(!n)return;let r=JSON.stringify(t.games,null,2);n.innerHTML=`
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div class="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div class="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div>
            <h3 class="text-lg font-bold text-white">Iframe JSON Catalog</h3>
            <p class="text-xs text-slate-400">Direct storage: <span class="font-mono text-sky-400">./games.json</span> (${t.games.length} games configured)</p>
          </div>
          <button id="close-json-btn" class="p-1 rounded-lg text-slate-400 hover:text-white">✕</button>
        </div>

        <div class="flex items-center justify-between gap-2 px-6 py-2.5 bg-slate-950 border-b border-slate-800 text-xs">
          <button id="copy-json-btn" class="px-3 py-1.5 rounded-lg font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800">Copy JSON</button>
          <div class="flex items-center gap-2">
            <button id="download-json-btn" class="px-3 py-1.5 rounded-lg font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800">Download games.json</button>
            <button id="reset-json-btn" class="px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-rose-400 bg-slate-900 border border-slate-800">Reset Defaults</button>
          </div>
        </div>

        <div class="p-6 overflow-auto max-h-96 bg-slate-950/60">
          <pre class="font-mono text-xs text-slate-300 leading-relaxed whitespace-pre">${r}</pre>
        </div>
      </div>
    </div>
  `,document.getElementById(`close-json-btn`)?.addEventListener(`click`,()=>{n.innerHTML=``}),document.getElementById(`copy-json-btn`)?.addEventListener(`click`,function(){navigator.clipboard?.writeText(r),this.textContent=`Copied!`,setTimeout(()=>{this.textContent=`Copy JSON`},2e3)}),document.getElementById(`download-json-btn`)?.addEventListener(`click`,()=>{let e=new Blob([r],{type:`application/json`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`games.json`,n.click(),URL.revokeObjectURL(t)}),document.getElementById(`reset-json-btn`)?.addEventListener(`click`,()=>{confirm(`Reset to default games catalog?`)&&(localStorage.removeItem(`nexus_games_catalog`),t.games=e,n.innerHTML=``,a())})}function u(){document.getElementById(`brand-home`)?.addEventListener(`click`,e=>{e.preventDefault(),t.selectedGame=null,t.activeCategory=`All`,a()}),document.querySelectorAll(`.nav-cat-btn`).forEach(e=>{e.addEventListener(`click`,()=>{t.activeCategory=e.getAttribute(`data-cat`),t.selectedGame=null,a()})}),document.querySelectorAll(`.filter-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{t.activeCategory=e.getAttribute(`data-cat`),a()})}),document.getElementById(`open-add-btn`)?.addEventListener(`click`,c),document.getElementById(`open-json-btn`)?.addEventListener(`click`,l),document.getElementById(`footer-json-btn`)?.addEventListener(`click`,l),document.getElementById(`toggle-cloak-btn`)?.addEventListener(`click`,()=>{t.isCloaked=!t.isCloaked,document.title=t.isCloaked?`AP World History - Google Docs`:`Nexus Arcade - Unblocked Games Portal`,a()});let e=document.getElementById(`search-input`);e&&e.addEventListener(`input`,e=>{t.searchQuery=e.target.value,a();let n=document.getElementById(`search-input`);n&&(n.focus(),n.setSelectionRange(n.value.length,n.value.length))}),document.getElementById(`clear-search-btn`)?.addEventListener(`click`,()=>{t.searchQuery=``,a()}),document.getElementById(`reset-search-btn`)?.addEventListener(`click`,()=>{t.searchQuery=``,t.activeCategory=`All`,a()}),document.getElementById(`sort-select`)?.addEventListener(`change`,e=>{t.sortOption=e.target.value,a()}),document.querySelectorAll(`.play-btn-trigger, .game-card`).forEach(e=>{e.addEventListener(`click`,n=>{if(n.target.closest(`.fav-toggle-btn`))return;let r=e.getAttribute(`data-play-id`),i=t.games.find(e=>e.id===r);i&&(t.selectedGame=i,window.scrollTo({top:0,behavior:`smooth`}),a())})}),document.querySelectorAll(`.fav-toggle-btn`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let r=e.getAttribute(`data-fav-id`);t.favorites.includes(r)?t.favorites=t.favorites.filter(e=>e!==r):t.favorites.push(r),localStorage.setItem(`nexus_favorites`,JSON.stringify(t.favorites)),a()})});let n=()=>{t.selectedGame=t.games[Math.floor(Math.random()*t.games.length)],window.scrollTo({top:0,behavior:`smooth`}),a()};document.getElementById(`random-btn`)?.addEventListener(`click`,n),document.getElementById(`footer-random-btn`)?.addEventListener(`click`,n),document.getElementById(`back-to-catalog-btn`)?.addEventListener(`click`,()=>{t.selectedGame=null,a()}),document.getElementById(`reload-iframe-btn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`game-iframe`);e&&(e.src=e.src)}),document.getElementById(`toggle-theater-btn`)?.addEventListener(`click`,()=>{t.isTheater=!t.isTheater,a()}),document.getElementById(`toggle-fullscreen-btn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`player-container`);e&&(document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):e.requestFullscreen?.().catch(()=>{}))}),document.getElementById(`popout-tab-btn`)?.addEventListener(`click`,()=>{if(!t.selectedGame)return;let e=window.open(`about:blank`,`_blank`);if(e){e.document.title=`Google Docs`;let n=e.document.createElement(`iframe`);n.style.width=`100%`,n.style.height=`100%`,n.style.border=`none`,n.style.position=`fixed`,n.style.top=`0`,n.style.left=`0`,n.src=new URL(t.selectedGame.iframeUrl,window.location.href).href,n.allow=`autoplay; fullscreen; gamepad; focus-without-user-activation *`,e.document.body.style.margin=`0`,e.document.body.appendChild(n)}}),document.getElementById(`player-like-btn`)?.addEventListener(`click`,function(){if(!t.selectedGame)return;let e=t.likedGames[t.selectedGame.id]||Math.floor((t.selectedGame.plays||1e3)*.42);t.likedGames[t.selectedGame.id]=e+1,this.innerHTML=`👍 <span>${t.likedGames[t.selectedGame.id]} Likes</span>`}),document.getElementById(`player-fav-btn`)?.addEventListener(`click`,()=>{if(!t.selectedGame)return;let e=t.selectedGame.id;t.favorites.includes(e)?t.favorites=t.favorites.filter(t=>t!==e):t.favorites.push(e),localStorage.setItem(`nexus_favorites`,JSON.stringify(t.favorites)),a()}),document.getElementById(`player-share-btn`)?.addEventListener(`click`,function(){navigator.clipboard?.writeText(window.location.href),this.innerHTML=`<span>✓ Link Copied!</span>`,setTimeout(()=>{this.innerHTML=`<span>🔗 Share Game</span>`},2e3)})}function d(){document.getElementById(`exit-cloak-btn`)?.addEventListener(`click`,()=>{t.isCloaked=!1,document.title=`Nexus Arcade - Unblocked Games Portal`,a()})}window.DEFAULT_GAMES=e,window.render=a,window.initApp=n,document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,n):n();