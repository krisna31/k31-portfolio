import React from 'react';
import { Section } from './Section';
import { Users, Star } from 'lucide-react';

export function Organizations({ data }) {
  const sortedData = [...data].sort((a, b) => {
    if (a.pinned && b.pinned) {
      return new Date(b.pinned_at || 0) - new Date(a.pinned_at || 0);
    }
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return (a.order || a.id) - (b.order || b.id);
  });

  return (
    <Section id="organizations" title="Leadership & Organizations" subtitle="Community leadership, tech divisions, and student organization roles">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedData.map((org) => (
          <div 
            key={org.id} 
            className="p-5 sm:p-6 rounded-xl bg-surface border border-border hover:border-border-strong hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-accent shrink-0" />
                  <h3 className="text-sm sm:text-base font-semibold text-text-main">
                    {org.name}
                  </h3>
                </div>
                {org.pinned && (
                  <span className="p-0.5 text-amber-500 shrink-0" title="Pinned">
                    <Star size={12} fill="currentColor" />
                  </span>
                )}
              </div>

              <div className="space-y-2.5 mt-3">
                {org.roles.map((role, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-2.5 rounded-lg bg-surface-hover border border-border text-xs"
                  >
                    <span className="font-medium text-text-main">{role.title}</span>
                    <span className="font-mono text-text-muted shrink-0">{role.period}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-border text-[11px] text-text-muted">
              <span>{org.location}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
