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
  const [progress, setProgress] = useState(0);

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

  // Live progress bar tied to autoplay
  useEffect(() => {
    if (isHovering) return;

    setProgress(0);
    const start = performance.now();
    let frameId: number;

    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min((elapsed / AUTO_PLAY_INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [activeIndex, isHovering]);

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-6 h-56 w-56 rounded-full bg-indigo-300/30 blur-3xl animate-blob" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl animate-blob" />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-medium text-indigo-700 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Clients in India love the experience</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
              Voices of trust
            </h2>
            <p className="text-slate-500 max-w-md">
              Real stories from teams who partnered with Dotvely to design fast, modern and deeply human web experiences.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="hidden sm:inline">Swipe, tap or let it play</span>
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 active:scale-95 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)] items-stretch">
          {/* Main card */}
          <article
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-[0_22px_60px_rgba(15,23,42,0.12)] p-8 sm:p-10 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute inset-px rounded-[1.4rem] bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.13),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_55%)] opacity-80" />

            <div className="relative flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${active.avatarColor} shadow-lg shadow-indigo-400/40`}
                  >
                    <span className="text-lg font-semibold text-white">
                      {active.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                    <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-indigo-500">
                    <Quote className="h-4 w-4" />
                    <span>Client story</span>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed text-slate-800">
                    “{active.quote}”
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-4 border-t border-slate-200/80">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {active.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {active.role} · {active.company}
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-[11px] text-slate-600 border border-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{active.location}</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                    Project
                  </div>
                  <div className="text-sm font-medium text-slate-900">
                    {active.project}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    key={active.id}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-[width] duration-150 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs tabular-nums text-slate-400">
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
                'relative flex cursor-pointer items-center gap-3 rounded-2xl border bg-white/80 px-4 py-3 transition-all duration-300 backdrop-blur-sm';

              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className={`${baseClasses} ${
                    isActive
                      ? 'border-indigo-300 shadow-[0_18px_40px_rgba(79,70,229,0.25)] scale-[1.02] bg-white'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 opacity-80 hover:opacity-100 hover:-translate-y-0.5'
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
                      <p className="truncate text-sm font-medium text-slate-900">
                        {t.company}
                      </p>
                      {isActive && (
                        <span className="ml-2 inline-flex h-1.5 w-6 overflow-hidden rounded-full bg-slate-100">
                          <span className="w-full bg-gradient-to-r from-indigo-500 to-sky-400 animate-[shimmer_2s_linear_infinite]" />
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">
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
