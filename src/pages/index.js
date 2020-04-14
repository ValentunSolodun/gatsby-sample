import React from "react"
import { Link } from "gatsby"
import {ListComponent} from "../components/List/List";
import allTEST from '../templates/all-todo';
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="To do app" />
    <ListComponent />
  </Layout>
)

export default IndexPage
