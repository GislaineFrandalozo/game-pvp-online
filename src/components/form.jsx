import axios, { Axios } from 'axios';
import { Button, Form, Row } from 'react-bootstrap'
import { useState } from 'react';


import Input from './input';

export default function FormGame(props) {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.currentTarget.checkValidity)
        const metadatas = []
        try {
            for (let i = 0; i < props.imputsForm.length; i++) {

                console.log(event.target[i])
                if (event.target[i].checkValidity() === false) {
                    event.stopPropagation();
                    setValidated(true);
                    throw "ERROR ERROR ERROR"
                } else {
                    metadatas.push(event.target[i].value)
                    setValidated(true);
                }
            }
            console.log(metadatas)
            console.log("axios aqui")
            axios.post('http://localhost:3001/sign-in', {
                email: 'teste@teste.com',
                password: 'teste'
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Input metadatas={props.imputsForm} />
            <Button type="submit">Submit form</Button>
        </Form>
    )
}