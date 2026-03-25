export interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  contacted: boolean;
  contactedAt: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface ContactSubmissionRow {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  contacted: boolean | null;
  contacted_at: string | null;
  created_at: string;
  updated_at: string | null;
}
