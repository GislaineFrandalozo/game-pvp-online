    // Component lib
import { Route, BrowserRouter, Routes } from "react-router-dom";
    // My component
import { ComponentTest } from "./pages/componentTest";
import { PageLogin } from "./pages/pageLogin";
import { PageSignUp } from "./pages/pageSignUp";

function RoutesForGame() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLogin />} path="/" exact />
        <Route element={<PageSignUp />} path="/sign-up" />
        <Route element={<ComponentTest />} path="/home" />
      </Routes>
    </BrowserRouter>
  )
} 

export { RoutesForGame }
