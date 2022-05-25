import React ,{useState} from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import {postFromData} from './../../helpers/api_helper';

const Submission = () => {
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

    const handelSubmet = (e) =>{
        e.preventDefault()
        postFromData('proposal', proposal).then(res => {
            console.log('initialData', initialData);
            setProposal(initialData)
        }).catch(err => {
            console.log(err);
        })
    }

    

  return (
    <ManiStyleSectionSubmation>
        <Container maxWidth="xl">
            <StyleSectionSubmation>
                <h1>PROPOSAL SUBMISSION</h1>
                <p>JM-HOLDING is a Venture Capital firm that looks to invest and empower entrepreneurs globally. We are excited to see entrepreneurs from many walks of life reach out to us with their ideas, and we relish the opportunity to learn more about their venture.</p>
                <p>JM-HOLDING  investment mandate is to make equity and equity-like investments in high-growth businesses with preference to invest alongside other venture capital funds. With this in mind, we have specified certain decision criteria for our investments in order to ensure the maximum likelihood of success:</p>
                <div className='item-ul'> 
                    <span>-Team – The company has a complete core team with a relevant track record.</span>
                    <span>-Operations/Financials – The company has been operating for at least two full years, currently revenue generating, and with an attractive financial history.</span>
                    <span>-Market Size –   The company’s addressable market is sufficiently large to sustain high potential startups while displaying clear growth.</span>
                    <span>-Exit Strategy – The company has a clear viable exit strategy with a reasonable expectation of a high return on investment over a 3-5 years.</span>
                </div>
                <form onSubmit={handelSubmet}>
                    <>
                    <label>Founder:</label>
                    <div className='two-input'>
                        <input placeholder='first Name*' value={proposal.Fname} id='Fname' required type="text" onChange={(e) => HandelProposal(e)}/>
                        <input placeholder='last Name*' value={proposal.Lname} id='Lname' required type="text" onChange={(e) => HandelProposal(e)} />
                    </div>
                    <div className='two-input'>
                        <input placeholder='title*' value={proposal.title} id='title' required type="text" onChange={(e) => HandelProposal(e)}/>
                        <input placeholder='Phone*' value={proposal.phone} id='phone' required type="number" onChange={(e) => HandelProposal(e)}/>
                    </div>
                    <div className='two-input'>                        
                        <input placeholder='Email*' value={proposal.email} id='email' required type="email" onChange={(e) => HandelProposal(e)}/>
                    </div>
                    </>
                    <div className='one-input'>
                    <label>Company:</label>
                    <input placeholder='Company Name*' value={proposal.Company_Name} id='Company_Name' required type="text" onChange={(e) => HandelProposal(e)} />
                    <input placeholder='Country Name*' value={proposal.country} id='country' required type="text" onChange={(e) => HandelProposal(e)}/>
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
                        <label>Date Founded *</label>
                        <div>
                            <input placeholder='dd' value={proposal.d} id='d' required onChange={(e) => HandelProposal(e)} />
                            <input placeholder='mm' value={proposal.m} id="m" required onChange={(e) => HandelProposal(e)} />
                            <input placeholder='yy' value={proposal.y} id="y" required onChange={(e) => HandelProposal(e)} />
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
                        <label>Attachments:</label>
                        <p>Kindly attach your company presentation and any relevant files</p>
                        <div className='file-Attachments'>
                            <p>Size Limit 10 MB</p>
                            <input type="file" id='file' required  onChange={(e) => HandelProposal(e)} />
                        </div>
                        <div className='file-Attachments'>
                            <p>Size Limit 10 MB</p>
                            <input type="file" id='file2' required onChange={(e) => HandelProposal(e)} />
                        </div>
                        <div className='file-Attachments'>
                            <p>Size Limit 10 MB</p>
                            <input type="file" id='file3' required onChange={(e) => HandelProposal(e)} />
                        </div>
                    </div>
                    <div className='button'>
                        <button>
                            Submit
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

@media (max-width:400px) {
    h1{
        padding: 10px 0;
        font-size: 25px;
    }

}
`
export default Submission