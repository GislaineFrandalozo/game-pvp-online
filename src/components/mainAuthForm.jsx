import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./form";
import '../style/mainAuthForm.css'

export default function MainForm(props) {
    React.useEffect(() =>{
        console.log("montou")
        return () => console.log("desmontou")
        }, [])

    let navigate = useNavigate();
    let inputs, navigateToPage, handleSubmit;
    if(props.stateForm === "login") {
        inputs = [
            {
                label: "Email",
                type: "text"
            },
            {
                label: "Password",
                type: "password"
            },
        ]
        navigateToPage = {
            text: "Ainda não possui cadastro ?",
            button: "clique aqui",
            page: "sign-up",
            handleClick: () => {  navigate(`/${navigateToPage.page}`);}
        };
        }
    if(props.stateForm === "sign-up") {
        inputs = [
            {
                label: "Nick name",
                type: "text"
            },
            {
                label: "Email",
                type: "text"
            },
            {
                label: "Data de nascimento",
                type: "date"
            },
            {
                label: "Password",
                type: "password"
            },
            {
                label: "Imagem de perfil",
                type: "file"
            }
        ]
        navigateToPage = {
            text: "Já possui cadastro ?",
            button: "Faça login aqui",
            handleClick: () => {  navigate(`/`);}
        };
    };
    return (
        <main>
            <div className="alignItensForm">
           <h3>{props.title}</h3>
           <Form inputsAtt={inputs} state={props.stateForm}/>
           </div>
           <div className="navigateToPage">
               <p>{navigateToPage.text}</p>
           <button onClick={navigateToPage.handleClick}>{navigateToPage.button}</button>
           </div>
        </main>
    )

}