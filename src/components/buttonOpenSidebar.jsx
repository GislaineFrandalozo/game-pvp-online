// Style
//import "../style/iconMenu.css"

import { Button, Col, Figure, Row, Stack } from "react-bootstrap"
import styled from "styled-components"
import dark from '../svg/dark.svg'
import light from '../svg/light.svg'

function ButtonOpenSidebar({ onClick, colorContext }) {
  console.log(colorContext)
  let color = colorContext === true ? light : dark;
  return (
    <Row onClick={onClick} className="
    flex-column
    justify-content-center 
    align-items-center 
    w-100
    my-3 
    p-0">
      <Col>
        <Figure.Image className="p-0 w-100 h-50" src={color} />
      </Col>
      <Col>
        <Figure.Image className="p-0 w-100 h-50" src={color} />
      </Col>
    </Row>
  )
}
export { ButtonOpenSidebar }
