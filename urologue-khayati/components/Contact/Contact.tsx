import React from 'react'
import style from './contact.module.css'
import { Stack, Box } from '@mui/material'
import { I18nContext } from '../../pages/_app'

export default function Contact() {

  const i18n = React.useContext(I18nContext);
  return (
    <>
      <Box className={style.container}>
        <Stack className={style.mapContainer}>
          <iframe
            src='https://maps.google.com/maps?q=manhatan&t=&z=17&ie=UTF8&iwloc=&output=embed'
            width="100%" 
            height="100%" 
            frame-border={0}
            margin-height={0} 
            margin-width={0} 
            className={style.map}
          />
        </Stack>
        <Stack className={style.details}>
           <h1>{i18n.email}</h1>
           <p>urologe-khayati@gmail.com</p>
           <h1>{i18n.address}</h1>
           <p>Marktplatz 4, 1. Stock, 8071 Hausmannstätten</p>
           <h1>{i18n.phone}</h1>
           <p>+43 664 575 81 10 </p>
           <h1>{i18n.our_work_hours}</h1>
           <p>Dienstag 08:30 Bis 18:30</p> 
           <p>Donnerstag 15:00 Bis 19:00</p> 
           <p>Freitag 8:00 Bis 12:00 Und Nach Telefonischer Vereinbarung</p> 
        </Stack>
      </Box>
    </>
  )
}
