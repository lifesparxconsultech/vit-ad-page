import { MessageSquare } from "lucide-react";

export default function CounsellorCta() {
  return (
    <section className="bg-blue-100 px-6 py-16 text-center">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
        Still deciding? Our counsellors are here to help.
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
        Get a free personalized career roadmap and detailed course prospectus
        today.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#lead-form"
          className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-[1.02]"
        >
          Request a Callback
        </a>

        <a
          href="#lead-form"
          className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-600/30 transition-transform hover:scale-[1.02]"
        >
          Chat on WhatsApp
          <MessageSquare className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}