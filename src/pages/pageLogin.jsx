import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import AsideForm from "../components/asideForm";
import MainForm from "../components/mainForm";
import { request } from '../services/http/request';
import { createMetadataForm } from '../utils/formMetadata';
import { userStorage } from '../utils/userStorage';

export default function PageLogin() {
    let navigate = useNavigate();
    const navigateToPage = {
        text: "Ainda não possui cadastro ?",
        button: "Cadastre-se aqui",
        page: "sign-up",
        handleClick: () => { navigate(`/${navigateToPage.page}`); }
    };
    const titleForm = "Entrar"
    const route = "/sign-in"
    const createInputs = ["email", "password"];
    const toastPromiseConfiguration = {
        pending: "Carregando, aguarde!",
        success: "Suas credências estão corretas! Aguarde.",
    }
    const callbackAfterPost = async (response) => {
        const requestAuth = new request()
        const headers = {
            Authorization: `Bearer ${response.data.token}`
        }
        await requestAuth.get("/me", headers).then((response) => {
            const setUserStorage = new userStorage()
            setUserStorage.set(response.data.user)
             navigate(`/home`)
        })
    }
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
                <Col xs={4} sm={5} className="bg-dark bg-gradient">
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