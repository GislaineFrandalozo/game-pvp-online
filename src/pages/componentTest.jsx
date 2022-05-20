    // Component lib
import { Col, Container, Row } from "react-bootstrap";
    // My component
import { SidebarUser } from "../components/sideBar";

function ComponentTest() {
  return (
    <Container className="w-100 vh-100 containerPage" fluid>
      <Row className="h-100 justify-content-between align-items-center">
        <Col className="col-11">
          <main>
          </main>
        </Col>
        <Col className="col-1 h-100">
          <Row className="row-cols-2 h-100">
            <Col />
            <SidebarUser />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export { ComponentTest }
