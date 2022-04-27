//LIB
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// COMPONENTS
import AsideForm from "../components/asideForm";
import MainForm from "../components/mainForm";

export default function PageLogin() {
    const titleForm = "Entrar"
    const route = "sign-in"
    let navigate = useNavigate();
    const defaultFeedback = "Este campo é obrigatório."
    const inputsForm = [
        {
            label: "Email",
            type: "text",
            nameAtributeRequest: "email",
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
            nameAtributeRequest: "password",
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
        button: "Cadastre-se aqui",
        page: "sign-up",
        handleClick: () => { navigate(`/${navigateToPage.page}`); }
    };
    return (
        <Container fluid >
            <Row>
                <Col xs={4} sm={5} className="bg-dark bg-gradient">
                    <AsideForm />
                </Col>
                <Col>
                    <MainForm
                        routeRequest={route}
                        title={titleForm}
                        navigate={navigateToPage}
                        inputAtributes={inputsForm} />
                </Col>
            </Row>
        </Container>
    )
}