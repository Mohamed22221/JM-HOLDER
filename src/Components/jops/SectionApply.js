import React, {useState} from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import {postFromData} from './../../helpers/api_helper';
const SectionApply = () => {
    const initialState = {
        Fname: '',
        Lname: '',
        phone: '',
        email: '',
        sector: '',
        file: null,
        cv_link: '',
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

    const handleSubmit = (e) => {
        e.preventDefault()
        postFromData('jobs', data).then(res => {
            setData(initialState)
        })
    }
  return (
    <StyleApplay>
         <Container maxWidth="xl">
         <form onSubmit={handleSubmit}>
           <h2>JOIN US</h2>
                    <>
                    <label>Founder:</label>
                    <div className='two-input'>
                        <input placeholder='first Name*' name='Fname' required value={data.Fname} onChange={handelChange} type="text" />
                        <input placeholder='last Name*' name='Lname' required value={data.Lname} onChange={handelChange} type="text" />
                    </div>

                    </>
                    <div className='one-input'>
                    <input placeholder='Contact Number*' name='phone' required value={data.phone} onChange={handelChange} type="number" />
                    <input placeholder='Email*' type="email" name='email' required value={data.email} onChange={handelChange} />
                    <input placeholder='Specialization Sector*' type="text" name='sector' required value={data.sector} onChange={handelChange} />

                    </div>

                    <div className='one-input'>

                    </div>
                    <div className='Attachments'>
                        <label>Attach your CV</label>
                        <div className='file-Attachments'>
                            <p>Size Limit 5 MB</p>
                            <input type="file" name='file' onChange={handelChange} />
                        </div>

                    </div>
                    <div className='one-input'>
                    <p>* If the file being uploaded is more than 5 MB, place a Dropbox link or any cloud solution in the field below</p>
                    <input placeholder='Url To Dropbox or any Cloud Solution*' type="text" name='cv_link' required value={data.cv_link} onChange={handelChange} />
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