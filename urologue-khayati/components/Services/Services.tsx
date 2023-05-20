import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { I18nContext } from '../../pages/_app';
import style from './services.module.css';
import { Stack, useMediaQuery } from '@mui/material';
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
  
  const i18n = React.useContext(I18nContext);
  const tablet = useMediaQuery('(max-width: 1020px)');
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto" }} style={tablet?{flexDirection:"column"}:{flexDirection:"row"}}>
      <Tabs
        className={style.tabs}
        orientation={tablet?"horizontal":"vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{flexDirection:"row", ".Mui-selected":{color:"var(--primary) !important", fontWeight:"600"},  '.MuiTabs-indicator':{ backgroundColor: 'var(--primary)' }, '.MuiTabs-scrollButtons':{display:"flex"}}}
      >
        <Tab label={i18n.urology} sx={{fontWeight:400}} {...a11yProps(0)} />
        <Tab label={i18n.andrology} sx={{fontWeight:400}} {...a11yProps(1)} />
        <Tab label={i18n.radiation_oncology} sx={{fontWeight:400}} {...a11yProps(2)} />
        <Tab label={i18n.radiation_therapy} sx={{fontWeight:400}} {...a11yProps(3)} />

      </Tabs>
      <Stack className={style.content}>
      <TabPanel value={value} index={0}>
        <img className={style.image} src="/assets/urology.jpg" alt={i18n.urology} />
        <h1 className={style.title}>{i18n.urology}</h1>
        <p className={style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloremque architecto culpa earum tenetur accusamus asperiores blanditiis, illo, soluta quisquam fugit et illum veniam ab corporis aut cupiditate, distinctio magni?</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img className={style.image} src="/assets/andrology.jpg" alt={i18n.andrology} />
        <h1 className={style.title}>{i18n.andrology}</h1>
        <p className={style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloremque architecto culpa earum tenetur accusamus asperiores blanditiis, illo, soluta quisquam fugit et illum veniam ab corporis aut cupiditate, distinctio magni?</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img className={style.image} src="/assets/radio_oncology.jpg" alt={i18n.radiation_oncology} />
        <h1 className={style.title}>{i18n.radiation_oncology}</h1>
        <p className={style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloremque architecto culpa earum tenetur accusamus asperiores blanditiis, illo, soluta quisquam fugit et illum veniam ab corporis aut cupiditate, distinctio magni?</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img className={style.image} src="/assets/radio_therapy.jpg" alt={i18n.radiation_therapy} />
        <h1 className={style.title}>{i18n.radiation_therapy}</h1>
        <p className={style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloremque architecto culpa earum tenetur accusamus asperiores blanditiis, illo, soluta quisquam fugit et illum veniam ab corporis aut cupiditate, distinctio magni?</p>
      </TabPanel>
      </Stack>
    </Box>
  );
}