import { Col, Row } from "react-bootstrap"
import { ButtonOutline } from "../components/buttonOutline"

function SectionH6AndButton({ useSection }) {
    return (
        <Row className="justify-content-center">
            <Col xs={11} className={`h6 text-center pb-3`}>
                {useSection.text}
            </Col>
            <Col xs={11} sm={7} md={5} className="text-center">
                <ButtonOutline onClick={useSection.handleClick} content={useSection.button} />
            </Col>
        </Row>
    )
}

export { SectionH6AndButton }
