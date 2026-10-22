import React from 'react';
import { Section } from './Section';
import { GraduationCap, Award, Star } from 'lucide-react';

export function Education({ data }) {
  const sortedData = [...data].sort((a, b) => {
    if (a.pinned && b.pinned) {
      return new Date(b.pinned_at || 0) - new Date(a.pinned_at || 0);
    }
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return (a.order || a.id) - (b.order || b.id);
  });

  return (
    <Section id="education" title="Education" subtitle="Academic background and specialized academy programs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedData.map((edu) => {
          const hasGpa = edu.degree.includes('GPA');

          return (
            <div
              key={edu.id}
              className="p-5 sm:p-6 rounded-xl bg-surface border border-border hover:border-border-strong hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-accent shrink-0" />
                    <h3 className="text-sm sm:text-base font-semibold text-text-main">
                      {edu.institution}
                    </h3>
                  </div>
                  {edu.pinned && (
                    <span className="p-0.5 text-amber-500 shrink-0" title="Pinned">
                      <Star size={12} fill="currentColor" />
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-2">
                  {edu.degree}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 pt-4 mt-3 border-t border-border">
                <span className="text-xs font-mono text-text-muted">
                  {edu.period}
                </span>

                {hasGpa && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-accent-muted text-accent-fg border border-accent/20">
                    <Award size={11} />
                    <span>GPA 3.97</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
