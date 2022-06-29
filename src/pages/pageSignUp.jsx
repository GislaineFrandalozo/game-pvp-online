// Resource lib
import { useNavigate } from "react-router-dom";

import { loding, signUpSuccessful } from "../utils/feedbackPhrase";
import { signUp } from "../services/baseURL";
// My components
import { PageAuthTemplate } from "../templates/pageAuthTemplate";
import { H2center } from "../components/h2center";
import { FormGame } from "../components/form";
import { SectionH6AndButton } from "../useComponents/sectionH6AndButton";
import { HandleToggle } from "../components/handleToggle";
import { MountInputStack } from "../components/formInputStack";

function PageSignUp() {
  let navigate = useNavigate()
  const title = "Cadastro"
  const configSection = {
    text: "Já possui cadastro ?",
    button: "Entre aqui",
    handleClick: () => { navigate(`/`); }
  };
  const idInputs = ["name", "email", "birthdate", "password", "profilePicture"]
  const request = {
    route: signUp,
    toastPromiseConfiguration: {
      pending: loding,
      success: signUpSuccessful,
    },
    callbackAfterPost: () => { navigate(`/`) }
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

export { PageSignUp }
