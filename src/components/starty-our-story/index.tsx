const companies = ["Accenture", "Deloitte", "Cognizant", "Amazon", "HCL"];

export default function StartYourStory() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-blue-600 px-6 py-12 text-center">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Start Your Success Story
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85">
          Join thousands of students who have accelerated their careers with
          our premium Online MCA program.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#lead-form"
            className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-600"
          >
            Explore MCA Program
          </a>
          <a
            href="#lead-form"
            className="rounded-lg border border-white/60 px-6 py-3 text-sm font-bold text-white"
          >
            Download Brochure
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl text-center">
        <h3 className="text-xl font-bold text-navy-900">
          Past Participant&apos;s Companies
        </h3>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((company) => (
            <span
              key={company}
              className="text-xl font-extrabold text-slate-500/70"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}