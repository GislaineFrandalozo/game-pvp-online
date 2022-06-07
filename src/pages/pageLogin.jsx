// Resource
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { request } from '../services/http/request';
import { userStorage } from '../utils/userStorage';
// My component
import { PageAuthTemplate } from "../templates/pageAuthTemplate";
import { useThemeContext } from "../utils/themeContext";
import { useAuthContext } from "../utils/authContext";

function PageLogin() {
  let { token, setToken } = useAuthContext()
  const { isDarkEnabled } = useThemeContext()
  let navigate = useNavigate();
  const titleMain = "Entrar"
  const titleMainClass = isDarkEnabled ? 'text-light' : 'text-dark'
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
      localStorage.setItem("token" ,response.data.token)
      setToken(response.data.token)
      navigate(`/home`)
      }
    },
  }
  return (
    <PageAuthTemplate configPag={{ titleMain, metadataForm, navigateToPage, titleMainClass }} />
  )
}

export { PageLogin }
