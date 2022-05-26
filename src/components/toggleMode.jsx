// Component lib
import DarkModeToggle from "react-dark-mode-toggle";
import { useEffect, useState } from 'react';
// My component
import { useThemeContext } from '../utils/themeContext'
import { objTheme } from "../style/themeMode";

function TogleMode() {
  let [theme, setTheme] = useThemeContext();
  const [isDarkMode, setIsDarkMode] = useState(() => theme.stateToggle);
  useEffect(() => {
    let mode = isDarkMode ? {...objTheme.Light}:{...objTheme.Dark}
    localStorage.setItem('theme', `${mode.stateToggle}`);
    setTheme(mode)
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