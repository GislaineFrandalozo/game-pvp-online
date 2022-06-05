// Resource
import { createMetadataInput } from "../utils/createMetadataInputs"
// Components lib
import { Col, Form, Row } from "react-bootstrap"

import { StyledFormControl } from '../style/styledFormControl';
import { StyledFormLabel } from "../style/styledFormLabel";
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
                <StyledFormLabel forID={attributes.id} text={label} />
                <StyledFormControl globalAttribute={attributes} />
                <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            {attributes.name === "photo" && <ImagePreview />}
          </Row>
        )
      })}
    </Col>
  )
}

export { FormInputStack }
