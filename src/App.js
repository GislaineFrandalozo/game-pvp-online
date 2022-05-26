    // My component
import { RoutesForGame } from './routes';

import React from 'react';
import { Theme } from './utils/themeContext';


function App() {
  return (
    <Theme>
      <RoutesForGame />
    </Theme>
  );
}

export { App }
