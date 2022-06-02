import { Col, Row, Stack } from 'react-bootstrap';
import styled from 'styled-components';


function StyleMainChat({ header, body, footer }) {

  return <Row className='h-100 align-bottom bg-sucess flex-column'>
    <Col className='bg-white px-0'>
      {header}
    </Col>
    <Col className='bg-dark px-0'>
      {body}
    </Col>
    <Col className='d-flex px-0 bg-info' >
        {footer}
    </Col>
  </Row>
}

export { StyleMainChat }
