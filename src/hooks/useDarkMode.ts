import { useEffect, useState } from 'react';

const STORAGE_KEY = 'medrex-theme';

function getStoredTheme() {
  if (typeof window === 'undefined') {
    return false;
  }

  return localStorage.getItem(STORAGE_KEY) === 'dark';
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState(getStoredTheme);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  return {
    isDark,
    toggle: () => setIsDark((current) => !current),
  };
}
