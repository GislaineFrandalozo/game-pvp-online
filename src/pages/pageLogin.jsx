//LIB
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// COMPONENTS
import AsideAuth from "../components/asideAuth";
import MainForm from "../components/mainAuthForm";

export default function PageLogin() {
    const route = "sign-in"
    let navigate = useNavigate();
    const defaultFeedback = "Este campo é obrigatório."

    const imputsForm = [
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
        button: "clique aqui",
        page: "sign-up",
        handleClick: () => { navigate(`/${navigateToPage.page}`); }
    };
    return (
        <Container fluid >
            <Row>
                <Col xs={4} sm={5} className="bg-dark bg-gradient">
                    <AsideAuth />
                </Col>
                <Col>
                    <MainForm request={route} title={"Login"} navigate={navigateToPage} imputAtributes={imputsForm} />
                </Col>
            </Row>
        </Container>
    )
}