import React, {useState} from "react"
import { List } from "semantic-ui-react"
import { ListItemComponent } from "../ListItem/ListItem"
import {Button} from "semantic-ui-react"
import {addToDo} from "../../actions"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

const ListComponent = () => {
  let { allMysqlTodo: { nodes } } = useStaticQuery(graphql`
    query MyQuery {
      allMysqlTodo {
        nodes {
          id
          text
          done
        }
      }
    }
  `)
  let [list, setList] = useState(nodes);
  console.log(list);
  return (
    <React.Fragment>
      <List divided relaxed>
        {
          _.map(list, (item) => <ListItemComponent setList={setList} key={item.id} item={item}/>)
        }
      </List>
      <Button primary onClick={() => setList(addToDo.bind(null, prompt('Input title', 'default')))}>Add task</Button>
    </React.Fragment>
  )
}

export { ListComponent }
