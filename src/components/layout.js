import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "semantic-ui-react"

import Header from "./header"

const Layout = ({ children, withoutHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      {!withoutHeader && <Header style={{ textAlign: "center" }} siteTitle={"To Do App"}/>}
      <Container>
        <div>
          <main>{children}</main>
        </div>
      </Container>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
