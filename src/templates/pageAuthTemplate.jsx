
// Component lib
import { Col, Container, Row } from "react-bootstrap"
// My component
import { Aside } from "../components/aside";
import { Main } from "../templates/mainAuth";

function PageAuthTemplate({ configPag }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={3} sm={3} md={4} lg={5} className="bg-dark bg-gradient">
        <Aside />
        </Col>
        <Col>
        <Main
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
