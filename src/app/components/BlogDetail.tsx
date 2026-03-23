import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Calendar, Clock, Pin, Tag, User } from "lucide-react";
import { Link, useParams } from "react-router";
import { fetchPublishedBlogBySlug, fetchPublishedBlogs, getRelatedPosts } from "../lib/blogs";
import type { BlogPost } from "../types/blog";

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

export function BlogDetail() {
  const { slug = "" } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      setError("");

      try {
        const [selectedPost, allPostsResult] = await Promise.all([
          fetchPublishedBlogBySlug(slug),
          fetchPublishedBlogs(),
        ]);

        setPost(selectedPost);
        setPosts(allPostsResult.posts);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "Unable to load this article.");
      } finally {
        setLoading(false);
      }
    }

    void loadPost();
  }, [slug]);

  const relatedPosts = useMemo(
    () => (post ? getRelatedPosts(posts, post, 3) : []),
    [post, posts],
  );

  if (loading) {
    return (
      <section className="page-shell py-16">
        <div className="surface-card p-10 text-center text-slate-600">Loading article...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page-shell py-16">
        <div className="rounded-[2rem] border border-rose-200 bg-rose-50 px-6 py-5 text-rose-700">{error}</div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="page-shell py-16">
        <div className="surface-card p-10 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Article not found</h1>
          <p className="mt-3 text-slate-600">This blog may have been removed, unpublished, or the link is incorrect.</p>
          <Link to="/blog" className="cta-primary mt-6 inline-flex">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full py-4 pb-12 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <Link to="/blog" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
          <div className="mt-8 max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              {post.pinned && (
                <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">
                  <span className="inline-flex items-center gap-2">
                    <Pin className="h-4 w-4" />
                    Pinned article
                  </span>
                </span>
              )}
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">{post.category}</span>
            </div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-cyan-50">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatBlogDate(post.publishedAt ?? post.createdAt)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-10">
        <div className="surface-card overflow-hidden">
          <img src={post.image} alt={post.title} className="aspect-[16/7] w-full object-cover" />
          <div className="grid gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:p-10">
            <article>
              <div className="rounded-[1.75rem] bg-slate-50 p-6 text-base leading-8 text-slate-700">
                {post.content.split(/\n+/).map((paragraph, index) => (
                  <p key={`${post.id}-paragraph-${index}`} className={index === 0 ? "" : "mt-5"}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <aside className="space-y-5">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-800">Article snapshot</p>
                <div className="mt-5 space-y-4 text-sm text-slate-600">
                  <p className="flex items-center gap-2"><Tag className="h-4 w-4 text-cyan-700" /> {post.category}</p>
                  <p className="flex items-center gap-2"><User className="h-4 w-4 text-cyan-700" /> {post.author}</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-cyan-700" /> {post.readTime}</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-800">Explore more</p>
                <div className="mt-5 space-y-4">
                  {relatedPosts.length === 0 ? (
                    <p className="text-sm text-slate-600">More articles will appear here as the blog grows.</p>
                  ) : (
                    relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="block rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/40">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">{relatedPost.category}</p>
                        <h2 className="mt-2 text-sm font-bold text-slate-900">{relatedPost.title}</h2>
                        <p className="mt-2 text-sm text-slate-600">{relatedPost.readTime}</p>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
