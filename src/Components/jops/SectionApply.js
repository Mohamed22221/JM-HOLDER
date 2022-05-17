import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
const SectionApply = () => {
  return (
    <StyleApplay>
         <Container maxWidth="xl">
         <form>
           <h2>JOIN US</h2>
                    <>
                    <label>Founder:</label>
                    <div className='two-input'>
                        <input placeholder='first Name*' type="text" />
                        <input placeholder='last Name*' type="text" />
                    </div>

                    </>
                    <div className='one-input'>
                    <input placeholder='Contact Number*' type="text" />
                    <input placeholder='Email*' type="email" />
                    <input placeholder='Specialization Sector*' type="text" />

                    </div>

                    <div className='one-input'>

                    </div>
                    <div className='Attachments'>
                        <label>Attach your CV</label>
                        <div className='file-Attachments'>
                            <p>Size Limit 5 MB</p>
                            <input type="file" />
                        </div>

                    </div>
                    <div className='one-input'>
                    <p>* If the file being uploaded is more than 5 MB, place a Dropbox link or any cloud solution in the field below</p>
                    <input placeholder='Url To Dropbox or any Cloud Solution*' type="text" />
                    </div>
                    
                    <div className='button'>
                        <button>Submit</button>
                    </div>
                </form>
         </Container>
    </StyleApplay>
  )
}
const StyleApplay = styled.div`
position: relative;
height: 100%;
transform: translateY(-70px);
z-index: 10;
padding: 40px 0;
h2{
  text-align: center;
  padding: 10px;
  margin: 20px 0;
  
}
form{
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin: 10px 0;
        padding: 20px 0;
        @media (max-width:780px) {
            width: 100%;
        }
        label{
            font-weight: bold;
            font-size: 18px;
        }
        input  {
            
            ::placeholder{
                font-weight: bold;
            }

        }
        .two-input{
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            input{
                width: 100%;
                margin: 10px 4px 0px 9px;
                padding: 5px 0px 5px 10px;
            }
        }
        .one-input{
            display: flex;
            flex-direction: column;
            
            input , select{
                
                margin: 10px 4px 0px 9px;
                padding: 5px 0px 5px 10px;
            }

        }

        .Attachments{
            margin: 18px 0;
            .file-Attachments{
                display: flex;
                align-items: center;
                justify-content: space-between;
                input{
                    ::-webkit-file-upload-button {
                    background: var(--primary-color);
                    color: white;
                    padding: 1em;
                    }
                }
            }
        }
        .button{
          margin-top: 40px;
          padding: 10px 0;
            button{
                all: unset;
                padding: 5px 48px;
                border: 1px solid ;
                cursor: pointer;
                border-radius: 4px;
                transition: 0.5s;
                :hover{
                    background-color: var(--primary-color);
                    color: white;
                }
            }
        }
    }
`
export default SectionApply