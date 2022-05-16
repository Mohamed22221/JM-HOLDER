import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'


const Submission = () => {
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

`
const StyleSectionSubmation = styled.div`
margin: 30px 0 10px 0 ;
    p{
        margin-top: 10px;
        padding: 10px 0;
    }
    .item-ul{
        display: flex;
        flex-direction: column;
        span{
            padding: 10px;
            &::first-letter{
                font-size: 30px;
                margin: 15px;
                
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