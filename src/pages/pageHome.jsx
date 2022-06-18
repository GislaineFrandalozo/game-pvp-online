// Component lib
import { Col, Container, Row } from "react-bootstrap";
// My component
import { StyleMainChat } from "../style/styledMainChat";
import { CardUser } from "../components/cardUser";
import { BodyChat } from "../components/bodyChat";
import { TextArea } from "../components/textArea";
import { SidebarUser } from "../components/sideBar";
import { useAuthContext } from "../context/authContext";

function HomePage() {
  
  return (
    <Container
      fluid
      className="vh-100 vw-100 p-0" >
      <Row
        className="
        h-100 
        p-0 
        justify-content-center 
        w-100">
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
