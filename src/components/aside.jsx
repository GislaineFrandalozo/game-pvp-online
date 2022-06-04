import { Col, Row } from 'react-bootstrap';
// My component
import { TogleMode } from './toggleMode';
// Style
import "../style/asideForm.css"
import { useThemeContext } from '../utils/themeContext';
import { HandleToggle } from './handleToggle';

function Aside() {

  const vet = ["a", "b"]
  return (
    <Row>
      <aside>
       <HandleToggle />
        </aside>
    </Row>
  )
}

export { Aside }
