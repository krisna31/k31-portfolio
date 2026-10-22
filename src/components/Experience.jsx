import React from 'react';
import { Section } from './Section';
import { Briefcase, ArrowUpRight, Star } from 'lucide-react';

export function Experience({ data }) {
  const sortedData = [...data].sort((a, b) => {
    if (a.pinned && b.pinned) {
      return new Date(b.pinned_at || 0) - new Date(a.pinned_at || 0);
    }
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return (a.order || a.id) - (b.order || b.id);
  });

  return (
    <Section id="experience" title="Work Experience" subtitle="Professional software engineering, teaching, and mentoring roles">
      <div className="space-y-4">
        {sortedData.map((job) => {
          const isCurrent = job.period.toLowerCase().includes('present');
          const CardTag = job.link ? 'a' : 'div';
          const cardProps = job.link 
            ? { href: job.link, target: '_blank', rel: 'noreferrer' } 
            : {};

          return (
            <CardTag
              {...cardProps}
              key={job.id}
              className={`block p-5 sm:p-6 rounded-xl bg-surface border transition-all duration-200 group hover:border-border-strong hover:shadow-xs ${
                isCurrent
                  ? 'border-accent/40 bg-accent-muted/20'
                  : 'border-border'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-text-main group-hover:text-accent transition-colors flex items-center gap-1.5">
                      <span>{job.role}</span>
                      {job.link && (
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </h3>
                    {job.pinned && (
                      <span className="p-0.5 rounded text-amber-500" title="Pinned">
                        <Star size={12} fill="currentColor" />
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-text-secondary mt-1">
                    <span className="font-medium text-text-main">{job.company}</span>
                    <span className="text-text-muted">•</span>
                    <span className="text-text-muted">{job.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Current</span>
                    </span>
                  )}
                  <span className="text-xs font-mono text-text-muted px-2 py-0.5 rounded bg-surface-hover border border-border">
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </CardTag>
          );
        })}
      </div>
    </Section>
  );
}
