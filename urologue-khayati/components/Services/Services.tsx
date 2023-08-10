import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { I18nContext } from '../../pages/_app';
import style from './services.module.css';
import { Stack, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const mobile = useMediaQuery('(max-width: 786px)');

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={mobile?{pt: 3}:{p:3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  
  const router = useRouter();
  const i18n = React.useContext(I18nContext);
  const tablet = useMediaQuery('(max-width: 1020px)');
  const [value, setValue] = React.useState(0);


  React.useEffect(() => {
    const queryTab = new URLSearchParams(window.location.search).get('tab');
    if (queryTab) {
      setValue(parseInt(queryTab));
    }
  }, []);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const page = "services";
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        tab: newValue,
        page: page,
      },
    });
  };


  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto', pb:'40px' }} style={tablet ? { flexDirection: 'column' } : { flexDirection: 'row' }}>
    <Tabs
      className={style.tabs}
      orientation={tablet ? 'horizontal' : 'vertical'}
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{
        flexDirection: 'row',
        '.Mui-selected': { color: 'var(--primary) !important', fontWeight: '600' },
        '.MuiTabs-indicator': { backgroundColor: 'var(--primary)' },
        '.MuiTabs-scrollButtons': { display: 'flex' },
      }}
    >
      <Tab label={i18n.urology} sx={{ fontWeight: 400 }} {...a11yProps(0)} />
      <Tab label={i18n.andrology} sx={{ fontWeight: 400 }} {...a11yProps(1)} />
      <Tab label={i18n.radiation_oncology} sx={{ fontWeight: 400 }} {...a11yProps(2)} />
      <Tab label={i18n.radiation_therapy} sx={{ fontWeight: 400 }} {...a11yProps(3)} />
     
    </Tabs>
    <Stack className={style.content}>
      <TabPanel value={value} index={0}>
        <img className={style.image} src="/assets/andrology.jpg" alt={i18n.urology} />
        <h1 className={style.title}>{i18n.urology}</h1>
        <ul className={style.description}>
          <li><b>{i18n.general_preventive_care_and_advice}</b></li>
          <li><b>{i18n.foreskin_problems}</b></li>
          <ul>
            <li>{i18n.inflammation}</li>
            <li>{i18n.narrowing}</li>
            <li>{i18n.short_cut}</li>
          </ul>
          <li><b>{i18n.urinalysis}</b></li>
          <ul>
            <li>{i18n.urinary_tract_infection}</li>
            <li>{i18n.blood_in_the_urine}</li>
          </ul>
          <li><b>{i18n.Prostate_check}</b></li>
          <ul>
            <li>{i18n.infection}</li>
            <li>{i18n.prevention}</li>
            <li>{i18n.aftercare}</li>
          </ul>
          <li><b>{i18n.ultrasound_diagnostics}</b></li>
          <ul>
            <li>{i18n.kidney_and_adrenal_gland}</li>
            <li>{i18n.ureter}</li>
            <li>{i18n.bladder}</li>
            <li>{i18n.prostate}</li>
            <li>{i18n.urethra}</li>
            <li>{i18n.testicles_and_epididymis}</li>
          </ul>
          <li><b>{i18n.uroflow}:</b> {i18n.measurement_of_urinary_flow_in_bladder_emptying_disorders}</li>
          <li><b>{i18n.cystoscopy}:</b> {i18n.cystoscopy_using_the_most_modern_gentle_flexible_devices}</li>
          <li><b>{i18n.incontinence_assessment_for_involuntary_urine_loss}</b></li>
          <li><b>{i18n.change_of_urinary_catheter_and_suprapubic_catheter}</b></li>
          <li><b>{i18n.removal_of_ureteral_stents}</b></li>
          <li><b>{i18n.operations_currently_only_in_the_Uniklinik_Graz}</b></li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img className={style.image} src="/assets/urology.jpg" alt={i18n.andrology} />
        <h1 className={style.title}>{i18n.andrology}</h1>
        <ul className={style.description}>
          <li>{i18n.semen_analysis}</li>
          <li>{i18n.hormone_diagnostics}</li>
          <li>{i18n.unterstützung_bei_kinderwunsch}</li>
          <li>{i18n.vasectomy}</li>
          <li>{i18n.potency_problems_and_sexuality}</li>
          <li>{i18n.premature_ejaculation}</li>
          <li>{i18n.potency_prevention_nutritional_advice}</li>
          <li>{i18n.penile_curvature}</li>
        </ul>          
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img className={style.image} src="/assets/radio_oncology.jpg" alt={i18n.radiation_oncology} />
        <h1 className={style.title}>{i18n.radiation_oncology}</h1>
        <ul className={style.description}>
          <li>{i18n.as_a_former_senior_physician}</li>
          <li>{i18n.radiation_therapy_is_not_only_concerned}</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img className={style.image} src="/assets/radio_therapy.jpg" alt={i18n.radiation_therapy} />
        <h1 className={style.title}>{i18n.radiation_therapy}</h1>
        <ul className={style.description}>
        <li><b>{i18n.uroocnological_diagnostics_therapy_and_followup_care_for_tumors}:</b></li>
          <ul>
            <li>{i18n.kidney_and_renal_pelvis}</li>
            <li>{i18n.ureter}</li>
            <li>{i18n.bladder}</li>
            <li>{i18n.penis}</li>
            <li>{i18n.testicles}</li>
          </ul>
          <li>{i18n.cancer_is_a_global_health_issue}</li>
          <li>{i18n.approximately_one_third_of_all}</li>
          <li>{i18n.in_recent_years}</li>
          <li>{i18n.as_a_specialist_in_both_urology_and_radiooncology}</li>
        </ul>
      </TabPanel>
      
    </Stack>
  </Box>
  );
}