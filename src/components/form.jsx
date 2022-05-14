// LIB
import { Button, Form, Stack } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// COMPONENTS
import Input from './input';
// SERVICES
import { createObjectForm } from '../services/utils/createObjectForm';
import { toast, ToastContainer } from 'react-toastify';
import { request } from '../services/http/request';
import { userStorage } from '../services/utils/userStorage';


export default function FormGame({ route, inputsForm }) {
    const [validated, setValidated] = useState(false);
    const InputInvalid = "Verefique os campos!"
    let navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        const requestAuth = new request()
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
            const response = await requestAuth.post(route, json)
            if (response.status === 200) {
                const headers = {
                    Authorization: `Bearer ${response.data.token}`
                }
                await requestAuth.get("/me", headers).then((response) => {
                    const setUserStorage = new userStorage()
                    setUserStorage.set(response.data.user)
                   // navigate(`/home`)
                })
            } else {
                navigate(`/`)
            }
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
            onSubmit={handleSubmit}>
            <Stack gap={4} className="align-items-center">
                <Input metadatas={inputsForm} />
                <Button variant="danger" className="w-50" type="submit">Enviar</Button>
                <ToastContainer position="bottom-right" />
            </Stack>
        </Form>
    )
}