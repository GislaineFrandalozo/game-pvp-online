// LIB
import { Col, Form, Row, Image, Stack } from "react-bootstrap"

export default function Input(
    {
        metadatas = [
            {
                label: "title",
                type: "text",
                nameAtributeRequest: "name",
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
    const inputs = metadatas.map((
        { label,
            type,
            nameAtributeRequest,
            validate,
            onChange },
        index) => {
        const imagePreview =
            <Col xs={5} sm={4} >
                <Image
                    thumbnail
                    fluid
                    src=""
                    className="imgUser"
                    alt="Prévia da imagem..." />
            </Col>


        return (
            <Form.Group as={Row} key={index} >
                <Col >
                    <Form.Label >{label}</Form.Label>
                    <Form.Control
                        type={type}
                        name={nameAtributeRequest}
                        onChange={onChange}
                        required={validate.required}
                        pattern={validate.pattern}
                        minLength={validate.min}
                        maxLength={validate.max}
                    />
                    <Form.Control.Feedback type="invalid"> {validate.feedback} </Form.Control.Feedback>
                </Col>
                {type === "file" && imagePreview}
            </Form.Group>
        )
    })

    return (
        <Stack gap={2} >
            {inputs}
        </Stack>
    )
}