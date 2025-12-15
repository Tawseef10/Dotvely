import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AllProjects from './components/AllProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundGrid } from './components/ui/BackgroundGrid';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');

  const navigateToProjects = () => {
    window.scrollTo(0, 0);
    setCurrentView('projects');
  };

  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setCurrentView('home');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Layer */}
      <BackgroundGrid />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar onNavigateHome={navigateToHome} currentView={currentView} />
        
        {currentView === 'home' ? (
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio onViewAll={navigateToProjects} />
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