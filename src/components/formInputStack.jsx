// Resource
import { createMetadataInput } from "../utils/createMetadataInputs"
// Components lib
import { Col, Form, Row } from "react-bootstrap"

import { StyledFormControl } from '../style/styledFormControl';
import { StyledFormLabel } from "../style/styledFormLabel";
import { ImagePreview } from "./imagePreview";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function MountInputStack({ handleDisabledButton, idInputs }) {
  const metadataInputs = createMetadataInput(idInputs)
  const [validate, setValidate] = useState(true)
  const stackInputs = document.querySelectorAll('.controlInput')
  console.log(stackInputs)


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

              </Form.Group>
            </Col>
            {attributes.name === "photo" && <ImagePreview />}
          </Row>
        )
      })}
    </Col>
  )
}

export { MountInputStack }
