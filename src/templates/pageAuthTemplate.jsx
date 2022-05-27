
// Component lib
import { Col, Container, Row } from "react-bootstrap"
// My component
import { Aside } from "../components/aside";
import { Main } from "../templates/mainAuth";
import { useThemeContext } from "../utils/themeContext";

function PageAuthTemplate({ configPag }) {
  let { theme } = useThemeContext();
  
  return (
    <Container fluid>
      <Row>
        <Col xs={3} sm={3} md={4} lg={5} className="bg-dark bg-gradient">
        <Aside />
        </Col>
        <Col className={theme.background} >
        <Main
            titleClass={configPag.titleMainClass}
            title={configPag.titleMain}
            configForm={configPag.metadataForm}
            navigate={configPag.navigateToPage}
          />
        </Col>
      </Row>
    </Container>
  )
}

export { PageAuthTemplate }
