import React from 'react';
import { Section } from './Section';
import { Users } from 'lucide-react';

export function Organizations({ data }) {
  return (
    <Section title="Organizations">
      <div className="space-y-6">
        {data.map((org) => (
          <div key={org.id} className="p-5 md:p-6 rounded-xl bg-slate-800/20 border border-slate-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30">
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
