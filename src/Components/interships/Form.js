import React, {useState, Fragment} from 'react'
import styled from 'styled-components'
import {postFromData} from './../../helpers/api_helper';
import { toast } from "react-toastify";
import Axios from "axios"
const Form = () => {


      const initialState = {
        name: '',
        email: '',
        file: null,
        file2: null,
    }
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false)

    const handelChange = (e) => {
         if (e.target.type === 'file') {
            const Reader = new FileReader()
            Reader.onload = () =>{
                if (Reader.readyState === 2) {
                    setData({...data , [e.target.name]: e.target.files[0] }) 
                }
            }
            Reader.readAsDataURL(e.target.files[0])
        } else {
            setData({...data, [e.target.name]: e.target.value});
        }
    }


     const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
         postFromData('internships', data).then(res => {
            setData(initialState)
            toast.dark("sent successfully!");
         setLoading(false);
        }).catch(err => {
            setLoading(false);

        })


      
     }
 

    return (
        <StyleForm>

            <form onSubmit={handleSubmit}>
                <div className='one-input'>
                    <input placeholder='Full Name*' required type="text" value={data.name} name='name' onChange={handelChange} />
                    <input placeholder='Email*' type="email" required value={data.email} name='email' onChange={handelChange} />
                </div>
                <div className='Attachments'>
                    <label>Attach your transcript</label>
                    <div className='file-Attachments'>
                        <p>Size Limit 5 MB</p>
                        <input type="file" required onChange={handelChange} name='file' />
                    </div>

                </div>
                <div className='Attachments'>
                    <label>Attach your resume</label>
                    <div className='file-Attachments'>
                        <p>Size Limit 5 MB</p>
                        <input type="file" required onChange={handelChange} name='file2' />
                    </div>
                </div>
                <div className='button'>
                    <button disabled={loading ? true : false}>
                            {!loading ? 'Submit' : 
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

                                </Fragment> }
                        </button>
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
        color: white;
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
            margin: 10px 0;
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
                padding: 5px 28px;
                border: 1px solid ;
                cursor: pointer;
                border-radius: 4px;
                transition: 0.5s;
                :hover{
                    background-color: var(--primary-color);
                    color: white;
                }
                display: flex;
            }
        }
    }
`
export default Form