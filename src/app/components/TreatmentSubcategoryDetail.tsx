import { Link, useParams } from "react-router";
import { ArrowLeft, HeartPulse, ListChecks, Microscope, ShieldPlus, Stethoscope } from "lucide-react";
import { treatments } from "../data/treatments";

export function TreatmentSubcategoryDetail() {
  const { id, subcategoryId } = useParams();
  const treatment = treatments.find((item) => item.id === id);
  const subcategory = treatment?.subcategories.find((item) => item.id === subcategoryId);

  if (!treatment || !subcategory) {
    return (
      <section className="page-shell py-16">
        <div className="surface-card p-10 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Section not found</h1>
          <p className="mt-3 text-slate-600">The treatment area you selected could not be found.</p>
          <Link to="/treatments" className="cta-primary mt-6 inline-flex">
            Back to Treatments
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full py-4 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <Link to={`/treatments/${treatment.id}`} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
            <ArrowLeft className="h-4 w-4" />
            Back to {treatment.name}
          </Link>
          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-50">{treatment.name}</p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{subcategory.name}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50">{subcategory.summary}</p>
          </div>
        </div>
      </section>

      <section className="page-shell py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <HeartPulse className="h-6 w-6 text-cyan-700" />
              <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
            </div>
            <p className="leading-8 text-slate-700">{subcategory.overview}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-rose-100 bg-rose-50/60 p-5">
                <h3 className="text-lg font-bold text-slate-900">Common signs in this area</h3>
                <div className="mt-4 space-y-2">
                  {treatment.symptoms.slice(0, 4).map((symptom) => (
                    <div key={symptom} className="rounded-xl bg-white/80 px-4 py-3 text-sm text-slate-700">
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-cyan-100 bg-cyan-50/60 p-5">
                <h3 className="text-lg font-bold text-slate-900">How it is usually assessed</h3>
                <div className="mt-4 space-y-2">
                  {treatment.diagnosis.slice(0, 4).map((test) => (
                    <div key={test} className="rounded-xl bg-white/80 px-4 py-3 text-sm text-slate-700">
                      {test}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-card p-8">
              <div className="mb-5 flex items-center gap-3">
                <ListChecks className="h-5 w-5 text-cyan-700" />
                <h2 className="text-xl font-bold text-slate-900">Key Points</h2>
              </div>
              <div className="space-y-3">
                {subcategory.keyPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-cyan-100 bg-cyan-50/50 px-4 py-3 text-sm text-slate-700">
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card p-8">
              <div className="mb-5 flex items-center gap-3">
                <ShieldPlus className="h-5 w-5 text-cyan-700" />
                <h2 className="text-xl font-bold text-slate-900">Care Focus</h2>
              </div>
              <div className="space-y-3">
                {subcategory.careFocus.map((item) => (
                  <div key={item} className="rounded-2xl border border-rose-100 bg-rose-50/60 px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-card p-8">
            <div className="mb-5 flex items-center gap-3">
              <Microscope className="h-5 w-5 text-cyan-700" />
              <h2 className="text-xl font-bold text-slate-900">Typical workup</h2>
            </div>
            <div className="space-y-3">
              {treatment.diagnosis.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-8">
            <div className="mb-5 flex items-center gap-3">
              <Stethoscope className="h-5 w-5 text-cyan-700" />
              <h2 className="text-xl font-bold text-slate-900">Potential treatment directions</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {treatment.treatmentOptions.map((option) => (
                <div key={option} className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm text-slate-700">
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
