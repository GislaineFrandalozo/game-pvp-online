// Component lib
import { Col, Container, Row } from "react-bootstrap";
import { BodyChat } from "../components/bodyChat";
import { CardUser } from "../components/cardUser";
// My component
import { SidebarUser } from "../components/sideBar";
import { TextArea } from "../components/textArea";
import { StyleMainChat } from "../style/styleMainChat";

function HomePage() {
  return (
    <Container className="vh-100 vw-100 p-0" fluid >
      <Row className="h-100 p-0 justify-content-center w-100">
        <Col xs={10} lg={11}>
          <StyleMainChat
            header={<CardUser />}
            body={<BodyChat />}
            footer={<TextArea />}
          />
        </Col>
        <Col className="p-0">
          <SidebarUser />
        </Col>
      </Row>
    </Container >
  )
}

export { HomePage }
