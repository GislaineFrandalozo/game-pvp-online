//Resource
import { Button } from "react-bootstrap"
import { useThemeContext } from "../context/themeContext"

function StyledButtonDanger({
  color = "danger",
  text = "Enviar",
  disabledForm = false }) {
  const { theme } = useThemeContext()
  return (
    <Button
      disabled={disabledForm}
      variant={color}
      className={`w-100 ${theme.text}`}
      type="submit">
      {text}
    </Button>
  )
}

export { StyledButtonDanger }
