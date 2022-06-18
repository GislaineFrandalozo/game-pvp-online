import { Col } from "react-bootstrap"
import { useThemeContext } from "../context/themeContext"
import { TogleMode } from "./toggleMode"

function HandleToggle() {
  const { isDarkEnabled, setIsDarkEnabled } = useThemeContext()
  const handleToggleEvent = (checked) => {
    setIsDarkEnabled(checked)
  }
  return (
    <Col className='col-1 p-2'>
    <TogleMode 
      checked={isDarkEnabled} 
      onChange={handleToggleEvent} 
    />
  </Col>
  )
}

export { HandleToggle }
