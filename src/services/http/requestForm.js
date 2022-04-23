// LIB
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseURL } from '../baseURL';
export async function requestForm(route, json) {
    const requestPost = axios.post((baseURL + route), json)
    return toast.promise(requestPost, {
        pending: {
            render(){
                return "Carregando, aguarde!"
            },
            icon: "😄",
            theme: "dark",
            delay: 100
        },
        success: {
            render({data}){
                const signUp = "Cadastro realizado com sucesso! Aguarde."
                const signIn = "Suas credências estão corretas! Aguarde."
                return data.status === 201 ? signUp : signIn
            },
            icon: "👍",
            theme: "dark",
            delay: 700
        },
        error: {
            render({data}){
                return data.response.data.error
            },
            icon: "👎",
            theme: "dark",
            delay: 700
        }
      })
}