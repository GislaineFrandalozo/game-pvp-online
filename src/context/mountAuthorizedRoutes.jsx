    // Components lib
import { BrowserRouter, Route, Routes } from "react-router-dom"
  // My component
import { HomePage } from "../pages/pageHome"
import { PageLogin } from "../pages/pageLogin"
import { PageSignUp } from "../pages/pageSignUp"
import { useAuthContext } from "./authContext"

function MountAuthorizedRoutes() {
  const { token } = useAuthContext()
  if (token === true) {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<PageLogin />} path="/" exact />
          <Route element={<PageSignUp />} path="/sign-up" />
          <Route element={<HomePage />} path="/home" />
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLogin />} path="/" exact />
        <Route element={<PageSignUp />} path="/sign-up" />
      </Routes>
    </BrowserRouter>
  )
}

export { MountAuthorizedRoutes }
