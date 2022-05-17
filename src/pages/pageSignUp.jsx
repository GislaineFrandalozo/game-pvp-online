import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Aside from "../components/aside";
import { Main } from "../templates/mainAuth";
export default function PageSignUp() {
    let navigate = useNavigate()
    const titleMain = "Cadastro"
    const navigateToPage = {
        text: "Já possui cadastro ?",
        button: "Entre aqui",
        routeNavigate: `/`,
    };
    const metadataForm = {
        createInputs: ["name", "email", "birthdate", "password", "photo"],
        request: {
            route: "/sign-up",
            toastPromiseConfiguration: {
                pending: "Carregando, aguarde!",
                success: "Cadastro realizado com sucesso!",
            },
            callbackAfterPost: (response) => { navigate(`/`) }
        },
    }
    return (
        <Container fluid >
            <Row>
                <Col xs={4} sm={5} className="bg-dark bg-gradient" >
                    <Aside />
                </Col>
                <Col>
                    <Main
                        title={titleMain}
                        configForm={metadataForm}
                        navigate={navigateToPage}
                    />
                </Col>
            </Row>
        </Container>
    )
}