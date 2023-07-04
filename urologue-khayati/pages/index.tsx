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
import { useRouter } from 'next/router';
import Doctor from '../components/Doctor/Doctor';

export default function Home() {

  const router = useRouter();
  const [activePage, setActivePage] = React.useState('homepage');

  const handlePageChange = (page: string) => {
    router.push({
      pathname: router.pathname,
      query: { 
        ...router.query,
        page: page 
      },
    });
  };

  React.useEffect(() => {
    if (router.query.page) {
      setActivePage(router.query.page as string);
    }
  }, [router.query]);


  const renderContent = () => {
    switch (activePage) {
      case 'homepage':
        return <Homepage activePage={activePage} onPageChange={setActivePage} />;
      case 'services':
        return <Services />;
      case 'practice':
        return <Practice />;
      case 'doctor':
        return <Doctor />;
      case 'ordination':
        return <Ordination />;
      case 'contact':
        return <Contact />;
        
      default:
        return <Homepage activePage={activePage} onPageChange={setActivePage} />;
    }
  };

  return (
    <>
      <Stack className={style.background}>
        <Stack className={style.body}>
          <Header />
          <Navbar activePage={activePage} onPageChange={handlePageChange} />
          {renderContent()}
        </Stack>
      </Stack>
      
      <Footer />
    </>
  );
}
