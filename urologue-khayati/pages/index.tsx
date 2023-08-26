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
import Head from 'next/head';

export default function Home() {

  const router = useRouter();
  const [activePage, setActivePage] = React.useState('home');

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
      case 'home':
        return <Homepage activePage={activePage} onPageChange={setActivePage} />;
      case 'leistungen':
        return <Services />;
      case 'wahlarzt':
        return <Practice />;
      case 'arzt':
        return <Doctor />;
      // case 'ordination':
      //   return <Ordination />;
      case 'kontakt':
        return <Contact />;
        
      default:
        return <Homepage activePage={activePage} onPageChange={setActivePage} />;
    }
  };

  return (
    <>
      <Head>
        <title>Urologe Khayati</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Herzlich willkommen in der Wahlarztordination Dr. Souhail Khayati. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren." />
        <meta name="keywords" content="Khayati, Urologe Khayati, Urologie, Radiooncologie, Urooncologie, Urologie Hausmannstätten, Urologe Hausmannstätten, Andrologie, Souhail Khayati, Souhail Khayati, Graz, Urologe Graz, Urologe Graz-Umgebung, Hausmannstätten, Österreichische Gesellschaft für Urologie und Andrologie, Eruopean Assosication of Urology, Arbeitskreis für Andrologie und sexuelle Funktionsstörungen, Österreichische Gesellschaft für Radioonkologie, Urologie Praxis Graz, Facharzt für Urologie, Urologische Untersuchungen, Prostatakrebs Behandlung, Männergesundheit, Harnwegsinfektionen, Urologische Chirurgie, Blasenprobleme, Hodenerkrankungen, Nierensteinentfernung, Urologische Diagnostik, Andrologische Beratung, Prostatauntersuchung, Urologische Vorsorge, Urologische Rehabilitation, Urologische Therapieoptionen, Inkontinenzbehandlung, Urologische Praxis Hausmannstätten, Dr. Souhail Khayati, Urologe Graz-Umgebung, Urologische Gesundheitsberatung, Urologische Untersuchungsmethoden, Urologische Krankheiten, Urologische Operationen, Universitätsklinikum Graz, Med-Uni Graz, Medizinische Universität Graz, Abteilung für Urologie Med-Uni. Graz, Radioonkologie und Strahlentherapie medizinische, Universität Graz, LKH GRAZ, KAGES UROLOGIE, Urologe Graz, Graz-Umgebung, Rezüm Khayati,"
                                      />

        <meta itemProp="image" content="assets/hero.jpg"/>
                                
        <meta name="Souhail Khayati" content="Urologe Khayati"/>
        
        <link rel="icon" href="assets/favicon.ico"  type="image/x-icon"/>

        <meta property="og:title" content="Urologe-Khayati"/>
        <meta property="og:description" content="Herzlich willkommen in der Wahlarztordination Dr. Souhail Khayati. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren."/>
        <meta property="og:image" content="assets/hero.jpg"/>
        <meta property="og:url" content="https://www.urologe-khayati.at"/>

        <meta property="twitter:title" content="Urologe-Khayati"/>
        <meta property="twitter:description" content="Herzlich willkommen in der Wahlarztordination Dr. Souhail Khayati. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren."/>
        <meta property="twitter:image" content="assets/hero.jpg"/>
        <meta property="twitter:url" content="https://www.urologe-khayati.at"/>

        <link rel="canonical" href="https://www.urologe-khayati.at"/>
        <script src='https://www.google.com/recaptcha/api.js?onload=getcaptcharesponse&render=explicit' async defer></script>
        <script type="application/ld+json">
          {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Urologe Khayati",
              "description": "Herzlich willkommen in der Wahlarztordination Dr. Souhail Khayati. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren.",
              "url": "https://www.urologe-khayati.at",
              "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Marktpl. 4/1",
                  "addressLocality": "Hausmannstätten",
                  "postalCode": "8071",
                  "addressCountry": "Austria"
              },
              "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+43 664 1441636",
                  "contactType": "Ordination"
              },
              "openingHours": "Freitag und Mittwoch von 16h bis 20h"
          })}
      </script>



      </Head>
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
