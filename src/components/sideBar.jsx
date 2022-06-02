    // Resource
import { useState } from "react";
    // Component lib
import { Col, Offcanvas, Image, Figure } from "react-bootstrap";
    // My component
import { IconMenu } from "./iconMenu";
import { MenuFriends } from "./menuFriends";
    // Style
import "../style/sidebar.css"

function SidebarUser() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <Col className="bg-dark px-0" >
      <div onClick={toggleShow} className="sidebar h-100 p-0 bg-white bg-gradient">
        <IconMenu />
      </div>
      <Offcanvas className="bg-gradient" show={show} onHide={handleClose} placement={"end"} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton className="bg-dark align-items-start">
         
          <Offcanvas.Title className="w-100 h-100 text-white justify-content-start ">User user user user user</Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark bg-gradient">
          <MenuFriends />
        </Offcanvas.Body>
      </Offcanvas>
   </Col>
  
  )
}

export { SidebarUser }
