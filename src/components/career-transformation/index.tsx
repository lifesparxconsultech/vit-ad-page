import { Code2, Database, Cloud, Shield } from "lucide-react";

const roles = [
  { icon: Code2, label: "Software Architect" },
  { icon: Database, label: "Data Scientist" },
  { icon: Cloud, label: "Cloud Consultant" },
  { icon: Shield, label: "Security Specialist" },
];

export default function CareerTransformation() {
  return (
    <section className="bg-navy-900 px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Career Transformation
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Our alumni are working in leading tech firms across the globe. We
            don&apos;t just teach; we prepare you for the boardroom.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {roles.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4"
              >
                <Icon className="h-5 w-5 flex-shrink-0 text-gold-500" />
                <span className="text-sm font-medium text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — salary growth card */}
        <div className="rounded-2xl bg-white/5 p-8">
          <p className="text-base font-medium text-white">Average Salary Growth</p>

          <div className="mt-10 flex items-end justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="flex h-28 w-24 flex-col items-center justify-center rounded-t-lg bg-white/10">
                <p className="text-xs text-white/60">Previous</p>
                <p className="text-base font-bold text-white">6.5L</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-48 w-24 flex-col items-center justify-center rounded-t-lg bg-gold-500">
                <p className="text-xs font-semibold text-navy-900/70">New</p>
                <p className="text-lg font-extrabold text-navy-900">18.2L</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-white/50">
            180% average hike recorded for the 2023 batch
          </p>
        </div>
      </div>
    </section>
  );
}