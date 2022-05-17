import React from 'react'
import styled from 'styled-components'
const Form = () => {
    return (
        <StyleForm>

            <form>
                <div className='one-input'>
                    <input placeholder='Full Name*' type="text" />
                    <input placeholder='Email*' type="email" />
                </div>
                <div className='Attachments'>
                    <label>Attach your transcript</label>
                    <div className='file-Attachments'>
                        <p>Size Limit 5 MB</p>
                        <input type="file" />
                    </div>

                </div>
                <div className='Attachments'>
                    <label>Attach your resume</label>
                    <div className='file-Attachments'>
                        <p>Size Limit 5 MB</p>
                        <input type="file" />
                    </div>
                </div>
                <div className='button'>
                        <button>Submit</button>
                    </div>
                

            </form>

        </StyleForm>
    )
}
const StyleForm = styled.div`
form{
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin: 5px 0;
        padding: 5px 0;
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

        .one-input{
            display: flex;
            flex-direction: column;
            
            input {
                
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
          margin-top: 10px;
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
export default Form