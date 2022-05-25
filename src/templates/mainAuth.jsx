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
    <Row className="justify-content-center row-cols-1">
      <Col className="h2 text-center pt-5 p-2 m-3">
        {title}
      </Col>
      <Col xs={8} md={8} lg={6} className="justify-content-center p-4">
        <FormGame
          configRequestForm={configForm.request}
          idInputs={configForm.createInputs} />
      </Col>
      <Col xs={9} className="h6 text-center pb-3">
        {navigateToPage.text}
      </Col>
      <Col  className="text-center">
        <Button variant="outline-danger" onClick={navigateToPage.handleClick}>
          {navigateToPage.button}
        </Button>
      </Col>
    </Row>
  )
}

export { Main }
