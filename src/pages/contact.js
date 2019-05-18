import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>You can contact me by sending smoke signals</p>
      <p>
        Or find me{" "}
        <a
          href="https://twitter.com/erikiva"
          target="_blank"
          rel="noopener noreferrer"
        >
          on Twitter
        </a>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Layout>
  )
}

export default ContactPage
