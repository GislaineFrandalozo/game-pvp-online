//LIB
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// COMPONENTS
import AsideAuth from "../components/asideAuth";
import MainForm from "../components/mainAuthForm";
// STYLES
import '../style/authGlobal.css'

export default function PageLogin() {
    let navigate = useNavigate();
    const defaultFeedback = "Este campo é obrigatório."

    const imputsForm = [
        {
            label: "Email",
            type: "text",
            validate: {
                required: true,
                min: "10",
                max: "50",
                pattern: ".+@.+\.com",
                feedback: `${defaultFeedback} Ex: nome@exemplo.com`
            },
            onChange: null
        },
        {
            label: "Senha",
            type: "password",
            validate: {
                required: true,
                min: "5",
                max: "50",
                pattern: ".+.",
                feedback: `${defaultFeedback} Mínimo 5 caracteres`
            },
            onChange: null
        },
    ]
    const navigateToPage = {
        text: "Ainda não possui cadastro ?",
        button: "clique aqui",
        page: "sign-up",
        handleClick: () => { navigate(`/${navigateToPage.page}`); }
    };
    return (
        <Container fluid id={"auth-template-page"}>
            <Row>
                <Col>
                    <AsideAuth />
                </Col>
                <Col>
                    <MainForm title={"Login"} navigate={navigateToPage} imputAtributes={imputsForm} />
                </Col>
            </Row>
        </Container>
    )
}