
import { THEMES } from './style/themeMode';
    // Component lib
import { Route, BrowserRouter, Routes } from "react-router-dom";
    // My component
import { PageLogin } from "./pages/pageLogin";
import { PageSignUp } from "./pages/pageSignUp";
import { consultThemePreference } from "./utils/consultThemePreference";
import { Theme } from './utils/themeContext';
import { HomePage } from './pages/pageHome';

function RoutesForGame() {
  let defaultValueTheme = THEMES.LIGHT
  let isDarkEnabled= false
  const isDarkModeLocalStorage = localStorage.getItem("isDarkMode")
if(isDarkModeLocalStorage === null){
  const prefersColorSchemeDark = consultThemePreference()
  console.log(prefersColorSchemeDark)
  if(prefersColorSchemeDark.matches){
    console.log(prefersColorSchemeDark.matches)
    defaultValueTheme = THEMES.DARK
    isDarkEnabled = true
   
  }
}
if(isDarkModeLocalStorage === "true" || isDarkModeLocalStorage === true){
  defaultValueTheme = THEMES.DARK
  isDarkEnabled = true
}

  return (
    <Theme THEME={defaultValueTheme} toggleValue={isDarkEnabled}>
    <BrowserRouter>
      <Routes>
        <Route element={<PageLogin />} path="/" exact />
        <Route element={<PageSignUp />} path="/sign-up" />
        <Route element={<HomePage />} path="/home" />
      </Routes>
    </BrowserRouter>
    </Theme>
  )
} 

export { RoutesForGame }
