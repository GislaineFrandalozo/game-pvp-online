    // Resource
import { useState } from "react";
    // Component lib 
import { Button, ButtonGroup, Card, Col, Pagination, Row, Stack } from "react-bootstrap";
    // My component
import { ListFriends } from "./listFriends";

function MenuFriends() {
  const [list, setList] = useState("Online")
  const handleClick = (param) => () => {
    setList(param)
  }
  return (
    <Stack className="align-items-center">
      <Row className="w-100">
        <ButtonGroup size="ls">
          <Button variant="danger" onClick={handleClick("Online")}>Online</Button>
          <Button variant="danger" onClick={handleClick("Offline")}>Offline</Button>
          <Button variant="danger" onClick={handleClick("toAdd")}>Adicionar</Button>
        </ButtonGroup>
      </Row>
      <Row className="align-items-center">
        <Card style={{ width: '22rem', height: '42rem' }} className="bg-dark align-items-center p-2">
          <ListFriends state={list} />
          <Pagination size="sm">
            <Pagination.Item >{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item active>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item disabled>{5}</Pagination.Item>
          </Pagination>
        </Card>
      </Row>
    </Stack>
  )
}

export { MenuFriends }
