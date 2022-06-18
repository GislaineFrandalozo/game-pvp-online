import { Col, Row } from "react-bootstrap";

function H2center({content}) {
    return(
        <Row>
        <Col className={`h2 text-center pt-5 p-2 m-0`} >
            { content }
        </Col>
        </Row>
    )
}

export { H2center }
