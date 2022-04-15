// LIB
import axios from 'axios';
import { toast } from 'react-toastify';
export async function auth(route, json) {
    return toast.promise(axios.post(`http://localhost:3001/${route}`, json), {
        pending: {
            render(){
                return "Carregando. Aguarde!"
            },
            theme: "dark",
            delay: 100
        },
        success: {
            render(){
                return "Requisição realizada com sucesso!"
            },
            icon: "🚀",
            theme: "colored",
            delay: 100
        },
        error: {
            render({data}){
                console.log("é O DALES")
                return data.response.data.error
            },
            theme: "colored",
            delay: 700
        }
      })
}