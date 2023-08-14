import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import SEOHead from "../components/head"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

interface PageProps {
  data: {
    page: {
      id: string
      title: string
      slug: string
      description: string
      image: { id: string; url: string }
      blocks: sections.HomepageBlock[]
    }
  }
}

export default function Page(props: PageProps) {
  const { page } = props.data
  return (
    <Layout>
      {page.blocks?.map((block, index) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component blockIndex={index} key={id} {...(componentProps as any)} />

      })}

    </Layout>
  )
}
export const Head = (props: PageProps) => {
  const { page } = props.data
  return <SEOHead {...page} />
}
export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageProductListContent
        ...PageContentContent
        ...ImageContent
      }
    }
  }
`
