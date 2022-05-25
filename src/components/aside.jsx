import { Col, Row } from 'react-bootstrap';
// My component
import { TogleMode } from './toggleMode';
// Style
import "../style/asideForm.css"

function Aside() {
    return (
        <Row>
            <aside>
                <Col className='col-1 p-2'>
                    <TogleMode />
                </Col>
            </aside>
        </Row>
    )
}

export { Aside }
