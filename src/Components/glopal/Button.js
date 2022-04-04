import React from 'react'
import styled from 'styled-components'
const Button = ({title}) => {
  return (

    <ButtonStyleHome>
      <button><span>{title}</span></button>  
    </ButtonStyleHome>
  )
}
const ButtonStyleHome = styled.div`
button{

  all: unset;
  padding: 10px 40px;
  color: black;
  background-color: transparent; 
  border:1px solid black ;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  &:hover{
    
  border-color: var(--primary-color);
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

}

`
export default Button