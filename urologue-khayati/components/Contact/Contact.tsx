import React from 'react'
import style from './contact.module.css'
import { Stack } from '@mui/material'

export default function Contact() {
  return (
    <>
      <Stack marginX={"auto"}>
      <iframe
              src='https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed'
              frame-border={0}
              style={{ border: '0' }}
            ></iframe>
      </Stack>
    </>
  )
}
