import AsideAuth from "../components/asideAuth";
import MainForm from "../components/mainAuthForm";
import '../style/authGlobal.css'

export default function PageLogin() {
    return (
        <div id={"auth-template-page"}>
            <AsideAuth />
            <MainForm stateForm={"login"} title={"Login"} />
        </div>
    )
}