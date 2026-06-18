"use client";

import { useRef, useState } from "react";
import { Quote, Star, Play, MapPin, User, ArrowRight } from "lucide-react";

interface Story {
  name: string;
  program: string;
  location: string;
  flag: string;
  quote: string;
  featured: boolean;
}

const STORIES: Story[] = [
  {
    name: "Anuganga Kulenthiran",
    program: "B.Tech. Biotechnology",
    location: "Sri Lanka",
    flag: "🇱🇰",
    quote:
      "VIT has been more than just the source of a degree. The clubs, cultural events and opportunities helped me rediscover my passions and grow both personally and academically.",
    featured: false,
  },
  {
    name: "Chen Jiankai",
    program: "B.Sc Computer Science",
    location: "China",
    flag: "🇨🇳",
    quote:
      "The campus environment is excellent, the faculty are supportive, and the International Office always helps students whenever needed. Studying at VIT has strengthened my future career prospects.",
    featured: true,
  },
  {
    name: "Hu Xiaoyu",
    program: "B.Sc Computer Science",
    location: "China",
    flag: "🇨🇳",
    quote:
      "VIT provided me with opportunities to develop both technical and leadership skills. International exposure and internship opportunities helped me gain valuable experience and confidence.",
    featured: false,
  },
];

export default function SuccessStories() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(1);

  function setCardRef(i: number) {
    return (el: HTMLElement | null) => {
      cardRefs.current[i] = el;
    };
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, clientWidth } = track;
    const center = scrollLeft + clientWidth / 2;

    let closest = 0;
    let closestDist = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }

  function goTo(i: number) {
    cardRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActive(i);
  }

  return (
    <section className="bg-cream-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-periwinkle-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy-900">
            <Quote className="h-3.5 w-3.5" />
            Student Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
            Success Stories From Around the World
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gold-500" />

          <p className="mt-5 text-base leading-relaxed text-slate-500">
            Hear from our global students about their journey, experiences
            and how VIT has helped them achieve their goals.
          </p>
        </div>

        {/* Cards: horizontal snap-scroll on mobile, 3-col grid from md up */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-14 flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {STORIES.map((story, i) => (
            <article
              key={story.name}
              ref={setCardRef(i)}
              className={`relative w-[82%] flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-md transition-transform md:w-auto ${
                story.featured
                  ? "ring-2 ring-navy-900 shadow-xl md:scale-105 md:z-10"
                  : "ring-1 ring-line-200"
              }`}
            >
              {/* Photo */}
              <div className="relative h-48 w-full bg-gradient-to-br from-navy-900/10 to-navy-800/5">
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-16 w-16 text-navy-900/20" />
                </div>
                {/* Swap the block above for a real photo, e.g.
                    <Image src="/testimonials/name.jpg" alt={story.name} fill className="object-cover" /> */}

                <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-white text-base shadow ring-2 ring-white">
                  {story.flag}
                </span>

                {story.featured && (
                  <span className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow">
                    <Star className="h-3 w-3 fill-gold-500 text-gold-500" />
                    Featured Story
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <Quote className="h-5 w-5 text-slate-300" />
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="h-3.5 w-3.5 fill-gold-500 text-gold-500"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-4 min-h-[100px] text-sm leading-relaxed text-ink-700">
                  {story.quote}
                </p>

                <hr className="my-5 border-line-200" />

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cream-100">
                    <User className="h-5 w-5 text-slate-500" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{story.name}</p>
                    <p className="text-xs text-slate-500">{story.program}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" />
                      {story.location}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 ${
                    story.featured
                      ? "bg-navy-900 text-white hover:bg-navy-800"
                      : "bg-periwinkle-100 text-navy-900 hover:bg-periwinkle-100/70"
                  }`}
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Read Full Story
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination dots (mobile carousel position) */}
        <div className="mt-8 flex items-center justify-center gap-2 md:hidden">
          {STORIES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to story ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-navy-900" : "w-2 bg-line-200"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-sm transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            Explore More Student Stories
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}