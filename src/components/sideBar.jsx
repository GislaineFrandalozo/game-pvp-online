    // Resource
import { useState } from "react";
    // Component lib
import { Col, Offcanvas, Image, Figure } from "react-bootstrap";
    // My component
import { IconMenu } from "./iconMenu";
import { MenuFriends } from "./menuFriends";
    // Style
import avatar from "../style/avatar.jpg"
import "../style/sidebar.css"

function SidebarUser() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <Col className="bg-dark sidebar bg-gradient h-100" >
      <div onClick={toggleShow} className="h-100 bg-dark bg-gradient w-100">
        <IconMenu />
      </div>
      <Offcanvas className="bg-gradient" show={show} onHide={handleClose} placement={"end"} backdrop>
        <Offcanvas.Header closeButton className="bg-dark align-items-start">
          <Figure> { /* Passar (Figure + Offcanvas.Title) para um componente externo */}
            <Figure.Image
              width={100}
              height={100}
              src={avatar}
            />
          </Figure>
          <Offcanvas.Title className="w-100 px-3 h-100 text-white justify-content-start ">User user user user user</Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark bg-gradient">
          <MenuFriends />
        </Offcanvas.Body>
      </Offcanvas>
    </Col>
  )
}

export { SidebarUser }
