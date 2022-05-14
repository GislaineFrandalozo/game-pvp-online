
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseURL } from '../baseURL';

export class request {
    constructor(newBaseURL) {
        this.baseURL = newBaseURL || baseURL;
    }
    post(route, body) {
        console.log(this.baseURL)
        const requestPost = axios.post((this.baseURL + route), body)
        return toast.promise(requestPost, {
            pending: {
                render() {
                    return "Carregando, aguarde!"
                },
                icon: "😄",
                theme: "dark",
                delay: 100
            },
            success: {
                render({ data }) {
                    const signUp = "Cadastro realizado com sucesso! Aguarde."
                    const signIn = "Suas credências estão corretas! Aguarde."
                    console.log(data)
                    return data.status === 201 ? signUp : signIn
                },
                icon: "👍",
                theme: "dark",
                delay: 700
            },
            error: {
                render({ data }) {
                    return data.response.data.error
                },
                icon: "👎",
                theme: "dark",
                delay: 700
            }
        })

    }
    get(route, headers) {
        return axios.get((this.baseURL + route), { headers })
    }
}