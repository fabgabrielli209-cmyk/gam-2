const fs = require('fs');
const path = require('path');

// 1. Read app.js
let appJs = fs.readFileSync('app.js', 'utf8');

// Update resolveGameUrl logic in appJs
const resolveUrlFunc = `
function resolveGameUrl(relPath) {
  if (!relPath) return '';
  if (relPath.startsWith('http://') || relPath.startsWith('https://')) return relPath;
  let basePath = window.location.pathname || '/';
  if (!basePath.endsWith('/')) {
    if (basePath.includes('.')) {
      basePath = basePath.substring(0, basePath.lastIndexOf('/') + 1);
    } else {
      basePath = basePath + '/';
    }
  }
  const cleanRel = relPath.replace(/^\\.\\//, '');
  return window.location.origin + basePath + cleanRel;
}
`;

// Insert resolveGameUrl and update references
appJs = resolveUrlFunc + '\n' + appJs;
appJs = appJs.replace(/new URL\(`games\.json`, ?window\.location\.href\)\.href/g, "resolveGameUrl('games.json')");
appJs = appJs.replace(/new URL\('games\.json', ?window\.location\.href\)\.href/g, "resolveGameUrl('games.json')");
appJs = appJs.replace(/new URL\(game\.iframeUrl, ?window\.location\.href\)\.href/g, "resolveGameUrl(game.iframeUrl)");
appJs = appJs.replace(/new URL\(state\.selectedGame\.iframeUrl, ?window\.location\.href\)\.href/g, "resolveGameUrl(state.selectedGame.iframeUrl)");

// 2. Read style.css
let styleCss = fs.readFileSync('style.css', 'utf8');

// Additional standalone CSS so everything looks great even without Tailwind CDN
const standaloneCss = `
* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 0;
  background-color: #020617;
  color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }
input, select, textarea { font-family: inherit; }

/* Grid layout fallback */
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
@media (min-width: 640px) {
  .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (min-width: 1024px) {
  .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
  .lg\\:col-span-7 { grid-column: span 7 / span 7; }
  .lg\\:col-span-5 { grid-column: span 5 / span 5; }
}
@media (min-width: 1280px) {
  .xl\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

/* Flex layout fallback */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.gap-1 { gap: 0.25rem; }
.gap-1\\.5 { gap: 0.375rem; }
.gap-2 { gap: 0.5rem; }
.gap-2\\.5 { gap: 0.625rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-5 { gap: 1.25rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }
.w-full { width: 100%; }
.max-w-7xl { max-width: 80rem; margin-left: auto; margin-right: auto; }
.min-h-screen { min-height: 100vh; }
`;

// 3. Assemble self-contained index.html
const indexHtml = `<!doctype html>
<html lang="en" class="dark" style="background-color: #020617; color: #f8fafc;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nexus Arcade - Unblocked Games Portal</title>
    <meta name="description" content="A fast, clean unblocked games portal featuring classic HTML5 games loaded via an iframe JSON catalog." />
    <meta property="og:title" content="Nexus Arcade - Unblocked Games Portal" />
    <meta property="og:description" content="A fast, clean unblocked games portal featuring classic HTML5 games loaded via an iframe JSON catalog." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2338bdf8'><path d='M6 11h4V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z'/></svg>" />

    <!-- Tailwind CSS with fallback styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      try {
        tailwind.config = {
          darkMode: 'class',
          theme: {
            extend: {
              colors: {
                slate: {
                  950: '#020617',
                  900: '#0f172a',
                  850: '#151f32',
                  800: '#1e293b',
                  700: '#334155',
                  600: '#475569',
                }
              }
            }
          }
        };
      } catch (e) {}
    </script>

    <style>
      ${styleCss}
      ${standaloneCss}
    </style>
  </head>
  <body class="bg-slate-950 text-slate-100 antialiased min-h-screen" style="background-color: #020617; color: #f8fafc; margin: 0;">
    <div id="root">
      <div style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; background-color: #020617; color: #94a3b8;">
        <div style="width: 40px; height: 40px; border: 4px solid #38bdf8; border-top-color: transparent; border-radius: 50%;" class="spinner"></div>
        <div style="font-size: 14px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">Loading Nexus Arcade...</div>
      </div>
    </div>

    <!-- Self-Contained App Logic -->
    <script>
      ${appJs}
    </script>
  </body>
</html>`;

// Write to root index.html and 404.html
fs.writeFileSync('index.html', indexHtml, 'utf8');
fs.writeFileSync('404.html', indexHtml, 'utf8');

// Write updated app.js as well
fs.writeFileSync('app.js', appJs, 'utf8');

// Ensure dist and docs exist and copy files
fs.mkdirSync('dist', { recursive: true });
fs.mkdirSync('docs', { recursive: true });

fs.writeFileSync('dist/index.html', indexHtml, 'utf8');
fs.writeFileSync('dist/404.html', indexHtml, 'utf8');
fs.writeFileSync('dist/app.js', appJs, 'utf8');
fs.writeFileSync('dist/style.css', styleCss, 'utf8');

fs.writeFileSync('docs/index.html', indexHtml, 'utf8');
fs.writeFileSync('docs/404.html', indexHtml, 'utf8');
fs.writeFileSync('docs/app.js', appJs, 'utf8');
fs.writeFileSync('docs/style.css', styleCss, 'utf8');

// Copy games folder and games.json to docs and dist
fs.cpSync('public/games', 'games', { recursive: true });
fs.cpSync('public/games.json', 'games.json');

fs.cpSync('public/games', 'dist/games', { recursive: true });
fs.cpSync('public/games.json', 'dist/games.json');

fs.cpSync('public/games', 'docs/games', { recursive: true });
fs.cpSync('public/games.json', 'docs/games.json');

// Write .nojekyll
fs.writeFileSync('.nojekyll', '', 'utf8');
fs.writeFileSync('public/.nojekyll', '', 'utf8');
fs.writeFileSync('dist/.nojekyll', '', 'utf8');
fs.writeFileSync('docs/.nojekyll', '', 'utf8');

console.log('Build completed successfully!');
