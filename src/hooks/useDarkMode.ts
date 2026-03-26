import { useEffect, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'medrex-theme';

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  if (typeof window === 'undefined') {
    return false;
  }

  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored === 'dark') {
    return true;
  }

  if (stored === 'light') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getServerSnapshot() {
  return false;
}

export function useDarkMode() {
  const isDark = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  return {
    isDark,
    toggle: () => {
      const next = !getClientSnapshot();
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', next);
      window.dispatchEvent(new Event('storage'));
    },
  };
}
