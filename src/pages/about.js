import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  const [counter, setCounter] = React.useState(0)
  return (
    <Layout>
      <h1>This is me </h1>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <button onClick={() => setCounter(counter - 1)}> - </button>
      {counter}
      <button onClick={() => setCounter(counter + 1)}> + </button>
    </Layout>
  )
}

export default AboutPage
