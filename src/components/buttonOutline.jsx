import { Button } from "react-bootstrap";

function ButtonOutline({ onClick ,content }) {
    return (
        <Button variant="outline-danger" className="w-100" onClick={onClick}>
            {content}
        </Button>
    )
}

export { ButtonOutline }
