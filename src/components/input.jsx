import { Col, Form, Row, Image } from "react-bootstrap"

export default function Input(
    {
        metadatas = [
            {
                label: "title",
                type: "text",
                validate: {
                    required: false,
                    min: "0",
                    max: "",
                    pattern: ".+.",
                    feedback: "Este campo não é obrigatório"
                },
                onChange: null
            }]
    }) {
    const inputs = metadatas.map((component, index) => {

        const imagePreview =
            <Col xs={5} sm={4} >
                <Image
                    thumbnail
                    fluid
                    src=""
                    alt="Prévia da imagem..." />
            </Col>


        return (

            <Form.Group as={Row} key={index} >
                <Col >
                    <Form.Label >{component.label}</Form.Label>
                    <Form.Control
                        type={component.type}
                        name={index}
                        onChange={component.onChange}
                        required={component.validate.required}
                        pattern={component.validate.pattern}
                        minLength={component.validate.min}
                        maxLength={component.validate.max}
                    />
                    <Form.Control.Feedback type="invalid"> {component.validate.feedback} </Form.Control.Feedback>
                </Col>
                {component.type === "file" && imagePreview}
            </Form.Group>

        )
    })
    return (inputs)
}