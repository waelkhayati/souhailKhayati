import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, useMediaQuery } from '@mui/material';
import React from 'react';
import style from './navbar.module.css';
import { I18nContext } from '../../pages/_app';

type NavbarProps = {
  activePage: string;
  onPageChange: (page: string) => void;
};

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  
  const i18n = React.useContext(I18nContext);
  const mobile = useMediaQuery('(max-width:768px)');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedPage = event.target.value;
    onPageChange(selectedPage);
  };



  return (
    <>
      {!mobile ? (
        <Stack direction="row" spacing={5} justifyContent="center" className={style.container}>
          <span className={`${style.button} ${activePage === 'home' ? style.selected : ''}`} onClick={() => onPageChange('home')}>{i18n.homepage}</span>
          {/* <span className={`${style.button} ${activePage === 'ordination' ? style.selected : ''}`} onClick={() => onPageChange('ordination')}>{i18n.ordination}</span> */}
          <span className={`${style.button} ${activePage === 'wahlarzt' ? style.selected : ''}`} onClick={() => onPageChange('wahlarzt')}>{i18n.practice}</span>
          <span className={`${style.button} ${activePage === 'arzt' ? style.selected : ''}`} onClick={() => onPageChange('arzt')}>{i18n.doctor}</span>
          <span className={`${style.button} ${activePage === 'leistungen' ? style.selected : ''}`} onClick={() => onPageChange('leistungen')}>{i18n.services}</span>
          <span className={`${style.button} ${activePage === 'kontakt' ? style.selected : ''}`} onClick={() => onPageChange('kontakt')}>{i18n.contact}</span>
        </Stack>
      ) : (
        <Stack className={style.container}>
          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <Select
              sx={{ color: "white", fontWeight: "500", margin: "0 auto" }}
              variant="standard"
              value={activePage}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              disableUnderline
            >
              <MenuItem value="home">{i18n['homepage'].toUpperCase()}</MenuItem>
              {/* <MenuItem value="ordination">{i18n['ordination'].toUpperCase()}</MenuItem> */}
              <MenuItem value="wahlarzt">{i18n['practice'].toUpperCase()}</MenuItem>
              <MenuItem value="arzt">{i18n['doctor'].toUpperCase()}</MenuItem>
              <MenuItem value="leistungen">{i18n['services'].toUpperCase()}</MenuItem>
              <MenuItem value="kontakt">{i18n['contact'].toUpperCase()}</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      )}
    </>
  );
}
