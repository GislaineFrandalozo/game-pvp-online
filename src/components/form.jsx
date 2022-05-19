import { Button, Form, Stack } from 'react-bootstrap'
import { useState } from 'react';
import { FormInputStack } from './formInputStack';
import { createObjectForm } from '../utils/createObjectForm';
import { toast, ToastContainer } from 'react-toastify';
import { request } from '../services/http/request';

export default function FormGame({ configRequestForm, idInputs }) {
    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event) => {
        const InputInvalid = "Verefique os campos!"

        event.preventDefault()
        setValidated(true);
        try {
            let json = {}
            for (let input = 0; input < idInputs.length; input++) {
                let inputTag = event.target[input]
                console.log("ffffffff")
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
            <Stack gap={4} className="align-items-center">
                <FormInputStack idInputs={idInputs} />
                <Button variant="danger" className="w-50" type="submit">Enviar</Button>
            </Stack>
            <ToastContainer position="bottom-right" />
        </Form>
    )
}