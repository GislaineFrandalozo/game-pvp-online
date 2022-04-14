// LIB
import { Button, Form, Stack } from 'react-bootstrap'
import { useState } from 'react';
// COMPONENTS
import Input from './input';
// SERVICES
import { auth } from '../services/http/auth';
import { createObjectAuth } from '../services/utils/createObjectAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function FormGame({ route, inputsForm }) {
    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault()
        setValidated(true);
        try {
            let json = {}
            for (let input = 0; input < inputsForm.length; input++) {
                let inputTag = event.target[input]
                if (inputTag.checkValidity() === false) {
                    event.stopPropagation();
                    throw new Error("Erro imput")
                } else {
                    json = createObjectAuth(inputTag, json)
                }
            }
            const response = await auth(route, json)
            console.log("LINHA 30")
            console.log(response)
        } catch (e) {
            console.log("CAIU NO CATCH")
            console.log(e)
        }
    }
    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}>
            <Stack gap={4} className="align-items-center">
                <Input metadatas={inputsForm} />
                <Button className="w-50" type="submit">Enviar</Button>
                <ToastContainer position="bottom-right"/>
            </Stack>
        </Form>
    )
}