import React, { useState } from 'react';
import { X, Copy, Check, Download, RefreshCw, FileCode, Upload } from 'lucide-react';
import { Game } from '../types';

interface JsonCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  games: Game[];
  onImportJson: (newGames: Game[]) => void;
  onResetDefaults: () => void;
}

export const JsonCatalogModal: React.FC<JsonCatalogModalProps> = ({
  isOpen,
  onClose,
  games,
  onImportJson,
  onResetDefaults,
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [jsonText, setJsonText] = useState(JSON.stringify(games, null, 2));
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const jsonString = JSON.stringify(games, null, 2);

  const handleCopy = () => {
    navigator.clipboard?.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'games.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveEdit = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (!Array.isArray(parsed)) {
        throw new Error('JSON root must be an array of game objects');
      }
      onImportJson(parsed);
      setIsEditing(false);
      setSuccess('Successfully updated games catalog from JSON!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Invalid JSON format';
      setError(message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Iframe JSON Catalog</h3>
              <p className="text-xs text-slate-400">
                Source: <span className="font-mono text-sky-400">/public/games.json</span> ({games.length} games configured)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-2.5 bg-slate-950 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsEditing(!isEditing);
                setJsonText(JSON.stringify(games, null, 2));
                setError('');
              }}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isEditing
                  ? 'bg-sky-500 text-white'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {isEditing ? 'Cancel Edit' : 'Edit JSON'}
            </button>

            {isEditing && (
              <button
                onClick={handleSaveEdit}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Apply JSON</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Reset catalog to default games.json?')) {
                  onResetDefaults();
                  setIsEditing(false);
                }
              }}
              title="Reset to default games"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-rose-400 bg-slate-900 border border-slate-800 hover:border-rose-900/50 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        {error && (
          <div className="px-6 py-2 bg-rose-950/60 border-b border-rose-800 text-rose-300 text-xs">
            Error: {error}
          </div>
        )}
        {success && (
          <div className="px-6 py-2 bg-emerald-950/60 border-b border-emerald-800 text-emerald-300 text-xs">
            {success}
          </div>
        )}

        {/* JSON Viewer / Editor */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col bg-slate-950/60">
          {isEditing ? (
            <textarea
              value={jsonText}
              onChange={(e) => { setJsonText(e.target.value); setError(''); }}
              className="w-full h-80 sm:h-96 font-mono text-xs text-sky-300 bg-slate-950 border border-slate-800 rounded-xl p-4 outline-none focus:border-sky-500 resize-none leading-relaxed"
              spellCheck={false}
            />
          ) : (
            <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-4 overflow-auto max-h-96">
              <pre className="font-mono text-xs text-slate-300 leading-relaxed whitespace-pre">
                {jsonString}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 text-xs text-slate-400 bg-slate-900/60">
          <span>Games stored with direct iframe URLs in JSON</span>
          <a
            href="/games.json"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline flex items-center gap-1"
          >
            Open raw /games.json &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};
