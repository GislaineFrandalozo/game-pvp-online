// Resource
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/authContext";
import { signIn } from "../services/baseURL";
import { tokenAuth } from '../utils/keyStorage';
import { authenticated, loding } from "../utils/feedbackPhrase";
import { handleStorage } from "../utils/handleStorage";
// My component
import { PageAuthTemplate } from "../templates/pageAuthTemplate";
import { H2center } from "../components/h2center";
import { FormGame } from "../components/form";
import { SectionH6AndButton } from "../useComponents/sectionH6AndButton";
import { HandleToggle } from "../components/handleToggle";
import { MountInputStack } from "../components/formInputStack";
function PageLogin() {
  let { token, setToken } = useAuthContext()
  let navigate = useNavigate();
  const title = "Entrar"
  const idInputs = ["email", "password"]
  const configSection = {
    text: "Ainda não possui cadastro ?",
    button: "Cadastre-se aqui",
    handleClick: () => { navigate(`/sign-up`); }
  }
  const request = {
    route: signIn,
    toastPromiseConfiguration: {
      pending: loding,
      success: authenticated,
    },
    callbackAfterPost: (response) => {
      handleStorage.set(tokenAuth, response.data.token)
      setToken(true)
      navigate(`/home`)
    },
  }
  return (
    <PageAuthTemplate
      contentAside={
        <>
          <HandleToggle />
        </>
      }
      contentMain={
        <>
          <H2center content={title} />
          <FormGame
            configRequestForm={request}
            idInputs={idInputs}/>
            
          <SectionH6AndButton useSection={configSection} />
        </>
      } />
  )
}

export { PageLogin }
