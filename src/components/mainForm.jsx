// LIB
import React from "react";
import { Button, Stack, Col, Row } from 'react-bootstrap'
// COMPONENTS
import FormGame from "./form";
export default function MainForm({ configRequest, title, navigate, inputAtributes }) {
    return (
        <Stack gap={5} className="align-items-center">
            <Row>
                <Col className="h2 pt-5">{title}</Col>
            </Row>
            <FormGame configRequest={configRequest} inputsForm={inputAtributes} />
            <Row className="align-items-center row-cols-1 text-center">
                <Col className="h6 pb-3">{navigate.text}</Col>
                <Col>
                <Button variant="outline-danger" onClick={navigate.handleClick}>{navigate.button}</Button>
                </Col>
            </Row>
        </Stack>
    )
}