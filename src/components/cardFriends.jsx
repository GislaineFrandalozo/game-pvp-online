import { Card, Figure, Row, Col, Stack, Image } from "react-bootstrap";
import avatar from "../style/avatar.jpg"

export function CardFriends({ state }) {
  return (
    <Card border="danger" className="bg-dark">
      <Stack direction="horizontal">
        <Card.Header>
          <Card.Img
            width={60}
            height={60}
            src={avatar}
          />
        </Card.Header>

          <Card.Body>
          <Card.Title className="text-start text-white ">Amigo do User</Card.Title>
            <p className="text-start text-white">{state}</p>
          </Card.Body>
      </Stack>
    
      
    </Card>
  )
}