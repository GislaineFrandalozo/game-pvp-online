    // My component
import { RoutesForGame } from './routes';

import React from 'react';
import ContadorProvider from './utils/themeContext';


function App() {
  return (
    <ContadorProvider>
      <RoutesForGame />
    </ContadorProvider>
  );
}

export { App }
