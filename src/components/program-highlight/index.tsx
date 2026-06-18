import { Video, Briefcase, Code, Cast } from "lucide-react";

const highlights = [
  { icon: Video, label: "Live Classes" },
  { icon: Briefcase, label: "Placement Support" },
  { icon: Code, label: "Hands-on Labs" },
  { icon: Cast, label: "Expert Mentorship" },
];

export default function ProgramHighlights() {
  return (
    <section className="bg-navy-900 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Program Highlights
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-y-10 sm:grid-cols-4">
        {highlights.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Icon className="h-6 w-6 text-gold-500" />
            </span>
            <p className="mt-4 text-sm font-medium text-white">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}