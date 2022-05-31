// Resource
import { createMetadataInput } from "../utils/createMetadataInputs"
import styled from 'styled-components';
// Components lib
import { Col, Form, Row, Image } from "react-bootstrap"

import { FormControlStyle } from '../style/formControlStyle';
import { FormLabelStyle } from "../style/formLabel";
import { ImagePreview } from "./imagePreview";

function FormInputStack({ idInputs }) {
  const metadataInputs = createMetadataInput(idInputs)
  return (
    <Col>
      {metadataInputs.map(({
    label,
    attributes,
    feedback
  }, index) => {
    return (
      <Row key={index}>
        <Col>
          <Form.Group>
            <FormLabelStyle forID={attributes.id} text={label}/>
          <FormControlStyle globalAttribute={attributes}/>
            <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        {attributes.name === "photo" && <ImagePreview/>}
      </Row>
    )
  })}
    </Col>
  )
}

export { FormInputStack }
