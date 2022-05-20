    // Resource
import { useNavigate } from "react-router-dom";
    // Components lib
import { Button, Stack, Col, Row } from 'react-bootstrap'
    // My components
import { FormGame } from "../components/form";

function Main({ title, configForm, navigate }) {
  let navigateReact = useNavigate();
  const navigateToPage = {
    text: navigate.text,
    button: navigate.button,
    handleClick: () => { navigateReact(`${navigate.routeNavigate}`); }
  }
  return (
    <Stack gap={5} className="align-items-center">
      <Row >
        <Col className="h2 pt-5">{title}</Col>
      </Row>
      <FormGame configRequestForm={configForm.request} idInputs={configForm.createInputs} />
      <Row className="align-items-center row-cols-1 text-center">
        <Col className="h6 pb-3">{navigateToPage.text}</Col>
        <Col>
          <Button variant="outline-danger" onClick={navigateToPage.handleClick}>{navigateToPage.button}</Button>
        </Col>
      </Row>
    </Stack>
  )
}

export { Main }
