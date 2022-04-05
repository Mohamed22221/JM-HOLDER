
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
      name="What's your name"
      placeholder="Type your name"
      type="text"
      settypeInput={settypeInput}
      />
      <InputForm 
      name="What's your email"
      placeholder="Type your Email"
      type="email"
      settypeInput={settypeInput}
      />
      <InputForm 
      name="What's your  phone"
      placeholder="Type your Phone"
      type="text"
      settypeInput={settypeInput}
      />
      <InputForm 
      name="What's your  message"
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


button{
  margin-top: 15px;
margin-left: 10px;
}
`
export default FormContact