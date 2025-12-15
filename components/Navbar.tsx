import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigateHome: () => void;
  currentView: 'home' | 'projects';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-4 px-4 pointer-events-none">
        <nav className={`pointer-events-auto transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-lg shadow-indigo-500/10 rounded-full px-6 py-3 w-full max-w-5xl' 
            : 'bg-transparent border-transparent px-6 py-4 w-full max-w-7xl'
        } flex items-center justify-between`}>
          
          {/* Logo */}
          <div 
            onClick={onNavigateHome}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative w-9 h-9 bg-slate-900 text-white rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Rocket size={18} className="text-indigo-400" />
              </div>
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Dot<span className="text-indigo-600">vely</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {['About', 'Services', 'Work', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group overflow-hidden rounded-full hover:bg-slate-100/50"
              >
                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
             <button 
              onClick={() => scrollToSection('contact')}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#4f46e5_50%,#E2E8F0_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-900 backdrop-blur-3xl transition-all group-hover:bg-white group-hover:text-indigo-600 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                <span className="mr-2">Start Project</span>
                <Sparkles size={14} className="group-hover:animate-ping" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pointer-events-auto">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-indigo-600 transition-colors bg-white/50 backdrop-blur-sm rounded-full"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {['About', 'Services', 'Work', 'Contact'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-2xl font-bold text-slate-800 hover:text-indigo-600 transition-colors"
          >
            {item}
          </button>
        ))}
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-xl shadow-indigo-500/30 active:scale-95 transition-all"
        >
          Start Project
        </button>
      </div>
    </>
  );
};

export default Navbar;