import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import { Stack } from '@mui/material';
import style from '../styles/page.module.css';

export default function Home() {
  return (
    <>
      <Stack className={style.background}>
        <Stack className={style.body}>
          <Header/>
          <Navbar/>
        </Stack>
      </Stack>
    </>
  )
}
