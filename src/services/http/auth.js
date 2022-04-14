// LIB
import axios from 'axios';
import { toast } from 'react-toastify';
export async function auth(route, json) {
    return toast.promise(axios.post(`http://localhost:3001/${route}`, json), {
        pending: {
            render(){
                return "Carregando. Aguarde!"
            },
            theme: "dark"
        },
        success: {
            render(){
                return "Requisição realizada com sucesso!"
            },
            icon: "🚀",
            theme: "colored"
        },
        error: {
            render({data}){
                console.log(data)
                return data.response.data.error
            },
            theme: "colored"
        }
      })
}