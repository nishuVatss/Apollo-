import type { ContactSubmission, ContactSubmissionRow } from "../types/contactSubmission";
import { supabase } from "./supabase";

function mapContactSubmissionRow(row: ContactSubmissionRow): ContactSubmission {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    subject: row.subject,
    message: row.message,
    contacted: Boolean(row.contacted),
    contactedAt: row.contacted_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function fetchContactSubmissions() {
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return ((data ?? []) as ContactSubmissionRow[]).map(mapContactSubmissionRow);
}
