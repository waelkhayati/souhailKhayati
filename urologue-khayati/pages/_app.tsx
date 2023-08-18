import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css';
import CookieConsent from "react-cookie-consent";


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
        <CookieConsent
                location="bottom"
                buttonText="Akzeptieren"
                cookieName="cookieBanner"
                style={{ background: "#1E1E1E", fontFamily:"Inter, sans-serif", fontSize: "15px" }}
              
                buttonStyle={{ background: "var(--primary)", paddingLeft:"35px", paddingRight:"35px", color: "white", fontSize: "13px", height: "50px" }}
                expires={150}
              >
Wir verwenden Cookies, um Ihr Erlebnis auf unserer Website zu verbessern und Ihnen relevante Inhalte anzubieten. Indem Sie auf &quot;Akzeptieren&quot; klicken, stimmen Sie der Verwendung aller Cookies zu. Wir möchten darauf hinweisen, dass Ihre Daten bei uns sicher sind und wir sorgfältig mit ihnen umgehen. Weitere Informationen finden Sie in unserer Datenschutzrichtlinie.
              </CookieConsent>
        <Component {...pageProps} />
      </I18nContext.Provider>
    );    
  }
}
