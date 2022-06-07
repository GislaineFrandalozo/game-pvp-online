import { createContext, useContext, useEffect, useState } from "react";
import { request } from "../services/http/request";
import { userStorage } from "./userStorage";

const AuthContext = createContext({});

function UserAuthentication({ children }) {
  let defaultState
  const checkLocalStorage = localStorage.getItem("token")
  if(checkLocalStorage !== null){
    const requestAuth = new request()
    const headers = {
      Authorization: `Bearer ${checkLocalStorage}`
    }
  requestAuth.get("/me", headers).then((response) => {
    defaultState = checkLocalStorage
    const setUserStoragee = new userStorage()
    setUserStoragee.set(response.data.user)
  }).catch(() => {
    defaultState = "invalid"
  })
  }else{
    defaultState = "invalid"
  }
  const [token, setToken] = useState(defaultState);
 
  useEffect(() => {
    if(checkLocalStorage !== null && token !== "invalid"){
      console.log(checkLocalStorage)
      const requestAuth = new request()
      const headers = {
        Authorization: `Bearer ${checkLocalStorage}`
      }
      requestAuth.get("/me", headers)
      .then((response) => {
        const setUserStorage = new userStorage()
        setUserStorage.set(response.data.user)
       
      })
      .catch((error) => {
        document.location.reload(true);
        localStorage.clear()
      })
    }
  }, [checkLocalStorage])
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
