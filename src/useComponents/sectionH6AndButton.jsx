import { Col, Row } from "react-bootstrap"
import { ButtonOutline } from "../components/buttonOutline"
import { useThemeContext } from "../context/themeContext"

function SectionH6AndButton({ useSection }) {
    const { theme } = useThemeContext()
    return (
        <Row className="justify-content-center">
            <Col xs={11} className={`h6 ${theme.text} text-center pb-3`}>
                {useSection.text}
            </Col>
            <Col xs={11} sm={7} md={5} className="text-center">
                <ButtonOutline onClick={useSection.handleClick} content={useSection.button} />
            </Col>
        </Row>
    )
}

export { SectionH6AndButton }
