import { Link } from "react-router";
import { Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export function About() {
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
              This page now focuses entirely on who we are, how we care, and what patients can expect from Apollo Athena.
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
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop" alt="Hospital facility" className="h-56 w-full rounded-[1.75rem] object-cover shadow-[0_18px_36px_rgba(23,49,62,0.14)] sm:h-64" />
            <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop" alt="Medical equipment" className="mt-6 h-56 w-full rounded-[1.75rem] object-cover shadow-[0_18px_36px_rgba(23,49,62,0.14)] sm:h-64" />
            <img src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop" alt="Medical team" className="h-56 w-full rounded-[1.75rem] object-cover shadow-[0_18px_36px_rgba(23,49,62,0.14)] sm:h-64" />
            <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop" alt="Patient care" className="mt-6 h-56 w-full rounded-[1.75rem] object-cover shadow-[0_18px_36px_rgba(23,49,62,0.14)] sm:h-64" />
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <div className="surface-card p-8 md:p-10">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: "Excellence", description: "Advanced medical care supported by rigorous clinical standards." },
              { title: "Compassion", description: "Empathy, dignity, and patient comfort built into the experience." },
              { title: "Innovation", description: "Modern diagnostics and evolving treatment strategies where they help." },
              { title: "Integrity", description: "Clear communication and ethical medical practice at every stage." },
              { title: "Collaboration", description: "Multidisciplinary teamwork for more complete treatment planning." },
              { title: "Hope", description: "A care model that supports confidence as well as recovery." },
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

      <section className="page-shell">
        <div className="hero-shell py-12 text-center md:py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">Ready to speak with our care team?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-cyan-50">
              Visit the contact page to ask questions, request support, or book your appointment with Apollo Athena.
            </p>
            <Link to="/contact" className="cta-primary bg-white px-8 py-4 text-cyan-800">
              Contact Apollo Athena
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
