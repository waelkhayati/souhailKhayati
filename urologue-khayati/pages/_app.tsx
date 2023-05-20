import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css';

export const I18nContext = createContext({} as any);
export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  const i18n = useRouter().locale === 'en-US' ? require('../i18n/en-US.json') : require('../i18n/de-DE.json');

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
