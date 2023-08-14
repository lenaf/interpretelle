import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Kicker,
  HomepageLink,
  HomepageImage,
} from "./ui"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { colors } from "../colors.css"

export interface CtaProps {
  id: string
  kicker?: string
  heading: string
  text: string
  links: HomepageLink[]
  image?: HomepageImage
  richText?: any
}

export default function HomepageCta(props: CtaProps) {
  return (
    <div style={{ background: colors.primary, color: colors.background }}>
      <Container>
        <Section >
          {props.richText ? <div className='text-3xl leading-10 text-center'>{renderRichText(props.richText, {})}</div> :
            <Heading center >
              {props.kicker && <Kicker center>{props.kicker}</Kicker>}
              {props.heading}
            </Heading>}
          {props.text && <Text as="p" center variant="lead">
            {props.text}
          </Text>}
          {props.links && <ButtonList links={props.links} variant="center" reversed />}
          {props.image && (
            <Nudge left={5} right={5} bottom={5}>
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            </Nudge>
          )}
        </Section>
      </Container>
    </div>
  )
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
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
    richText
  }
`
