import React, { useEffect } from 'react'
import style from './homepage.module.css'
import { Stack, Box } from '@mui/material'
import Card from './Card/Card'
import { I18nContext } from '../../pages/_app'
import Services from '../Services/Services'
import Practice from '../Practice/Practice'
import { useRouter } from 'next/router'

type HomepageProps = {
  activePage: string,
  onPageChange: (page: string) => void;
}

export default function Homepage(props: HomepageProps) {

  const router = useRouter();

  const i18n = React.useContext(I18nContext);

  const [activePage, setActivePage] = React.useState('homepage');
  const navigateToServices = (tab: string) => {
    router.push({
      pathname: router.pathname,
      query: { 
        page: 'services',
        tab: tab
       },
    });
  };

  const navigateToPractice = () => {
    router.push({
      pathname: router.pathname,
      query: { 
        ...router.query,
        page: 'practice' 
      },
    });
  };


  useEffect(() => {
    if (router.query.page) {
      setActivePage(router.query.page as string);
    }
  }, [router.query]);


  return (
    <>
    {activePage === 'homepage' && (
      <Stack className={style.container}>
        <img src="/assets/hero.jpg" alt="man_and_woman_lying_on_pillows_while_looking_at_each_other"/>
        <Stack className={style.section1}>
          <h1>{i18n.welcome_to_my_private_ordination_intro}</h1>
          <p>{i18n.in_my_ordination}</p>
          <p>Ich bin Vertragsarzt für KFA-Graz, Wien. Sowie Wahlarzt für die ÖGK!</p>
          <p>{i18n.i_inform_and_advise}</p>
          <p>{i18n.operations_are_currently}</p>
          <p>{i18n.our_ordination_in_Hausmannstatten}</p>
          <p>{i18n.no_matter_what}</p>
          <span onClick={navigateToPractice}>{i18n.more_about_our_practice}</span>
        </Stack>
        <Box className={style.section2}>
          <Card 
            image={'/assets/andrology.jpg'} 
            alt={''} 
            title={i18n.urology} 
            description={i18n.urology_is_a_broad_field} 
            link={i18n.more_about_urology} 
            linkRef={() => navigateToServices('0')}
          />
          <Card 
            image={'/assets/urology.jpg'} 
            alt={''} 
            title={i18n.andrology} 
            description={i18n.Andrology_is_a_medical_specialty} 
            link={i18n.more_about_andrology} 
            linkRef={() => navigateToServices('1')}
          />
          
          <Card 
            image={'/assets/radio_therapy.jpg'} 
            alt={''} 
            title={i18n.radiation_therapy}
            description={i18n.urooncology_is_a_medical_specialty}  
            link={i18n.more_about_radiation_therapy} 
            linkRef={() => navigateToServices('2')}
          />
          <Card 
            image={'/assets/radio_oncology.jpg'} 
            alt={''}
            title={i18n.radiation_oncology } 
            description={i18n.Radiation_oncology_and_radiation_therapy_is_a_medical_specialty} 
            link={i18n.more_about_radiation_oncology} 
            linkRef={() => navigateToServices('3')}
          />
        </Box>
      </Stack>
      )}
      {activePage === 'services' && <Services />}
      {activePage === 'practice' && <Practice />}
    </>
  )
}
