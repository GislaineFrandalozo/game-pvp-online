// Resource
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { request } from '../services/http/request';
import { userStorage } from '../utils/userStorage';
// My component
import { PageAuthTemplate } from "../templates/pageAuthTemplate";

function PageLogin() {
  let navigate = useNavigate();
  const titleMain = "Entrar"
  const navigateToPage = {
    text: "Ainda não possui cadastro ?",
    button: "Cadastre-se aqui",
    routeNavigate: `/sign-up`,
  };
  const metadataForm = {
    createInputs: ["email", "password"],
    request: {
      route: "/sign-in",
      toastPromiseConfiguration: {
        pending: "Carregando, aguarde!",
        success: "Suas credências estão corretas! Aguarde.",
      },
      callbackAfterPost: async (response) => {
        const requestAuth = new request()
        const headers = {
          Authorization: `Bearer ${response.data.token}`
        }
        requestAuth.get("/me", headers)
          .then((response) => {
            const setUserStorage = new userStorage()
            setUserStorage.set(response.data.user)
            navigate(`/home`)
          })
          .catch((error) => {
            localStorage.clear()
            toast.error("Algo deu errado no nosso servidor, estamos tentando resolver!", {
              theme: "dark",
              icon: "🙁"
            })
          })
      }
    },
  }
  return (
      <PageAuthTemplate configPag={{titleMain, metadataForm, navigateToPage}} />
  )
}

export { PageLogin }
