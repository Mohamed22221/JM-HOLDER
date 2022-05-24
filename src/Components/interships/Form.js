import React, {useState} from 'react'
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
        // await postFromData('internships', data).then(res => {
        //      setData(initialState)
        //     toast.dark("sent successfully!");
        //     console.log('klddklkldfjdkjldfkjldfkjldfkldfklfjjjjjjjj', res);
        //  }).catch(err => {
        //      console.log('dfdfdklfdkllndf', err);
        //  })
        const formData = new FormData()
         for (let item in data) {
             formData.append(item, data[item])
         }
        Axios.post('https://www.jmgroupkw.com/jm/api/store/internships', formData).then(response => {
            console.log('res', response);
            setData(initialState)
            toast.dark("sent successfully!");
        }).catch(err => {
            console.log('err', err.response.status);
        })

        // console.log('this');
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