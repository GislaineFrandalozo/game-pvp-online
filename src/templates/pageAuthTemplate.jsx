
// Component lib
import { Col, Container, Row } from "react-bootstrap"
// My component
import { Aside } from "../components/aside";
import { Main } from "../templates/mainAuth";
import { useThemeContext } from "../context/themeContext";

function PageAuthTemplate({ contentAside, contentMain }) {
  let { theme } = useThemeContext();
  return (
    <Container fluid>
      <Row>
        <Col xs={3} sm={3} md={4} lg={5} className={theme.backgroundGradientON}>
          <Aside>
            {contentAside}
          </Aside>
        </Col>
        <Col className={theme.backgroundGradientOFF} >
          <Main>
            {contentMain}
          </Main>
        </Col>
      </Row>
    </Container>
  )
}

export { PageAuthTemplate }
