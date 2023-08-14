import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
  HomepageImage,
  HomepageLink,
  ButtonList,
} from "./ui"
import { colors } from "../colors.css"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { renderOptions } from "./page-content"

interface ProductProps {
  id: string
  image: HomepageImage
  heading: string
  text: string
  links: HomepageLink[]
  smallHeading?: boolean
}

function Product(props: ProductProps) {
  return (
    <Box center>
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="large"
        />
      )}
      <Text variant={props.smallHeading ? 'subheadSmall' : 'subhead'}>{props.heading}</Text>
      <Text>{props.text}</Text>
      <LinkList links={props.links} />
    </Box>
  )
}

export interface ProductListProps {
  kicker?: string
  heading: string
  richText?: any
  content: ProductProps[]
  links: HomepageLink[]
  image: HomepageImage
  blockIndex: number
  path?: string;
}

export default function ProductList(props: ProductListProps) {

  console.log(props.path)
  return (
    <div id={props.heading} style={{ background: props.blockIndex % 2 === 0 ? colors.background : colors.active }}>
      <Section >
        <Container>
          <Box paddingY={4}>
            <Box center>
              {props.image && (
                <Icon
                  alt={props.image.alt}
                  image={props.image.gatsbyImageData}
                  size="large"
                />
              )}
              <Heading>
                {props.kicker && <Kicker>{props.kicker}</Kicker>}
                <a>{props.heading}</a>
              </Heading>
            </Box>
            {props.richText && renderRichText(props.richText, renderOptions)}
          </Box>
          <FlexList gap={4} variant={props.path?.includes('services') ? "center" : 'responsive'}>
            {props.content?.map((product) => (
              <li key={product.id}>
                <Product smallHeading={props.path?.includes('services')} {...product} />
              </li>
            ))}
          </FlexList>
          {props.links && <Box center>< ButtonList links={props.links} /></Box>}
        </Container>
      </Section>
    </div >
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    richText
    content {
      id
      heading
      text
      image {
        alt
        id
        gatsbyImageData
      }
      links {
        id
        href
        text
      }
    }
    links {
      id
      href
      text
    }
    image {
      alt
      id
      gatsbyImageData
    }
  }
`
