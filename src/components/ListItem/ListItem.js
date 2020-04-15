import React from "react";
import {Link} from "gatsby"
import { ListContent, ListDescription, ListHeader, ListItem, Checkbox, Button } from "semantic-ui-react"
import {removeTodo} from "../../actions"

const ListItemComponent = ({item, setList}) => {
  return (
    <ListItem>
      <ListContent>
        <Link to={`/item/${item.id}`}><ListHeader>{item.text}</ListHeader></Link>
        <ListDescription>{item.description}</ListDescription>
        <Checkbox defaultChecked={item.done}/>
      </ListContent>
      <Button size='mini' color='red' onClick={() => setList(removeTodo.bind(null, item.id))}>Remove</Button>
    </ListItem>
  )
}

export {ListItemComponent};
