import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/pageHome"
import { PageLogin } from "./pages/pageLogin"
import { PageSignUp } from "./pages/pageSignUp"
import { useAuthContext } from "./utils/authContext"

function RoutesForApp() {
  const { token } = useAuthContext()
  if (token !== "invalid") {
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

export { RoutesForApp }
