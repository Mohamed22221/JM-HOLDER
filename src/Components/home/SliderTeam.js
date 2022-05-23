import React from 'react'
import styled from 'styled-components'

import Carousel from "react-elastic-carousel";
import DataSlider1 from '../glopal/DataSlider1';
import  Button  from '../glopal/Button';
const SliderTeam = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 1 },
     ];
  return (
    <RightTeamHome >
         <Carousel breakPoints={breakPoints}
          pagination={false}
           enableAutoPlay 
           autoPlaySpeed={3000}
              >
        
          {DataSlider1.map((item)=>{
            return(
              <Item key={item.id}>
              <div className='img'>
                <img src={item.img} />
              </div>
              <div className='apout-person'>
                <h5>{item.name}</h5>
                <p>{item.jop}</p>
                <Button title='Read more'/>

              </div>
              </Item>
            )

          })}
        


      </Carousel>
    </RightTeamHome>
  )
}
const RightTeamHome = styled.div`
position: relative;
width: 950px;
display: flex;
  align-items: center;
  justify-content: center;

@media (max-width:1250px) {
 width: 650px;    
}
@media (max-width:950px) {
  width: 370px;    
}
.controls-wrapper {
  width: 100%;
}
.carousel-wrapper {
  width: 100%;
}

.rec.rec-arrow {
    display: none;
}
`
const Item = styled.div`

  height: 320px;
  width: 100%;
  background: white;
  color: var(--primary-color);
  margin: 15px 15px;
  font-size: 2em;
  user-select: none;
  position: relative;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  .img img{
    position: absolute;

    width: 100%;
    height: 320px;
    user-select: none;
    transition:0.7s;
  }
  &:hover .img img{
    transform: scale(1.2);
  }
  &:hover .apout-person{
    opacity: 1;
  }
  &:hover .apout-person button{
    transform: translateY(-8px);
  }
  .apout-person{
    position: absolute;
     z-index:15;
    color: #FFF;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    opacity: 0;
    h5{
      font-size: 22px;
     
      margin-bottom: 10px;
    }
    p{
      font-size: 17px;
      margin-bottom: 10px;
    }
    button{
      transition: 0.5s;
      padding: 10px 50px 10px 40px;
      font-size: 16px;
      margin-top: 10px;
    }
  }
`
export default SliderTeam