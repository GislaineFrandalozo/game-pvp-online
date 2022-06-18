
import { useEffect, useState } from 'react';

import { THEMES } from '../style/themeMode';
import { checkSystemForThemePreferences } from "../utils/consultThemePreference";
import { tokenAuth } from '../utils/keyStorage';
import { handleStorage } from '../utils/handleStorage';
// My component
import { Theme } from './themeContext';

function HandleThemeContext({ children }) {

  const [defaultTheme, setDefaultTheme] = useState(THEMES.LIGHT)
  const [defaultToggleTheme, setDefaultToggleTheme] = useState(false)

  useEffect(() => {
    const isDarkModeLocalStorage = handleStorage.get(tokenAuth)
    if (isDarkModeLocalStorage === null || isDarkModeLocalStorage === undefined) {
      const prefersColorSchemeDark = checkSystemForThemePreferences()
      if (prefersColorSchemeDark.matches) {
        setDefaultTheme(THEMES.DARK)
        setDefaultToggleTheme(true)
      }
    }
    if (isDarkModeLocalStorage == "true") {
      setDefaultTheme(THEMES.DARK)
      setDefaultToggleTheme(true)
    }
  }, [])
  return (
    <Theme THEME={defaultTheme} toggleValue={defaultToggleTheme}>
      {children}
    </Theme>
  )
}

export { HandleThemeContext }
