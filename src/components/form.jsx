    // Resource
import { useState } from 'react';

import { createObjectForm } from '../utils/createObjectForm';
import { request } from '../services/http/request';
    // Components lib
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
    // My components
import { FormInputStack } from './formInputStack';
import { StyledButtonDanger } from '../style/styledButton';

function FormGame({ configRequestForm, idInputs }) {
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    const InputInvalid = "Verifique os campos!"

    event.preventDefault()
    setValidated(true);
    try {
      let json = {}
      for (let input = 0; input < idInputs.length; input++) {
        let inputTag = event.target[input]
        if (inputTag.checkValidity() === false) {
          event.stopPropagation();
          throw new Error("InputValueInvalid")
        }
        else {
          json = createObjectForm(inputTag, json)
        }
      }
      const response = await new request().post(configRequestForm, json)
      configRequestForm.callbackAfterPost(response)

    } catch (e) {
      if (e.message === "InputValueInvalid") {
        toast(InputInvalid)
      }
    }
  }
  return (
    <Form
      noValidate
      validated={validated}
      className="align-items-center"
      onSubmit={handleSubmit}>
      <Stack gap={2} className="align-items-center">
        <FormInputStack idInputs={idInputs} />
        <Col className="w-50 h-100 mt-4">
        <StyledButtonDanger />
        </Col>
      </Stack>
      <ToastContainer position="bottom-right" />
    </Form>
  )
}

export { FormGame }
