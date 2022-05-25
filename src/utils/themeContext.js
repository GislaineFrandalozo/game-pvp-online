import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({});

function ContadorProvider({children}) {
  const [theme, setTheme] = useState("Dark");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export { useThemeContext }

export default ContadorProvider;
