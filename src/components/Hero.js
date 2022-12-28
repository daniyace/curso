import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import resplandor from '../images/resplandor.png'

const ImgCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Hero = () => {
  return (
    <ImgCont>
        <StaticImage
      src='../images/resplandor.png'
      alt="Logo"
      placeholder="blurred"
      layout="constrained"
      width={600}
      height={210}
      objectFit="contain"
    />
    </ImgCont>
  )
}

export default Hero