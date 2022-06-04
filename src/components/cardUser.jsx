import { Col, Figure } from "react-bootstrap"
import avatar from "../style/avatar.jpg"

function CardUser () {
  return (
    <Col className='d-flex pt-3 px-4'>
    <Figure>
    <Figure.Image
      roundedCircle
      width={80}
      height={80}
      src={avatar}
    />
  </Figure>
  </Col>
  )
}

export { CardUser }
