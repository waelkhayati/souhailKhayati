import React, { use, useEffect } from 'react'
import { Box, Stack, useMediaQuery } from '@mui/material'
import style from './header.module.css'
import { I18nContext } from '../../pages/_app'
import { useRouter } from 'next/router';

export default function Header() {

  const i18n = React.useContext(I18nContext);
  const mobile = useMediaQuery('(max-width:786px)');
  const router = useRouter();

  const navigateToHomepage = () => {
    router.push({
      pathname: router.pathname,
      query: { 
        ...router.query,
        page: 'homepage' 
      },
    });
  };


  return (
    <>
      <Box className={style.container}>
        <Stack direction={mobile?"column":"row"} className={style.logo} onClick={navigateToHomepage}>
          <img src="assets/Logo.svg" alt="logo" className={style.image}/>
          <Stack direction="column" marginY={"auto"}>
             <Stack direction="row" spacing={1} className={style.name}>
              <span className={style.text}>UROLOGE KHAYATI</span>
            </Stack>
            <span className={style.tagline}>{i18n.specialist_in_urology_and_andrology}</span>
            <span className={style.tagline}>{i18n.specialist_in_radiation_oncology_and_radiation_therapy}</span>
          </Stack>
        </Stack>
        <Stack>
          <span className={style.h1}>{i18n.our_work_hours}</span>
          <span className={style.h2}>Dienstag 08:30 bis 18:30</span>
          <span className={style.h2}>Donnerstag 15:00 bis 19:00</span>
          <span className={style.h2}>Freitag 8:00 bis 12:00 und nach telefonischer Vereinbarung</span>
        </Stack>
      </Box>
    </>
  )
}
