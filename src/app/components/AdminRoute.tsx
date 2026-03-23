import { Navigate, Outlet, useLocation } from "react-router";
import { useAdminAuth } from "../contexts/AdminAuthContext";

export function AdminRoute() {
  const { session, isAdmin, loading } = useAdminAuth();
  const location = useLocation();

  if (loading) {
    return (
      <section className="page-shell py-16">
        <div className="surface-card p-8 text-center">
          <p className="text-lg font-semibold text-slate-900">Checking admin session...</p>
          <p className="mt-2 text-slate-600">Please wait while we verify your access.</p>
        </div>
      </section>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  if (!isAdmin) {
    return (
      <section className="page-shell py-16">
        <div className="surface-card max-w-2xl p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Access denied</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">This account is not allowed to manage blog content.</h1>
          <p className="mt-4 text-slate-600">
            This account does not have access to the admin area.
          </p>
        </div>
      </section>
    );
  }

  return <Outlet />;
}
