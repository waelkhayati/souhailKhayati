import React from 'react'
import style from './card.module.css'
import { Box, Stack } from '@mui/material'

type CardProps = {
    image: string,
    alt: string,
    title: string,
    description: string,
    link: string,
    linkRef: () => void;
}

export default function Card(props: CardProps) {
  return (
    <>
        <Stack className={style.container} >
            <img src={props.image} alt={props.alt}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span onClick={props.linkRef}>{props.link}</span>
        </Stack>
    </>
  )
}
