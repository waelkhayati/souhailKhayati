import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css';
import CookieConsent from "react-cookie-consent";
import Contact from "../components/Contact/Contact";
import { Head } from "next/document";

export const I18nContext = createContext({} as any);
export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  
  const router = useRouter();
  const locale = router.locale;
  let i18n;

  if (locale === 'en-US') {
    i18n = require('../i18n/en-US.json');
  } else if (locale === 'fr-FR') {
    i18n = require('../i18n/fr-FR.json');
  } else {
    i18n = require('../i18n/de-DE.json');
  }
  
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <I18nContext.Provider value={i18n}>
        <Head>
        <title>Urologe Khayati</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Herzlich willkommen in der Wahlarztordination Dr. Souhail Khayati. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren." />
        <meta name="keywords" content="Khayati, Urologe Khayati, Urologie, Radiooncologie, Urooncologie, Urologie Hausmannstätten, Urologe Hausmannstätten, Andrologie, Souhail Khayati, Souhail Khayati, Graz, Urologe Graz, Urologe Graz-Umgebung, Hausmannstätten, Österreichische Gesellschaft für Urologie und Andrologie, Eruopean Assosication of Urology, Arbeitskreis für Andrologie und sexuelle Funktionsstörungen, Österreichische Gesellschaft für Radioonkologie, Urologie Praxis Graz, Facharzt für Urologie, Urologische Untersuchungen, Prostatakrebs Behandlung, Männergesundheit, Harnwegsinfektionen, Urologische Chirurgie, Blasenprobleme, Hodenerkrankungen, Nierensteinentfernung, Urologische Diagnostik, Andrologische Beratung, Prostatauntersuchung, Urologische Vorsorge, Urologische Rehabilitation, Urologische Therapieoptionen, Inkontinenzbehandlung, Urologische Praxis Hausmannstätten, Dr. Souhail Khayati, Urologe Graz-Umgebung, Urologische Gesundheitsberatung, Urologische Untersuchungsmethoden, Urologische Krankheiten, Urologische Operationen, Universitätsklinikum Graz, Med-Uni Graz, Medizinische Universität Graz, Abteilung für Urologie Med-Uni. Graz, Radioonkologie und Strahlentherapie medizinische, Universität Graz, LKH GRAZ, KAGES UROLOGIE, Urologe Graz, Graz-Umgebung, Rezüm Khayati,"/>

        <meta itemProp="image" content="assets/hero.jpg"/>
                                
        <meta name="Souhail Khayati" content="Urologe Khayati"/>
        
        <link rel="icon" href="assets/favicon.ico"  type="image/x-icon"/>

        <meta property="og:title" content="Urologe-Khayati"/>
        <meta property="og:description" content="Herzlich willkommen in der Wahlarztordination Dr. Souhail Khayati. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren."/>
        <meta property="og:image" content="assets/hero.jpg"/>
        <meta property="og:url" content="https:/urologe-khayati.at"/>

        <meta property="twitter:title" content="Urologe-Khayati"/>
        <meta property="twitter:description" content="Herzlich willkommen in der Wahlarztordination Dr. Souhail Khayati. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren."/>
        <meta property="twitter:image" content="assets/hero.jpg"/>
        <meta property="twitter:url" content="https://urologe-khayati.at"/>

        <link rel="canonical" href="https://urologe-khayati.at"/>
        <script src='https://www.google.com/recaptcha/api.js?onload=getcaptcharesponse&render=explicit' async defer></script>
        <script type="application/ld+json">
          {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Urologe Khayati",
              "description": "Herzlich willkommen in der Wahlarztordination Dr. Souhail Khayati. Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren.",
              "url": "https://urologe-khayati.at",
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
        <CookieConsent
                location="bottom"
                buttonText="Akzeptieren"
                cookieName="cookieBanner"
                style={{ background: "#1E1E1E", fontFamily:"Inter, sans-serif", fontSize: "15px" }}
              
                buttonStyle={{ background: "var(--primary)", paddingLeft:"35px", paddingRight:"35px", color: "white", fontSize: "13px", height: "50px", borderRadius:"4px"  }}
                expires={150}
              >
Wir verwenden Cookies, um Ihr Erlebnis auf unserer Website zu verbessern und Ihnen relevante Inhalte anzubieten. Indem Sie auf &quot;Akzeptieren&quot; klicken, stimmen Sie der Verwendung aller Cookies zu. Wir möchten darauf hinweisen, dass Ihre Daten bei uns sicher sind und wir sorgfältig mit ihnen umgehen. Weitere Informationen finden Sie in unserer Datenschutzrichtlinie.
        </CookieConsent>
        <Component {...pageProps} />
      </I18nContext.Provider>
    );    
  }
}
