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
    <Section title="Organizations">
      <div className="space-y-6">
        {sortedData.map((org) => (
          <div key={org.id} className={`relative p-5 md:p-6 rounded-xl bg-slate-800/20 border border-slate-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30 ${org.pinned ? 'ring-1 ring-yellow-500/30' : ''}`}>
            {org.pinned && (
              <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-yellow-500/20 p-1.5 rounded-full ring-1 ring-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] z-10 backdrop-blur-sm" title="Pinned Organization">
                <Star size={14} className="text-yellow-500" fill="currentColor" />
              </div>
            )}
            <h4 className="text-lg sm:text-xl font-bold text-slate-100 flex items-start gap-2 mb-3 md:mb-4">
              <Users size={20} className="text-blue-500 shrink-0 mt-0.5" />
              <span>{org.name}</span>
            </h4>
            <div className="space-y-3 sm:space-y-4 ml-7">
              {org.roles.map((role, index) => (
                <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 sm:gap-2 border-l-2 border-slate-700 pl-3 sm:pl-4">
                  <span className="font-medium text-slate-300 text-sm sm:text-base">{role.title}</span>
                  <span className="text-xs sm:text-sm text-slate-500 shrink-0 md:mt-0.5">{role.period}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
