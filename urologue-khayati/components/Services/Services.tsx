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
          <li><b>Allgemeine Vorsorge und Beratung</b></li>
          <li><b>Vorhautprobleme</b></li>
          <ul>
            <li>Entzündung</li>
            <li>Verengung</li>
            <li>Frenulum breve</li>
          </ul>
          <li><b>Harnanalyse</b></li>
          <ul>
            <li>Harnwegsinfektion</li>
            <li>Blut im Harn</li>
          </ul>
          <li><b>Prostatauntersuchung</b></li>
          <ul>
            <li>Infektion</li>
            <li>Vorsorge</li>
            <li>Nachsorge</li>
          </ul>
          <li><b>Ultraschalldiagnostik</b></li>
          <ul>
            <li>Niere und Nebenniere</li>
            <li>Harnleiter</li>
            <li>Harnblase</li>
            <li>Prostata</li>
            <li>Harnröhre</li>
            <li>Hoden und Nebenhoden</li>
          </ul>
          <li><b>Uroflow:</b> Harnflussmessungen bei Blasentleerungsstörungen</li>
          <li><b>Zystoskopie:</b> Blasenspiegelung mittels modernsten, schonenden, flexiblen Geräten</li>
          <li><b>Inkontinenzabklärung bei unwillkürlichem Harnverlust</b></li>
          <li><b>Wechsel von Blasenkatheter und suprapubischem Katheter</b></li>
          <li><b>Entfernung von Harnleiterschienen</b></li>
          <li><b>Operationen derzeit nur in der Uniklink-Graz</b></li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img className={style.image} src="/assets/urology.jpg" alt={i18n.andrology} />
        <h1 className={style.title}>{i18n.andrology}</h1>
        <ul className={style.description}>
          <li>Spermiogrammabklärung</li>
          <li>Hormondiagnostik</li>
          <li>Unterstützung bei Kinderwunsch</li>
          <li>Vasektomie</li>
          <li>Potenzprobleme und Sexualität</li>
          <li>Vorzeitiger Samenerguss</li>
          <li>Potenzvorsorge / Ernährungsberatung</li>
          <li>Peniskrümmung</li>
        </ul>          
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img className={style.image} src="/assets/radio_oncology.jpg" alt={i18n.radiation_oncology} />
        <h1 className={style.title}>{i18n.radiation_oncology}</h1>
        <ul className={style.description}>
          <li>Als ehemaliger Oberarzt für Radioonkologie und Strahlentherapie am Uniklinikum Graz tehe ich Ihnen sowohl vor, während als auch nach durchgeführter Strahlentherapie zur Verfügung. Eine fachkompetente Beratung trägt zum Erfolg einer Strahlentherapie bei. Ebenso ist eine adäquate medikamentöse Ergänzungstherapie, wenn sie fachkompetent eingesetzt wird, maßgebend für den Strahlentherapieerfolg.</li>
          <li>Die Strahlentherapie befasst sich nicht nur mit bösartigen Tumoren, sondern auch mit gutartigen Veränderungen, wie Fersenspor, Tennisarm usw. Hier biete ich Ihnen ebenfalls meine Expertise an und weise Sie dementsprechend zu.</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img className={style.image} src="/assets/radio_therapy.jpg" alt={i18n.radiation_therapy} />
        <h1 className={style.title}>{i18n.radiation_therapy}</h1>
        <ul className={style.description}>
        <li><b>Urooknologische Diagnostik, Therapie und Nachsorge bei Tumoren von:</b></li>
          <ul>
            <li>Niere und Nierenbecken</li>
            <li>Harnleiter</li>
            <li>Blase</li>
            <li>Penis</li>
            <li>Hoden</li>
          </ul>
          <li>Krebs ist ein weltweites Gesundheitsproblem. Gemäß Angaben der WHO erkranken jährlich etwa 14 Millionen Menschen an Krebs. In Österreich sind es ungefähr 40.000 Patienten jährlich.</li>
          <li>Rund ein Drittel aller bösartigen Tumorerkrankungen betreffen den urologischen Bereich. Während Urologen in der Regel die primäre Anlaufstelle für die Diagnose und Therapie urologischer Tumorerkrankungen darstellen, sind auch andere medizinische Fachgebiete eng in den Behandlungsprozess eingebunden. Hierzu gehören Onkologen, Strahlentherapeuten, Pathologen und Radiologen. In den sogenannten Tumorboards, an denen ich regelmäßig teilnehme, werden interdisziplinär an der Uniklinik-Graz alle individuellen Patientenfälle besprochen und die optimale Therapiestrategie für Sie entwickelt.</li>
          <li>Die Uroonkologie wurde in den letzten Jahren dank der rasanten Entwicklung im Bereich der Diagnostik (z.B. multiparametrische Prostata MRT und PSMA-PET), sowie der Einführung neuer Medikamente (z.B. Immuntherapie, NHT) zu einem entscheidenden Bestandteil der Urologie. Heutzutage profitieren viele Patienten von dieser Früherkennung, welche eine erfolgreiche gezielte, sowie minimalinvasive Therapie ermöglicht.</li>
          <li>Als Facharzt für sowohl Urologie, als auch Radioonkologie können Sie sich bei mir jederzeit eine Zweit-/Drittmeinung einholen.</li>
        </ul>
      </TabPanel>
    </Stack>
  </Box>
  );
}