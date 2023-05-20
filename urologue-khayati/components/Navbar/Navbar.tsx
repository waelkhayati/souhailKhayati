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
          <span className={`${style.button} ${activePage === 'homepage' ? style.selected : ''}`} onClick={() => onPageChange('homepage')}>{i18n.homepage}</span>
          <span className={`${style.button} ${activePage === 'ordination' ? style.selected : ''}`} onClick={() => onPageChange('ordination')}>{i18n.ordination}</span>
          <span className={`${style.button} ${activePage === 'practice' ? style.selected : ''}`} onClick={() => onPageChange('practice')}>{i18n.practice}</span>
          <span className={`${style.button} ${activePage === 'services' ? style.selected : ''}`} onClick={() => onPageChange('services')}>{i18n.services}</span>
          <span className={`${style.button} ${activePage === 'contact' ? style.selected : ''}`} onClick={() => onPageChange('contact')}>{i18n.contact}</span>
        </Stack>
      ) : (
        <Stack className={style.container}>
          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <Select
              sx={{ color: "var(--primary)", fontWeight: "500" }}
              variant="standard"
              value={activePage}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              disableUnderline
            >
              <MenuItem value="homepage">{i18n.homepage}</MenuItem>
              <MenuItem value="ordination">{i18n.ordination}</MenuItem>
              <MenuItem value="practice">{i18n.practice}</MenuItem>
              <MenuItem value="services">{i18n.services}</MenuItem>
              <MenuItem value="contact">{i18n.contact}</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      )}
    </>
  );
}
