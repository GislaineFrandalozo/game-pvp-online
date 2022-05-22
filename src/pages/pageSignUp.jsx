    // Resource lib
import { useNavigate } from "react-router-dom";
    // My components
import { PageAuthTemplate } from "../templates/pageAuthTemplate";

function PageSignUp() {
  let navigate = useNavigate()
  const titleMain = "Cadastro"
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
    <PageAuthTemplate configPag={{titleMain, metadataForm, navigateToPage}} />
  )
}

export { PageSignUp }
