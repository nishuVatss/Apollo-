import { Link } from "react-router";
import { ArrowRight, Stethoscope, Sparkles } from "lucide-react";
import { treatments } from "../data/treatments";

export function Treatments() {
  return (
    <div className="w-full py-4 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <div className="max-w-3xl">
            <div className="section-kicker mb-5 text-cyan-950">
              <Sparkles className="h-4 w-4" />
              Treatment pathways
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Clearer treatment discovery for patients and families.</h1>
            <p className="text-lg text-cyan-50 md:text-xl">
              Each care path is presented with larger cards, better spacing, and a more confident modern style tuned for both phones and desktop screens.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 md:py-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {treatments.map((treatment) => (
            <Link
              key={treatment.id}
              to={`/treatments/${treatment.id}`}
              className="surface-card lift-card group block overflow-hidden p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="text-6xl">{treatment.icon}</div>
                <div className="rounded-full bg-cyan-50 p-3 text-cyan-700 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700">
                {treatment.name}
              </h3>

              <p className="mb-6 leading-7 text-slate-600">{treatment.shortDescription}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Subcategories</h4>
                  <div className="grid gap-2">
                    {treatment.subcategories.slice(0, 3).map((subcategory) => (
                      <div
                        key={subcategory.id}
                        className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-white group-hover:shadow-[0_12px_28px_rgba(14,116,144,0.12)]"
                      >
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 group-hover:text-cyan-700">
                          {subcategory.name}
                        </div>
                        <p className="mt-1 line-clamp-2 text-sm text-slate-600 group-hover:text-slate-700">
                          {subcategory.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Key Symptoms</h4>
                  <div className="flex flex-wrap gap-2">
                    {treatment.symptoms.slice(0, 3).map((symptom) => (
                      <span key={symptom} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Specialists</h4>
                  <div className="flex flex-wrap gap-2">
                    {treatment.specialists.map((specialist) => (
                      <span key={specialist} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                        {specialist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-cyan-100 pt-5 text-sm font-semibold text-cyan-700">
                Open treatment and subcategory details
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <div className="surface-card p-8 md:p-12">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <Stethoscope className="mx-auto mb-6 h-16 w-16 text-cyan-700" />
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Comprehensive cancer care, not isolated procedures</h2>
            <p className="text-lg text-slate-600">
              The visual refresh emphasizes trust and clarity: softer teals for calm, controlled rose accents for warmth, layered surfaces for depth, and mobile-first spacing that reduces cognitive overload.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Advanced Diagnostics",
                description: "Imaging, pathology, and case review systems aligned for faster, more accurate decisions.",
              },
              {
                title: "Personalized Treatment",
                description: "Customized plans based on tumor type, stage, patient health, and recovery goals.",
              },
              {
                title: "Comprehensive Support",
                description: "Nutritional, emotional, and follow-up support woven into the treatment experience.",
              },
            ].map((feature) => (
              <div key={feature.title} className="lift-card rounded-[1.5rem] border border-cyan-100 bg-white p-6 shadow-[0_12px_28px_rgba(23,49,62,0.08)]">
                <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="hero-shell py-12 text-center md:py-14">
          <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">Need more information about a treatment option?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-cyan-50">
            Our team is available to explain procedures, likely timelines, and the specialists involved in your care.
          </p>
          <Link to="/about" className="cta-primary bg-white px-8 py-4 text-cyan-800">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
