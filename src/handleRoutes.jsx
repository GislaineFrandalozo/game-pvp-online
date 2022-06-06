
import { THEMES } from './style/themeMode';
// My component
import { consultThemePreference } from "./utils/consultThemePreference";
import { Theme } from './utils/themeContext';
import { UserAuthentication } from './utils/authContext';
import { RoutesForApp } from './routes';

function HandleRoutes() {
  let defaultValueTheme = THEMES.LIGHT
  let isDarkEnabled = false
  const isDarkModeLocalStorage = localStorage.getItem("isDarkMode")
  if (isDarkModeLocalStorage === null) {
    const prefersColorSchemeDark = consultThemePreference()
    console.log(prefersColorSchemeDark)
    if (prefersColorSchemeDark.matches) {
      console.log(prefersColorSchemeDark.matches)
      defaultValueTheme = THEMES.DARK
      isDarkEnabled = true
    }
  }
  if (isDarkModeLocalStorage === "true" || isDarkModeLocalStorage === true) {
    defaultValueTheme = THEMES.DARK
    isDarkEnabled = true
  }
  return (
    <Theme THEME={defaultValueTheme} toggleValue={isDarkEnabled}>
      <UserAuthentication>
        <RoutesForApp />
      </UserAuthentication>
    </Theme>
  )
}

export { HandleRoutes }
