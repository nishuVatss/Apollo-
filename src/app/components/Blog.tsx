import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Calendar, Clock, Pin, Search, SlidersHorizontal, Sparkles, Tag, User } from "lucide-react";
import { Link } from "react-router";
import { fetchPublishedBlogs, filterAndSortPosts, type BlogFilters } from "../lib/blogs";
import type { BlogPost } from "../types/blog";

const initialFilters: BlogFilters = {
  search: "",
  category: "All",
  sort: "newest",
};

function formatBlogDate(value: string | null) {
  if (!value) {
    return "Recently published";
  }

  return new Date(value).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filters, setFilters] = useState<BlogFilters>(initialFilters);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      setError("");

      try {
        const result = await fetchPublishedBlogs();
        setPosts(result.posts);
        setUsingFallback(result.usingFallback);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "Unable to load articles.");
      } finally {
        setLoading(false);
      }
    }

    void loadPosts();
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts],
  );

  const visiblePosts = useMemo(
    () => filterAndSortPosts([...posts], filters),
    [filters, posts],
  );

  const featuredPost = visiblePosts[0];
  const otherPosts = visiblePosts.slice(1);

  return (
    <div className="w-full py-4 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <div className="max-w-3xl">
            <div className="section-kicker mb-5 text-cyan-950">
              <Sparkles className="h-4 w-4" />
              Knowledge hub
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Health stories, expert guidance, and published updates from the care team.</h1>
            <p className="text-lg text-cyan-50 md:text-xl">
              Search, filter, sort, and explore every article on its own page.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-8">
        <div className="surface-card p-5 md:p-6">
          <div className="grid gap-4 xl:grid-cols-[1.25fr_0.9fr_0.85fr]">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Search className="h-4 w-4 text-cyan-700" />
                Search blogs
              </span>
              <input
                value={filters.search}
                onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))}
                placeholder="Search by title, keyword, author, or category"
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
              />
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Tag className="h-4 w-4 text-cyan-700" />
                Category filter
              </span>
              <select
                value={filters.category}
                onChange={(event) => setFilters((current) => ({ ...current, category: event.target.value }))}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <SlidersHorizontal className="h-4 w-4 text-cyan-700" />
                Sort results
              </span>
              <select
                value={filters.sort}
                onChange={(event) => setFilters((current) => ({ ...current, sort: event.target.value as BlogFilters["sort"] }))}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="title-asc">Title A-Z</option>
                <option value="read-time">Shortest read time</option>
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilters((current) => ({ ...current, category }))}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  filters.category === category
                    ? "bg-cyan-700 text-white shadow-[0_12px_28px_rgba(14,116,144,0.24)]"
                    : "border border-white/70 bg-white/80 text-slate-700 backdrop-blur-xl hover:bg-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
            <p>{visiblePosts.length} article{visiblePosts.length === 1 ? "" : "s"} found</p>
            {usingFallback && (
              <p className="rounded-full bg-amber-50 px-4 py-2 font-semibold text-amber-700">
                Showing saved articles while the live feed is unavailable.
              </p>
            )}
          </div>
        </div>
      </section>

      {error && (
        <section className="page-shell pb-8">
          <div className="rounded-[2rem] border border-rose-200 bg-rose-50 px-6 py-5 text-rose-700">
            {error}
          </div>
        </section>
      )}

      {loading ? (
        <section className="page-shell pb-12 md:pb-16">
          <div className="surface-card p-12 text-center text-slate-600">Loading articles...</div>
        </section>
      ) : featuredPost ? (
        <>
          <section className="page-shell pb-12 md:pb-16">
            <div className="surface-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video overflow-hidden lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-cyan-50 px-4 py-1 text-sm font-semibold text-cyan-800">
                      {featuredPost.pinned ? "Pinned" : "Featured"}
                    </span>
                    <span className="rounded-full bg-rose-50 px-4 py-1 text-sm font-semibold text-rose-700">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-slate-900 transition-colors hover:text-cyan-700">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-6 leading-7 text-slate-600">{featuredPost.excerpt}</p>
                  <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatBlogDate(featuredPost.publishedAt ?? featuredPost.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-50 p-5 text-slate-600">
                    <p className="line-clamp-5 whitespace-pre-line leading-7">{featuredPost.content}</p>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`} className="cta-primary mt-6 inline-flex">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="page-shell pb-16 md:pb-24">
            <h2 className="mb-10 text-3xl font-bold text-slate-900">Recent Articles</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {otherPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="surface-card lift-card group overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden rounded-t-[1.75rem]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      {post.pinned ? <Pin className="h-4 w-4 text-rose-600" /> : <Tag className="h-4 w-4 text-cyan-700" />}
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${post.pinned ? "bg-rose-50 text-rose-700" : "bg-cyan-50 text-cyan-800"}`}>
                        {post.pinned ? "Pinned" : post.category}
                      </span>
                    </div>
                    <h3 className="mb-3 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-slate-600">{post.excerpt}</p>
                    <div className="mb-4 space-y-2 border-b border-cyan-100 pb-4 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{formatBlogDate(post.publishedAt ?? post.createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm font-semibold text-cyan-700">
                      <span className="line-clamp-1">{post.category}</span>
                      <span className="inline-flex items-center">
                        Open article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="page-shell pb-12 md:pb-16">
          <div className="surface-card p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900">No articles match these filters yet.</h2>
            <p className="mt-3 text-slate-600">Try clearing the search, switching category, or publish a new article from the admin panel.</p>
          </div>
        </section>
      )}

      <section className="page-shell">
        <div className="hero-shell py-12 text-center md:py-14">
          <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl text-cyan-50">
            Medical updates, cancer awareness guidance, and patient education content delivered directly to your inbox.
          </p>
          <div className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-12 flex-1 rounded-full border border-white/40 bg-white px-6 py-3 text-slate-900 outline-none ring-0"
            />
            <button className="cta-primary bg-white px-8 py-3 text-cyan-800">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
