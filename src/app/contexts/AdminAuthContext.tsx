import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { hasSupabaseEnv, supabase } from "../lib/supabase";

interface AdminAuthContextValue {
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  error: string;
  signIn: (email: string, password: string) => Promise<{ error?: string; isAdmin?: boolean }>;
  signOut: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextValue | undefined>(undefined);

const adminEmailAllowlist = (import.meta.env.VITE_ADMIN_EMAILS ?? "")
  .split(",")
  .map((email: string) => email.trim().toLowerCase())
  .filter(Boolean);

function isAllowedAdminEmail(email?: string | null) {
  if (!email) {
    return false;
  }

  return adminEmailAllowlist.includes(email.toLowerCase());
}

async function checkAdminAccess(userId: string) {
  if (!supabase) {
    return false;
  }

  const { data, error } = await supabase
    .from("admin_users")
    .select("id")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    return false;
  }

  return Boolean(data);
}

async function resolveAdminAccess(session: Session | null) {
  if (!session?.user?.id) {
    return false;
  }

  if (isAllowedAdminEmail(session.user.email)) {
    return true;
  }

  return checkAdminAccess(session.user.id);
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function applySession(nextSession: Session | null) {
      if (!mounted) {
        return false;
      }

      setSession(nextSession);
      setError("");

      if (!nextSession?.user?.id) {
        setIsAdmin(false);
        setLoading(false);
        return false;
      }

      const nextIsAdmin = await resolveAdminAccess(nextSession);

      if (!mounted) {
        return false;
      }

      setIsAdmin(nextIsAdmin);
      setLoading(false);

      if (!nextIsAdmin) {
        setError("This account is authenticated, but it is not present in public.admin_users or the local admin email allowlist.");
      }

      return nextIsAdmin;
    }

    async function loadSession() {
      if (!supabase) {
        if (mounted) {
          setLoading(false);
          setError("Supabase environment variables are missing.");
        }
        return;
      }

      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();

      if (!mounted) {
        return;
      }

      await applySession(currentSession);
    }

    void loadSession();

    if (!supabase) {
      return;
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setLoading(true);
      void applySession(nextSession);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signIn(email: string, password: string) {
    if (!supabase || !hasSupabaseEnv) {
      return { error: "Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable admin login." };
    }

    setLoading(true);
    setError("");

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setLoading(false);
      return { error: signInError.message };
    }

    const {
      data: { session: currentSession },
    } = await supabase.auth.getSession();

    setSession(currentSession);

    if (!currentSession?.user?.id) {
      setIsAdmin(false);
      setLoading(false);
      return { error: "Login succeeded, but no active session was returned. Please try again." };
    }

    const nextIsAdmin = await resolveAdminAccess(currentSession);

    setIsAdmin(nextIsAdmin);
    setLoading(false);

    if (!nextIsAdmin) {
      setError("This account is authenticated, but it is not present in public.admin_users or the local admin email allowlist.");
      return { error: "This account is signed in but is not authorized for the admin panel.", isAdmin: false };
    }

    return { isAdmin: true };
  }

  async function signOut() {
    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
    setIsAdmin(false);
  }

  return (
    <AdminAuthContext.Provider
      value={{
        session,
        isAdmin,
        loading,
        error,
        signIn,
        signOut,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  }

  return context;
}
