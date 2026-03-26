import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Award,
  Users,
  Heart,
  Stethoscope,
  Calendar,
  Shield,
  Sparkles,
  Activity,
} from "lucide-react";
import { treatments } from "../data/treatments";
import { doctors } from "../data/doctors";

const stats = [
  { icon: Users, value: 10000, label: "Patients supported", suffix: "+" },
  { icon: Award, value: 15, label: "Years in oncology care", suffix: "+" },
  { icon: Stethoscope, value: 50, label: "Specialists and surgeons", suffix: "+" },
  { icon: Heart, value: 95, label: "Patient trust score", suffix: "%" },
];

const journeyHighlights = [
  "Same-week consultations",
  "Tumor board reviews",
  "Post-treatment recovery plans",
];

const features = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Highly qualified oncologists and surgeons with deep experience across complex cases.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Technology",
    description: "Precision diagnostics, minimally invasive procedures, and data-guided treatment planning.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "A calmer, patient-first experience designed around confidence, dignity, and family support.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Stringent clinical protocols and monitored environments across every stage of care.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Approach",
    description: "Coordinated expertise across surgery, oncology, imaging, and rehabilitation.",
  },
  {
    icon: Calendar,
    title: "Continuous Support",
    description: "Care navigation from first consultation through treatment follow-up and survivorship.",
  },
];

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setHasAnimated(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) {
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    let frameId = 0;

    const updateValue = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateValue);
      }
    };

    frameId = window.requestAnimationFrame(updateValue);

    return () => window.cancelAnimationFrame(frameId);
  }, [hasAnimated, value]);

  return (
    <div ref={elementRef} className="text-2xl font-bold text-slate-900 sm:text-3xl">
      {displayValue.toLocaleString()}{suffix}
    </div>
  );
}

export function Home() {
  return (
    <div className="w-full py-3 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <div className="floating-orb -left-6 top-16 h-28 w-28 bg-white/20" />
          <div className="floating-orb right-8 top-10 h-24 w-24 bg-amber-200/20" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
            <div className="min-w-0 max-w-3xl">
              <div className="section-kicker mb-4 w-full max-w-full flex-wrap text-[11px] leading-4 text-cyan-950 sm:text-xs">
                <Sparkles className="h-4 w-4" />
                <span className="min-w-0 break-words">
                  Modern cancer care, built around reassurance
                </span>
              </div>
              <h1 className="mb-4 max-w-3xl break-words text-[2rem] font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Precision treatment in a calmer, more human healing environment.
              </h1>
              <p className="mb-6 max-w-2xl text-[15px] leading-6 text-cyan-50 sm:mb-8 sm:text-lg sm:leading-7">
                Apollo Athena combines expert oncology, modern surgical care, and ongoing patient support in one connected hospital experience across desktop and mobile touchpoints.
              </p>
              <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:gap-4">
                <Link to="/about" className="cta-primary w-full sm:w-auto">
                  Book an Appointment
                </Link>
                <Link to="/doctors" className="cta-secondary w-full text-white sm:w-auto">
                  Meet Our Doctors
                </Link>
              </div>
              <div className="chip-row max-w-full">
                {journeyHighlights.map((item) => (
                  <div key={item} className="shrink-0 whitespace-nowrap rounded-full border border-white/30 bg-white/12 px-4 py-2 text-sm text-white backdrop-blur-md">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 surface-card soft-grid p-5 sm:p-6">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 sm:text-sm">Patient Journey</p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">Care that feels guided, not overwhelming</h2>
                </div>
                <Activity className="mt-1 h-8 w-8 flex-shrink-0 text-rose-500 sm:h-9 sm:w-9" />
              </div>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Clinical review", text: "Fast intake, records review, and specialist mapping for your case." },
                  { step: "02", title: "Treatment planning", text: "A multidisciplinary plan balancing cure, recovery, and comfort." },
                  { step: "03", title: "Recovery support", text: "Follow-up care, counseling, and family communication built in." },
                ].map((item) => (
                  <div key={item.step} className="lift-card rounded-[1.5rem] border border-cyan-100 bg-white/90 p-4 shadow-[0_12px_30px_rgba(23,49,62,0.08)]">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0e7490,#14b8a6)] text-sm font-bold text-white">
                        {item.step}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell mt-6 md:mt-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="surface-card lift-card p-5 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(14,116,144,0.14),rgba(251,113,133,0.16))]">
                <stat.icon className="h-7 w-7 text-cyan-700" />
              </div>
              <CountUpNumber value={stat.value} suffix={stat.suffix} />
              <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell py-16 md:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="section-kicker mb-4">
              <Sparkles className="h-4 w-4" />
              Treatments
            </div>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Specialized cancer treatments with a clearer path forward</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            Structured cards, stronger contrast, and larger touch targets make treatment discovery easier on mobile while keeping the interface polished on large screens.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => (
            <Link
              key={treatment.id}
              to={`/treatments/${treatment.id}`}
              className="surface-card lift-card group block overflow-hidden p-7"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="text-5xl">{treatment.icon}</div>
                <div className="rounded-full bg-cyan-50 p-3 text-cyan-700 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700">
                {treatment.name}
              </h3>
              <p className="mb-5 line-clamp-3 text-slate-600">{treatment.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {treatment.specialists.slice(0, 2).map((specialist) => (
                  <span key={specialist} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                    {specialist}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/treatments" className="cta-primary">
            View All Treatments
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <div className="surface-card overflow-hidden p-6 md:p-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="section-kicker mb-4">
                <Heart className="h-4 w-4" />
                Doctors
              </div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Meet the team guiding diagnosis, surgery, and recovery</h2>
            </div>
            <p className="max-w-2xl text-slate-600">
              Doctor cards now feel more tactile, with stronger hierarchy and better spacing on smaller screens.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {doctors.slice(0, 6).map((doctor) => (
              <Link
                key={doctor.id}
                to={`/doctors/${doctor.id}`}
                className="lift-card group overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-white"
              >
                <div className="aspect-[4/4.2] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700">{doctor.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">{doctor.specialty}</p>
                  <p className="mt-3 text-sm text-slate-600">{doctor.qualification}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4 text-cyan-700" />
                    {doctor.experience}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/doctors" className="cta-primary">
              View All Doctors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <div className="mb-10 text-center">
          <div className="section-kicker mb-4">
            <Shield className="h-4 w-4" />
            Why Apollo Athena
          </div>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Designed to feel advanced, safe, and approachable</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="surface-card lift-card p-7">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0e7490,#14b8a6_55%,#fb7185)] text-white shadow-[0_16px_32px_rgba(14,116,144,0.22)]">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell">
        <div className="hero-shell py-12 text-center md:py-14">
          <div className="relative mx-auto max-w-3xl">
            <div className="section-kicker mx-auto mb-4 text-cyan-950">
              <Heart className="h-4 w-4" />
              Start your healing journey
            </div>
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
              Book a consultation with an oncology specialist today.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-cyan-50">
              The updated interface now carries the same calm clinical tone across desktop and mobile, with clearer actions and more immersive visual depth.
            </p>
            <Link to="/about" className="cta-primary bg-white px-8 py-4 text-cyan-800">
              Book Your Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
