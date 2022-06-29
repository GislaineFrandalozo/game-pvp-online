import { useEffect, useState } from 'react';

import { useThemeContext } from "../context/themeContext";
import { handleStorage } from "../utils/handleStorage";
import { themeDark } from '../utils/keyStorage';
// Component lib
import DarkModeToggle from "react-dark-mode-toggle";

function TogleMode({ checked = null, onChange }) {
  const { setIsDarkEnabled } = useThemeContext()
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSetIsDarkMode = (e) => {
    setIsDarkMode(e)
    handleStorage.set(themeDark, !e)
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
