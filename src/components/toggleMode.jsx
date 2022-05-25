// Component lib
import DarkModeToggle from "react-dark-mode-toggle";
import { useEffect, useState } from 'react';
// My component
import { useThemeContext } from '../utils/themeContext'

function TogleMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  let [theme, setTheme] = useThemeContext();
  useEffect(() => {
    let varAux = isDarkMode ? "Light" : "Dark"
    setTheme(varAux)
  }, [isDarkMode])
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={65}
    />
  )
}

export { TogleMode }