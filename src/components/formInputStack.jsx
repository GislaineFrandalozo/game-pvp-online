// Resource
import { createMetadataInput } from "../utils/createMetadataInputs"
// Components lib
import { Col, Form, Row, Image, Stack } from "react-bootstrap"
import { Theme, useThemeContext } from "../utils/themeContext"
import styled from 'styled-components';
import { InputStyle } from './inputStyle';

function FormInputStack({ idInputs }) {
  const { theme } = useThemeContext()
  const metadataInputs = createMetadataInput(idInputs)
  return (
    <Col>
      {metadataInputs.map(({
    label,
    attributes,
    feedback
  }, index) => {
    console.log(attributes)
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
          <Form.Group>
            <Form.Label className={`${theme.text}`}>{label}</Form.Label>
          <InputStyle globalAttribute={attributes}/>
            <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        {attributes.name === "photo" && imagePreview}
      </Row>
    )
  })}
    </Col>
  )
}

export { FormInputStack }
