import styled from 'styled-components';
import { Form } from "react-bootstrap"
import { useThemeContext } from '../utils/themeContext';
import { useEffect } from 'react';

let StyledInput = styled(Form.Control)`
color: ${props => props.stateContext.Colorfont};
background: ${props => props.stateContext.colorFigma};
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: 0px;
&:focus {
  background: ${props => props.stateContext.colorFigma};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: 0px;
}
&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  border: 0px solid ${props => props.stateContext.colorFigma};
  -webkit-box-shadow: 0 4 4px 1000px ${props => props.stateContext.colorFigma} inset !important;
  -moz-box-shadow: 0px 1px 8px ${props => props.stateContext.colorFigma};
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: ${props => props.stateContext.Colorfont} !important;
}
`;

function FormControlStyle({globalAttribute}) {
  const { theme } = useThemeContext()
  useEffect(() => {
    StyledInput = styled(Form.Control)`
color: ${props => props.stateContext.Colorfont};
background: ${props => props.stateContext.colorFigma};
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: 0px;
&:focus {
  background: ${props => props.stateContext.colorFigma};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: 0px;
}
&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  border: 0px solid ${props => props.stateContext.colorFigma};
  -webkit-box-shadow: 0 4 4px 1000px ${props => props.stateContext.colorFigma} inset !important;
  -moz-box-shadow: 0px 1px 8px ${props => props.stateContext.colorFigma};
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: ${props => props.stateContext.Colorfont} !important;
}
`;
  }, [theme])
  return <StyledInput stateContext={theme} {...globalAttribute} />
}

export { FormControlStyle }
