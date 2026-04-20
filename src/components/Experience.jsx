import React from 'react';
import { Section } from './Section';
import { Briefcase, ExternalLink } from 'lucide-react';

export function Experience({ data }) {
  return (
    <Section title="Experience">
      <div className="space-y-6">
        {data.map((job) => {
          const isCurrent = job.period.toLowerCase().includes('present');
          const CardTag = job.link ? 'a' : 'div';
          const cardProps = job.link ? { href: job.link, target: "_blank", rel: "noreferrer" } : {};

          return (
            <CardTag {...cardProps} key={job.id} className={`block p-5 md:p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${isCurrent ? 'bg-blue-500/10 border-2 border-blue-500/80 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80'} group`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4">
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {job.role}
                    {job.link && <ExternalLink size={16} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </h4>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-slate-400 mt-2 md:mt-1">
                  <Briefcase size={16} className="shrink-0" />
                  <span className="font-medium text-slate-300">{job.company}</span>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <span className="w-full sm:w-auto mt-1 sm:mt-0">{job.location}</span>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full w-fit shrink-0">
                {job.period}
              </span>
            </div>
            <ul className="mt-4 md:mt-5 list-disc list-outside ml-4 text-sm sm:text-base text-slate-400 space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            </CardTag>
          );
        })}
      </div>
    </Section>
  );
}
