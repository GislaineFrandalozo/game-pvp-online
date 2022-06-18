import { Button, Col, Figure, FormControl, InputGroup } from "react-bootstrap"
import ArrowDark from '../svg/ArrowDark.svg'
import ArrowLight from '../svg/ArrowLight.svg'
import { useThemeContext } from "../context/themeContext";
function TextArea() {
  const { theme } = useThemeContext()
  let color = theme.stateToggle === true ? ArrowLight : ArrowDark;
  const arrowSvg = <Figure.Image src={color} />
  return (
      <InputGroup className="align-self-center">
        <FormControl
          className="mx-2 p-1"
          as="textarea"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="transparent"
          size="sm"
          className="mx-2 d-flex justify-content-center align-items-center"
          id="button-addon2">
          {arrowSvg}
        </Button>
      </InputGroup>
  )
}

export { TextArea }
