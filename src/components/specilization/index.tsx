"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const specializations = [
  {
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems through coursework in deep learning, natural language processing, and computer vision.",
  },
  {
    title: "Data Science",
    description:
      "Turn raw data into decisions with statistics, visualization, and big-data tooling used across the industry.",
  },
  {
    title: "Cloud Computing",
    description:
      "Design, deploy, and scale systems on AWS, Azure, and GCP with hands-on infrastructure labs.",
  },
];

export default function Specializations() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-cream-100 px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Photo + testimonial */}
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/campus/specilization.png"
            alt="VIT University students on campus"
            className="h-[480px] w-full rounded-3xl bg-navy-900/10 object-cover grayscale"
            width={100}
            height={100}
          />

          <div className="absolute -bottom-8 left-6 w-72 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-line-200">
            <p className="text-sm font-bold leading-snug text-navy-900">
              &quot;I chose AI &amp; ML, and it transformed how I view
              technology. The labs were incredible!&quot;
            </p>
            <p className="mt-3 text-xs text-slate-500">
              — Aditi R., Lead Data Scientist
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Specializations
          </h2>

          <div className="mt-8 divide-y divide-line-200 border-b border-line-200">
            {specializations.map((spec, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={spec.title}>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="text-base font-semibold text-ink-700">
                      {spec.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="pb-5 text-sm leading-relaxed text-slate-500">
                      {spec.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}