import React from 'react'
import style from './homepage.module.css'
import { Stack, Box } from '@mui/material'
import Card from './Card/Card'
import { I18nContext } from '../../pages/_app'

export default function Homepage() {

  const i18n = React.useContext(I18nContext);

  return (
    <>
      <Stack>
        <img src="/assets/hero.jpg" alt="man_and_woman_lying_on_pillows_while_looking_at_each_other" />
        <Stack className={style.section1}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere quae animi esse, voluptas perspiciatis illum commodi mollitia possimus, dolorem odio quidem eum neque sed et! Magnam facere repellendus cum? Non magni reprehenderit maxime beatae aspernatur nam, porro officia, commodi dolores ab saepe qui iusto inventore eos quisquam hic necessitatibus.</p>
          <a href="">{i18n.more_about_out_practice}</a>
        </Stack>
        <Box className={style.section2}>
          <Card image={'/assets/urology.jpg'} alt={''} title={i18n.urology} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Voluptas fugiat quisquam nesciunt provident.'} link={i18n.more_about_urology} linkRef={''}/>
          <Card image={'/assets/andrology.jpg'} alt={''} title={i18n.andrology} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Voluptas fugiat quisquam nesciunt provident.'} link={i18n.more_about_andrology} linkRef={''}/>
          <Card image={'/assets/radio_oncology.jpg'} alt={''} title={i18n.radiation_oncology } description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Voluptas fugiat quisquam nesciunt provident.'} link={i18n.more_about_radiation_oncology} linkRef={''}/>
          <Card image={'/assets/radio_therapy.jpg'} alt={''} title={i18n.radiation_therapy} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Voluptas fugiat quisquam nesciunt provident.'} link={i18n.more_about_radiation_therapy} linkRef={''}/>
        </Box>
      </Stack>
    </>
  )
}
