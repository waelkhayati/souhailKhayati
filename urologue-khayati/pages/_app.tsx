import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css';

export const I18nContext = createContext({} as any);
export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  
  let i18n;

  if (useRouter().locale === 'en-US') {  
    i18n = require('../i18n/en-US.json');
  } else if (useRouter().locale === 'fr-FR') {
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
        <Component {...pageProps} />
      </I18nContext.Provider>
    );    
  }
}
