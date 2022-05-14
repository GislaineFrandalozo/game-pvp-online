//LIB
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// COMPONENTS
import AsideForm from "../components/asideForm";
import MainForm from "../components/mainForm";

export default function PageSignUp() {
    const titleForm = "Cadastro"
    const route = "/sign-up"
    let navigate = useNavigate();
    const defaultFeedback = "Este campo é obrigatório."
    const inputsForm = [
        {
            label: "Nome",
            type: "text",
            nameAtributeRequest: "name",
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
            nameAtributeRequest: "email",
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
            nameAtributeRequest: "birthdate",
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
            nameAtributeRequest: "password",
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
            nameAtributeRequest: "photo",
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
        button: "Entre aqui",
        handleClick: () => { navigate(`/`); }
    };

    return (
        <Container fluid >
            <Row>
                <Col xs={4} sm={5} className="bg-dark bg-gradient" >
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
