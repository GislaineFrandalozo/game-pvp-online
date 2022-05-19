import { Col, Form, Row, Image, Stack } from "react-bootstrap"
import { createMetadataInput } from "../utils/createMetadataInputs"

export function FormInputStack({ idInputs }) {
    const teste = document.getElementsByClassName("form-control")
    console.log(teste)
  
    const metadataInputs = createMetadataInput(idInputs)
    const inputs = metadataInputs.map((
        { label,
            attributes,
            feedback
        },
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
                       {... attributes}
                    />
                    <Form.Control.Feedback type="invalid"> {feedback} </Form.Control.Feedback>
                </Col>
                {attributes.name === "photo" && imagePreview}
            </Row>
        )
    })
    return (
        <Stack gap={2} >
            {inputs}
        </Stack>
    )
}