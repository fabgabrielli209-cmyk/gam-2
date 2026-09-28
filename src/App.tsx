import { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, SlidersHorizontal, Gamepad, Sparkles, FolderArchive } from 'lucide-react';
import { Game, CategoryFilter, SortOption } from './types';
import { DEFAULT_GAMES } from './data/defaultGames';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { GameCard } from './components/GameCard';
import { GamePlayer } from './components/GamePlayer';
import { AddGameModal } from './components/AddGameModal';
import { JsonCatalogModal } from './components/JsonCatalogModal';
import { CloakView } from './components/CloakView';

const REMOVED_GAME_IDS = new Set([
  'block-master-tetris',
  'game-2048',
  'flappy-wings',
  'cyber-breakout',
  'star-defender',
  'pong-legends',
  'desert-dino-run',
  'minesweeper-classic',
  'highway-rush-2d'
]);

export default function App() {
  const [games, setGames] = useState<Game[]>(() => {
    try {
      const saved = localStorage.getItem('nexus_games_catalog');
      if (saved) {
        const parsed: Game[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cleaned = parsed.filter(g => !REMOVED_GAME_IDS.has(g.id));
          if (cleaned.length > 0) {
            localStorage.setItem('nexus_games_catalog', JSON.stringify(cleaned));
            return cleaned;
          }
        }
      }
    } catch {}
    localStorage.removeItem('nexus_games_catalog');
    return DEFAULT_GAMES;
  });
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('popular');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('nexus_favorites') || '[]');
      if (Array.isArray(saved)) {
        const cleaned = saved.filter(id => !REMOVED_GAME_IDS.has(id));
        localStorage.setItem('nexus_favorites', JSON.stringify(cleaned));
        return cleaned;
      }
      return [];
    } catch {
      return [];
    }
  });
  const [isCloaked, setIsCloaked] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load games from localStorage or fetch games.json
  const loadGames = useCallback(async () => {
    try {
      const saved = localStorage.getItem('nexus_games_catalog');
      if (saved) {
        const parsed: Game[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cleaned = parsed.filter(g => !REMOVED_GAME_IDS.has(g.id));
          if (cleaned.length > 0) {
            setGames(cleaned);
            localStorage.setItem('nexus_games_catalog', JSON.stringify(cleaned));
            return;
          }
        }
      }

      // Fetch the iframe JSON file with relative fallback
      const jsonPath = new URL('games.json', window.location.href).href;
      const response = await fetch(jsonPath);
      if (response.ok) {
        const data: Game[] = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const cleaned = data.filter(g => !REMOVED_GAME_IDS.has(g.id));
          setGames(cleaned.length > 0 ? cleaned : DEFAULT_GAMES);
          localStorage.setItem('nexus_games_catalog', JSON.stringify(cleaned.length > 0 ? cleaned : DEFAULT_GAMES));
          return;
        }
      }
    } catch (e) {
      console.warn('Could not fetch games.json, using bundled catalog:', e);
    }
    setGames(DEFAULT_GAMES);
  }, []);

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  // Handle Tab Cloaking
  const toggleCloak = useCallback(() => {
    setIsCloaked((prev) => {
      const nextState = !prev;
      if (nextState) {
        document.title = 'AP World History - Google Docs';
      } else {
        document.title = 'Nexus Arcade - Unblocked Games Portal';
      }
      return nextState;
    });
  }, []);

  // Emergency Escape listener for panic cloak
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isAddModalOpen && !isJsonModalOpen) {
        toggleCloak();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAddModalOpen, isJsonModalOpen, toggleCloak]);

  // Toggle Favorite
  const toggleFavorite = (gameId: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(gameId)
        ? prev.filter((id) => id !== gameId)
        : [...prev, gameId];
      localStorage.setItem('nexus_favorites', JSON.stringify(updated));
      return updated;
    });
  };

  // Add Custom Game
  const handleAddGame = (newGame: Game) => {
    setGames((prev) => {
      const updated = [newGame, ...prev];
      localStorage.setItem('nexus_games_catalog', JSON.stringify(updated));
      return updated;
    });
    setSelectedGame(newGame);
  };

  // Import JSON Catalog
  const handleImportJson = (newGames: Game[]) => {
    setGames(newGames);
    localStorage.setItem('nexus_games_catalog', JSON.stringify(newGames));
  };

  // Reset to default games.json
  const handleResetDefaults = async () => {
    localStorage.removeItem('nexus_games_catalog');
    try {
      const response = await fetch(new URL('games.json', window.location.href).href);
      if (response.ok) {
        const data = await response.json();
        setGames(data);
        return;
      }
    } catch (e) {
      console.warn(e);
    }
    setGames(DEFAULT_GAMES);
  };

  // Random Game Picker
  const handleRandomGame = () => {
    if (games.length === 0) return;
    const randomIndex = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIndex]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Featured Game Spotlight
  const featuredGame = useMemo(() => {
    return games.find((g) => g.featured) || games[0] || null;
  }, [games]);

  // Filter & Sort Games
  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        // Category filter
        if (activeCategory === 'Favorites') {
          if (!favorites.includes(game.id)) return false;
        } else if (activeCategory !== 'All' && game.category !== activeCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = game.title.toLowerCase().includes(q);
          const matchDesc = game.description.toLowerCase().includes(q);
          const matchCategory = game.category.toLowerCase().includes(q);
          const matchTags = game.tags.some((t) => t.toLowerCase().includes(q));
          return matchTitle || matchDesc || matchCategory || matchTags;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortOption === 'popular') return b.plays - a.plays;
        if (sortOption === 'rating') return b.rating - a.rating;
        if (sortOption === 'az') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [games, activeCategory, favorites, searchQuery, sortOption]);

  if (isCloaked) {
    return <CloakView onDeactivate={() => setIsCloaked(false)} />;
  }

  const categoryTabs: CategoryFilter[] = [
    'All',
    'Strategy',
    'Action',
    'Arcade',
    'Favorites',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Navbar with 3-Zone top bar contract */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedGame(null);
        }}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenJsonModal={() => setIsJsonModalOpen(true)}
        onToggleCloak={toggleCloak}
        isCloaked={isCloaked}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full">
        {selectedGame ? (
          <GamePlayer
            game={selectedGame}
            onBack={() => setSelectedGame(null)}
            isFavorite={favorites.includes(selectedGame.id)}
            onToggleFavorite={toggleFavorite}
            allGames={games}
            onSelectGame={(g) => {
              setSelectedGame(g);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            favorites={favorites}
          />
        ) : (
          <>
            {/* Hero Banner for featured game (only when viewing All and no search) */}
            {activeCategory === 'All' && !searchQuery && (
              <HeroBanner
                featuredGame={featuredGame}
                onPlayGame={(g) => setSelectedGame(g)}
                onRandomGame={handleRandomGame}
              />
            )}

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
              {/* Category segmented filter buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
                {categoryTabs.map((tab) => {
                  const isActive = activeCategory === tab;
                  const isFav = tab === 'Favorites';
                  const favCount = favorites.length;

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveCategory(tab)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-sky-500 text-white shadow-sm'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/80'
                      }`}
                    >
                      <span>{tab}</span>
                      {isFav && favCount > 0 && (
                        <span
                          className={`font-mono text-[10px] px-1.5 py-0.2 rounded-full ${
                            isActive ? 'bg-sky-700 text-white' : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {favCount}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Search & Sort controls */}
              <div className="flex items-center gap-2.5">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search games or tags..."
                    className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-900 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Sort selector */}
                <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-400">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as SortOption)}
                    className="bg-transparent text-slate-300 text-xs focus:outline-none cursor-pointer pr-1"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="az">A to Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Games Section Heading & Count */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {activeCategory === 'All' ? 'All Unblocked Games' : `${activeCategory} Games`}
                </h2>
                <span className="text-xs text-slate-500 font-mono tabular-nums">
                  ({filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'})
                </span>
              </div>

              {searchQuery && (
                <div className="text-xs text-slate-400">
                  Showing results for &ldquo;<span className="text-sky-400">{searchQuery}</span>&rdquo;
                </div>
              )}
            </div>

            {/* Games Grid */}
            {isLoading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3 text-slate-400">
                <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-medium">Loading iframe games catalog...</span>
              </div>
            ) : filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    isFavorite={favorites.includes(game.id)}
                    onToggleFavorite={toggleFavorite}
                    onPlay={(g) => {
                      setSelectedGame(g);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 flex flex-col items-center justify-center gap-3 text-center rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                <Gamepad className="w-12 h-12 text-slate-600 mb-1" />
                <h3 className="text-base font-bold text-white">No games match your criteria</h3>
                <p className="text-xs text-slate-400 max-w-sm">
                  {activeCategory === 'Favorites'
                    ? "You haven't bookmarked any favorite games yet. Click the heart icon on any game card to add it here!"
                    : 'Try clearing your search query or switching to another category.'}
                </p>
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-lg hover:bg-sky-500/20"
                  >
                    Clear Search
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveCategory('All')}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-lg hover:bg-slate-700"
                  >
                    Show All Games
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 px-4 sm:px-6 mt-16 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-400">Nexus Arcade</span>
            <span aria-hidden="true">·</span>
            <span>HTML5 Unblocked Games Catalog</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{games.length} Games in JSON</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setIsJsonModalOpen(true)}
              className="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>View games.json</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={handleRandomGame}
              className="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Random Play</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AddGameModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddGame={handleAddGame}
      />

      <JsonCatalogModal
        isOpen={isJsonModalOpen}
        onClose={() => setIsJsonModalOpen(false)}
        games={games}
        onImportJson={handleImportJson}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
