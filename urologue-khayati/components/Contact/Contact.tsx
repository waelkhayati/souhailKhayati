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
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.504865389473!2d15.5050420761614!3d46.99105903028104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476fb48318ca6e37%3A0x23a180f8aee5ebe1!2sMarktpl.%204%2F1%2C%208071%20Hausmannst%C3%A4tten%2C%20Austria!5e0!3m2!1sen!2stn!4v1684680200515!5m2!1sen!2stn'
            width="100%" 
            height="100%" 
            loading='lazy'
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
           <p>+43 000 000 00 00 </p>
           <h1>{i18n.our_work_hours}</h1>
           <p style={{maxWidth:"400px"}}>{i18n.our_work_hours_2}</p> 
        </Stack>
      </Box>

      <Stack className={style.imprint}>
          <h3>{i18n.imprint_and_legal_information}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda obcaecati natus tempora sunt architecto tempore dolor commodi, corporis eius necessitatibus. Ipsum labore dolores repudiandae eveniet animi, exercitationem ab quos, ducimus accusantium maiores quis magni atque soluta fugiat dicta expedita nemo ex laboriosam! Sit, perferendis ipsa consequatur, laboriosam vel cumque alias cupiditate maxime voluptates accusantium repellendus dolores placeat assumenda dicta nostrum velit? Quos quo quod atque quisquam harum vitae ipsa aspernatur minus sequi facere excepturi quas cupiditate dolorum sapiente ea assumenda quidem, corporis tenetur esse nihil soluta modi vel saepe! Perferendis sapiente veritatis pariatur dolorum nulla. Praesentium dicta quia eligendi labore?</p>
      </Stack>
    </>
  )
}
