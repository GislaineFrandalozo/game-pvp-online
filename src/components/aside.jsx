import { Col, Row } from 'react-bootstrap';
// My component
import { TogleMode } from './toggleMode';
// Style
import "../style/asideForm.css"
import { useThemeContext } from '../utils/themeContext';

function Aside() {
  const { isDarkEnabled, setIsDarkEnabled } = useThemeContext()
  const handleToggleEvent = (checked) => {
    setIsDarkEnabled(checked)
  }
  const vet = ["a", "b"]
  return (
    <Row>
      <aside>
        <Col className='col-1 p-2'>
          <TogleMode 
            checked={isDarkEnabled} 
            onChange={handleToggleEvent} 
          />
        </Col>
        </aside>
    </Row>
  )
}

export { Aside }
