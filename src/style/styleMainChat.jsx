import { Col, Row } from 'react-bootstrap';

import { useThemeContext } from '../utils/themeContext';

function StyleMainChat({ header, body, footer }) {
  const { theme } = useThemeContext()

  return (
    <Row className={`h-100 m-0 flex-column w-100 ${theme.backgroundGradientOFF} flex-column`}>
      <Col className={`px-0 ${theme.backgroundGradientON}`}>
        {header}
      </Col>
      <Col className=' px-0'>
        {body}
      </Col>
      <Col className={`d-flex p-3 align-items-center ${theme.backgroundGradientON}`} >
        {footer}
      </Col>
    </Row>
  )
}

export { StyleMainChat }
