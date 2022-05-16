import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import AsideForm from "../components/asideForm";
import MainForm from "../components/mainForm";
import { createMetadataForm } from '../utils/formMetadata';

export default function PageSignUp() {
    let navigate = useNavigate();
    const navigateToPage = {
        text: "Já possui cadastro ?",
        button: "Entre aqui",
        handleClick: () => { navigate(`/`); }
    };
    const titleForm = "Cadastro"
    const route = "/sign-up"
    const createInputs = ["name", "email", "birthdate", "password", "photo"]
    const toastPromiseConfiguration = {
        pending: "Carregando, aguarde!",
        success: "Cadastro realizado com sucesso!",
    }
    const callbackAfterPost = (response) => { navigate(`/`) }
    const metadataForm = new createMetadataForm({
        route,
        toastPromiseConfiguration,
        callbackAfterPost
    },
        createInputs
    )
    return (
        <Container fluid >
            <Row>
                <Col xs={4} sm={5} className="bg-dark bg-gradient" >
                    <AsideForm />
                </Col>
                <Col>
                    <MainForm
                        configForm={metadataForm}
                        title={titleForm}
                        navigate={navigateToPage}
                    />
                </Col>
            </Row>
        </Container>
    )
}