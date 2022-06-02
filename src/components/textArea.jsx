import { Button, Col, FormControl, InputGroup } from "react-bootstrap"
import styled from "styled-components"

const StyledInputChat = styled(Col)`
background: red;
`


function TextArea() {
  return (
    <StyledInputChat  className="align-items-center p-3" > 
     <InputGroup className="">
    <FormControl
    className="mx-2"
    as="textarea"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      />
   <Button variant="secondary" className="mx-1" id="button-addon2">
      {">"}
    </Button>
  </InputGroup>
  </StyledInputChat>
      )
}

export { TextArea }
