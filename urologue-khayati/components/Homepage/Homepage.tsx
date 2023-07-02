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
        <img src="/assets/hero.jpg" alt="man_and_woman_lying_on_pillows_while_looking_at_each_other" />
        <Stack className={style.section1}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere quae animi esse, voluptas perspiciatis illum commodi mollitia possimus, dolorem odio quidem eum neque sed et! Magnam facere repellendus cum? Non magni reprehenderit maxime beatae aspernatur nam, porro officia, commodi dolores ab saepe qui iusto inventore eos quisquam hic necessitatibus.</p>
          <span onClick={navigateToPractice}>{i18n.more_about_our_practice}</span>
        </Stack>
        <Box className={style.section2}>
          <Card 
            image={'/assets/andrology.jpg'} 
            alt={''} 
            title={i18n.urology} 
            description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Voluptas fugiat quisquam nesciunt provident.'} 
            link={i18n.more_about_urology} 
            linkRef={() => navigateToServices('0')}
          />
          <Card 
            image={'/assets/urology.jpg'} 
            alt={''} 
            title={i18n.andrology} 
            description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Voluptas fugiat quisquam nesciunt provident.'} 
            link={i18n.more_about_andrology} 
            linkRef={() => navigateToServices('1')}
          />
          <Card 
            image={'/assets/radio_oncology.jpg'} 
            alt={''}
            title={i18n.radiation_oncology } 
            description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Voluptas fugiat quisquam nesciunt provident.'} 
            link={i18n.more_about_radiation_oncology} 
            linkRef={() => navigateToServices('2')}
          />
          <Card 
            image={'/assets/radio_therapy.jpg'} 
            alt={''} 
            title={i18n.radiation_therapy} 
            description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, atque. Voluptas fugiat quisquam nesciunt provident.'} 
            link={i18n.more_about_radiation_therapy} 
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
