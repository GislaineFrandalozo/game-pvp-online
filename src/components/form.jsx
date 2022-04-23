// LIB
import { Button, Form, Stack } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// COMPONENTS
import Input from './input';
// SERVICES
import { requestForm } from '../services/http/requestForm';
import { createObjectForm } from '../services/utils/createObjectForm';
import { toast, ToastContainer } from 'react-toastify';


export default function FormGame({ route, inputsForm }) {
    const [validated, setValidated] = useState(false);
    const InputInvalid = "Verefique os campos!"
    let navigate = useNavigate()
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
            const response = await requestForm(route, json)
           if(response.status === 200){   
               console.log(response.data)
               navigate(`/home`)
           }else{
               navigate(`/`)
           }
        } catch (e) {
            console.log("CAIU NO CATCH")
            if(e.message === "InputValueInvalid"){
                toast(InputInvalid)
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
                <Button className="w-50" type="submit">Enviar</Button>
                <ToastContainer position="bottom-right"/>
            </Stack>
        </Form>
    )
}