import { useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { LockKeyhole, Mail } from "lucide-react";
import { useAdminAuth } from "../contexts/AdminAuthContext";

export function AdminLogin() {
  const { session, isAdmin, signIn, loading, error: authError } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const redirectTo = (location.state as { from?: string } | null)?.from ?? "/admin";

  if (!loading && session && isAdmin) {
    return <Navigate to={redirectTo} replace />;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const result = await signIn(email, password);

    if (result.error) {
      setError(result.error);
    } else if (result.isAdmin) {
      navigate(redirectTo, { replace: true });
    }

    setSubmitting(false);
  }

  return (
    <section className="page-shell py-10 md:py-16">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="hero-shell min-h-[420px]">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Admin login</h1>
            <p className="mt-6 max-w-xl text-lg text-cyan-50">
              Sign in to manage articles and updates.
            </p>
          </div>
        </div>

        <div className="surface-card p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900">Admin Sign In</h2>
          <p className="mt-3 text-slate-600">
            Use your admin email and password.
          </p>

          {(error || authError) && (
            <div className="mt-6 rounded-3xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error || authError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Email address</span>
              <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4">
                <Mail className="h-4 w-4 text-cyan-700" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@apolloathena.com"
                  className="min-h-12 w-full bg-transparent px-3 outline-none"
                  required
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
              <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4">
                <LockKeyhole className="h-4 w-4 text-cyan-700" />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="min-h-12 w-full bg-transparent px-3 outline-none"
                  required
                />
              </div>
            </label>

            <button type="submit" className="cta-primary w-full justify-center" disabled={submitting}>
              {submitting ? "Signing in..." : "Sign In to Admin Panel"}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            Public readers can continue browsing articles at <Link to="/blog" className="font-semibold text-cyan-700">/blog</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
