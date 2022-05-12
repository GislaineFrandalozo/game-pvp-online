// LIB
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseURL } from '../baseURL';

export function setUser(dataUser) {
    return new Promise( (resolve, reject) => {
        axios.get("http://localhost:3001/me", {
             headers: {'Authorization': `Bearer ${dataUser.token}` }
         })
         .then((response) => {
             const dataUser = response.data.user
             localStorage.setItem('name', `${dataUser.name}`);
             localStorage.setItem('email', `${dataUser.email}`);
             localStorage.setItem('birthdate', `${dataUser.birthdate}`);
             localStorage.setItem('photo', `${dataUser.photo}`);
             localStorage.setItem('id', `${dataUser.id}`);
           resolve()
         })
         .catch((error) => {
             localStorage.clear()
             toast.error("Algo deu errado no nosso servidor, estamos tentando resolver!", {
                 theme: "dark",
                 icon: "🙁"
             })    
             reject(error)
         })

    })

}