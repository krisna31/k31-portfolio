import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from './data';
import { ThemeProvider } from './context/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Organizations } from './components/Organizations';
import { ArrowUp, Sparkles, Code2, Cloud, Cpu } from 'lucide-react';

function PortfolioContent() {
  const highlightStats = [
    { label: 'Experience', value: '2+ Years', icon: Code2 },
    { label: 'Academic Standing', value: '3.97 GPA', icon: Sparkles },
    { label: 'Cloud Certified', value: 'Google ACE', icon: Cloud },
    { label: 'AI & ML', value: 'TensorFlow', icon: Cpu },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-canvas text-text-main relative overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Subtle Local Grid Background (No external assets or heavy gradient blobs) */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* Floating Top Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero data={cvData.personalInfo} />

        {/* Editorial Summary & Highlight Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-xs"
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-secondary font-normal">
            {cvData.summary}
          </p>

          {/* Quick Highlight Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-border">
            {highlightStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-hover/70 border border-border/70">
                  <div className="flex items-center gap-1.5 text-text-muted text-[11px] font-medium">
                    <Icon size={13} className="text-accent" />
                    <span>{stat.label}</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-text-main">
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-4">
          <Experience data={cvData.experience} />
          <Projects data={cvData.projects} />
          <Education data={cvData.education} />
          <Certifications data={cvData.certifications} />
          <Organizations data={cvData.organizations} />
        </div>
      </main>

      {/* Clean Footer */}
      <footer className="mt-16 py-8 border-t border-border relative z-10 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-mono">React 19 • Tailwind v4 • Vite</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-text-secondary hover:text-text-main transition-colors p-1"
              title="Back to top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
