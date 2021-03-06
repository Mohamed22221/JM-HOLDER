import React ,{useState, Fragment} from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import {postFromData} from './../../helpers/api_helper';
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

const Submission = () => {
    const [t , i18] = useTranslation()
    const initialData = {
        Fname: "",
        Lname: "",
        title: "",
        email: "",
        phone: "",
        Company_Name: "",
        country: "",
        cindustry: "",
        d: "",
        m: "",
        y: "",
        stage: "",
        file: null,
        file2: null,
        file3: null,
    }
    const [proposal, setProposal] = useState(initialData)
    const [loading, setLoading] = useState(false)
  
    const HandelProposal = async (e) =>{
        const data = {...proposal}
        if (e.target.type === 'file') {
            const Reader = new FileReader()
            Reader.onload = () =>{
                if (Reader.readyState === 2) {
                    setProposal({...proposal , [e.target.id]: e.target.files[0] }) 
                     //console.log('e.target.files[0]', e.target.files[0]);
                     console.log('e.target.files[02]', Reader.result);
                }
            }
             //console.log('dfkldfdfkljkl', [e.target.id], e.target.files[0]);
             

            Reader.readAsDataURL(e.target.files[0])
            
        } else {
            data[e.target.id] = e.target.value
            setProposal(data)
        }
    }

    const handelSubmit = (e) =>{
        e.preventDefault()
        console.log('TEst');
        setLoading(true)
        postFromData('proposal', proposal).then(res => {
            setProposal(initialData)
            toast.dark("sent successfully!");
            setLoading(false);
        }).catch(err => {
            setLoading(false);

        })
    }

    

  return (
    <ManiStyleSectionSubmation>
        <Container maxWidth="xl">
            <StyleSectionSubmation>
                <h1>{t("proposals.titleProposalsSup")}</h1>
                <p>{t("proposals.disProposalsP1")}</p>
                <p>{t("proposals.disProposalsP2")}</p>
                <div className='item-ul'> 
                    <span>{t("proposals.disProposalsSpan1")}</span>
                    <span>{t("proposals.disProposalsSpan2")}</span>
                    <span>{t("proposals.disProposalsSpan3")}</span>
                    <span>{t("proposals.disProposalsSpan4")}</span>
                </div>
                <form onSubmit={handelSubmit}>
                    <>
                    <label>{t("proposals.titleLapelFounder")}</label>
                    <div className='two-input'>
                        <input placeholder={t("proposals.placeholderFounderfirstName")} value={proposal.Fname} id='Fname' required type="text" onChange={(e) => HandelProposal(e)}/>
                        <input placeholder={t("proposals.placeholderFounderlastName")} value={proposal.Lname} id='Lname' required type="text" onChange={(e) => HandelProposal(e)} />
                    </div>
                    <div className='two-input'>
                        <input placeholder={t("proposals.placeholderFounderTitle")} value={proposal.title} id='title' required type="text" onChange={(e) => HandelProposal(e)}/>
                        <input placeholder={t("proposals.placeholderFounderPhone")} value={proposal.phone} id='phone' required type="number" onChange={(e) => HandelProposal(e)}/>
                    </div>
                    <div className='two-input'>                        
                        <input placeholder={t("proposals.placeholderFounderEmail")} value={proposal.email} id='email' required type="email" onChange={(e) => HandelProposal(e)}/>
                    </div>
                    </>
                    <div className='one-input'>
                    <label>{t("proposals.titleLapelCompany")}</label>
                    <input placeholder={t("proposals.placeholderCompanyCompanyName")} value={proposal.Company_Name} id='Company_Name' required type="text" onChange={(e) => HandelProposal(e)} />
                    <input placeholder={t("proposals.placeholderCompanyCountryName")} value={proposal.country} id='country' required type="text" onChange={(e) => HandelProposal(e)}/>
                    <select name="cindustry" className="form-control" value={proposal.cindustry} id='cindustry' required onChange={(e) => HandelProposal(e)}>
						<option hidden="">Industry *</option>
						<option value="Artificial Intelligence ">Artificial Intelligence  </option>
						<option value="Biotechnology">Biotechnology </option>
						<option value="E-Commerce">E-commerce</option>
						<option value="EduTech">EduTech</option>
						<option value="Employment service">Employment service</option>
						<option value="Fintech">Fintech </option>
						<option value="Hardware">Hardware </option>
						<option value="Healthcare">Healthcare </option>
						<option value="Logistics and Transportation">Logistics and Transportation </option>
						<option value="Marketplace">Marketplace </option>
						<option value="Media and Entertainment">Media and Entertainment </option>
						<option value="Mobile Application">Mobile Application </option>
						<option value="On Demand">On Demand </option>
						<option value="Retail">Retail </option>
						<option value="Security">Security </option>
						<option value="Software">Software </option>
						<option value="Trave /Tourism">Trave /Tourism </option>
						<option value="VR/AR">VR/AR </option>
						<option value="Other">Other </option>
					</select>
                    </div>
                    <div className='date-input'>
                        <label>{t("proposals.titleLapelDate")}</label>
                        <div>
                            <input placeholder={t("proposals.titleLapelDatedd")}value={proposal.d} id='d' required onChange={(e) => HandelProposal(e)} />
                            <input placeholder={t("proposals.titleDatemm")} value={proposal.m} id="m" required onChange={(e) => HandelProposal(e)} />
                            <input placeholder={t("proposals.titleDateyy")} value={proposal.y} id="y" required onChange={(e) => HandelProposal(e)} />
                        </div>
                    </div>
                    <div className='one-input'>
                    <select name="stage" className="form-control" value={proposal.stage} id='stage' required onChange={(e) => HandelProposal(e)}>
						<option hidden="" >Stage *</option>
						<option value="Seed Capital">Seed Capital </option>
						<option value="Startup Capital">Startup Capital</option>
						<option value="Early stage Capital">Early Stage Capital</option>
						<option value="Expansion Capital">Expansion Capital</option>
						<option value="Bridge/ Pre IPO Stage">Bridge/ Pre IPO Stage</option>
					</select>
                    </div>
                    <div className='Attachments'>
                        <label>{t("proposals.Attachments")}</label>
                        <p>{t("proposals.AttachmentsP")}</p>
                        <div className='file-Attachments'>
                            <p>{t("proposals.AttachmentsLimit")}</p>
                            <input type="file" id='file' required  onChange={(e) => HandelProposal(e)} />
                        </div>
                        <div className='file-Attachments'>
                            <p>{t("proposals.AttachmentsLimit")}</p>
                            <input type="file" id='file2' required onChange={(e) => HandelProposal(e)} />
                        </div>
                        <div className='file-Attachments'>
                            <p>{t("proposals.AttachmentsLimit")}</p>
                            <input type="file" id='file3' required onChange={(e) => HandelProposal(e)} />
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
            </StyleSectionSubmation>
        </Container>
    </ManiStyleSectionSubmation>
  )
}
const ManiStyleSectionSubmation = styled.div`
position: relative;
height: 100%;
transform: translateY(-70px);
z-index: 10;
background-color: var(--font);
color: white;
`
const StyleSectionSubmation = styled.div`
margin: 0px 0 10px 0 ;
    p{
        margin-top: 10px;
        padding: 10px 0;
        color: white;
    }
    .item-ul{
        display: flex;
        flex-direction: column;
        color: white;
        span{
            padding: 5px;
            &::first-letter{
                font-size: 20px;
                padding: 0 8px;
                font-weight: bold;
            }
        }
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
        .date-input{
            margin: 18px 0;

            input{
                padding: 5px 0px 5px 10px;
                margin: 10px 4px 0px 9px;
                @media (max-width:500px) {
                width: 80px;
            }
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

@media (max-width:400px) {
    h1{
        padding: 10px 0;
        font-size: 25px;
    }

}
`
export default Submission