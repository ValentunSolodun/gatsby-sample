import React from "react";
import {Link} from "gatsby"
import { ListContent, ListDescription, ListHeader, ListItem, Checkbox, Button } from "semantic-ui-react"
import { removeTodo, changeToDo } from "../../actions"
import _ from 'lodash';

const ListItemComponent = ({item, setList}) => {

  const handlerRemoveToDo = (id) => {
    removeTodo(id).then((response) => setList(prevState => prevState.filter(item => item.id !== id)));
  };

  return (
    <ListItem>
      <ListContent>
        <Link to={`/item/${item.id}`}><ListHeader>{item.name}</ListHeader></Link>
        <ListDescription>{item.description}</ListDescription>
        <Checkbox defaultChecked={item.done} />
      </ListContent>
      <Button size='mini' color='red' onClick={() => handlerRemoveToDo(item.id)}>Remove</Button>
    </ListItem>
  )
}

export {ListItemComponent};
