import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
const Police = () => {
 return (
  <MainSectionThre>
   <Container>
    <ul>
     <h2>Introduction</h2>
     <p>JM HOLDING Company LLC, trading as JM HOLDING (“the Company”) is incorporated in Kuwait registered
      address at Kuwait City – Qibla – Safat Tower – 26 Floor.
      JM HOLDING is committed to the highest standards of the Anti-Money Laundering (AML) compliance and
      Counter-Terrorism Financing (CTF). To help the governments first and the financial services industry fight the
      funding of terrorism and money laundering activities, law requires all financial institutions to obtain, verify, and
      record information that identifies each person opening an account.
     </p>
     <h2>General</h2>
     <p>Money laundering – the process of converting funds, received from illegal activities (such as fraud, corruption,
      terrorism, etc.), into other funds or investments that look legitimate to hide or distort the real source of funds.
      The process of money laundering can be divided into three sequential stages:</p>
     <li>Placement: At this stage, funds are converted into financial instruments, such as checks, bank accounts,
      and money transfers, or can be used for purchasing high-value goods that can be resold. They can also
      be physically deposited into banks and non-bank institutions (e.g., currency exchangers). To avoid
      suspicion by the company, the launderer may as well make several deposits instead of depositing the
      whole sum at once, this form of placement is called smurfing.
      </li>
     <li>Layering: Funds are transferred or moved to other accounts and other financial instruments. It is
      performed to disguise the origin and disrupt the indication of the entity that made the multiple financial
      transactions. Moving funds around and changing in their form makes it complicated to trace the money
      being laundered.
      </li>
     <li>Integration: Funds get back into circulation as legitimate to purchase goods and services</li>
     <p>JM HOLDING adheres to the principles of Anti-Money Laundering and actively prevents any actions that aim
      or facilitate the process of legalizing of illegally gained funds. AML policy means preventing the use of the
      company’s services by criminals, with the aim of money laundering, terrorist financing or other criminal activity.
      To prevent money laundering, JM HOLDING neither accepts nor pays cash under any circumstances. The
      company reserves the right to suspend any client’s operation, which can be regarded as illegal or, may be related
      to money laundering in the opinion of the staff.
      </p>
    </ul>
   </Container>
  </MainSectionThre>
 )
}
const MainSectionThre = styled.div`
position: relative;
transform: translateY(-70px);
margin: 80px 5px 20px 5px;
`
export default Police