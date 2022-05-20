    // Component lib
import { Stack } from "react-bootstrap";
    // My component
import { CardFriends } from "./cardFriends";

function ListFriends({ state }) {
  return (
    <Stack gap={0}>
      <CardFriends state={state} />
      <CardFriends state={state} />
      <CardFriends state={state} />
      <CardFriends state={state} />
      <CardFriends state={state} />
      <CardFriends state={state} />
      <CardFriends state={state} />
    </Stack>
  )
}

export { ListFriends }
