import { Col, Image } from "react-bootstrap"
import { useThemeContext } from "../context/themeContext"

function ImagePreview() {
  const { theme } = useThemeContext()
  return (
    <Col className="row-cols-1 mt-3 justify-content-center " xs={7} >
    <Image
      thumbnail
      fluid
      src=""
      className={`${theme.backgroundGradientON} ${theme.text} imgUser`}
      alt="Prévia da imagem..." />
  </Col>
  )
}

export { ImagePreview }
