import React from 'react';
import { Section } from './Section';
import { Award, ExternalLink, Star } from 'lucide-react';

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
    <Section title="Certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {sortedData.map((cert) => (
          <a 
            key={cert.id} 
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className={`relative group flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-slate-800/20 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-slate-800/40 ${cert.pinned ? 'ring-1 ring-yellow-500/30' : ''}`}
          >
            {cert.pinned && (
              <div className="absolute top-0 right-0 -mt-1.5 -mr-1.5 bg-yellow-500/20 p-1 rounded-full ring-1 ring-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] z-10 backdrop-blur-sm" title="Pinned Certification">
                <Star size={10} className="text-yellow-500" fill="currentColor" />
              </div>
            )}
            <Award className="text-emerald-500 shrink-0 mt-0.5 sm:mt-1" size={20} />
            <div className="flex-1">
              <h4 className="font-semibold text-slate-200 text-sm sm:text-base group-hover:text-emerald-400 transition-colors">{cert.name}</h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{cert.issuer}</p>
            </div>
            <ExternalLink size={14} className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
          </a>
        ))}
      </div>
    </Section>
  );
}
