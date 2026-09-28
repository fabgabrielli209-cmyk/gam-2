export interface Game {
  id: string;
  title: string;
  slug: string;
  category: 'Arcade' | 'Puzzle' | 'Action' | 'Retro' | 'Sports' | 'Strategy' | 'Other';
  description: string;
  iframeUrl: string;
  thumbnail: string;
  controls: string[];
  tags: string[];
  badge?: 'HOT' | 'POPULAR' | 'NEW' | 'CLASSIC';
  rating: number;
  plays: number;
  featured?: boolean;
  aspectRatio?: string;
  isCustom?: boolean;
}

export type CategoryFilter = 'All' | 'Arcade' | 'Puzzle' | 'Action' | 'Retro' | 'Sports' | 'Strategy' | 'Favorites';
export type SortOption = 'popular' | 'rating' | 'newest' | 'az';
