import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import style from './navbar.module.css'
import { I18nContext } from '../../pages/_app';


export default function Navbar() {

    const i18n = React.useContext(I18nContext);  

    const mobile = useMediaQuery('(max-width:768px)');
    
    const [page, setPage] = React.useState('home');
    const handleChange = (event: SelectChangeEvent) => {
        setPage(event.target.value);
      };
     
    return (
    <>
    {!mobile ?
        <Stack direction="row" spacing={5} justifyContent="center" className={style.container}>
            <span className={style.button}>{i18n.home}</span>
            <span className={style.button}>{i18n.ordination}</span>
            <span className={style.button}>{i18n.practice}</span>
            <span className={style.button}>{i18n.services}</span>
            <span className={style.button}>{i18n.contact}</span>
        </Stack>
        :
        <Stack className={style.container}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                variant="standard"
                value={page}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label',  }}
            >
                <MenuItem value="home">{i18n.home}</MenuItem>
                <MenuItem value="ordination">{i18n.ordination}</MenuItem>
                <MenuItem value="practice">{i18n.practice}</MenuItem>
                <MenuItem value="services">{i18n.services}</MenuItem>
                <MenuItem value="contact">{i18n.contact}</MenuItem>
            </Select>
      </FormControl>
      </Stack>
      }
    </>
  )
}
