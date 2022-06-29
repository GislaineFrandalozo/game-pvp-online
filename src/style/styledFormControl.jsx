import styled from 'styled-components';
import { Form } from "react-bootstrap"
import { useThemeContext } from '../context/themeContext';
import { useEffect } from 'react';

let StyledInput = styled(Form.Control)`
color: ${props => props.state.Colorfont};
background: ${props => props.state.colorFigma};
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: 0px;
&:focus {
  background: ${props => props.state.colorFigma};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: 0px;
}
&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  border: 0px solid ${props => props.state.colorFigma};
  -webkit-box-shadow: 0 4 4px 1000px ${props => props.state.colorFigma} inset !important;
  -moz-box-shadow: 0px 1px 8px ${props => props.state.colorFigma};
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: ${props => props.state.Colorfont} !important;
}
`;

function StyledFormControl({ change, globalAttribute }) {
  
  const handleChange = (e) => {
    console.log(e.target.value)
    const inputTag = e.target
    console.log(inputTag.checkValidity())
    if (inputTag.checkValidity() === true) {
      console.log("xxx")
    }
  }
  const { theme } = useThemeContext()
  useEffect(() => {
    StyledInput = styled(Form.Control)`
color: ${props => props.state.Colorfont};
background: ${props => props.state.colorFigma};
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: 0px;
&:focus {
  background: ${props => props.state.colorFigma};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
border: 0px;
}
&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  border: 0px solid ${props => props.state.colorFigma};
  -webkit-box-shadow: 0 4 4px 1000px ${props => props.state.colorFigma} inset !important;
  -moz-box-shadow: 0px 1px 8px ${props => props.state.colorFigma};
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: ${props => props.state.Colorfont} !important;
}
`;
  }, [theme])
  return <StyledInput onChange={change} state={theme} {...globalAttribute} />
}

export { StyledFormControl }
