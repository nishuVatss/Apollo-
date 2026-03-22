import { MapPin, Phone, Mail, Clock, Send, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export function AboutContact() {
  return (
    <div className="w-full py-4 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <div className="max-w-3xl">
            <div className="section-kicker mb-5 text-cyan-950">
              <Sparkles className="h-4 w-4" />
              About Apollo Athena
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">A cancer hospital experience shaped around clarity, warmth, and trust.</h1>
            <p className="text-lg text-cyan-50 md:text-xl">
              This page now uses a more contemporary visual language and better stacked mobile sections so patients and families can find information without friction.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">Our Mission</h2>
            <div className="space-y-4 leading-7 text-slate-600">
              <p>
                Apollo Athena Hospital is dedicated to delivering advanced cancer treatment with compassion, precision, and a multidisciplinary model of care.
              </p>
              <p>
                We combine surgical excellence, oncology expertise, modern diagnostics, and patient-centered coordination to reduce uncertainty during every stage of treatment.
              </p>
              <p>
                Beyond medical procedures, we support nutrition, emotional wellbeing, family communication, and long-term follow-up so the care journey feels complete.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="surface-card p-5">
                <ShieldCheck className="mb-4 h-10 w-10 text-cyan-700" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">Clinical confidence</h3>
                <p className="text-sm text-slate-600">Evidence-based protocols and advanced care pathways.</p>
              </div>
              <div className="surface-card p-5">
                <HeartHandshake className="mb-4 h-10 w-10 text-rose-500" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">Human support</h3>
                <p className="text-sm text-slate-600">Compassionate teams helping patients and families feel guided.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
              alt="Hospital facility"
              className="h-56 w-full rounded-[1.75rem] object-cover shadow-[0_18px_36px_rgba(23,49,62,0.14)] sm:h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop"
              alt="Medical equipment"
              className="mt-6 h-56 w-full rounded-[1.75rem] object-cover shadow-[0_18px_36px_rgba(23,49,62,0.14)] sm:h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop"
              alt="Medical team"
              className="h-56 w-full rounded-[1.75rem] object-cover shadow-[0_18px_36px_rgba(23,49,62,0.14)] sm:h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop"
              alt="Patient care"
              className="mt-6 h-56 w-full rounded-[1.75rem] object-cover shadow-[0_18px_36px_rgba(23,49,62,0.14)] sm:h-64"
            />
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <div className="surface-card p-8 md:p-10">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Excellence",
                description: "Advanced medical care supported by rigorous clinical standards.",
              },
              {
                title: "Compassion",
                description: "Empathy, dignity, and patient comfort built into the experience.",
              },
              {
                title: "Innovation",
                description: "Modern diagnostics and evolving treatment strategies where they help.",
              },
              {
                title: "Integrity",
                description: "Clear communication and ethical medical practice at every stage.",
              },
              {
                title: "Collaboration",
                description: "Multidisciplinary teamwork for more complete treatment planning.",
              },
              {
                title: "Hope",
                description: "A care model that supports confidence as well as recovery.",
              },
            ].map((value, idx) => (
              <div key={value.title} className="lift-card rounded-[1.5rem] border border-cyan-100 bg-white p-6 shadow-[0_12px_28px_rgba(23,49,62,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0e7490,#14b8a6_55%,#fb7185)] text-lg font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Get in Touch</h2>
          <p className="text-lg text-slate-600">Reach out for appointments, treatment information, or support.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="surface-card p-8">
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-50 p-3">
                    <MapPin className="h-6 w-6 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-slate-900">Address</h4>
                    <p className="text-slate-600">
                      Apollo Women's Cancer Centre<br />
                      Block E, Defence Colony<br />
                      New Delhi, Delhi 110024
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-emerald-50 p-3">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600">
                      Main: 080 6297 2813
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-rose-50 p-3">
                    <Mail className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">
                      General: contact@apolloathena.com<br />
                      Appointments: appointments@apolloathena.com<br />
                      Support: support@apolloathena.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-amber-50 p-3">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-slate-900">Working Hours</h4>
                    <p className="text-slate-600">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM<br />
                      <span className="font-semibold text-rose-600">Emergency: 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-shell py-8 text-white">
              <h3 className="mb-3 text-xl font-bold">24/7 Emergency Services</h3>
              <p className="mb-4 text-cyan-50">
                Our emergency department is always ready to provide immediate medical attention for urgent cancer-related issues.
              </p>
              <a href="tel:08062972813" className="cta-primary bg-white text-cyan-800">
                Call Now: 080 6297 2813
              </a>
            </div>
          </div>

          <div className="surface-card p-8">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">First Name *</label>
                  <input
                    type="text"
                    className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Last Name *</label>
                  <input
                    type="text"
                    className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email *</label>
                <input
                  type="email"
                  className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number *</label>
                <input
                  type="tel"
                  className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Subject *</label>
                <select className="min-h-12 w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none">
                  <option>Book an Appointment</option>
                  <option>General Inquiry</option>
                  <option>Medical Records Request</option>
                  <option>Treatment Information</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message *</label>
                <textarea
                  rows={5}
                  className="w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 focus:border-cyan-400 focus:outline-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="cta-primary w-full justify-center rounded-2xl px-8 py-4"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
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
