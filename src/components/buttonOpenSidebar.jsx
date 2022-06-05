
import { Col, Figure, Row } from "react-bootstrap"
// Style
import dark from '../svg/dark.svg'
import light from '../svg/light.svg'

function ButtonOpenSidebar({ onClick, colorContext }) {
  let color = colorContext === true ? light : dark;
  return (
    <Row onClick={onClick}
      className="
        flex-column
        align-items-center
        w-100
        my-3 
        mx-0
        p-0">
      <Col
        xs={7} sm={6} md={5} lg={6}
        className="p-0">
        <Figure.Image
          className="
            p-0 
            w-100 
            m-0 
            h-100"
          src={color} />
      </Col>
      <Col
        xs={7} sm={6} md={5} lg={6}
        className="p-0">
        <Figure.Image
          className="
          p-0 
          m-0 
          mb-3 
          mb-md-2 
          mb-lg-3 
          w-100 
          h-100"
          src={color} />
      </Col>
    </Row>
  )
}
export { ButtonOpenSidebar }
