import React from 'react'
import style from './doctor.module.css';
import { Stack, useMediaQuery } from '@mui/material';
import { I18nContext } from '../../pages/_app';

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
        <p>{i18n.welcome_to_my_private_ordination}</p>
        <p>{i18n.i_would_like_to_shortly_introduce_myself}</p>
          <ul>
            <li>{i18n.studies_in_graz_and_vienna_as_well_as_stays_abroad}</li>
            <li>{i18n.graduated_with_a_doctoral_thesis}</li>
            <li>{i18n.professional_experience}</li>
            <li>{i18n.senior_physician}</li>
            <li>{i18n.specialist_in_urology_and_andrology_at_the_lkh}</li>
            <li>{i18n.i_am_currently_still_working}</li>
          </ul>
          <p>{i18n.memberships}</p>
          <Stack direction={mobile?"column":"row"} sx={{flexWrap:"wrap"}} className={style.logos}>
        
            <Stack>
              <img src="/assets/OGU.png" alt="ÖGU" />
              <p>ÖGU (Österreichische Gesellschaft für Urologie und Andrologie)</p>
            </Stack>
            <Stack>
              <img src="/assets/EAU.png" alt="EAU" />
              <p>EAU Eruopean Assosication of Urology</p>
            </Stack>
            <Stack>
              <img src="/assets/AND.png" alt="ANDROLOGIE" />
              <p>Arbeitskreis für Andrologie und sexuelle Funktionsstörungen</p>
            </Stack>
            <Stack>
             <img src="/assets/OGRO.png" alt="OGRO" />
              <p>ÖGRO (Österreichische Gesellschaft für Radioonkologie)</p>
            </Stack>  
          </Stack>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et perferendis provident praesentium nulla vero accusamus non fugiat consectetur accusantium modi, quas possimus nisi. Eveniet temporibus voluptatibus quo dignissimos tempore. Facere, soluta sit reiciendis numquam autem voluptate nesciunt non quidem, alias sunt delectus iusto quia quaerat, deserunt vel doloremque vero optio commodi inventore minima fuga odit quisquam eum. Repudiandae fuga modi perferendis distinctio veritatis, ex nam ab molestiae et nostrum similique eligendi obcaecati maiores velit dolorum.</p>
          </Stack>
      </Stack>
      </Stack>
    </>
  )
}
