import React, { createContext, useContext, useEffect, useState } from 'react';
import { THEMES } from '../style/themeMode';
import { checkSystemForThemePreferences } from '../utils/consultThemePreference';
import { themeDark } from '../utils/keyStorage';
import { handleStorage } from '../utils/handleStorage';

const ThemeContext = createContext({});

function Theme({ children, THEME, toggleValue }) {
  const isDarkModeLocalStorage = handleStorage.get(themeDark)
  const [theme, setTheme] = useState(THEME);
  const [isDarkEnabled, setIsDarkEnabled] = useState(toggleValue);

  const handleDarkLightThemes = (darkEnabled) => {
    setTheme(darkEnabled ? THEMES.DARK : THEMES.LIGHT)
  }

  useEffect(() => {
    handleDarkLightThemes(isDarkEnabled)
  }, [isDarkEnabled])

  useEffect(() => {
    const prefersColorSchemeDark = checkSystemForThemePreferences()
    const onPrefersColorSchemeDarkChange = (e) => {
      handleStorage.set(themeDark, e.matches)
      setIsDarkEnabled(e.matches)
    }
    prefersColorSchemeDark.addEventListener("change", onPrefersColorSchemeDarkChange);
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
