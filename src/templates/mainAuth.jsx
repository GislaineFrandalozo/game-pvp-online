// Components lib
import { Row } from 'react-bootstrap'

function Main({ children }) {

  return (
    <Row className="justify-content-center px-2">
      { children }
    </Row>
  )
}

export { Main }
