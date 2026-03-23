export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  readTimeMinutes: number;
  pinned: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string | null;
  publishedAt: string | null;
}

export interface BlogRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  cover_image_url: string;
  read_time_minutes: number | null;
  pinned: boolean | null;
  published: boolean | null;
  created_at: string;
  updated_at: string | null;
  published_at: string | null;
}
