
    // Component lib
import { Route, BrowserRouter, Routes } from "react-router-dom";
    // My component
import { ComponentTest } from "./pages/componentTest";
import { PageLogin } from "./pages/pageLogin";
import { PageSignUp } from "./pages/pageSignUp";
import { Theme } from './utils/themeContext';

function RoutesForGame() {
  return (
    <Theme >
    <BrowserRouter>
      <Routes>
        <Route element={<PageLogin />} path="/" exact />
        <Route element={<PageSignUp />} path="/sign-up" />
        <Route element={<ComponentTest />} path="/home" />
      </Routes>
    </BrowserRouter>
    </Theme>
  )
} 

export { RoutesForGame }
