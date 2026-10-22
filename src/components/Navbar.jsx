import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export function Navbar() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certs', href: '#certifications' }
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-2 sm:gap-4 px-2.5 sm:px-3 py-1.5 rounded-full backdrop-blur-md bg-surface/85 border border-border shadow-xs text-xs sm:text-sm text-text-secondary transition-all"
      >
        {/* Section Navigation Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 sm:px-3 py-1 rounded-full text-text-secondary hover:text-text-main hover:bg-surface-hover transition-colors font-medium text-xs sm:text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-4 w-[1px] bg-border my-auto shrink-0" />

        {/* Theme Toggle (3-state: Light, System, Dark) */}
        <div 
          role="radiogroup" 
          aria-label="Color Theme Selection"
          className="flex items-center p-0.5 rounded-full bg-surface-hover border border-border shrink-0"
        >
          <button
            type="button"
            role="radio"
            aria-checked={theme === 'light'}
            title="Light theme"
            onClick={() => setTheme('light')}
            className={`p-1.5 rounded-full transition-colors relative ${
              theme === 'light' ? 'text-text-main' : 'text-text-muted hover:text-text-main'
            }`}
          >
            {theme === 'light' && (
              <motion.div
                layoutId="theme-pill"
                className="absolute inset-0 bg-surface rounded-full shadow-xs border border-border"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Sun size={13} className="relative z-10" />
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={theme === 'system'}
            title={`System preference (${resolvedTheme})`}
            onClick={() => setTheme('system')}
            className={`p-1.5 rounded-full transition-colors relative ${
              theme === 'system' ? 'text-text-main' : 'text-text-muted hover:text-text-main'
            }`}
          >
            {theme === 'system' && (
              <motion.div
                layoutId="theme-pill"
                className="absolute inset-0 bg-surface rounded-full shadow-xs border border-border"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Laptop size={13} className="relative z-10" />
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={theme === 'dark'}
            title="Dark theme"
            onClick={() => setTheme('dark')}
            className={`p-1.5 rounded-full transition-colors relative ${
              theme === 'dark' ? 'text-text-main' : 'text-text-muted hover:text-text-main'
            }`}
          >
            {theme === 'dark' && (
              <motion.div
                layoutId="theme-pill"
                className="absolute inset-0 bg-surface rounded-full shadow-xs border border-border"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Moon size={13} className="relative z-10" />
          </button>
        </div>
      </nav>
    </header>
  );
}
