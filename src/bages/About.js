import React from 'react'
import styled from 'styled-components'
import HeaderAbout from '../Components/about/HeaderAbout'
import Section2About from '../Components/about/Section2About'

const About = () => {
  return (
    <StyleAbout>
      <HeaderAbout/>
      <Section2About/>

    </StyleAbout>
  )
}
const StyleAbout= styled.div`
`
export default About