import { useEffect, useMemo, useState } from "react";
import { Calendar, CheckCircle2, Mail, RefreshCcw, Search } from "lucide-react";
import { fetchContactSubmissions } from "../lib/contactSubmissions";
import { supabase } from "../lib/supabase";
import type { ContactSubmission } from "../types/contactSubmission";

function formatTimestamp(value: string | null) {
  if (!value) {
    return "Not set";
  }

  return new Date(value).toLocaleString();
}

export function AdminLeadsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [submissionSearch, setSubmissionSearch] = useState("");
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [togglingContactId, setTogglingContactId] = useState<string | null>(null);

  async function loadSubmissions() {
    setLoadingSubmissions(true);
    setError("");

    try {
      const data = await fetchContactSubmissions();
      setSubmissions(data);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to load contact submissions.");
    } finally {
      setLoadingSubmissions(false);
    }
  }

  useEffect(() => {
    void loadSubmissions();
  }, []);

  async function toggleContacted(submission: ContactSubmission) {
    if (!supabase) {
      setError("Configuration is incomplete.");
      return;
    }

    setTogglingContactId(submission.id);
    setError("");
    setMessage("");

    const nextContacted = !submission.contacted;
    const { error: updateError } = await supabase
      .from("contact_submissions")
      .update({
        contacted: nextContacted,
        contacted_at: nextContacted ? new Date().toISOString() : null,
      })
      .eq("id", submission.id);

    if (updateError) {
      setError(updateError.message);
      setTogglingContactId(null);
      return;
    }

    setMessage(nextContacted ? "Submission marked as contacted." : "Submission marked as not contacted.");
    setTogglingContactId(null);
    await loadSubmissions();
  }

  const visibleSubmissions = useMemo(() => {
    const query = submissionSearch.trim().toLowerCase();

    return submissions.filter((submission) => {
      if (!query) {
        return true;
      }

      return `${submission.firstName} ${submission.lastName} ${submission.email} ${submission.phone} ${submission.subject} ${submission.message}`.toLowerCase().includes(query);
    });
  }, [submissions, submissionSearch]);

  return (
    <>
      {(message || error) && (
        <div className={`mb-6 rounded-3xl px-5 py-4 text-sm ${error ? "border border-rose-200 bg-rose-50 text-rose-700" : "border border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
          {error || message}
        </div>
      )}

      <div className="surface-card p-7 md:p-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan-700" />
              <h2 className="text-2xl font-bold text-slate-900">Contact form submissions</h2>
            </div>
            <p className="mt-2 text-sm text-slate-600">Review patient details and track whether your team has already contacted them.</p>
          </div>
          <button onClick={() => void loadSubmissions()} className="self-start rounded-full border border-slate-200 p-3 text-slate-600 transition-colors hover:bg-slate-50" aria-label="Refresh submissions">
            <RefreshCcw className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-5 flex items-center rounded-2xl border border-slate-200 bg-white px-4">
          <Search className="h-4 w-4 text-cyan-700" />
          <input value={submissionSearch} onChange={(event) => setSubmissionSearch(event.target.value)} placeholder="Search by name, email, phone, subject, or message" className="min-h-12 w-full bg-transparent px-3 outline-none" />
        </div>

        <div className="space-y-4">
          {loadingSubmissions ? (
            <div className="rounded-3xl border border-slate-200 bg-white px-5 py-8 text-center text-slate-600">Loading contact submissions...</div>
          ) : visibleSubmissions.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white px-5 py-8 text-center text-slate-600">No contact submissions found.</div>
          ) : (
            visibleSubmissions.map((submission) => (
              <article key={submission.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${submission.contacted ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{submission.contacted ? "Contacted" : "Not contacted"}</span>
                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">{submission.subject}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{submission.firstName} {submission.lastName}</h3>
                    <p className="mt-1 text-sm text-slate-500">{submission.email} | {submission.phone}</p>
                  </div>

                  <button onClick={() => void toggleContacted(submission)} disabled={togglingContactId === submission.id} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70">
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      {togglingContactId === submission.id ? "Updating..." : submission.contacted ? "Mark Not Contacted" : "Mark Contacted"}
                    </span>
                  </button>
                </div>

                <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-slate-600">{submission.message}</p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  <span className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5" />Submitted {formatTimestamp(submission.createdAt)}</span>
                  <span>Contacted {formatTimestamp(submission.contactedAt)}</span>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </>
  );
}
