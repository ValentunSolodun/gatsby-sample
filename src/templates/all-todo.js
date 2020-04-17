import React, { useState } from "react"
import { Card } from "semantic-ui-react"
import Layout from "../components/layout"
import { useMount } from "@umijs/hooks"
import { getAllTodo } from "../actions"

export default ({pageContext: {item}}) => {
  return (
    <Layout withoutHeader={true}>
      <Card>
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
        </Card.Content>
      </Card>
    </Layout>
  )
}
