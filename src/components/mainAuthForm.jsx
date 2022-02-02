// LIB
import React from "react";
import { Button, Stack } from 'react-bootstrap'
// COMPONENTS
import FormGame from "./form";

export default function MainForm({ title, navigate, imputAtributes }) {
    return (
        <Stack gap={3}>
            <h3>{title}</h3>
            <FormGame imputsForm={imputAtributes} />
            <div >
                <p>{navigate.text}</p>
                <Button onClick={navigate.handleClick}>{navigate.button}</Button>
            </div>
        </Stack>
    )
}