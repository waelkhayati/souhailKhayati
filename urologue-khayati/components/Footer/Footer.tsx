import React from 'react'
import style from './footer.module.css'
import { I18nContext } from '../../pages/_app';
import { Box, Stack } from '@mui/material';

export default function Footer() {

  const i18n = React.useContext(I18nContext);

  return (
    <>
    <Box className={style.container} >
      <Stack className={style.text1}>
        <span>Dr. Souhail KHAYATI</span>
        <span>{i18n.specialist_in_urology_and_andrology}</span>
        <span>{i18n.specialist_in_radiation_oncology_and_radiation_therapy}</span>

      </Stack>
      <Stack className={style.text2}>
        <span>Marktplatz 4, 1. Stock, 8071 Hausmannstätten</span>
        <span> +43 664 575 81 10 | ordination@frauenarzt-werluschnig.at  </span>
      </Stack>
    </Box>
    
    </>
  )
}
