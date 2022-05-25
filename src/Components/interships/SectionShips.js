import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import Form from './Form'
const SectionShips = () => {
  return (
    <StyleInterShips>
        <Container maxWidth="xl">
        <div className='main-ships'>
            <h1>Program Overview</h1>
            <p>The Jm-Holding Venture Analyst Internship Program is a six week internship program that provides selected individuals with an intensive introduction to Venture Capital. As a member of our team you will gain a holistic understanding of sector mapping, deal origination, diligence and execution to value creation in portfolio companies. You will work collaboratively with our team to evaluate and execute investment opportunities and drive growth within our portfolio companies. To gain full experience, during the internship you will be sent out to one or more of our local portfolio companies, exposing you to start-ups filled with go-getters and people who are willing to go the extra mile.</p>
            <div className='item-ul'>
                <span>-Applicant must be a fresh graduate with a GPA above a 3.0 (or equivalent)</span>
                <span>-The program is conduced twice yearly, January & July</span>
                <span>-Two interns will be chosen per internship program</span>

            </div>
        </div>
        <div className='main-ships'>
            <h1>Admissions Criteria</h1>
            <p>Candidates are reviewed against a set of criterions and compared amongst all candidates. Criteria includes but is not limited to:</p>
            <div className='item-ul'>
                <span>-Reputation and quality of university(ies) attended</span>
                <span>-Degree(s) obtained & academic performance</span>
                <span>-Interview</span>

            </div>
        </div>
        <div className='main-ships'>
            <h1>Registration</h1>
            <div className='item-ul'>
                <span>-December 1 – December 31 for the January Program </span>
                <span>-June 1 – June 30 for the July Program</span>
            </div>
        </div>
        <div className='main-ships'>
            <h1>Interviews</h1>
            <div className='item-ul'>
                <span>-January 2 – January 13 for the January Program  </span>
                <span>-July 3 – July 14 for the July Program</span>
            </div>
        </div>
        <div className='main-ships'>
            <h1>Internship Period</h1>
            <div className='item-ul'>
                <span>-January 16 – February 24 for the January Program  </span>
                <span>-July 17 – August 25 for the July Program</span>
            </div>
        </div>
        <div className="main-ships">
        <h1>Applicant Details</h1>

        </div>
        <Form />
        </Container>
    </StyleInterShips>
  )
}
const StyleInterShips = styled.div`
position: relative;
height: 100%;
transform: translateY(-70px);
z-index: 10;
padding: 30px 0;
color: white;
.main-ships{
    padding: 5px 0;
    h1{
        padding: px 0;
    }
    p{
        margin: 20px 0;
    }
    .item-ul{
        display: flex;
        flex-direction: column;
        span{
            ::first-letter{
                font-size: 20px;
                padding: 0 10px;
                font-weight: bold;
            }
        }
    }
}
`
export default SectionShips