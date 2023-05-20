import React, { useContext } from 'react';
import { Button, Stack, TextField, useMediaQuery } from '@mui/material';
import { I18nContext } from '../../pages/_app';
import style from './ordination.module.css';


export default function Ordination() {
  const i18n = useContext(I18nContext);
  const mediumScreen = useMediaQuery('(max-width: 1020px)');
  const mobile = useMediaQuery('(max-width: 786px)');

  return (
    <>
      <Stack direction={mobile?'column':'row'} spacing={5} className={style.container}>
        <Stack className={style.image}>
          <img src="/assets/ordination.jpg" alt=""/>
        </Stack>

        <Stack className={style.form} >

          <TextField
            required
            id="name"
            name="name"
            label={i18n.name}
            variant="standard"
            fullWidth
            className={style.input}
            sx={{
              '& .MuiInput-root:before': {
                borderColor: 'var(--tertiary) !important',
              },
              '& .MuiInput-root:after': {
                borderColor: 'var(--primary) !important',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary)',
              },
            }}
          />

          <TextField
            required
            id="email"
            name="email"
            label={i18n.email}
            variant="standard"
            fullWidth
            className={style.input}
            sx={{
              '& .MuiInput-root:before': {
                borderColor: 'var(--tertiary) !important',
              },
              '& .MuiInput-root:after': {
                borderColor: 'var(--primary) !important',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary)',
              },
            }}
          />

          <TextField
            required
            id="phone"
            name="phone"
            label={i18n.phone}
            variant="standard"
            fullWidth
            className={style.input}
            sx={{
              '& .MuiInput-root:before': {
                borderColor: 'var(--tertiary) !important',
              },
              '& .MuiInput-root:after': {
                borderColor: 'var(--primary) !important',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary)',
              },
            }}
          />

          <TextField
            required
            id="message"
            name="message"
            label={i18n.message}
            placeholder={i18n.write_your_message_here}
            multiline
            rows={8}
            variant="standard"
            fullWidth
            className={style.input}
            sx={{
              '& .MuiInput-root:before': {
                borderColor: 'var(--tertiary) !important',
              },
              '& .MuiInput-root:after': {
                borderColor: 'var(--primary) !important',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary)',
              },
            }}
          />

          <Stack sx={{ marginLeft: 'auto' }}>
            <Button 
              sx={{
                paddingX:"35px", 
                background:"var(--primary)", 
                color:"white", 
                "&:hover": {
                  background: "transparent",
                  color: "var(--primary)",
                },}}
            >
              {i18n.send}   
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
