import { createContext, useContext, useEffect, useState } from "react";

import { checkToken } from "../utils/validateToken";
import { handleStorage } from "../utils/handleStorage";
import { userDataRoute } from "../services/baseURL";
import { dataUser, tokenAuth } from "../utils/keyStorage";

const AuthContext = createContext({});

function HandleAuthentication({ children }) {
  const [token, setToken] = useState(false);
  const checkLocalStorage = handleStorage.get(tokenAuth)

  async function validateToken(tokenStorage) {
    try {
      const checkTokenUser = await checkToken(tokenStorage, userDataRoute)
      const dataResponse = checkTokenUser.data
      if (dataResponse) {
        handleStorage.setObject(dataUser, dataResponse.user)
      }
      setToken(true)
    } catch (e) {
      handleStorage.clearLocalStorage()
      setToken(false)
    }
  }

  useEffect(() => {
    if (checkLocalStorage !== null) {
      validateToken(checkLocalStorage)
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { HandleAuthentication, useAuthContext }
