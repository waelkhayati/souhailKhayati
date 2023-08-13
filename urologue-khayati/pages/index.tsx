import React from 'react';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import Contact from '../components/Contact/Contact';
import Doctor from '../components/Doctor/Doctor';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Homepage from '../components/Homepage/Homepage';
import Navbar from '../components/Navbar/Navbar';
import Practice from '../components/Practice/Practice';
import Services from '../components/Services/Services';
import style from '../styles/page.module.css';

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
      // case 'ordination':
      //   return <Ordination />;
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
