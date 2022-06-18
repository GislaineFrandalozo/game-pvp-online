    // Resource lib
import { useNavigate } from "react-router-dom";
    // My components
import { PageAuthTemplate } from "../templates/pageAuthTemplate";
import { useThemeContext } from "../context/themeContext";

function PageSignUp() {
  let navigate = useNavigate()
  const { isDarkEnabled } = useThemeContext()
  const titleMain = "Cadastro"
  const titleMainClass = isDarkEnabled ? "text-light" : "text-dark"
  const navigateToPage = {
    text: "Já possui cadastro ?",
    button: "Entre aqui",
    routeNavigate: `/`,
  };
  const metadataForm = {
    createInputs: ["name", "email", "birthdate", "password", "profilePicture"],
    request: {
      route: "/sign-up",
      toastPromiseConfiguration: {
        pending: "Carregando, aguarde!",
        success: "Cadastro realizado com sucesso!",
      },
      callbackAfterPost: (response) => { navigate(`/`) }
    },
  }
  return (
    <PageAuthTemplate configPag={{titleMain, metadataForm, navigateToPage, titleMainClass}} />
  )
}

export { PageSignUp }
