import { Col, Row } from "react-bootstrap";
import { useThemeContext } from "../context/themeContext";

function H2center({ content }) {
    let { theme } = useThemeContext();
    return (
        <Row>
            <Col className={`h2 ${theme.text} text-center pt-5 p-2 m-0`} >
                {content}
            </Col>
        </Row>
    )
}

export { H2center }
