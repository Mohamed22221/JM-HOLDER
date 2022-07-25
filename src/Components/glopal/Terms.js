import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next';

const Terms = () => {
    const { t, i18n } = useTranslation();

  return (
    
    <MainSectionThre  >
         <Container maxWidth="xl">
         <h2>Terms & Conditions</h2>
    <div className='item-terms'>
        
        <ol>
            <h3>1.{t("Terms.T-title1")}  </h3>
            <li>{t("Terms.T-li1")}</li>
            <li>{t("Terms.T-li2")}</li>
            <li>{t("Terms.T-li3")}</li>
            <li>{t("Terms.T-li4")}</li>
            <li>{t("Terms.T-li5")}</li>
            <li>{t("Terms.T-li6")}</li>
            <li>{t("Terms.T-li7")}</li>
            <li>{t("Terms.T-li8")}
            
            <ol className='smail-first-ol'>
            <li>{t("Terms.T-li-ol1")}</li>
            <li>{t("Terms.T-li-ol2")}</li>
            <li>{t("Terms.T-li-ol3")}</li>
            <li>{t("Terms.T-li-ol4")}</li>

                    <li>{t("Terms.T-li-ol5")}
                        <ul>
                        <li>{t("Terms.T-li-ol5-1")}</li>
                        <li>{t("Terms.T-li-ol5-2")}</li>
                        <li>{t("Terms.T-li-ol5-3")}</li>
                             </ul>
                    </li>
                </ol>
            
            </li>


       
        </ol>
        <p>{t("Terms.T-li-p1")}</p>

    </div>
    <div className='item-terms'>
        <ul>
            <h3>2.{t("Terms.T-title2")}  </h3>
            <p>1-{t("Terms.T-li-p2")}   </p>
            <li> {t("Terms.T-li9")}  </li>
            <li> {t("Terms.T-li10")}  </li>
            <li> {t("Terms.T-li11")}  </li>
            <li> {t("Terms.T-li12")}  </li>
            <li> {t("Terms.T-li13")}  </li>
            <li> {t("Terms.T-li14")}  </li>
            <li> {t("Terms.T-li15")}  </li>
            <li> {t("Terms.T-li16")}  </li>
            <li> {t("Terms.T-li17")}  </li>
            <li> {t("Terms.T-li18")}  </li>
            <li> {t("Terms.T-li19")}  </li>

              <li>{t("Terms.T-li20")} 
                <ul>
                    <li>{t("Terms.T-li-ul1")} </li>
                    <li>{t("Terms.T-li-ul2")} </li>
    
                </ul>
            </li>
            <li> {t("Terms.T-li21")} </li>
            <li>  {t("Terms.T-li22")}</li>
            <li>  {t("Terms.T-li23")}</li>
            <li> {t("Terms.T-li24")}</li>
            <li>  {t("Terms.T-li25")} 
                <ul>
                    <li> {t("Terms.T-li-ul3")} </li>
                    <li>{t("Terms.T-li-ul4")}</li>
                    <li> {t("Terms.T-li-ul5")} </li>
                    <li>{t("Terms.T-li-ul6")} </li>
                    <li> {t("Terms.T-li-ul7")}</li>
                    <li> {t("Terms.T-li-ul8")} </li>
                    <li> {t("Terms.T-li-ul9")} </li>
                
                </ul>
            </li>
            <li> {t("Terms.T-li26")}</li>
            <li> {t("Terms.T-li27")}</li>
            <li> {t("Terms.T-li28")}</li>
            <li> {t("Terms.T-li29")}</li>
            <li> {t("Terms.T-li30")}</li>
            <li> {t("Terms.T-li31")}</li>
            <li> {t("Terms.T-li32")}</li>
            <li> {t("Terms.T-li33")}</li>
            <li> {t("Terms.T-li34")}</li>
            <li> {t("Terms.T-li35")}</li>
            <li> {t("Terms.T-li36")}</li>
            <li> {t("Terms.T-li37")}</li>
            <li> {t("Terms.T-li38")}</li>
            <li> {t("Terms.T-li39")}</li>
            <li> {t("Terms.T-li40")}</li>
            <li> {t("Terms.T-li41")}</li>
            {/* <li> {t("Terms.T-li42")}</li> */}
            <li> {t("Terms.T-li43")}</li>
            <li> {t("Terms.T-li44")}</li>
            <li> {t("Terms.T-li45")}</li>
            <li> {t("Terms.T-li46")}</li>
            <li> {t("Terms.T-li47")}</li>
            <li> {t("Terms.T-li48")}</li>
            <li> {t("Terms.T-li49")}</li>
            <li> {t("Terms.T-li50")}</li>
            <li> {t("Terms.T-li51")}</li>
            <li> {t("Terms.T-li52")}</li>
            <li> {t("Terms.T-li53")}</li>
            <li> {t("Terms.T-li54")}</li>
            <li> {t("Terms.T-li55")}</li>
            <li> {t("Terms.T-li56")}</li>
            <li> {t("Terms.T-li57")}</li>
            <li> {t("Terms.T-li58")}</li>
            <li> {t("Terms.T-li59")}</li>
            <li> {t("Terms.T-li60")}</li>
            <li> {t("Terms.T-li61")}</li>
 
         
        </ul>
    </div>
        </Container>

    </MainSectionThre>

    
  )
}
const MainSectionThre= styled.div`

position: relative;
transform: translateY(-70px);
margin: 80px 5px 20px 5px;
li,p{
    color: white;
}
.item-terms{
    padding: 10px 0;


}
h3{
    color: var(--primary-color);
}
h2{
    text-align: center;
    color: var(--primary-color);
}
ol,ul{
    li{
        margin: 5px 0 0 20px;
        color: white;
    }
}

.smail-first-ol{
    padding: 10px;
    li{
        margin-left: 30px;
        color: white;
    }
}

`
export default Terms