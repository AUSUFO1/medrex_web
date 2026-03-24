import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('medrex-theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;

      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('medrex-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('medrex-theme', 'light');
      }

      return next;
    });
  };

  return { isDark, toggle };
}