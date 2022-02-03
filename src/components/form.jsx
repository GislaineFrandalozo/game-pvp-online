// LIB
import { Button, Form, Row, Stack } from 'react-bootstrap'
import { useState } from 'react';
// COMPONENTS
import Imput from './imput';
// SERVICES
import { auth } from '../services/http/auth';
import { createObjectAuth } from '../services/applicationFunctions/createObjectAuth';


export default function FormGame({ route, imputsForm }) {
    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault()
        setValidated(true);
        try {
            let json = {}
            for (let imput = 0; imput < imputsForm.length; imput++) {
                let imputTag = event.target[imput]
                if (imputTag.checkValidity() === false) {
                    event.stopPropagation();
                    throw "inválido"
                } else {
                    json = createObjectAuth(imputTag, json)
                }
            }
            let request = auth(route, json)
            request.then((resolve) => {
                console.log(resolve)
            })
                .catch((error) => {
                    console.log(error)
                    console.log("400 dfgdgsSSCFFDFGV")
                })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}>
            <Stack gap={4} className="align-items-center">
                <Imput metadatas={imputsForm} />
                <Button className="w-50" type="submit">Submit form</Button>
            </Stack>
        </Form>
    )
}