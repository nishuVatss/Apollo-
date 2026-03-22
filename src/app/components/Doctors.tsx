import { Link } from "react-router";
import { Calendar, Award, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { doctors } from "../data/doctors";

export function Doctors() {
  return (
    <div className="w-full py-4 pb-10 md:py-6">
      <section className="page-shell">
        <div className="hero-shell">
          <div className="max-w-3xl">
            <div className="section-kicker mb-5 text-white/90">
              <Sparkles className="h-4 w-4" />
              Our specialist team
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Meet the doctors behind our oncology and surgical care.</h1>
            <p className="text-lg text-cyan-50 md:text-xl">
              Profiles are now clearer on mobile, with larger touch-friendly cards, stronger information hierarchy, and a more refined visual system.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {doctors.slice(0, 3).map((doctor) => (
            <Link
              key={doctor.id}
              to={`/doctors/${doctor.id}`}
              className="surface-card lift-card group block overflow-hidden"
            >
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-t-[1.75rem]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-cyan-800 backdrop-blur-md">
                  {doctor.specialty}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700">{doctor.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{doctor.qualification}</p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 text-cyan-700 transition-transform group-hover:translate-x-1" />
                </div>

                <div className="mb-5 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-cyan-700" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cyan-700" />
                    <span>{doctor.availability}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.slice(0, 3).map((exp) => (
                    <span key={exp} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell">
        <div className="surface-card p-8 text-center md:p-12">
          <Award className="mx-auto mb-6 h-16 w-16 text-cyan-700" />
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Need help choosing the right doctor?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
            Our patient care coordinators can match you with the most relevant specialist based on diagnosis, treatment goals, and preferred schedule.
          </p>
          <Link to="/about" className="cta-primary">
            Contact Us for Guidance
          </Link>
        </div>
      </section>
    </div>
  );
}
