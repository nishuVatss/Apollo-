import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  HeartPulse,
  ListChecks,
  Microscope,
  ShieldPlus,
  Stethoscope,
  TriangleAlert,
} from "lucide-react";
import { treatments } from "../data/treatments";
import { doctors } from "../data/doctors";

function SectionList({ items, tone = "slate" }: { items: string[]; tone?: "slate" | "rose" | "cyan" | "emerald" }) {
  const toneClasses = {
    slate: "border-slate-200 bg-slate-50 text-slate-700",
    rose: "border-rose-100 bg-rose-50/70 text-slate-700",
    cyan: "border-cyan-100 bg-cyan-50/70 text-slate-700",
    emerald: "border-emerald-100 bg-emerald-50/70 text-slate-700",
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${toneClasses[tone]}`}>
          {item}
        </div>
      ))}
    </div>
  );
}

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

  const doctorIds = subcategory.recommendedDoctorIds ?? [];
  const recommendedDoctors = doctors.filter((doctor) => doctorIds.includes(doctor.id));
  const commonSymptoms = subcategory.commonSymptoms ?? treatment.symptoms;
  const diagnosticWorkup = subcategory.diagnosticWorkup ?? treatment.diagnosis;
  const treatmentApproach = subcategory.treatmentApproach ?? treatment.treatmentOptions;
  const warningSigns = subcategory.warningSigns ?? [];
  const surgeryOptions = subcategory.surgeryOptions ?? [];
  const supportiveCare = subcategory.supportiveCare ?? subcategory.careFocus;
  const recoveryAndFollowUp = subcategory.recoveryAndFollowUp ?? [];

  return (
    <div className="w-full py-4 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <Link
            to={`/treatments/${treatment.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
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
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <HeartPulse className="h-6 w-6 text-cyan-700" />
              <h2 className="text-2xl font-bold text-slate-900">Detailed Overview</h2>
            </div>
            <p className="leading-8 text-slate-700">{subcategory.overview}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-rose-100 bg-rose-50/60 p-5">
                <h3 className="text-lg font-bold text-slate-900">Common symptoms</h3>
                <div className="mt-4">
                  <SectionList items={commonSymptoms} tone="rose" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-cyan-100 bg-cyan-50/60 p-5">
                <h3 className="text-lg font-bold text-slate-900">How it is assessed</h3>
                <div className="mt-4">
                  <SectionList items={diagnosticWorkup} tone="cyan" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-card p-8">
              <div className="mb-5 flex items-center gap-3">
                <ListChecks className="h-5 w-5 text-cyan-700" />
                <h2 className="text-xl font-bold text-slate-900">Key points</h2>
              </div>
              <SectionList items={subcategory.keyPoints} tone="cyan" />
            </div>

            <div className="surface-card p-8">
              <div className="mb-5 flex items-center gap-3">
                <ShieldPlus className="h-5 w-5 text-cyan-700" />
                <h2 className="text-xl font-bold text-slate-900">Care focus</h2>
              </div>
              <SectionList items={subcategory.careFocus} tone="rose" />
            </div>

            {warningSigns.length > 0 && (
              <div className="surface-card p-8">
                <div className="mb-5 flex items-center gap-3">
                  <TriangleAlert className="h-5 w-5 text-amber-600" />
                  <h2 className="text-xl font-bold text-slate-900">When urgent review is needed</h2>
                </div>
                <SectionList items={warningSigns} tone="slate" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-8">
            <div className="mb-5 flex items-center gap-3">
              <Microscope className="h-5 w-5 text-cyan-700" />
              <h2 className="text-xl font-bold text-slate-900">Treatment pathway</h2>
            </div>
            <SectionList items={treatmentApproach} tone="emerald" />
          </div>

          <div className="surface-card p-8">
            <div className="mb-5 flex items-center gap-3">
              <Stethoscope className="h-5 w-5 text-cyan-700" />
              <h2 className="text-xl font-bold text-slate-900">Support and follow-up</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Supportive care</h3>
                <SectionList items={supportiveCare} tone="slate" />
              </div>
              {recoveryAndFollowUp.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Recovery and surveillance</h3>
                  <SectionList items={recoveryAndFollowUp} tone="cyan" />
                </div>
              )}
            </div>
          </div>
        </div>

        {(surgeryOptions.length > 0 || recommendedDoctors.length > 0) && (
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            {surgeryOptions.length > 0 && (
              <div className="surface-card p-8">
                <h2 className="text-xl font-bold text-slate-900">Procedures that may be considered</h2>
                <div className="mt-5">
                  <SectionList items={surgeryOptions} tone="emerald" />
                </div>
              </div>
            )}

            {recommendedDoctors.length > 0 && (
              <div className="surface-card p-8">
                <h2 className="text-xl font-bold text-slate-900">Recommended doctors</h2>
                {subcategory.doctorRecommendation && (
                  <p className="mt-3 text-sm leading-7 text-slate-600">{subcategory.doctorRecommendation}</p>
                )}
                <div className="mt-6 grid gap-4">
                  {recommendedDoctors.map((doctor) => (
                    <Link
                      key={doctor.id}
                      to={`/doctors/${doctor.id}`}
                      className="rounded-[1.5rem] border border-cyan-100 bg-cyan-50/60 p-4 transition hover:border-cyan-300 hover:bg-white"
                    >
                      <div className="flex items-center gap-4">
                        <img src={doctor.image} alt={doctor.name} className="h-16 w-16 rounded-2xl object-cover" />
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
                          <p className="text-sm font-semibold text-cyan-700">{doctor.specialty}</p>
                          <p className="mt-1 text-sm text-slate-600">{doctor.experience}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {subcategory.faqs && subcategory.faqs.length > 0 && (
          <div className="mt-6 surface-card p-8">
            <h2 className="text-xl font-bold text-slate-900">Common questions</h2>
            <div className="mt-6 space-y-4">
              {subcategory.faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4">
                  <h3 className="font-bold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
