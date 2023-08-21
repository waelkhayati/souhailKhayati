import React from 'react'
import style from './card.module.css'
import { Stack } from '@mui/material'
import Image from 'next/image'

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
            <Image width={420} height={200} src={props.image} alt={props.alt} loading='lazy'/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span onClick={props.linkRef}>{props.link}</span>
        </Stack>
    </>
  )
}
