// LIB
import { Button, Form, Stack } from 'react-bootstrap'
import { useState } from 'react';
import Input from './input';
import { createObjectForm } from '../utils/createObjectForm';
import { toast, ToastContainer } from 'react-toastify';
import { request } from '../services/http/request';

export default function FormGame({ configRequest, inputsForm }) {
    const [validated, setValidated] = useState(false);
    const InputInvalid = "Verefique os campos!"
    const handleSubmit = async (event) => {
        event.preventDefault()
        setValidated(true);
        try {
            let json = {}
            for (let input = 0; input < inputsForm.length; input++) {
                let inputTag = event.target[input]
                if (inputTag.checkValidity() === false) {
                    event.stopPropagation();
                    throw new Error("InputValueInvalid")
                } else {
                    json = createObjectForm(inputTag, json)
                }
            }
            const response = await  new request().post(configRequest, json)
            configRequest.callbackAfterPost(response)
        } catch (e) {
            if (e.message === "InputValueInvalid") {
                toast(InputInvalid)
            }
            if (e.status === 401) {
                localStorage.clear()
                toast.error("Algo deu errado no nosso servidor, estamos tentando resolver!", {
                    theme: "dark",
                    icon: "🙁"
                })
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
                <Input metadatas={inputsForm} />
                <Button variant="danger" className="w-50" type="submit">Enviar</Button>
            </Stack>
                <ToastContainer position="bottom-right" />
        </Form>
    )
}