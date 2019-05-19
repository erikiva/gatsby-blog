import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      Sorry, not found
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
