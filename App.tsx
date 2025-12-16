import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import AllProjects from './components/AllProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundGrid } from './components/ui/BackgroundGrid';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const navigateToProjects = () => {
    window.scrollTo(0, 0);
    setCurrentView('projects');
  };

  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setCurrentView('home');
  };

  // Liquid-like click ripple for hero and testimonials sections
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const withinElement = (el: HTMLElement | null) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      };

      const hero = document.getElementById('hero');
      const testimonials = document.getElementById('testimonials');

      // Only trigger ripple when clicking inside hero or testimonials sections
      if (!withinElement(hero) && !withinElement(testimonials)) return;

      const id = Date.now() + Math.random();

      setRipples((prev) => [...prev, { id, x, y }]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 700);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Layer */}
      <BackgroundGrid />

      {/* Global click liquid animation */}
      <div className="pointer-events-none fixed inset-0 z-20">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/40 blur-md animate-[liquidRipple_0.7s_ease-out_forwards]"
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar onNavigateHome={navigateToHome} currentView={currentView} />
        
        {currentView === 'home' ? (
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio onViewAll={navigateToProjects} />
            <Testimonials />
            <Contact />
          </main>
        ) : (
          <main>
            <AllProjects onBack={navigateToHome} />
            <Contact />
          </main>
        )}
        
        <Footer />
      </div>
    </div>
  );
};

export default App;