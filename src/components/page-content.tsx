import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  HomepageImage,
  HomepageLink,
  Kicker,
  Subhead,
  Text,
} from "./ui"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

export const renderOptions = {
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

export interface HeroProps {
  image?: HomepageImage
  kicker?: string
  h1: string
  subhead: string
  text: string
  links: HomepageLink[]
  imageOnLeft: boolean
  richHeader?: any
  richText?: any
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
  return (
    <div >
      <Container className='py-10'>
        <Flex gap={4} variant="responsive">
          {props.image && props.imageOnLeft && <Box width="half">
            <HeroImage image={props.image} />
          </Box>}
          <Box width={props.image ? "fitContent" : "full"}>
            <Flex gap={0} variant="column" alignItems='start' className="justify-end">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              <Text variant='heading'>{props.richHeader ? renderRichText(props.richHeader, {}) : props.h1}</Text>
              <Subhead as="h1" className='-mt-8'>{props.subhead}</Subhead>
              <div className="text-lg">{props.text}</div>
              {props.richText && renderRichText(props.richText, renderOptions)}
              {props.links && < ButtonList links={props.links} />}
            </Flex>
          </Box>
          {props.image && !props.imageOnLeft && <Box width="half">
            <HeroImage image={props.image} />
          </Box>}
        </Flex>
      </Container>
    </div>
  )
}

export const query = graphql`
  fragment PageContentContent on PageContent {
    id
    kicker
    h1: heading
    subhead
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
    richText 
  }
`


