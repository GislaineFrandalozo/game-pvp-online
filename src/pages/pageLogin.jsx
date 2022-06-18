// Resource
import { useNavigate } from "react-router-dom";

// My component
import { PageAuthTemplate } from "../templates/pageAuthTemplate";
import { useThemeContext } from "../context/themeContext";
import { useAuthContext } from "../context/authContext";
import { H2center } from "../components/h2center";
import { FormGame } from "../components/form";
import { SectionH6AndButton } from "../useComponents/sectionH6AndButton";
import { signIn } from "../services/baseURL";
import { authenticated, loding } from "../utils/feedbackPhrase";
import { handleStorage } from "../utils/handleStorage";
import { tokenAuth } from '../utils/keyStorage';
function PageLogin() {
  let { token, setToken } = useAuthContext()
  const { isDarkEnabled } = useThemeContext()
  let navigate = useNavigate();
  const title = "Entrar"
  const request = {
    route: signIn,
    toastPromiseConfiguration: {
      pending: loding,
      success: authenticated,
    },
    callbackAfterPost: (response) => {
      handleStorage.set(tokenAuth)
      localStorage.setItem("token", response.data.token)
      setToken(true)
      navigate(`/home`)
    },
  }
  return (
    <PageAuthTemplate 
    contentMain={ 
      <>
      <H2center content={title} />
      <FormGame
        configRequestForm={request}
        idInputs={["email", "password"]} />
      <SectionH6AndButton useSection={{
        text: "Ainda não possui cadastro ?",
        button: "Cadastre-se aqui",
        handleClick: () => { navigate(`/sign-up`); }
      }} />
    </>
    }/>
  )
}

export { PageLogin }
