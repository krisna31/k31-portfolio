import React from 'react';
import { Section } from './Section';
import { ExternalLink, Lock, Star, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const projectMetadata = {
  1: {
    tags: ['Google Cloud', 'TensorFlow', 'Node.js', 'Android'],
    description: 'Bangkit Academy capstone project integrating machine learning models with scalable cloud APIs for real-time interview preparation and evaluation.'
  },
  2: {
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    description: 'Comprehensive backend REST API and administrative dashboard for civic reporting and ticket management.'
  },
  3: {
    tags: ['Enterprise ERP', 'PostgreSQL', 'Web Systems'],
    description: 'Proprietary internal ERP desktop & web system streamlining company operations, inventory, and transactions.'
  }
};

export function Projects({ data }) {
  const sortedData = [...data].sort((a, b) => {
    if (a.pinned && b.pinned) {
      return new Date(b.pinned_at || 0) - new Date(a.pinned_at || 0);
    }
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return (a.order || a.id) - (b.order || b.id);
  });

  return (
    <Section id="projects" title="Featured Projects" subtitle="Selected open-source and proprietary software engineering work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {sortedData.map((project) => {
          const meta = projectMetadata[project.id] || { tags: [], description: '' };
          const isPrivate = !project.link || project.link === '#';

          return (
            <div 
              key={project.id} 
              className={`flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-surface border transition-all duration-200 group hover:border-border-strong hover:shadow-xs ${
                project.pinned 
                  ? 'border-amber-500/40 dark:border-amber-500/30' 
                  : 'border-border'
              }`}
            >
              <div>
                {/* Header Row: Title & Pinned/Private Badge */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className="text-base sm:text-lg font-semibold text-text-main group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  {project.pinned && (
                    <span 
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 shrink-0"
                    >
                      <Star size={11} fill="currentColor" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Description */}
                {meta.description && (
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {meta.description}
                  </p>
                )}

                {/* Tech Stack Pills */}
                {meta.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {meta.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-hover border border-border text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer: Collaborators & Action Link */}
              <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                {/* Collaborators Avatar Stack */}
                {project.contributors && project.contributors.length > 0 ? (
                  <div className="flex items-center">
                    <div className="flex -space-x-1.5 overflow-hidden py-1">
                      {project.contributors.map((contributor, cIdx) => {
                        const avatarUrl = contributor.github 
                          ? `https://github.com/${contributor.github}.png?size=64`
                          : `https://ui-avatars.com/api/?name=${encodeURIComponent(contributor.name)}&background=27272a&color=fff`;

                        return (
                          <a 
                            key={cIdx}
                            href={contributor.github ? `https://github.com/${contributor.github}` : '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={contributor.name}
                            className="relative inline-block hover:z-10 focus:z-10 transition-transform hover:scale-110"
                          >
                            <img
                              className="h-6 w-6 rounded-full ring-2 ring-surface object-cover bg-surface-hover"
                              src={avatarUrl}
                              alt={contributor.name}
                            />
                          </a>
                        );
                      })}
                    </div>
                    <span className="text-[11px] text-text-muted ml-2 font-mono">
                      {project.contributors.length} devs
                    </span>
                  </div>
                ) : <div />}

                {/* Link / Lock Button */}
                {isPrivate ? (
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs text-text-muted bg-surface-hover border border-border">
                    <Lock size={12} />
                    <span>Private</span>
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-accent transition-colors group/link"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Callout */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/krisna31"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border hover:border-border-strong text-text-main text-xs sm:text-sm font-medium shadow-2xs hover:bg-surface-hover transition-all"
        >
          <FaGithub size={15} />
          <span>More repositories on GitHub</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </Section>
  );
}
