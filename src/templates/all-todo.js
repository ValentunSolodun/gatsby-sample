import React from "react"
import { Card } from "semantic-ui-react"
import Layout from "../components/layout"

export default ({ pageContext: { item } }) => {
  return (
    <Layout withoutHeader={true}>
      <Card>
        <Card.Content>
          <Card.Header>{item.text}</Card.Header>
        </Card.Content>
      </Card>
    </Layout>
  )
}
