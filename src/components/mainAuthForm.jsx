// LIB
import React from "react";
import { Button, Stack } from 'react-bootstrap'
// COMPONENTS
import FormGame from "./form";

export default function MainForm({ request, title, navigate, inputAtributes }) {
    return (
        <Stack gap={5} className="align-items-center justify-content-center">
            <h3>{title}</h3>
            <FormGame route={request} inputsForm={inputAtributes} />
            <Stack gap={1} className="align-items-center">
                <p>{navigate.text}</p>
                <Button onClick={navigate.handleClick}>{navigate.button}</Button>
            </Stack>
        </Stack>
    )
}