import React, { useState, useEffect } from "react"
import { useMount } from "@umijs/hooks"
import { List } from "semantic-ui-react"
import { ListItemComponent } from "../ListItem/ListItem"
import { Button } from "semantic-ui-react"
import { getAllTodo, addTodo } from "../../actions"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

const ListComponent = () => {

  const {allTodo: {nodes}} = useStaticQuery(graphql`
    query MyQuery {
      allTodo {
        nodes {
          list {
            id
            name
            done
          }
        }
      }
    }

  `)

  const [list, setList] = useState([]);
  useMount(() => {
    setList(nodes[0].list);
    // getAllTodo().then(response => setList(response.data))
  });

  const handlerAddToDo = (value) => {
    addTodo(value).then((response) => setList(prevState => [...prevState, {...response.data}]))
  };

  return (
    <React.Fragment>
      <List divided relaxed>
        {
          _.map(list, (item) => <ListItemComponent setList={setList} key={item.id} item={item}/>)
        }
      </List>
      <Button onClick={() => handlerAddToDo(prompt("Title", ""))} primary>Add task</Button>
    </React.Fragment>
  )
}

export { ListComponent }
