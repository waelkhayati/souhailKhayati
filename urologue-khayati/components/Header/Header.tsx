import React from 'react'
import { Box, Stack, useMediaQuery } from '@mui/material'
import style from './header.module.css'
import { I18nContext } from '../../pages/_app'
import { useRouter } from 'next/router';
import Image from 'next/image'

export default function Header() {

  const i18n = React.useContext(I18nContext);
  const mobile = useMediaQuery('(max-width:786px)');
  const router = useRouter();

  const navigateToHomepage = () => {
    router.push({
      pathname: router.pathname,
      query: { 
        ...router.query,
        page: 'home' 
      },
    });
  };


  return (
    <>
      <Box className={style.container}>
        <Stack direction={mobile?"column":"row"} className={style.logo} onClick={navigateToHomepage}>
          <Image height={100} width={100} src="assets/Logo.svg" alt="logo" className={style.image}/>
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
          <span className={style.h2}>{i18n.our_work_hours_2}</span>
        </Stack>
      </Box>
    </>
  )
}
