import React, { useState } from 'react';
import { X, Plus, Eye, AlertCircle } from 'lucide-react';
import { Game } from '../types';

interface AddGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGame: (newGame: Game) => void;
}

export const AddGameModal: React.FC<AddGameModalProps> = ({
  isOpen,
  onClose,
  onAddGame,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Game['category']>('Arcade');
  const [iframeUrl, setIframeUrl] = useState('');
  const [description, setDescription] = useState('');
  const [controlsText, setControlsText] = useState('Arrow Keys: Move · Space: Action');
  const [previewActive, setPreviewActive] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please enter a game title');
      return;
    }
    if (!iframeUrl.trim()) {
      setError('Please enter a valid iframe URL');
      return;
    }

    const newGame: Game = {
      id: 'custom-' + Date.now(),
      title: title.trim(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category,
      description: description.trim() || 'Custom community game added via iframe.',
      iframeUrl: iframeUrl.trim(),
      thumbnail: 'custom',
      controls: controlsText.split('·').map((s) => s.trim()).filter(Boolean),
      tags: [category, 'Custom', 'Iframe'],
      rating: 5.0,
      plays: 1,
      badge: 'NEW',
      isCustom: true,
    };

    onAddGame(newGame);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white">Add Custom Iframe Game</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Add any web game embed to your personal unblocked games catalog
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex flex-col gap-4">
          {error && (
            <div className="flex items-center gap-2 p-3 text-xs text-rose-300 bg-rose-950/50 border border-rose-800/80 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Game Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => { setTitle(e.target.value); setError(''); }}
              placeholder="e.g. Pixel Adventure 2"
              className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-lg text-white placeholder-slate-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Game['category'])}
              className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg text-white outline-none"
            >
              <option value="Arcade">Arcade</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Action">Action</option>
              <option value="Retro">Retro</option>
              <option value="Sports">Sports</option>
              <option value="Strategy">Strategy</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Iframe / Embed URL *
              </label>
              {iframeUrl && (
                <button
                  type="button"
                  onClick={() => setPreviewActive(!previewActive)}
                  className="flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300"
                >
                  <Eye className="w-3 h-3" />
                  <span>{previewActive ? 'Hide Preview' : 'Test Iframe'}</span>
                </button>
              )}
            </div>
            <input
              type="text"
              required
              value={iframeUrl}
              onChange={(e) => { setIframeUrl(e.target.value); setError(''); }}
              placeholder="https://example.com/game or /games/custom.html"
              className="w-full px-3.5 py-2 text-sm font-mono bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-lg text-white placeholder-slate-500 outline-none"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Supports HTML5 game pages, relative links (e.g. /games/snake.html), or embed URLs.
            </p>
          </div>

          {/* Test Iframe preview */}
          {previewActive && iframeUrl && (
            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 aspect-16/9">
              <iframe
                src={iframeUrl}
                title="Preview"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Controls (separated by ·)
            </label>
            <input
              type="text"
              value={controlsText}
              onChange={(e) => setControlsText(e.target.value)}
              placeholder="WASD: Move · Space: Jump"
              className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg text-white placeholder-slate-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description of the gameplay..."
              className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-lg text-white placeholder-slate-500 outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors shadow-md shadow-sky-500/20"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Catalog</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
