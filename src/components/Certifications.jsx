import React from 'react';
import { Section } from './Section';
import { Award, ArrowUpRight, Star } from 'lucide-react';

export function Certifications({ data }) {
  const sortedData = [...data].sort((a, b) => {
    if (a.pinned && b.pinned) {
      return new Date(b.pinned_at || 0) - new Date(a.pinned_at || 0);
    }
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return (a.order || a.id) - (b.order || b.id);
  });

  return (
    <Section id="certifications" title="Certifications & Credentials" subtitle="Industry certifications in Cloud Computing, Machine Learning, and Backend Engineering">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {sortedData.map((cert) => (
          <a 
            key={cert.id} 
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between p-4 rounded-xl bg-surface border border-border hover:border-border-strong hover:shadow-xs transition-all group"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-surface-hover border border-border text-text-secondary">
                  {cert.issuer}
                </span>
                <div className="flex items-center gap-1">
                  {cert.pinned && (
                    <span className="p-0.5 text-amber-500" title="Pinned">
                      <Star size={11} fill="currentColor" />
                    </span>
                  )}
                  <ArrowUpRight size={13} className="text-text-muted group-hover:text-accent transition-colors" />
                </div>
              </div>

              <h3 className="font-medium text-text-main text-xs sm:text-sm group-hover:text-accent transition-colors leading-snug">
                {cert.name}
              </h3>
            </div>

            <div className="mt-3 pt-2.5 border-t border-border flex items-center gap-1.5 text-[11px] text-text-muted">
              <Award size={12} className="text-accent" />
              <span>Verified Credential</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
