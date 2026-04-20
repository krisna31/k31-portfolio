import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from './data';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Organizations } from './components/Organizations';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200 relative text-slate-100 overflow-x-hidden">
      <CustomCursor />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/15 blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-600/15 blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] left-[20%] w-[70%] h-[70%] rounded-full bg-purple-600/15 blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 relative z-10">
        <Hero data={cvData.personalInfo} />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 mb-20 text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 font-light backdrop-blur-sm bg-slate-900/30 p-5 sm:p-6 md:p-8 rounded-2xl border border-slate-700/50 shadow-2xl"
        >
          <p>{cvData.summary}</p>
        </motion.div>

        <div className="space-y-20">
          <Experience data={cvData.experience} />
          <Education data={cvData.education} />
          <Organizations data={cvData.organizations} />
          <Projects data={cvData.projects} />
          <Certifications data={cvData.certifications} />
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-600 border-t border-slate-800/50">
        <p>© {new Date().getFullYear()} {cvData.personalInfo.name}. Built With 💗.</p>
      </footer>
    </div>
  );
}

export default App;
