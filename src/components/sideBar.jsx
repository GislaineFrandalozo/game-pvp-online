// Resource
import { useState } from "react";
// Component lib
import { Col, Offcanvas, Row } from "react-bootstrap";
// My component
import { ButtonOpenSidebar } from "./buttonOpenSidebar";
// Style
import { HandleToggle } from "./handleToggle";
import { CardUser } from "./cardUser";
import { useThemeContext } from "../context/themeContext";

function SidebarUser() {
  const { theme } = useThemeContext()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <Row
      className={`
        ${theme.backgroundGradientON} 
        h-100 
        p-0 
        flex-column 
        align-items-center
      `}>
      <Col>
        <ButtonOpenSidebar
          onClick={toggleShow}
          colorContext={theme.stateToggle}
        />
      </Col>
      <Col>
        <Offcanvas
          className={` 
            ${theme.backgroundGradientON} 
            ${theme.text}
          `}
          show={show}
          onHide={handleClose}
          placement={"end"}
          scroll={true}
          backdrop={true}>
          <Offcanvas.Header closeButton className="align-items-start">
            <HandleToggle />
            <Offcanvas.Title className="justify-content-start ">
              Online
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CardUser />
          </Offcanvas.Body>
        </Offcanvas>
      </Col>
    </Row>
  )
}

export { SidebarUser }
