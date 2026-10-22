import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'system';
    return localStorage.getItem('theme') || 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (currentTheme) => {
      const isSystem = currentTheme === 'system';
      const isDark = isSystem ? mediaQuery.matches : currentTheme === 'dark';
      const resolved = isDark ? 'dark' : 'light';

      setResolvedTheme(resolved);

      if (isDark) {
        document.documentElement.classList.add('dark');
        document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'light');
      }

      if (isSystem) {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', currentTheme);
      }
    };

    applyTheme(theme);

    const handleSystemChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        setThemeState(e.newValue || 'system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [theme]);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
