import { Calendar, Clock, User, Tag, Sparkles, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";

export function Blog() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <div className="w-full py-4 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <div className="max-w-3xl">
            <div className="section-kicker mb-5 text-cyan-950">
              <Sparkles className="h-4 w-4" />
              Knowledge hub
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Health stories and guidance with a more editorial, mobile-ready layout.</h1>
            <p className="text-lg text-cyan-50 md:text-xl">
              The blog now uses calmer color contrast, stronger cards, and swipe-friendly category chips for easier browsing on smaller screens.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-8">
        <div className="chip-row">
          <button className="rounded-full bg-cyan-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(14,116,144,0.24)]">
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-white/70 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-700 backdrop-blur-xl transition-colors hover:bg-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="page-shell pb-12 md:pb-16">
        <div className="surface-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video overflow-hidden lg:aspect-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan-50 px-4 py-1 text-sm font-semibold text-cyan-800">Featured</span>
                <span className="rounded-full bg-rose-50 px-4 py-1 text-sm font-semibold text-rose-700">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 transition-colors hover:text-cyan-700">
                {blogPosts[0].title}
              </h2>
              <p className="mb-6 leading-7 text-slate-600">{blogPosts[0].excerpt}</p>
              <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <button className="cta-primary">
                Read Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <h2 className="mb-10 text-3xl font-bold text-slate-900">Recent Articles</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
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
                  <Tag className="h-4 w-4 text-cyan-700" />
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                    {post.category}
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
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-semibold text-cyan-700">Read more</span>
              </div>
            </article>
          ))}
        </div>
      </section>

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
