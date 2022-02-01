import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from 'react-bootstrap'

import FormGame from "./form";

export default function MainForm(props) {
    let navigate = useNavigate();
    let inputs, navigateToPage, handleSubmit;
    if (props.stateForm === "login") {
        inputs = [
            {
               
                type: "text",
                validate: {
                    required: true,
                    min: "2",
                    max: "8",
                  feedback: "Este campo é obrigatório"
                } 
            },
            {
                label: "Password",
                type: "password",
                validate: {
                    required: true,
                    min: "2",
                    max: "8",
                    feedback: "Este campo é obrigatório"
                } 
            },
        ]
        navigateToPage = {
            text: "Ainda não possui cadastro ?",
            button: "clique aqui",
            page: "sign-up",
            handleClick: () => { navigate(`/${navigateToPage.page}`); }
        };
    }
    if (props.stateForm === "sign-up") {
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
            handleClick: () => { navigate(`/`); }
        };
    };
    return (
        <Stack gap={3}>

            <h3>{props.title}</h3>

            <FormGame inputsAtt={inputs} state={props.stateForm} />

            <div >
                <p>{navigateToPage.text}</p>
                <Button onClick={navigateToPage.handleClick}>{navigateToPage.button}</Button>
            </div>
        </Stack>
    )

}