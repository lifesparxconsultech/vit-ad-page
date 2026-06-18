"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the VIT Online MCA Degree valid for Govt Jobs?",
    answer:
      "Yes, absolutely. The VIT Online MCA is UGC-DEB approved. As per UGC notification, degrees obtained through online mode are at par with degrees from regular campus-based universities for all employment and higher education purposes.",
  },
  {
    question: "Do I need to visit any study center for exams?",
    answer:
      "No physical study center visits are required. Proctored exams are conducted online, and you can take them remotely from your home or workplace using a laptop and webcam.",
  },
  {
    question: "Is there an entrance exam for MCA?",
    answer:
      "There is no separate entrance exam. Admission is based on eligibility criteria, and shortlisted candidates may be required to attend a brief counselling or eligibility verification call.",
  },
  {
    question: "What is the fee payment process?",
    answer:
      "Fees can be paid semester-wise through net banking, debit/credit card, or UPI via the official VIT payment portal. No-cost EMI options are also available through partner lenders.",
  },
  {
    question: "Can I study while working full-time?",
    answer:
      "Yes. The program is designed for working professionals, with recorded lectures, weekend live sessions, and flexible deadlines so you can balance coursework alongside your job.",
  },
  {
    question: "Are there any live sessions?",
    answer:
      "Yes, weekly live sessions are conducted by VIT faculty for doubt-clearing and interactive discussions. All sessions are recorded and available on-demand for later viewing.",
  },
  {
    question: "What support will I get from EduCollege?",
    answer:
      "EduCollege provides end-to-end guidance through the admission process, document verification support, and a dedicated counsellor to answer questions before and after enrollment.",
  },
  {
    question: "When does the next batch start?",
    answer:
      "New batches typically begin every semester. Reach out to a counsellor for the exact upcoming intake date and the application deadline for that batch.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: any) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl px-6 py-5 transition-colors ${
                  isOpen ? "bg-periwinkle-100" : "bg-cream-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-bold text-navy-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-navy-900 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}