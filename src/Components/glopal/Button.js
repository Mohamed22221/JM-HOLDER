import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const Button = ({title,links}) => {
  return (

    <ButtonStyleHome>
     <Link to={`${links}`}> <button data-aos="fade-left"><span>{title}</span></button> </Link> 
    </ButtonStyleHome>
  )
}
const ButtonStyleHome = styled.div`
button{
  all: unset;
  padding: 10px 50px;
  color: #FFF;
  background-color: #FFF; 
  border:1px solid black ;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  font-size: 24px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 600;
  @media (max-width:550px) {
    font-size: 22;
  }
  &:hover{
  border-color: var(--primary-color);
  .icon-arrow{
   
      animation: ButtonAnimate 0.5s infinite linear;
  }
 }
  span{
   z-index: 10; 
   color:black ;
   transition: 0.5s;
  }
  &::after{
  content: "";
  position :absolute ;
  background-color: var(--primary-color);
  transition: 0.5s;
  left: 0;
  top: 0;
  right: 0;
  left: 0;
  width:0%;
  height: 100%;
  overflow: hidden;
  color: white;
  z-index: 0;

  }
  &:hover::after{
 
  color: white;
  width: 100%;
  z-index: -1;
    
  }
  &:hover span{
  color: white;


    
  }
  .icon-arrow{
    position: absolute;
    top: 13px;
    right: 24px;

  }

}

`
export default Button