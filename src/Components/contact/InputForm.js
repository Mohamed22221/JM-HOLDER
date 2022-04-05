import React from 'react'
import styled from 'styled-components'

const InputForm = ({name , placeholder ,type ,settypeInput}) => {
    const HandelChange = (e)=>{
        const change = e.target.value
        settypeInput(change)
    }
  return (
    <ItemInput>
        <label>{name}</label>
        <input placeholder={placeholder} type={type} onChange={HandelChange} />
    </ItemInput>
  )
}
const ItemInput = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;


&::after{
    content: "";
    position: absolute;
    bottom:0px ;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
}
label{
    padding: 10px;
    color: var(--primary-color);
}
input{
    border:  none;
    padding: 25px 25px;
    
}
`
export default InputForm