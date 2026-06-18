import HeroForm from "@/src/common/hero-form";
import { Trophy, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const checklist = [
  "UGC Entitled Degree",
  "Live Industry Projects",
  "Placement Support",
  "Alumni Status",
];

export default function Hero() {
  return (
    <section className="relative bg-cream-100 max-w-full min-h-1/2">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/campus/campu-bg.png"
          alt="hero image"
          width={100}
          height={100}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-100/80 to-cream-100 opacity-80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">
          {/* Copy column */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-navy-900 shadow-sm ring-1 ring-line-200">
              <Trophy className="h-3.5 w-3.5 text-gold-500" />
              UGC Entitled | AICTE Approved University
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              VIT <span className="text-gold-500">Online MCA</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500">
              Master AI, Cloud, Data Science, and Blockchain from India&apos;s
              #1 Private University. Flexible learning designed for working
              professionals. EduCollege is an independent education counselling
              platform. We help students navigate the admission process for VIT
              Online programs.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base font-semibold text-ink-700"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Lead capture column */}
          <div>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}