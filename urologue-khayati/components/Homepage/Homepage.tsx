import React from 'react'
import style from './homepage.module.css'
import { Stack } from '@mui/material'

export default function Homepage() {
  return (
    <>
      <Stack>
        <img src="/assets/hero.jpg" alt="" />
        <Stack className={style.section1}>
          <h1>Ihr Frauenarzt in Hausmannstätten bei Graz</h1>
          <p>Zentral gelegen am Marktplatz von Hausmannstätten in der Nähe von Kalsdorf und Fernitz, steht Ihnen unsere Praxis in allen Fragen bzgl. der weiblichen Gesundheit zur Verfügung. Wir freuen uns auf Ihren Besuch in unserer Wahlarztpraxis!</p>
          <a href="">Mehr über unsere Praxis erfahren</a>
        </Stack>
      </Stack>
    </>
  )
}
