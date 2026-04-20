import React from 'react';
import { Section } from './Section';
import { GraduationCap } from 'lucide-react';

export function Education({ data }) {
  return (
    <Section title="Education">
      <div className="space-y-6">
        {data.map((edu) => (
          <div key={edu.id} className="relative pl-6 sm:pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:ring-4 before:ring-blue-500/20 after:content-[''] after:absolute after:left-[5px] after:top-6 after:w-[2px] after:h-full after:bg-slate-800 last:after:hidden transition-all duration-300 transform hover:translate-x-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 sm:gap-2 mb-2">
              <h4 className="text-lg sm:text-xl font-bold text-slate-100">
                {edu.institution}
              </h4>
              <span className="text-xs sm:text-sm text-emerald-400 font-medium md:mt-1 shrink-0">
                {edu.period}
              </span>
            </div>
            <div className="flex items-start md:items-center gap-2 text-sm sm:text-base text-slate-300">
              <GraduationCap size={18} className="text-blue-400 shrink-0 mt-0.5 md:mt-0" />
              <span>{edu.degree}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
