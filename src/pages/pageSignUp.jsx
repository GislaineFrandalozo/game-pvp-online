import { Col, Container, Row } from 'react-bootstrap'

import AsideAuth from "../components/asideAuth";
import MainForm from "../components/mainAuthForm";
import '../style/authGlobal.css'

export default function PageSignUp() {
    return (
        <Container fluid id={"auth-template-page"}>
            <Row>
                <Col>
            <AsideAuth />
                </Col>
                <Col>
                <MainForm stateForm={"sign-up"} title={"Cadastro"} />
                </Col>
            </Row>
        </Container>
    )
}
