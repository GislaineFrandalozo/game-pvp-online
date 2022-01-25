import Input from "./input";
import '../style/form.css'

export default function Form(props) {
    let handleSubmit = (event) => {
        console.log(event.target)
        event.preventDefault();
        try{
          console.log( "axios aqui")
        }catch(e){
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