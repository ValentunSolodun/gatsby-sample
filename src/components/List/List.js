import React from "react"
import { List } from "semantic-ui-react"
import { ListItemComponent } from "../ListItem/ListItem"
import { getAllTodo } from "../../actions"
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
  return (
    <List divided relaxed>
      {
        _.map(nodes, (item) => <ListItemComponent key={item.id} item={item}/>)
      }
    </List>
  )
}

export { ListComponent }
