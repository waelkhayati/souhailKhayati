import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import { Stack } from '@mui/material';
import style from '../styles/page.module.css';
import Services from '../components/Services/Services';
import Practice from '../components/Practice/Practice';
import Ordination from '../components/Ordination/Ordination';
import Contact from '../components/Contact/Contact';
import Homepage from '../components/Homepage/Homepage';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [page, setPage] = React.useState('home');

  const renderContent = () => {
    switch (page) {
      case 'home':
        return <Homepage />;
      case 'services':
        return <Services />;
      case 'practice':
        return <Practice />;
      case 'ordination':
        return <Ordination />;
      case 'contact':
        return <Contact />;
      default:
        return <Homepage />;
    }
  };

  return (
    <>
      <Stack className={style.background}>
        <Stack className={style.body}>
          <Header/>
          <Navbar onPageChange={setPage} />
          {renderContent()}
        </Stack>
        <Footer/>
      </Stack>
    </>
  )
}
