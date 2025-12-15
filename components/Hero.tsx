import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // We want global window coordinates for smoother tracking across the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[95vh]"
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Primary Glow - follows mouse closely */}
        <div 
          className="absolute w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-multiply transition-transform duration-100 ease-out"
          style={{
            left: -300,
            top: -300,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />

        {/* Secondary Glow - follows mouse with lag/inverse for parallax */}
        <div 
          className="absolute w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] mix-blend-multiply transition-transform duration-500 ease-out"
          style={{
            left: -200,
            top: -200,
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          }}
        />

        {/* Tertiary Accent - Static but animated */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-[128px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Now accepting new clients
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
          Elevating <br className="hidden md:block" />
          <span className="relative inline-block text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.indigo.600),theme(colors.blue.600),theme(colors.purple.600),theme(colors.indigo.600))] bg-[length:200%_auto] animate-shine">
            Local Businesses
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
          We craft high-performance, future-ready websites designed to turn local traffic into loyal customers. No clutter, just impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary CTA */}
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-slate-900 rounded-full text-white font-semibold shadow-2xl shadow-slate-900/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-shine"></div>
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          {/* Secondary CTA */}
          <button 
            onClick={scrollToWork}
            className="group relative px-8 py-4 bg-white rounded-full text-slate-700 font-semibold border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform text-indigo-600">
                <Play size={10} fill="currentColor" />
              </span>
              View Our Work
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-300 hover:text-indigo-500 transition-colors cursor-pointer" onClick={() => {
        const about = document.getElementById('about');
        about?.scrollIntoView({ behavior: 'smooth' });
      }}>
        <ChevronDown size={32} strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;