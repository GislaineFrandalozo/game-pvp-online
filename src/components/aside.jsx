import { Row } from 'react-bootstrap';
// Style
import styled from 'styled-components';

const StyledAside = styled.aside`
height: 100vh;
`
function Aside({ children }) {

  return (
    <StyledAside>
      <Row>
        {children}
      </Row>
    </StyledAside>
  )
}

export { Aside }
