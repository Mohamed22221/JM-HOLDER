import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import Form from './Form'
import { useTranslation } from 'react-i18next'
const SectionShips = () => {
    const { t, i18n } = useTranslation();
  return (
    
    <StyleInterShips>
        <Container maxWidth="xl">
        <div className='main-ships'>
            <h1>{t("internships.InternshipsProgram")}</h1>
            <p>{t("internships.InternshipsProgramP")}</p>
            <div className='item-ul'>
                <span>{t("internships.ProgramSpan1")}</span>
                <span>{t("internships.ProgramSpan2")}</span>
                <span>{t("internships.ProgramSpan3")}</span>

            </div>
        </div>
        <div className='main-ships'>
            <h1>{t("internships.InternshipsAdmissions")}</h1>
            <p>{t("internships.InternshipsAdmissionsP")}</p>
            <div className='item-ul'>
                <span>{t("internships.AdmissionsSpan1")}</span>
                <span>{t("internships.AdmissionsSpan2")}</span>
                <span>{t("internships.AdmissionsSpan3")}</span>

            </div>
        </div>
        <div className='main-ships'>
            <h1>{t("internships.InternshipsRegistration")}</h1>
            <div className='item-ul'>
                <span>{t("internships.RegistrationSpan1")}</span>
                <span>{t("internships.RegistrationSpan1")}</span>
            </div>
        </div>
        <div className='main-ships'>
            <h1>{t("internships.InternshipsInterviews")}</h1>
            <div className='item-ul'>
                <span>{t("internships.InterviewsSpan1")}</span>
                <span>{t("internships.InterviewsSpan2")}</span>
            </div>
        </div>
        <div className='main-ships'>
            <h1>{t("internships.InternshipsPeriod")}</h1>
            <div className='item-ul'>
                <span>{t("internships.PeriodSpan1")} </span>
                <span>{t("internships.PeriodSpan2")}</span>
            </div>
        </div>
        <div className="main-ships">
        <h1>{t("internships.ApplicantDetails")}</h1>

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