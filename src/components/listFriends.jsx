import { Stack } from "react-bootstrap";
import { CardFriends } from "./cardFriends";
export function ListFriends({state}) {

    return (
       <Stack gap={0}>
       <CardFriends state={state}  />
       <CardFriends state={state} />
       <CardFriends state={state} />
       <CardFriends state={state} />
       <CardFriends state={state} />
       <CardFriends state={state} />
       <CardFriends state={state} />
       
       </Stack>
       
    )
}