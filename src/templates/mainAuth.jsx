// Resource
import { useNavigate } from "react-router-dom";
// Components lib
import { Button, Col, Row } from 'react-bootstrap'
// My components
import { FormGame } from "../components/form";
import { useThemeContext } from "../utils/themeContext";

function Main({ title, titleClass, configForm, navigate }) {
  const { theme } = useThemeContext()
  let navigateReact = useNavigate();
  const navigateToPage = {
    text: navigate.text,
    button: navigate.button,
    handleClick: () => { navigateReact(`${navigate.routeNavigate}`); }
  }
  return (
    <Row className="justify-content-center px-2 row-cols-1">
      <Col className={`${titleClass} h2 text-center pt-5 p-2 m-0`}>
        {title}
      </Col>
      <Col xs={11} sm={10} md={8} className="justify-content-center py-4">
        <FormGame
          configRequestForm={configForm.request}
          idInputs={configForm.createInputs} />
      </Col>
      <Col xs={11} className={`${theme.text} h6 text-center pb-3`}>
        {navigateToPage.text}
      </Col>
      <Col xs={11} sm={7} md={5} className="text-center">
        <Button variant="outline-danger" className="w-100" onClick={navigateToPage.handleClick}>
          {navigateToPage.button}
        </Button>
      </Col>
    </Row>
  )
}

export { Main }
