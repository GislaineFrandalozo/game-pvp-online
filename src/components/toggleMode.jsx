// Component lib
import DarkModeToggle from "react-dark-mode-toggle";
import { useEffect, useState } from 'react';
import { useThemeContext } from "../context/themeContext";
// My component

function TogleMode({ checked = null, onChange }) {
  const { setIsDarkEnabled } = useThemeContext()
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSetIsDarkMode = (e) => {
    setIsDarkMode(e)
    localStorage.setItem("isDarkMode", !e)
    setIsDarkEnabled(!e);
  }

  useEffect(() => {
    setIsDarkMode(!checked)
  }, [checked])
  
  return (
    <DarkModeToggle
      onChange={handleSetIsDarkMode}
      checked={isDarkMode}
      size={65}
    />
  )
}

export { TogleMode }