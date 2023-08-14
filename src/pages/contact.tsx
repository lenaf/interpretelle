import * as React from "react"
import Layout from "../components/layout"
import Contact from "../components/contact"


export default function ContactPage(props) {
  return (
    <Layout path={props.path}>
      <Contact />
    </Layout >
  )
}