import React from 'react'
import styled from 'styled-components'
import MainHeaderHome from '../Components/home/MainHeaderHome'
import Section3 from '../Components/home/Section3'
import Section4 from '../Components/home/Section4'
import Section5 from '../Components/home/Section5'
import TeamHome from '../Components/home/TeamHome'


const Home = () => {
  return (
    <StyleHome>
        <MainHeaderHome/>
        <TeamHome/>
        <Section3 />
        <Section4/>
        <Section5 />
    </StyleHome>
  )
}
const StyleHome = styled.div`
`
export default Home