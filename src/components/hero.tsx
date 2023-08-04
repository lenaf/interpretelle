import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { colors } from "../colors.css"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  HomepageImage,
  HomepageLink,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"
import { renderRichText } from 'gatsby-source-contentful/rich-text'


export interface HeroProps {
  image?: HomepageImage
  kicker?: string
  h1: string
  subhead: string
  text: string
  links: HomepageLink[]
  imageOnLeft: boolean
  richHeader?: any
  blockIndex: number
}

function HeroImage(props: { image?: HomepageImage }) {
  return Boolean(props.image) && (
    <GatsbyImage
      alt={props.image.alt}
      image={getImage(props.image.gatsbyImageData)}
      className='rounded-3xl'
    />
  )
}

export default function Hero(props: HeroProps) {
  console.log(props)
  return (
    <Section>
      <Container className={`${props.blockIndex === 0 ? 'pt-8' : ''}`}>
        <Flex gap={4} variant="responsive">
          {props.imageOnLeft && <Box width="half">
            <HeroImage image={props.image} />
          </Box>}
          <Box width="half">
            <Flex gap={0} variant="column" alignItems='start' className="justify-end">
              <h1 className={`${props.blockIndex === 0 ? 'text-7xl' : 'text-3xl'} mb-8 font-extrabold`}>
                {props.kicker && <Kicker>{props.kicker}</Kicker>}
                {props.richHeader ? renderRichText(props.richHeader, {}) : props.h1}
              </h1>
              {/* <Subhead as="h1" className='-mt-8'>{props.subhead}</Subhead> */}
              <div className="text-lg">{props.text}</div>
              <ButtonList links={props.links} />
            </Flex>
          </Box>
          {!props.imageOnLeft && <Box width="half">
            <HeroImage image={props.image} />
          </Box>}
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
    imageOnLeft
    richHeader
  }
`
