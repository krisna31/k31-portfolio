import React from 'react';
import { Section } from './Section';
import { FolderGit2, ExternalLink, Lock } from 'lucide-react';

export function Projects({ data }) {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {data.map((project, idx) => {
          const isOddLast = data.length % 2 !== 0 && idx === data.length - 1;
          
          return (
            <div 
              key={project.id} 
              className={`group p-5 md:p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer flex flex-col justify-between h-full w-full ${isOddLast ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
            >
              <div>
                <FolderGit2 className="text-blue-500 mb-3 md:mb-4" size={32} />
                <h4 className="text-lg md:text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h4>
                
                {project.contributors && project.contributors.length > 0 && (
                  <div className="flex -space-x-2 mt-4 mb-2">
                    {project.contributors.map((contributor, cIdx) => {
                      const avatarUrl = contributor.github 
                        ? `https://github.com/${contributor.github}.png?size=60`
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(contributor.name)}&background=334155&color=fff`;

                      return (
                        <a 
                          key={cIdx}
                          href={contributor.github ? `https://github.com/${contributor.github}` : '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group/avatar"
                        >
                          <img
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800 object-cover bg-slate-700 hover:z-10 hover:ring-blue-500 transition-all"
                            src={avatarUrl}
                            alt={contributor.name}
                            title={contributor.name}
                          />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
              
              {project.link && project.link !== "#" ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-6 block">
                  <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-slate-400 group-hover:text-emerald-400 transition-colors break-all">
                    <ExternalLink size={16} className="shrink-0 mt-0.5 sm:mt-0 text-slate-100 group-hover:text-emerald-400 transition-colors" />
                    <span>{project.link}</span>
                  </div>
                </a>
              ) : (
                <div className="mt-4 md:mt-6 flex items-start sm:items-center gap-2 text-xs sm:text-sm text-slate-500 border border-slate-700/50 bg-slate-800/50 w-fit px-3 py-1.5 rounded-md">
                  <Lock size={14} className="shrink-0 text-slate-400" />
                  <span>Private Project</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
