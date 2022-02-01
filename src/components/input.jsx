import { Col, Form } from "react-bootstrap"

export default function Input(
    { 
    metadatas = [
    { 
        label: "title", 
        type: "text", 
        validate: {
            required: false,
            min: "0",
            max: "", 
            feedback: "Este campo não é obrigatório"
        } 
    }]
}) 
{
    const inputs = metadatas.map((component, index) => 
    {
        console.log(component)
        return (
            <Form.Group key={index}>
                <Form.Label >
                    {component.label}
                </Form.Label>
                <Form.Control required={component.validate.required} minLength={component.validate.min} maxLength={component.validate.max} type={component.type} name={index} />
                <Form.Control.Feedback type="invalid">
              {component.validate.feed}
            </Form.Control.Feedback>
            </Form.Group>
        )
    })
    return (inputs)
}