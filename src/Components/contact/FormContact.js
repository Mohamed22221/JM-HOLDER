
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import InputForm from './InputForm'
import Button from '../../Components/glopal/Button'
const FormContact = () => {
  const [ typeInput , settypeInput] = useState('')
  console.log(typeInput)
  return (
    <StyleForm>
        <form>

      <InputForm 
      name=" your name"
      placeholder="Type your name"
      type="text"
      settypeInput={settypeInput}
      />
      <InputForm 
      name=" your email"
      placeholder="Type your Email"
      type="email"
      settypeInput={settypeInput}
      />
      <InputForm 
      name="your  phone"
      placeholder="Type your Phone"
      type="text"
      settypeInput={settypeInput}
      />
      <InputForm 
      name=" your  message"
      placeholder="Type your Comment"
      type="textar"
      settypeInput={settypeInput}
      />
        </form>
        <Button title="SEND MESSAGE" />
        
    </StyleForm>
  )
}
const StyleForm = styled.div`
margin-top: 10px;
@media (max-width:1150px) {
  margin-top: 60px;
}


button{
margin: 40px 10px 40px 10px;

}
`
export default FormContact