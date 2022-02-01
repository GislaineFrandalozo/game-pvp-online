import axios, { Axios } from 'axios';
import { Button, Form } from 'react-bootstrap'

import Input from './input';

export default function FormGame(props) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)

        for( let i = 0; i < props.inputsAtt.length; i++){
            console.log(event.target[i].value)
        }
        console.log(event)
        try {
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
        <Form onSubmit={handleSubmit}>
            <Input metadatas={props.inputsAtt} />
            <Button type="submit">Submit form</Button>
        </Form>
    )
}