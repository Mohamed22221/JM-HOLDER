
import React from 'react'
import { useState , Fragment} from 'react'
import styled from 'styled-components'
import InputForm from './InputForm'
import Button from '../../Components/glopal/Button'
import {postFromData} from './../../helpers/api_helper';
import { toast } from "react-toastify";
const FormContact = () => {
  const [ typeInput , settypeInput] = useState('')
  console.log(typeInput)

   const initialData = {
     name: "",
     email: "",
     phone: "",
     message: "",
   }
   const [contact, setContact] = useState(initialData)
   const [loading, setLoading] = useState(false)


  const HandelChange = async (e) => {
        const data = {...contact}
        data[e.target.id] = e.target.value
        setContact(data)
    }

   const handelSubmit = (e) => {
     e.preventDefault()
     console.log('TEst');
     setLoading(true)
     postFromData('contact', contact).then(res => {
       setContact(initialData)
       toast.dark("sent successfully!");
       setLoading(false);
     }).catch(err => {
       setLoading(false);

     })
   }


  return (
    <StyleForm>
        <form onSubmit={handelSubmit}>
          <ItemInput>
              <label>your name</label>
              <input placeholder='Type your name' id='name' type='text' value={contact.name} onChange={HandelChange} />
          </ItemInput>

          <ItemInput>
              <label>your email</label>
              <input placeholder='Type your email' id='email' type='email' value={contact.email} onChange={HandelChange} />
          </ItemInput>

          <ItemInput>
              <label>your Phone</label>
              <input placeholder='Type your Phone' id='phone' type='number' value={contact.phone} onChange={HandelChange} />
          </ItemInput>
           
          <ItemInput>
              <label>your message</label>
              <input placeholder='Type your message' id='message' type='text' value={contact.message} onChange={HandelChange} />
          </ItemInput>

          <button disabled={loading ? true : false}>
                {!loading ? 'SEND MESSAGE' : 
                    <Fragment>
                        sending...
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{shapeRendering: 'auto'}} width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <g transform="rotate(0 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(30 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(60 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(90 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(120 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(150 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(180 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(210 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(240 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(270 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(300 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
                            </rect>
                        </g><g transform="rotate(330 50 50)">
                            <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#c3a461">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
                            </rect>
                        </g>
                        </svg>
                    </Fragment> 
                  }
            </button>
        </form>
        
    </StyleForm>
  )
}
const StyleForm = styled.div`
margin-top: 10px;
@media (max-width:1150px) {
  margin-top: 60px;
}

button{
  all: unset;
  padding: 10px 50px;
  color: var(--primary-color);
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
    color: #fff;
    background-color: var(--primary-color);
    border: 1px solid #fff;
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


button{
margin: 40px 10px 40px 10px;
display: flex;
    align-items: center;

}
`

const ItemInput = styled.div `
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
    color: white;
}
input{
    :-webkit-autofill {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
    border:  none;
    padding: 25px 25px;
    background-color: var(--font);
    color: white;
    ::placeholder{
        color: white;
        
    }

    
}
`
export default FormContact