import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  HomepageImage,
} from "./ui"


export interface ImageProps {
  image?: HomepageImage
  title: string
  blockIndex: number
}

export default function Image(props: ImageProps) {
  return (
    Boolean(props.image) && (
      <GatsbyImage
        alt={props.image.alt}
        image={getImage(props.image.gatsbyImageData)}
      />)
  )
}

export const query = graphql`
  fragment ImageContent on Image {
    id
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
