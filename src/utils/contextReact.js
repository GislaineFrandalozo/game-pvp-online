import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({});

function ContadorProvider({children}) {
  const [counter, setCounter] = useState({value: 0});
  return (
    <ThemeContext.Provider value={[counter, setCounter]}>
      {children}
    </ThemeContext.Provider>
  );
}

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export { useThemeContext }

export default ContadorProvider;
