import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { THEMES, THEME_TYPES } from '../style/themeMode';

const ThemeContext = createContext({
  isDarkEnabled: false,
  theme: THEMES.LIGHT
});

function Theme({ children }) {
  const isDarkModeLocalStorage = localStorage.getItem("isDarkMode")
  const [theme, setTheme] = useState({});
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);

  const handleDarkLightThemes = (darkEnabled) => {
    setTheme(darkEnabled ? THEMES.DARK : THEMES.LIGHT)
  }

  useEffect(() => {
    handleDarkLightThemes(isDarkEnabled)
  }, [isDarkEnabled])

  useEffect(() => {
    // onchange
    const prefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)')
    const onPrefersColorSchemeDarkChange = (e) => {
      localStorage.setItem("isDarkMode", e.matches)
      setIsDarkEnabled(e.matches)
    }
    prefersColorSchemeDark.addEventListener("change", onPrefersColorSchemeDarkChange);
    // default value
    if (isDarkModeLocalStorage !== null) {
      setIsDarkEnabled(isDarkModeLocalStorage === "true")
      return;
    }
    setIsDarkEnabled(prefersColorSchemeDark.matches)
    return () => {
      // design pattern observer
      prefersColorSchemeDark.removeEventListener("change", onPrefersColorSchemeDarkChange)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      isDarkEnabled, 
      handleDarkLightThemes,
      setIsDarkEnabled
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export { Theme, useThemeContext }
