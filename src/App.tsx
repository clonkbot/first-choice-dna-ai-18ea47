import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-slow-spin">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-transparent blur-3xl" />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-blue-600/10 via-transparent to-transparent blur-3xl" />
        {/* DNA Helix decorative element */}
        <svg className="absolute right-0 top-0 h-full w-32 opacity-5" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path d="M50,0 Q100,50 50,100 Q0,150 50,200 Q100,250 50,300 Q0,350 50,400 Q100,450 50,500 Q0,550 50,600 Q100,650 50,700 Q0,750 50,800 Q100,850 50,900 Q0,950 50,1000" stroke="currentColor" fill="none" strokeWidth="2" className="text-cyan-400" />
        </svg>
      </div>

      {/* Mobile header */}
      <MobileNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />

      <div className="relative flex min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Main content */}
        <main className={`flex-1 lg:ml-72 p-4 md:p-6 lg:p-8 pt-20 lg:pt-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Dashboard activeSection={activeSection} />

          {/* Footer */}
          <footer className="mt-12 pb-6 text-center">
            <p className="text-xs text-slate-600 tracking-wide">
              Requested by <span className="text-slate-500">@justin</span> · Built by <span className="text-slate-500">@clonkbot</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
