import { fallbackBlogPosts, mapBlogRow } from "../data/blog";
import type { BlogPost, BlogRow } from "../types/blog";
import { hasSupabaseEnv, supabase } from "./supabase";

export interface BlogFilters {
  search: string;
  category: string;
  sort: "newest" | "oldest" | "title-asc" | "read-time";
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function comparePinned(left: BlogPost, right: BlogPost) {
  if (left.pinned === right.pinned) {
    return 0;
  }

  return left.pinned ? -1 : 1;
}

function sortByPinnedAndNewest(posts: BlogPost[]) {
  return posts.sort((left, right) => {
    const pinnedComparison = comparePinned(left, right);

    if (pinnedComparison !== 0) {
      return pinnedComparison;
    }

    return new Date(right.publishedAt ?? right.createdAt).getTime() - new Date(left.publishedAt ?? left.createdAt).getTime();
  });
}

export function filterAndSortPosts(posts: BlogPost[], filters: BlogFilters) {
  const search = normalizeText(filters.search);

  const filtered = posts.filter((post) => {
    const matchesCategory = filters.category === "All" || post.category === filters.category;
    const haystack = `${post.title} ${post.excerpt} ${post.content} ${post.author} ${post.category}`.toLowerCase();
    const matchesSearch = !search || haystack.includes(search);

    return matchesCategory && matchesSearch;
  });

  return filtered.sort((left, right) => {
    const pinnedComparison = comparePinned(left, right);

    if (pinnedComparison !== 0) {
      return pinnedComparison;
    }

    if (filters.sort === "oldest") {
      return new Date(left.publishedAt ?? left.createdAt).getTime() - new Date(right.publishedAt ?? right.createdAt).getTime();
    }

    if (filters.sort === "title-asc") {
      return left.title.localeCompare(right.title);
    }

    if (filters.sort === "read-time") {
      return left.readTimeMinutes - right.readTimeMinutes;
    }

    return new Date(right.publishedAt ?? right.createdAt).getTime() - new Date(left.publishedAt ?? left.createdAt).getTime();
  });
}

export function getRelatedPosts(posts: BlogPost[], currentPost: BlogPost, limit = 3) {
  return posts
    .filter((post) => post.id !== currentPost.id)
    .sort((left, right) => {
      const categoryBoostLeft = left.category === currentPost.category ? 1 : 0;
      const categoryBoostRight = right.category === currentPost.category ? 1 : 0;

      if (categoryBoostLeft !== categoryBoostRight) {
        return categoryBoostRight - categoryBoostLeft;
      }

      return new Date(right.publishedAt ?? right.createdAt).getTime() - new Date(left.publishedAt ?? left.createdAt).getTime();
    })
    .slice(0, limit);
}

export async function fetchPublishedBlogs() {
  if (!hasSupabaseEnv || !supabase) {
    return {
      posts: sortByPinnedAndNewest([...fallbackBlogPosts]),
      usingFallback: true,
    };
  }

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return {
    posts: sortByPinnedAndNewest(((data ?? []) as BlogRow[]).map(mapBlogRow)),
    usingFallback: false,
  };
}

export async function fetchAdminBlogs() {
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return sortByPinnedAndNewest(((data ?? []) as BlogRow[]).map(mapBlogRow));
}

export async function fetchPublishedBlogBySlug(slug: string) {
  if (!hasSupabaseEnv || !supabase) {
    return fallbackBlogPosts.find((post) => post.slug === slug && post.published) ?? null;
  }

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ? mapBlogRow(data as BlogRow) : null;
}
