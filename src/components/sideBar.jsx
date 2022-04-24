import { useState } from "react";
import { Button, Col, Offcanvas } from "react-bootstrap";
import "../style/sidebar.css"
import { IconMenu } from "./iconMenu";

export function SideBarUser() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    return (
        <Col className="bg-dark sidebar bg-gradient h-100" > 
        <div onClick={toggleShow} className="h-100 bg-dark bg-gradient w-100">
        <IconMenu />
      </div>
        <Offcanvas className="bg-dark bg-gradient" show={show} onHide={handleClose} placement={"end"} scroll backdrop>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </Col>
    )
}