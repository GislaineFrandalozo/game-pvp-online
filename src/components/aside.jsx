import { Col, Row } from 'react-bootstrap';
// My component
import { HandleToggle } from './handleToggle';
// Style
import styled from 'styled-components';

const StyledAside = styled.aside`
height: 100vh;
` 
function Aside() {

  return (
    <Row>
      <StyledAside>
       <HandleToggle />
        </StyledAside>
    </Row>
  )
}

export { Aside }
