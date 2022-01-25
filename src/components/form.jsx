import axios, { Axios } from 'axios';
import Input from './input';
import '../style/form.css'

export default function Form(props) {
    const axios = require('axios').default;
    
    const handleSubmit = (event) => {
        event.preventDefault();
        for( let i = 0; i < props.inputsAtt.length; i++){
            console.log(event.target[i].value)
        }
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
        <form onSubmit={handleSubmit}>
            <Input att={props.inputsAtt} />
            <input type="submit" value="Enviar" />
        </form>
    )
}