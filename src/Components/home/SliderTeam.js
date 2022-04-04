import React from 'react'
import styled from 'styled-components'

import Carousel from "react-elastic-carousel";
const SliderTeam = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 1 },
     ];
  return (
    <RightTeamHome>
         <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}  >
        <Item>Crypto1</Item>
        <Item>Crypto2</Item>
        <Item>Crypto3</Item>
        <Item>Crypto4</Item>
        <Item>Crypto5</Item>
        <Item>Crypto6</Item>
        <Item>Crypto7</Item>
        <Item>Crypto8</Item>
      </Carousel>
    </RightTeamHome>
  )
}
const RightTeamHome = styled.div`
position: relative;
width: 850px;
@media (max-width:1250px) {
 width: 650px;    
}
@media (max-width:950px) {
 width: 350px;    
}
.controls-wrapper {
  width: 100%;
}
.carousel-wrapper {
  width: 100%;
}
.rec-carousel-item:focus {
  outline: none;
  box-shadow: inset 0 0 1px 0px var(--primary-color);
}
.rec.rec-arrow {
    display: none;
}
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background: white;
  opacity: 0.7;
  color: var(--primary-color);
  margin: 0 15px;
  font-size: 2em;
`
export default SliderTeam