import React from 'react'
import style from './doctor.module.css';
import { Stack, useMediaQuery } from '@mui/material';
import { I18nContext } from '../../pages/_app';
import Link from 'next/link';

export default function Doctor() {

  const i18n = React.useContext(I18nContext);
  const mobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Stack className={style.container}>
      <Stack className={style.head} direction={mobile?'column':'row'}>
        <Stack>
          <img className={style.profile_pic} src="/assets/portrait.jpg" alt="" />
        </Stack>
        <Stack>
        <h1>Dr. Souhail KHAYATI</h1>
        <p style={{fontWeight:600}}>{i18n.welcome_to_my_private_ordination}</p>
        <p style={{fontWeight:600}}>{i18n.i_would_like_to_shortly_introduce_myself}</p>
          <ul>
            <li>{i18n.studies_in_graz_and_vienna_as_well_as_stays_abroad}</li>
            <li>{i18n.graduated_with_a_doctoral_thesis}</li>
            <li>{i18n.professional_experience}</li>
            <li>{i18n.senior_physician}</li>
            <li>{i18n.specialist_in_urology_and_andrology_at_the_lkh}</li>
            <li>{i18n.i_am_currently_still_working}</li>
          </ul>
          <br />
          <p style={{fontWeight:600}}>{i18n.memberships}</p>
          <Stack  direction={mobile?"column":"row"} sx={{gap:"20px", flexWrap:"wrap", textAlign:"center", margin:"0 auto 40px auto ", maxWidth:"800px"}} alignItems="center" justifyContent={"center"} className={style.logos}>
        
            <Stack className={style.OGU} alignItems={"center"}>
              <Link href={'https://www.uro.at/'} target='blank'>
                <img src="/assets/OGU.png" alt="ÖGU" />
              </Link>
              <p>Österreichische Gesellschaft für Urologie und Andrologie</p>
            </Stack>
            <Stack className={style.EAU} alignItems={"center"}>
              <Link href={'https://uroweb.org/'} target='blank'>
                <img src="/assets/EAU.png" alt="EAU" />
              </Link>
              <p>Eruopean Assosication of Urology</p>
            </Stack>
            <Stack className={style.AND} alignItems={"center"}>
              <Link href={'https://www.uro.at/t'} target='blank'>
                <img src="/assets/AND.svg" alt="ANDROLOGIE" />
              </Link>
              <p>Arbeitskreis für Andrologie und sexuelle Funktionsstörungen</p>
            </Stack>
            <Stack className={style.OGRO} alignItems={"center"}>
              <Link href={'http://www.oegro.com/'} target='blank'>
              <img src="/assets/OGRO.png" alt="OGRO" />
             </Link>
              <p>Österreichische Gesellschaft für Radioonkologie</p>
            </Stack>  
            <br />
          </Stack>


          <p style={{fontWeight:600, marginBottom:"10px"}}>{i18n.my_publications}</p>
          
          <p className={style.pubtitle}>Role of Residual Set-up Errors and Intrafraction Motion in the Evaluation of Planning Target Volume Margins for Prostate Cancer Radiotherapy ASTRO-2012,</p>
          <p className={style.pubauth}>T. Langsenlehner, C. Döller, P. Winkler, G. Galle, G. Tauber, S. Khayati, KS. Kapp</p>
          
          <p className={style.pubtitle}>Medium-term physical and behavioural sequelae of motor vehicle occupant injuries in children (international Journal of Control and Safety Promotion)</p>
          <p className={style.pubauth}>Souhail Khayati,Gerold Schwantzer, Randolf Hammerl, Annelie M.Weinber, Johannes M. Mayr; Vol. 12:March 2005,53-55)</p>

          <p className={style.pubtitle}>Retrospektive Morbiditäts- und Mortalitätsanalyse bei konventioneller und laparoskopischer
Cholezystektomie zur Feststellung des Stellenwertes der intraoperativen Cholangiographie</p>
          <p className={style.pubauth}>Medizinische Universität Graz Dissertationsbertreuer: Univ.-Prof. Dr. Selman Uranüs; Begutachter: Univ.-Prof.
Dr. Johann Pfeifer</p>

          <p className={style.pubtitle}>Pedestrian injuries in children (World Health Organisation, European Comission; 7th World
Conference on Injury Prevention and Safety Promotion, 2004)</p>
          <p className={style.pubauth}>Johannes M. Mayr, Andrea Berghold, Andrea Rupprt-Kohlmayr, Christian Eder, Johannes Wernig, Souhail
Khayati</p>

          <p className={style.pubtitle}>Causes and consequences of pedestrian injuries in children(European Journal of Pediatrics,
2003)</p>
          <p className={style.pubauth}>Johannes M. Mayr, Christian Eder ,Andrea Berghold, Johannes Wernig, Souhail Khayati , Andrea Ruppert-
Kohlmayr, 162:184-190, Springer Verlag)</p>

          <p className={style.pubtitle}>Vergleichende Outcome-Studie bei offenen vs. Laparoskopischen Operationen an der
Gallenblase (Comperative outcome study of open versus laparoscopic surgery of the gallbladder)</p>
          <p className={style.pubauth}>Uranüs S., Khayati S., Schreiber A.,</p>

          <p className={style.pubtitle}>Retrospektive Analyse der Leistenhernienoperationen von 1994-1999</p>
          <p className={style.pubauth}>(Salehi B., Khayati S., Schreiber A., Nagle D., Höbarth G., Uggowitzer M., * Uranüs S., Abteilung für Chirurgische
Forschung Medizinische Universität Graz )*Medizinische Universitätsklinik für Radiologie Graz) mit Teilnahme
am 42.Österreichischen Chirurgenkongress</p>
      
          </Stack>
      </Stack>
      </Stack>
    </>
  )
}
