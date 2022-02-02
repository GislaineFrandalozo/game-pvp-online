//LIB
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// COMPONENTS
import AsideAuth from "../components/asideAuth";
import MainForm from "../components/mainAuthForm";
// STYLES
import '../style/authGlobal.css'

export default function PageSignUp() {

    let navigate = useNavigate();
    const defaultFeedback = "Este campo é obrigatório."

    const imputsForm = [
        {
            label: "Nome",
            type: "text",
            validate: {
                required: true,
                min: "3",
                max: "20",
                pattern: ".+.",
                feedback: `${defaultFeedback} Mínimo 3 caracteres.`
            },
            onChange: null
        },
        {
            label: "Email",
            type: "text",
            validate: {
                required: true,
                min: "10",
                max: "50",
                pattern: ".+@.+\.com",
                feedback: `${defaultFeedback} Ex: "nome@exemplo.com".`
            },
            onChange: null
        },
        {
            label: "Data de nascimento",
            type: "date",
            validate: {
                required: true,
                min: "0",
                max: "",
                pattern: ".+.",
                feedback: defaultFeedback
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
                feedback: `${defaultFeedback} Mínimo 5 caracteres.`
            },
            onChange: null
        },
        {
            label: "Imagem de perfil",
            type: "file",
            validate: {
                required: true,
                min: "0",
                max: "",
                pattern: ".+.",
                feedback: defaultFeedback
            },
            onChange: (e) => {
                var preview = document.querySelector('img');
                var file = document.querySelector('input[type=file]').files[0];
                var reader = new FileReader();

                reader.onloadend = function () {
                    preview.src = reader.result;
                    console.log(e.target.value)
                    e.target.value = reader.result;

                }

                if (file) {
                    reader.readAsDataURL(file);
                } else {
                    preview.src = "";
                }
            }

        }
    ]

    const navigateToPage = {
        text: "Já possui cadastro ?",
        button: "Faça login aqui",
        handleClick: () => { navigate(`/`); }
    };

    return (
        <Container fluid id={"auth-template-page"}>
            <Row>
                <Col >
                    <AsideAuth />
                </Col>
                <Col>
                    <MainForm title={"Cadastro"} navigate={navigateToPage} imputAtributes={imputsForm} />
                </Col>
            </Row>
        </Container>
    )
}
