import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Calendar, Edit3, LogOut, Pin, PinOff, PlusCircle, RefreshCcw, Search, Send, Trash2, XCircle } from "lucide-react";
import { fetchAdminBlogs } from "../lib/blogs";
import { supabase } from "../lib/supabase";
import { useAdminAuth } from "../contexts/AdminAuthContext";
import type { BlogPost } from "../types/blog";

interface BlogFormState {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  readTimeMinutes: string;
  published: boolean;
}

const initialFormState: BlogFormState = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  author: "",
  category: "",
  image: "",
  readTimeMinutes: "5",
  published: true,
};

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createFormState(post: BlogPost): BlogFormState {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    author: post.author,
    category: post.category,
    image: post.image,
    readTimeMinutes: String(post.readTimeMinutes),
    published: post.published,
  };
}

export function AdminPanel() {
  const { session, signOut } = useAdminAuth();
  const [form, setForm] = useState<BlogFormState>(initialFormState);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  async function loadPosts() {
    setLoading(true);
    setError("");

    try {
      const data = await fetchAdminBlogs();
      setPosts(data);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to load articles.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadPosts();
  }, []);

  function resetForm() {
    setForm(initialFormState);
    setEditingPostId(null);
  }

  async function handleSavePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase) {
      setError("Configuration is incomplete.");
      return;
    }

    setSubmitting(true);
    setMessage("");
    setError("");

    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim() || createSlug(form.title),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      author: form.author.trim(),
      category: form.category.trim(),
      cover_image_url: form.image.trim(),
      read_time_minutes: Number(form.readTimeMinutes) || 5,
      published: form.published,
      published_at: form.published ? new Date().toISOString() : null,
    };

    const query = editingPostId
      ? supabase.from("blogs").update(payload).eq("id", editingPostId)
      : supabase.from("blogs").insert(payload);

    const { error: saveError } = await query;

    if (saveError) {
      setError(saveError.message);
      setSubmitting(false);
      return;
    }

    setMessage(editingPostId ? "Blog post updated successfully." : payload.published ? "Blog post published successfully." : "Draft saved successfully.");
    setSubmitting(false);
    resetForm();
    await loadPosts();
  }

  function startEditing(post: BlogPost) {
    setEditingPostId(post.id);
    setForm(createFormState(post));
    setMessage("");
    setError("");
  }

  async function togglePublish(post: BlogPost) {
    if (!supabase) {
      return;
    }

    setError("");
    setMessage("");

    const nextPublished = !post.published;

    const { error: updateError } = await supabase
      .from("blogs")
      .update({
        published: nextPublished,
        published_at: nextPublished ? new Date().toISOString() : null,
      })
      .eq("id", post.id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setMessage(nextPublished ? "Post published." : "Post moved back to draft.");
    await loadPosts();
  }

  async function togglePinned(post: BlogPost) {
    if (!supabase) {
      return;
    }

    setError("");
    setMessage("");

    if (!post.pinned) {
      const { error: resetPinnedError } = await supabase.from("blogs").update({ pinned: false }).eq("pinned", true);

      if (resetPinnedError) {
        setError(resetPinnedError.message);
        return;
      }
    }

    const { error: pinError } = await supabase
      .from("blogs")
      .update({ pinned: !post.pinned })
      .eq("id", post.id);

    if (pinError) {
      setError(pinError.message);
      return;
    }

    setMessage(!post.pinned ? "Article pinned to the top of the blog." : "Pinned article removed from the top position.");
    await loadPosts();
  }

  async function removePost(postId: string) {
    if (!supabase) {
      return;
    }

    setError("");
    setMessage("");

    const { error: deleteError } = await supabase.from("blogs").delete().eq("id", postId);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    if (editingPostId === postId) {
      resetForm();
    }

    setMessage("Post deleted.");
    await loadPosts();
  }

  const visiblePosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      if (!query) {
        return true;
      }

      return `${post.title} ${post.author} ${post.category} ${post.slug}`.toLowerCase().includes(query);
    });
  }, [posts, search]);

  return (
    <section className="page-shell py-10 md:py-14">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-800">Admin</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Manage articles</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Logged in as <span className="font-semibold text-slate-900">{session?.user.email}</span>.
          </p>
        </div>

        <button onClick={() => void signOut()} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50">
          <span className="inline-flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Sign Out
          </span>
        </button>
      </div>

      {(message || error) && (
        <div className={`mb-6 rounded-3xl px-5 py-4 text-sm ${error ? "border border-rose-200 bg-rose-50 text-rose-700" : "border border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
          {error || message}
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card p-7 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <PlusCircle className="h-5 w-5 text-cyan-700" />
              <h2 className="text-2xl font-bold text-slate-900">{editingPostId ? "Edit article" : "Create article"}</h2>
            </div>
            {editingPostId && (
              <button onClick={resetForm} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                <span className="inline-flex items-center gap-2">
                  <XCircle className="h-4 w-4" />
                  Cancel edit
                </span>
              </button>
            )}
          </div>

          <form onSubmit={handleSavePost} className="grid gap-5 md:grid-cols-2">
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Title</span>
              <input
                value={form.title}
                onChange={(event) => {
                  const title = event.target.value;
                  setForm((current) => ({
                    ...current,
                    title,
                    slug: createSlug(title),
                  }));
                }}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
                placeholder="How precision diagnostics guide better treatment"
                required
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Slug</span>
              <input
                value={form.slug}
                onChange={(event) => setForm((current) => ({ ...current, slug: createSlug(event.target.value) }))}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
                placeholder="how-precision-diagnostics-guide-better-treatment"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Author</span>
              <input
                value={form.author}
                onChange={(event) => setForm((current) => ({ ...current, author: event.target.value }))}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
                placeholder="Dr. Priya Patel"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Category</span>
              <input
                value={form.category}
                onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
                placeholder="Treatment"
                required
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Cover image URL</span>
              <input
                value={form.image}
                onChange={(event) => setForm((current) => ({ ...current, image: event.target.value }))}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
                placeholder="https://images.unsplash.com/..."
                required
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Excerpt</span>
              <textarea
                value={form.excerpt}
                onChange={(event) => setForm((current) => ({ ...current, excerpt: event.target.value }))}
                className="min-h-28 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-500"
                placeholder="A short summary shown on the blog listing page."
                required
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Full content</span>
              <textarea
                value={form.content}
                onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
                className="min-h-60 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-500"
                placeholder="Write the full article here. Separate paragraphs with blank lines."
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Read time (minutes)</span>
              <input
                type="number"
                min="1"
                value={form.readTimeMinutes}
                onChange={(event) => setForm((current) => ({ ...current, readTimeMinutes: event.target.value }))}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-500"
                required
              />
            </label>

            <label className="flex items-center gap-3 self-end rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(event) => setForm((current) => ({ ...current, published: event.target.checked }))}
                className="h-4 w-4 accent-cyan-700"
              />
              <span className="text-sm font-semibold text-slate-700">Publish immediately</span>
            </label>

            <button type="submit" className="cta-primary md:col-span-2 justify-center" disabled={submitting}>
              <span className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                {submitting ? "Saving..." : editingPostId ? "Update Article" : form.published ? "Publish Article" : "Save Draft"}
              </span>
            </button>
          </form>
        </div>

        <div className="surface-card p-7 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Published and draft posts</h2>
              <p className="mt-2 text-sm text-slate-600">Edit, pin, publish, or delete any article from here.</p>
            </div>
            <button onClick={() => void loadPosts()} className="rounded-full border border-slate-200 p-3 text-slate-600 transition-colors hover:bg-slate-50" aria-label="Refresh posts">
              <RefreshCcw className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-5 flex items-center rounded-2xl border border-slate-200 bg-white px-4">
            <Search className="h-4 w-4 text-cyan-700" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by title, author, category, or slug"
              className="min-h-12 w-full bg-transparent px-3 outline-none"
            />
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="rounded-3xl border border-slate-200 bg-white px-5 py-8 text-center text-slate-600">
                Loading articles...
              </div>
            ) : visiblePosts.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white px-5 py-8 text-center text-slate-600">
                No articles match the current search.
              </div>
            ) : (
              visiblePosts.map((post) => (
                <article key={post.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${post.published ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                          {post.published ? "Published" : "Draft"}
                        </span>
                        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                          {post.category}
                        </span>
                        {post.pinned && (
                          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                            Pinned to top
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-slate-900">{post.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">By {post.author}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => startEditing(post)} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                        <span className="inline-flex items-center gap-2">
                          <Edit3 className="h-4 w-4" />
                          Edit
                        </span>
                      </button>
                      <button onClick={() => void togglePinned(post)} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                        <span className="inline-flex items-center gap-2">
                          {post.pinned ? <PinOff className="h-4 w-4" /> : <Pin className="h-4 w-4" />}
                          {post.pinned ? "Unpin" : "Pin top"}
                        </span>
                      </button>
                      <button onClick={() => void togglePublish(post)} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                        {post.published ? "Unpublish" : "Publish"}
                      </button>
                      <button onClick={() => void removePost(post.id)} className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50">
                        <span className="inline-flex items-center gap-2">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </span>
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt ?? post.createdAt).toLocaleDateString()}
                    </span>
                    <span>{post.readTime}</span>
                    <span>/{post.slug}</span>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
