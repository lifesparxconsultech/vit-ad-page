import { MonitorPlay, TrendingUp, Users, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Future-Focused Curriculum",
    description:
      "Stay ahead with coursework designed around current and emerging tech trends.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description:
      "Accelerate your trajectory into leadership roles with a degree from a top-tier brand.",
  },
  {
    icon: Users,
    title: "Global Networking",
    description:
      "Connect with peers and mentors from across the globe through a modern platform.",
  },
  {
    icon: BadgeCheck,
    title: "UGC Recognized",
    description:
      "Gain an authentic, accredited degree valid for government and private sector roles.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-cream-100 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Why Choose VIT Online MCA?
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold-500" />
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line-200"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500">
              <Icon className="h-6 w-6 text-navy-900" />
            </span>

            <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}