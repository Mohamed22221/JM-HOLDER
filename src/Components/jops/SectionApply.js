import React, {useState, Fragment} from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import {postFromData} from './../../helpers/api_helper';
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next'
const SectionApply = () => {
    const { t, i18n } = useTranslation();
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        postFromData('jobs', data).then(res => {
            setData(initialState)
            toast.dark("sent successfully!");
            setLoading(false);
        }).catch(err => {
            setLoading(false);

        })

       
    }
  return (
    <StyleApplay>
         <Container maxWidth="xl">
         <form onSubmit={handleSubmit}>
           <h2>{t("jops.joinH2")}</h2>
                    <>
                    <label>{t("jops.labelFounder")}</label>
                    <div className='two-input'>
                        <input placeholder={t("jops.founderfirstName")} name='Fname' required value={data.Fname} onChange={handelChange} type="text" />
                        <input placeholder={t("jops.founderlastName")} name='Lname' required value={data.Lname} onChange={handelChange} type="text" />
                    </div>

                    </>
                    <div className='one-input'>
                    <input placeholder={t("jops.founderContactNumber")} name='phone' required value={data.phone} onChange={handelChange} type="number" />
                    <input placeholder={t("jops.founderEmail")} type="email" name='email' required value={data.email} onChange={handelChange} />
                    <input placeholder={t("jops.founderSpecialization")} type="text" name='sector' required value={data.sector} onChange={handelChange} />

                    </div>

                    <div className='one-input'>

                    </div>
                    <div className='Attachments'>
                        <label>{t("jops.labelAttach")}</label>
                        <div className='file-Attachments'>
                            <p>{t("jops.founderLimit")}</p>
                            <input type="file" name='file' onChange={handelChange} />
                        </div>

                    </div>
                    <div className='one-input'>
                    <p>{t("jops.jopsP")}</p>
                    <input placeholder={t("jops.jopsPlaceholder")} type="text" name='cv_link' required value={data.cv_link} onChange={handelChange} />
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
color: white;
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
export default SectionApply