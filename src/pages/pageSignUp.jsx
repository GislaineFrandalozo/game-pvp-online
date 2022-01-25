import AsideAuth from "../components/asideAuth";
import MainForm from "../components/mainAuthForm";
import '../style/authGlobal.css'

export default function PageSignUp() {
    return (
        <div id={"auth-template-page"}>
            <AsideAuth />
            <MainForm stateForm={"sign-up"} title={"Cadastro"} />
        </div>
    )
}