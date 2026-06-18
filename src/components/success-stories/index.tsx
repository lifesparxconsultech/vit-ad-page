import { Quote, Star, MapPin, Play, ArrowRight } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    photo: "/student/student-1.png",
    flag: "🇱🇰",
    quote:
      "VIT has been more than just the source of a degree. The clubs, cultural events and opportunities helped me rediscover my passions and grow both personally and academically.",
    name: "Anuganga Kulenthiran",
    program: "B.Tech. Biotechnology",
    location: "Sri Lanka",
    featured: false,
  },
  {
    photo: "/student/student-2.png",
    flag: "🇨🇳",
    quote:
      "The campus environment is excellent, the faculty are supportive, and the International Office always helps students whenever needed. Studying at VIT has strengthened my future career prospects.",
    name: "Chen Jiankai",
    program: "B.Sc Computer Science",
    location: "China",
    featured: true,
  },
  {
    photo: "/student/student-3.png",
    flag: "🇨🇳",
    quote:
      "VIT provided me with opportunities to develop both technical and leadership skills. International exposure and internship opportunities helped me gain valuable experience and confidence.",
    name: "Hu Xiaoyu",
    program: "B.Sc Computer Science",
    location: "China",
    featured: false,
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-cream-100 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy-900 shadow-sm ring-1 ring-line-200">
          <Quote className="h-3.5 w-3.5 text-gold-500" />
          STUDENT SUCCESS STORIES
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Success Stories From Around the World
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold-500" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-500">
          Hear from our global students about their journey, experiences and
          how VIT has helped them achieve their goals.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {stories.map((story) => (
          <div
            key={story.name}
            className={`relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ${
              story.featured ? "ring-2 ring-navy-900" : "ring-line-200"
            }`}
          >
            {story.featured && (
              <span className="absolute left-1/2 top-3 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-navy-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-500">
                <Star className="h-3 w-3 fill-gold-500" />
                Featured Story
              </span>
            )}

            <div className="relative h-48">
              <Image
                src={story.photo}
                alt={story.name}
                fill
                className="bg-navy-900/10 object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <span className="absolute right-3 top-3 text-2xl leading-none">
                {story.flag}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between">
                <Quote className="h-5 w-5 text-navy-900/30" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                {story.quote}
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-line-200 pt-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy-900/10 text-sm font-bold text-navy-900">
                  {story.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-900">{story.name}</p>
                  <p className="text-xs text-slate-500">{story.program}</p>
                  <p className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" />
                    {story.location}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold ${
                  story.featured
                    ? "bg-navy-900 text-white"
                    : "bg-cream-100 text-navy-900"
                }`}
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Read Full Story
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className={`h-2 w-2 rounded-full ${
              dot === 1 ? "bg-navy-900" : "bg-navy-900/20"
            }`}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-sm ring-1 ring-line-200"
        >
          Explore More Student Stories
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}