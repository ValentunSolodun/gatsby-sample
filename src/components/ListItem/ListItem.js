import React from "react";
import {Link} from "gatsby"
import { ListContent, ListDescription, ListHeader, ListItem, Checkbox } from "semantic-ui-react"

const ListItemComponent = ({item}) => {
  return (
    <ListItem>
      <ListContent>
        <Link to={`/item/${item.id}`}><ListHeader>{item.text}</ListHeader></Link>
        <ListDescription>{item.description}</ListDescription>
        <Checkbox defaultChecked={item.done}/>
      </ListContent>
    </ListItem>
  )
}

export {ListItemComponent};
