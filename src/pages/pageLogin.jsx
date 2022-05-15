//LIB
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// COMPONENTS
import AsideForm from "../components/asideForm";
import MainForm from "../components/mainForm";
import { createMetadataForm } from '../utils/formMetadata';

export default function PageLogin() {
    const titleForm = "Entrar"
    const route = "/sign-in"
    let navigate = useNavigate();
    const navigateToPage = {
        text: "Ainda não possui cadastro ?",
        button: "Cadastre-se aqui",
        page: "sign-up",
        handleClick: () => { navigate(`/${navigateToPage.page}`); }
    };
    const toastPromiseConfiguration = {
        pending: "Carregando, aguarde!",
        success: "Suas credências estão corretas! Aguarde.",
    }
    const callbackAfterPost = (response) => {console.log(response, "VEIO DO PAGE LOGIN")}
    const metadataForm = new createMetadataForm({route, toastPromiseConfiguration, callbackAfterPost})

    /*  
  {route, toastPromiseConfiguration, callbackAfterPost}
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
    ] */
    return (
        <Container fluid >
            <Row>
                <Col xs={4} sm={5} className="bg-dark bg-gradient">
                    <AsideForm />
                </Col>
                <Col>
                    <MainForm
                        configRequest={metadataForm.request}
                        title={titleForm}
                        navigate={navigateToPage}
                        inputAtributes={metadataForm.createMetadataInput(["email", "password"])} />
                </Col>
            </Row>
        </Container>
    )
}