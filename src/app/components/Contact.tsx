import { useState, type ChangeEvent, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";
import { hasSupabaseEnv, supabase } from "../lib/supabase";

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialContactFormState: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "Book an Appointment",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialContactFormState);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleFieldChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasSupabaseEnv || !supabase) {
      setErrorMessage("Contact form storage is not configured yet.");
      setSuccessMessage("");
      return;
    }

    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const { error } = await supabase.from("contact_submissions").insert({
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });

    if (error) {
      setErrorMessage(error.message);
      setSubmitting(false);
      return;
    }

    setForm(initialContactFormState);
    setSuccessMessage("Your message has been received. Our team will contact you soon.");
    setSubmitting(false);
  }

  return (
    <div className="w-full py-4 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <div className="max-w-3xl">
            <div className="section-kicker mb-5 text-cyan-950">
              <Sparkles className="h-4 w-4" />
              Contact Apollo Athena
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Reach out for appointments, treatment guidance, or direct support.</h1>
            <p className="text-lg text-cyan-50 md:text-xl">
              Everything related to getting in touch now lives on its own page, making it easier for patients and families to reach the right team.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="surface-card p-8">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-50 p-3"><MapPin className="h-6 w-6 text-cyan-700" /></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">Apollo Women's Cancer Centre<br />Block E, Defence Colony<br />New Delhi, Delhi 110024</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-emerald-50 p-3"><Phone className="h-6 w-6 text-emerald-600" /></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">Main: 080 6297 2813</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-rose-50 p-3"><Mail className="h-6 w-6 text-rose-600" /></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">General: contact@apolloathena.com<br />Appointments: appointments@apolloathena.com<br />Support: support@apolloathena.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-amber-50 p-3"><Clock className="h-6 w-6 text-amber-600" /></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">Working Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 8:00 AM - 8:00 PM<br />Saturday: 9:00 AM - 6:00 PM<br />Sunday: 10:00 AM - 4:00 PM<br /><span className="font-semibold text-rose-600">Emergency: 24/7</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-shell py-8 text-white">
              <h3 className="mb-3 text-xl font-bold">24/7 Emergency Services</h3>
              <p className="mb-4 text-cyan-50">Our emergency department is always ready to provide immediate medical attention for urgent cancer-related issues.</p>
              <a href="tel:08062972813" className="cta-primary bg-white text-cyan-800">Call Now: 080 6297 2813</a>
            </div>
          </div>

          <div className="surface-card p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Send us a Message</h2>

            {(successMessage || errorMessage) && (
              <div className={`mb-6 rounded-3xl px-5 py-4 text-sm ${errorMessage ? "border border-rose-200 bg-rose-50 text-rose-700" : "border border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
                {errorMessage || successMessage}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="firstName">First Name *</label>
                  <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleFieldChange} className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none" placeholder="John" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="lastName">Last Name *</label>
                  <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleFieldChange} className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleFieldChange} className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none" placeholder="john.doe@example.com" required />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">Phone Number *</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleFieldChange} className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none" placeholder="+91 98765 43210" required />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" value={form.subject} onChange={handleFieldChange} className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none" required>
                  <option>Book an Appointment</option>
                  <option>General Inquiry</option>
                  <option>Medical Records Request</option>
                  <option>Treatment Information</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleFieldChange} className="w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none" placeholder="Please provide details about your inquiry..." required />
              </div>

              <button type="submit" className="cta-primary w-full justify-center rounded-2xl px-8 py-4 disabled:cursor-not-allowed disabled:opacity-70" disabled={submitting}>
                <Send className="mr-2 h-5 w-5" />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="surface-card overflow-hidden">
          <div className="flex aspect-video items-center justify-center bg-[linear-gradient(135deg,rgba(14,116,144,0.08),rgba(251,113,133,0.08))]">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-slate-400" />
              <p className="text-slate-600">Interactive map would be displayed here</p>
              <p className="text-sm text-slate-500">Apollo Women's Cancer Centre, Block E, Defence Colony, New Delhi, Delhi 110024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
