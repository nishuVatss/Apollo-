import { LogOut } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import { useAdminAuth } from "../contexts/AdminAuthContext";

function linkClassName(isActive: boolean) {
  return `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
    isActive
      ? "bg-cyan-700 text-white"
      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
  }`;
}

export function AdminShell() {
  const { session, signOut } = useAdminAuth();

  return (
    <section className="page-shell py-10 md:py-14">
      <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-800">Admin</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Admin panel</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Logged in as <span className="font-semibold text-slate-900">{session?.user.email}</span>.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <NavLink to="/admin/articles" className={({ isActive }) => linkClassName(isActive)}>
            Articles
          </NavLink>
          <NavLink to="/admin/leads" className={({ isActive }) => linkClassName(isActive)}>
            Contact Leads
          </NavLink>
          <button onClick={() => void signOut()} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50">
            <span className="inline-flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </span>
          </button>
        </div>
      </div>

      <Outlet />
    </section>
  );
}
