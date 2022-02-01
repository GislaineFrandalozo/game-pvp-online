import { Col, Form } from "react-bootstrap"

export default function Input({ metadatas = [{ label: "title", type: "text" }] }) {

    const inputs = metadatas.map((component, index) => {

        return (
            <Form.Group key={index}>
                <Form.Label as={Col}>
                    {component.label}
                </Form.Label>
                <Form.Control type={component.type} name={index} />
            </Form.Group>
        )
    })
    return (inputs)
}