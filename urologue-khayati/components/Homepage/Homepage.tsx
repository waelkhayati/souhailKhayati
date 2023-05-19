import React from 'react'
import style from './homepage.module.css'
import { Stack } from '@mui/material'

export default function Homepage() {
  return (
    <>
      <Stack>
        <img src="/assets/hero.jpg" alt="man_and_woman_lying_on_pillows_while_looking_at_each_other" />
        <Stack className={style.section1}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere quae animi esse, voluptas perspiciatis illum commodi mollitia possimus, dolorem odio quidem eum neque sed et! Magnam facere repellendus cum? Non magni reprehenderit maxime beatae aspernatur nam, porro officia, commodi dolores ab saepe qui iusto inventore eos quisquam hic necessitatibus.</p>
          <a href="">Lorem ipsum dolor sit amet.</a>
        </Stack>
        <Stack className={style.section2}>
          <Stack className={style.card}></Stack>
          <Stack className={style.card}></Stack>
          <Stack className={style.card}></Stack>
        </Stack>
      </Stack>
    </>
  )
}
