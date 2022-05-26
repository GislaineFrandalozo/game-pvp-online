import React, { createContext, useContext, useEffect, useState } from 'react';
import { objTheme } from '../style/themeMode';

const ThemeContext = createContext({});

function Theme({children}) {
  let modeSystem = false
  const defaultTheme = localStorage.getItem('theme')
  useEffect(() => {
    console.log(defaultTheme)
    if(defaultTheme === null){
      let compStyles = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(compStyles.matches)
     modeSystem = compStyles.matches ? {...objTheme.Dark} : {...objTheme.Light}
    compStyles.addEventListener('change', () => {
      console.log(compStyles)
    });
      return modeSystem
  }
  }, [])
  let themeStorage
  console.log(modeSystem)
  if(modeSystem){
    themeStorage = modeSystem
  }else{
    themeStorage = defaultTheme == "false" ? {...objTheme.Dark} : {...objTheme.Light}
  }
  let [theme, setTheme] = useState(themeStorage);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export { Theme ,useThemeContext }
