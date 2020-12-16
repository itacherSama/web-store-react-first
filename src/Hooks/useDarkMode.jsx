import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);

    setTheme(mode);
  };

  const themeToggler = () => {
    const mode = theme === 'light' ? 'dark' : 'light';
    setMode(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const mode = localTheme ? localTheme : 'light';
    setMode(mode);

    if (localTheme) {
      setTheme(localTheme);
    }

    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};

export default useDarkMode;
