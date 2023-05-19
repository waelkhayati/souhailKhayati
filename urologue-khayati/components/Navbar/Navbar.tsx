import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, useMediaQuery } from '@mui/material';
import React from 'react';
import style from './navbar.module.css';
import { I18nContext } from '../../pages/_app';

type NavbarProps = {
  onPageChange: (page: string) => void;
};

export default function Navbar({ onPageChange }: NavbarProps) {
  const i18n = React.useContext(I18nContext);
  const mobile = useMediaQuery('(max-width:768px)');

  const [page, setPage] = React.useState('home');
  const handleChange = (event: SelectChangeEvent) => {
    const selectedPage = event.target.value;
    setPage(selectedPage);
    onPageChange(selectedPage);
  };

  const handleButtonClick = (selectedPage: string) => {
    setPage(selectedPage);
    onPageChange(selectedPage);
  };

  React.useEffect(() => {
    if (mobile) {
      // If in mobile view, synchronize the selected page with the local state 'page'
      // when the mobile view is resized
      onPageChange(page);
    }
  }, [mobile]);

  return (
    <>
      {!mobile ? (
        <Stack direction="row" spacing={5} justifyContent="center" className={style.container}>
          <span className={`${style.button} ${page === 'home' ? style.selected : ''}`} onClick={() => handleButtonClick('home')}>{i18n.home}</span>
          <span className={`${style.button} ${page === 'ordination' ? style.selected : ''}`} onClick={() => handleButtonClick('ordination')}>{i18n.ordination}</span>
          <span className={`${style.button} ${page === 'practice' ? style.selected : ''}`} onClick={() => handleButtonClick('practice')}>{i18n.practice}</span>
          <span className={`${style.button} ${page === 'services' ? style.selected : ''}`} onClick={() => handleButtonClick('services')}>{i18n.services}</span>
          <span className={`${style.button} ${page === 'contact' ? style.selected : ''}`} onClick={() => handleButtonClick('contact')}>{i18n.contact}</span>
        </Stack>
      ) : (
        <Stack className={style.container}>
          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <Select
              sx={{ color: "var(--primary)", fontWeight: "500" }}
              variant="standard"
              value={page}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              disableUnderline
            >
              <MenuItem value="home">{i18n.home}</MenuItem>
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
