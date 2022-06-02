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
    <Container className="vh-100 bg-danger px-0" fluid >
     <Row className="h-100 px-0">

        <Col xs={10} className="d-flex flex-column">
          <StyleMainChat header={<CardUser />} body={<BodyChat />} footer={<TextArea />} />
        </Col>
       
        <SidebarUser />
      
     </Row>
    </Container >
  )
}

export { HomePage }
