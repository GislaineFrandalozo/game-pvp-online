// LIB
import React from "react";
import { Button, Stack, Col, Row } from 'react-bootstrap'
// COMPONENTS
import FormGame from "./form";

export default function MainForm({ request, title, navigate, inputAtributes }) {
    return (
        <Stack gap={5} className="align-items-center justify-content-center">
            <Col>
                <Row className="h2 pt-4">{title}</Row>
            </Col>
            <FormGame route={request} inputsForm={inputAtributes} />
            <Stack gap={1} className="align-items-center">
                <p>{navigate.text}</p>
                <Button onClick={navigate.handleClick}>{navigate.button}</Button>
            </Stack>
        </Stack>
    )
}