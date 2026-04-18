import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('of-theme') as 'light' | 'dark' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = saved ?? preferred;
    setMode(initial);
    document.documentElement.setAttribute('data-mode', initial);
  }, []);

  function toggle() {
    const next = mode === 'light' ? 'dark' : 'light';
    setMode(next);
    document.documentElement.setAttribute('data-mode', next);
    localStorage.setItem('of-theme', next);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      {mode === 'light' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}
