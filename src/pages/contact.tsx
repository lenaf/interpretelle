import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import Contact from "../components/contact"


export default function ContactPage() {

  return (
    <Layout>
      <Contact />
    </Layout >
  )
}