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
  SuperHeading,
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
  const isTop = props.blockIndex === 0;
  return (
    <Section>
      <Container className={`${isTop ? 'pt-8' : ''}`}>
        <Flex gap={isTop ? 4 : 6} variant="responsive">
          {props.imageOnLeft && <Box width={isTop ? "half" : "third"}>
            <HeroImage image={props.image} />
          </Box>}
          <Box width="half">
            <Flex gap={0} variant="column" alignItems='start' className="justify-end">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              <Text variant={props.blockIndex === 0 ? 'superHeading' : 'heading'}>{props.richHeader ? renderRichText(props.richHeader, {}) : props.h1}</Text>
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
