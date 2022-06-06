import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

function UserAuthentication({ children }) {
  const [token, setToken] = useState("invalid");
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { UserAuthentication, useAuthContext }
