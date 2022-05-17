import { Col, Form, Row, Image, Stack } from "react-bootstrap"
import { createMetadataInput } from "../utils/createMetadataInputs"

export function FormInputStack({ idInputs }) {
    const metadataInputs = createMetadataInput(idInputs)
    const inputs = metadataInputs.map((
        { label,
            type,
            nameAtributeRequest,
            validate,
            onChange },
        index) => {
        const imagePreview =
            <Col className="row-cols-1 justify-content-center" xs={5} sm={4} >
                <Image
                    thumbnail
                    fluid
                    src=""
                    className="imgUser"
                    alt="Prévia da imagem..." />
            </Col>
        return (
            <Row key={index}>
                <Col>
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
                {label === "Imagem de perfil" && imagePreview}
            </Row>
        )
    })
    return (
        <Stack gap={2} >
            {inputs}
        </Stack>
    )
}