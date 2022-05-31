import { Col, Form, Row } from "react-bootstrap"
import styled from "styled-components";
import { useThemeContext } from '../utils/themeContext';

let ColStyled = styled(Col)`
 background: ${props => props.context.colorFigma};
 box-shadow: 0px 4px 9px 1px rgba(0, 0, 0, 0.25);
 border-radius: 6px;
:hover{
  background: #dc3545;
}
 `

function FormLabelStyle({ forID, text }) {
  const { theme } = useThemeContext()
  if (forID === "actual-btn") {
    return (
      <Row className="row-cols-1 justify-content-start align-items-center">
        <Col>
          <p className={`${theme.text} mt-2`}>{text}</p>
        </Col>
        <ColStyled context={theme} className="text-center" xs={{ offset: 1 }} sm={10}>
          <Form.Label className={`${theme.text} mt-2`} htmlFor={forID}>upload</Form.Label>
        </ColStyled>
      </Row>
    )
  }
  return (
    <Form.Label className={`${theme.text} mt-2`}>{text}</Form.Label>
  )
}

export { FormLabelStyle }
