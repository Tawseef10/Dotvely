import React, { useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarColor: string;
  quote: string;
  project: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aarav Mehta',
    role: 'Founder',
    company: 'Urban Bean Café',
    avatarColor: 'from-indigo-500 to-sky-500',
    quote:
      'Dotvely completely reimagined our online experience. We saw a 40% increase in online orders within the first month after launch.',
    project: 'Full-stack E‑Commerce Website',
    location: 'Mumbai, India',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Marketing Lead',
    company: 'Apex InfraBuild',
    avatarColor: 'from-emerald-500 to-lime-400',
    quote:
      'The new site feels premium and effortless. Our lead form conversion rate doubled, and clients keep mentioning how fast the site feels.',
    project: 'Corporate Presence & Lead Engine',
    location: 'Bengaluru, India',
  },
  {
    id: 3,
    name: 'Rohan Gupta',
    role: 'Creative Director',
    company: 'Lumina Studio',
    avatarColor: 'from-fuchsia-500 to-rose-500',
    quote:
      'They translated our visual identity into a living, breathing website. The subtle micro‑animations make every scroll feel cinematic.',
    project: 'Portfolio Experience for a Creative Studio',
    location: 'New Delhi, India',
  },
];

const AUTO_PLAY_INTERVAL = 7000; // ms

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const goTo = (index: number) => {
    const total = testimonials.length;
    const nextIndex = ((index % total) + total) % total;
    setActiveIndex(nextIndex);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  // Auto play with pause on hover
  useEffect(() => {
    if (isHovering) return;

    const timer = setTimeout(() => {
      goNext();
    }, AUTO_PLAY_INTERVAL);

    return () => clearTimeout(timer);
  }, [activeIndex, isHovering]);

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-slate-950/95 text-slate-50 overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-indigo-500/40 blur-3xl animate-blob" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clients in India love the experience</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50 mb-3">
              Voices of trust
            </h2>
            <p className="text-slate-400 max-w-md">
              Real stories from teams who partnered with Dotvely to design fast, modern and deeply human web experiences.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="hidden sm:inline">Swipe, tap or let it play</span>
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200 hover:border-indigo-400 hover:bg-slate-900 hover:text-white transition-all duration-200 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200 hover:border-indigo-400 hover:bg-slate-900 hover:text-white transition-all duration-200 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)] items-stretch"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main card */}
          <article className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-950/95 to-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.85)] p-8 sm:p-10">
            <div className="absolute inset-px rounded-[1.4rem] bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.2),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),transparent_55%)] opacity-60" />

            <div className="relative flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${active.avatarColor} shadow-lg shadow-indigo-500/40`}
                  >
                    <span className="text-lg font-semibold text-white">
                      {active.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                    <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-indigo-200">
                    <Quote className="h-4 w-4" />
                    <span>Client story</span>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed text-slate-100">
                    “{active.quote}”
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-4 border-t border-slate-800/70">
                <div>
                  <div className="text-sm font-semibold text-slate-100">
                    {active.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {active.role} · {active.company}
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300 border border-slate-700/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{active.location}</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">
                    Project
                  </div>
                  <div className="text-sm font-medium text-slate-100">
                    {active.project}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800/80">
                  <div
                    key={active.id}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 animate-[shimmer_7s_linear_forwards]"
                  />
                </div>
                <span className="text-xs tabular-nums text-slate-500">
                  {String(activeIndex + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </article>

          {/* Stack of small preview cards */}
          <div className="relative flex flex-col gap-4">
            {testimonials.map((t, index) => {
              const isActive = index === activeIndex;
              const baseClasses =
                'relative flex cursor-pointer items-center gap-3 rounded-2xl border bg-slate-900/60 px-4 py-3 transition-all duration-300';

              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`${baseClasses} ${
                    isActive
                      ? 'border-indigo-400/80 shadow-[0_18px_40px_rgba(129,140,248,0.45)] scale-[1.02] bg-slate-900'
                      : 'border-slate-800/80 hover:border-slate-600/80 hover:bg-slate-900/90 opacity-80 hover:opacity-100'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.avatarColor} text-xs font-semibold text-white`}
                  >
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium text-slate-100">
                        {t.company}
                      </p>
                      {isActive && (
                        <span className="ml-2 inline-flex h-1.5 w-6 overflow-hidden rounded-full bg-slate-800">
                          <span className="w-full bg-gradient-to-r from-indigo-400 to-sky-400" />
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">
                      “{t.quote}”
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
