import React from 'react'
import styled from 'styled-components'
import Logo from"../../assets/logo.svg"
const Loading = () => {

  return (
    <>
      <Circles>
      <a href="https://usecheck.com/" class="btn-shine" target="_blank">Get early access</a>
       <img src={Logo}  />
        <div className="loader"></div>
      </Circles>
      </>

  )
}
const Circles = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
height: 100%;
z-index: 250;


img{
   width: 180px;
    z-index: 280;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
}
  .loader   {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--font);
  transition: opacity 1.75s, visibility 1.75s;
  
}

.loader--hidden {
  opacity: 0;
  visibility: hidden;
}

.loader::after {
  content: "";
  width: 50px;
  height: 50px;
  border: 15px solid var(--primary-color);
  border-top-color: white;
  border-radius: 50%;
  animation: loading 3.75s ease infinite;
}

@keyframes loading {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(2turn);
  }
}


  
`

export default Loading