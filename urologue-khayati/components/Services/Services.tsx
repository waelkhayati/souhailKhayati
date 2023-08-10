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
        <p>Die Urologie ist ein breites Fachgebiet, das sich mit der Diagnose, Behandlung und
Prävention einer Vielzahl von urologischen Erkrankungen bei Menschen jeden Alters und
Geschlechts befasst. Urologen übernehmen eine Vielzahl von Aufgaben, darunter die
Behandlung von Harnwegsinfektionen, Harnsteinleiden, Blasenentleerungsstörungen,
Blasen- und Harnröhrenentzündungen, Harninkontinenz und Harnverhaltung. Sie sind auch
spezialisiert auf die Diagnose, Überwachung und Behandlung von Prostataerkrankungen wie
gutartiger Prostatavergrößerung (Benigne Prostatahyperplasie) und Prostatakrebs. Zu den
gängigen Krankheiten und Problemen, mit denen sich Urologen befassen, gehören
Nierensteine, Blasenentzündungen, Harninkontinenz, erektile Dysfunktion, Unfruchtbarkeit,
sexuell übertragbare Infektionen (STIs), Harnröhrenstrikturen und verschiedene Formen von
Krebs wie Nierenkrebs, Blasenkrebs, Hodenkrebs und Prostatakrebs. Die Urologie behandelt
auch urologische Erkrankungen bei Frauen, einschließlich Harnwegsinfektionen,
Blasenentleerungsstörungen, Harninkontinenz und Beckenbodenproblemen. Darüber hinaus
kümmern sich Urologen um angeborene urologische Anomalien, Harnwegsinfektionen,
Bettnässen und andere Harnwegsstörungen bei Kindern. Ich setze mich dafür ein, dass
meine Patienten bestmöglich informiert sind und gemeinsam treffen wir Entscheidungen
über ihre Gesundheitsversorgung, um die bestmöglichen Ergebnisse zu erzielen. Ich setze
mich dafür ein, dass meine Patienten bestmöglich informiert sind und gemeinsam treffen wir
Entscheidungen über ihre Gesundheitsversorgung, um die bestmöglichen Ergebnisse zu
erzielen. Die Zufriedenheit und das Vertrauen meiner Patienten sind für mich von großer
Bedeutung, und ich bin dankbar, dass ich ihnen helfen kann, ihre urologischen Anliegen
bestmöglich zu bewältigen.</p>
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
        <p>Die Andrologie ist ein medizinisches Fachgebiet, das sich mit Erkrankungen und Störungen
des männlichen Fortpflanzungssystems befasst. Als Facharzt für Andrologie kümmere ich
mich in meiner Privatordination um verschiedene Aspekte der männlichen Gesundheit.</p>
        <p>
        Grundsätzlich beschäftigt sich die Andrologie mit der Diagnose, Behandlung und Prävention
von Erkrankungen und Problemen im Zusammenhang mit dem männlichen
Fortpflanzungssystem. Dies umfasst die Untersuchung und Behandlung von Erkrankungen
der Hoden, Nebenhoden, Samenleiter, Prostata, Penis und der hormonellen Regulation.
        </p>

        <p>Als Androloge übernehme ich eine Vielzahl von Aufgaben. Ich diagnostiziere und behandle
Erkrankungen wie Unfruchtbarkeit, erektile Dysfunktion (Impotenz), vorzeitigen
Samenerguss (ejaculatio praecox), hormonelle Störungen und
Spermiogramuntersuchungen/Ejakulatkultur bei Verdacht auf Infektionen. Darüber hinaus
berate ich meine Patienten zu den verschiedenen Optionen der Familienplanung und
unterstütze sie bei der Bewältigung von sexuellen und reproduktiven Problemen.</p>

<p>Ein Schwerpunkt meiner Tätigkeit liegt auf dem Bereich Kinderwunsch. Ich führe gründliche
Untersuchungen durch, um mögliche Ursachen der Unfruchtbarkeit zu identifizieren, und
entwickle personalisierte Behandlungspläne, die den individuellen Bedürfnissen und
Wünschen meiner Patienten gerecht werden. Bei konkreten Behandlungsplänen weise ich

meine Patienten nach einem ausführlichem Beratungsgespräch zu qualifizierten
Kinderwunschzentren</p>

<p>In meiner Privatordination schaffe ich eine vertrauensvolle Umgebung, in der meine
Patienten und Ihre Partner offen mit mir über diese intimen Themen sprechen können. Ich
biete eine sorgfältige Diagnosestellung an und entwickle individuell abgestimmte
Behandlungspläne, die sowohl medizinische als auch psychologische Aspekte
berücksichtigen.</p>

<p>Ich nehme mir Zeit, um ihre Anliegen zu verstehen, ihre Fragen zu beantworten und sie
umfassend über ihre Diagnose und Behandlungsoptionen aufzuklären. Die vertrauensvolle
Beziehung zu meinen Patienten steht im Mittelpunkt meiner Arbeit, und ich setze mich dafür
ein, dass sie sich bei mir wohl und gut betreut fühlen.</p>

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
<p>Die Uro-Onkologie ist ein medizinisches Fachgebiet, das sich mit der Diagnose, Behandlung
und Prävention von Tumorerkrankungen im urologischen Bereich befasst. Als Urologe und
Radioonkologe in meiner Privatordination stelle ich Ihnen meine umfangreiche Erfahrung in
der Uro-Onkologie.</p>
<p>Die Uro-Onkologie beschäftigt sich mit der Behandlung von bösartigen Tumoren, die das
Harn-Ableitungssystem betreffen, einschließlich der Nieren, Harnleiter, Blase und Harnröhre.
Sie umfasst auch die Diagnose und Behandlung von Krebserkrankungen der Prostata, Hoden
und des Penis.</p>
<p>In der Uro-Onkologie übernehme ich verschiedene Aufgabengebiete. Dazu gehören die
Durchführung von Diagnosetests wie bildgebende Verfahren, Biopsien und
Blutuntersuchungen, um die Art und das Stadium des Tumors zu bestimmen. Ich berate
meine Patienten über die verschiedenen Behandlungsoptionen, darunter chirurgische
Eingriffe, Strahlentherapie, Chemotherapie und immunbasierte Therapien. Zusätzlich
betreue ich meine Patienten engmaschig und übernehme die Tumorboard-Zuweisungen,
sowie die Besprechung der Ergebnisse. Während der Behandlung überwache ich zudem
genaustens den Verlauf der Erkrankung.</p>
<p>Bei tumorösen Erkrankungen des Harn-Ableitungssystems wie Nierenkrebs, Blasenkrebs und
Harnröhrenkrebs besteht die Behandlung in der Regel aus einer Kombination von
chirurgischen Eingriffen, Strahlentherapie und Chemotherapie. Moderne minimalinvasive
Operationstechniken, wie die laparoskopische oder roboterassistierte Chirurgie, ermöglichen
in der Regel eine potenzerhaltende (Prostatakarzinom) präzisere Entfernung von Tumoren
und eine schnellere Genesung.</p>
<p>Prostatakrebs ist eine der häufigsten Krebserkrankungen bei Männern. Die Behandlung kann
je nach Stadium des Krebses eine aktive Überwachung, Operation, Strahlentherapie,

Hormontherapie oder neue medikamentöse Behandlungen wie zielgerichtete Therapien
umfassen.</p>
<p>Hodenkrebs tritt vor allem bei jungen Männern auf und wird in der Regel durch eine
Operation entfernt. Je nach Stadium und Risikofaktoren kann eine anschließende
Chemotherapie, seltener Strahlentherapie, erforderlich sein.</p>
<p>Peniskrebs ist eine seltene Erkrankung, bei der eine chirurgische Entfernung des Tumors in
Kombination mit Lymphknotenentfernung oder Strahlentherapie durchgeführt werden kann.</p>
<p>Als Urologe und Radioonkologe in meiner Privatordination ist es mir ein besonderes
Anliegen, diese beiden Fächer miteinander zu kombinieren und meinen Patienten mit
Tumorerkrankungen des Urogenitalsystems eine einfühlsame und umfassende Betreuung zu
bieten. Ich unterstütze sie bei der Entscheidungsfindung für die am besten geeignete
Behandlungsmethode, erkläre ihnen die möglichen Risiken und Nebenwirkungen und stehe
ihnen während des gesamten Behandlungsprozesses zur Seite.</p>
<p>Die Uro-Onkologie ist ein sich ständig weiterentwickelndes Fachgebiet, und ich halte mich
über neue medikamentöse Behandlungen und innovative Techniken auf dem Laufenden, um
meinen Patienten die bestmöglichen Ergebnisse zu bieten. Gemeinsam mit meinem Team
arbeite ich daran, den Fortschritt in der Uro-Onkologie zu nutzen und die Lebensqualität
meiner Patienten zu verbessern.</p>


        <ul className={style.description}>
          <li>{i18n.as_a_former_senior_physician}</li>
          <li>{i18n.radiation_therapy_is_not_only_concerned}</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img className={style.image} src="/assets/radio_therapy.jpg" alt={i18n.radiation_therapy} />
        <h1 className={style.title}>{i18n.radiation_therapy}</h1>
        <p>Die Radioonkologie und Strahlentherapie ist ein medizinisches Fachgebiet, das sich mit der
Anwendung von Strahlung zur Behandlung von gut- und bösartigen Tumorerkrankungen
befasst. Als Radioonkologe und Urologe in meiner Privatordination bin ich mit den Aufgaben
und Fortschritten in der Radioonkologie vertraut.</p>
        <p>Die Strahlentherapie findet Anwendung sowohl bei der Behandlung bestimmter gutartiger
Tumoren als auch bei spezifischen gutartigen Veränderungen. Beispiele für gutartige
Tumoren, die mittels Strahlentherapie behandelt werden können, sind Hirntumoren wie
Meningeome, Akustikusneurinome und Hypophysenadenome sowie gutartige Tumoren der
Schilddrüse wie Struma nodosa oder Autonomie-Knoten. In solchen Fällen zielt die
Strahlentherapie darauf ab, das Tumorwachstum zu kontrollieren und Beschwerden zu
lindern, während das umliegende gesunde Gewebe geschont wird. Die Behandlungspläne
werden individuell auf den Patienten und den spezifischen Tumor abgestimmt.</p>
        <p>Zusätzlich kann die Strahlentherapie auch bei bestimmten gutartigen Veränderungen
eingesetzt werden, um Symptome zu lindern und die Fortschreitung der Erkrankung zu
kontrollieren. Beispiele dafür sind die Behandlung von Fersensporn zur Reduzierung von
Entzündungen und Schmerzen, die Anwendung bei Omartrose (einer Form der
Schultergelenksarthrose) zur Entzündungshemmung und Schmerzlinderung sowie die
Behandlung der Dupuytren-Kontraktur, bei der verdicktes Bindegewebe in der Handfläche zu

Fingerkontrakturen führt. Hierbei zielt die Strahlentherapie darauf ab, die Verhärtungen zu
reduzieren und die Handfunktion zu verbessern.</p>
        <p>Ein weiteres Anwendungsgebiet der Strahlentherapie betrifft die Behandlung der Induratio
penis plastica (IPP) oder Peyronie-Krankheit. Diese gutartige Erkrankung des Penis, bei der es
zu einer Verhärtung des Bindegewebes im Schwellkörper kommt, führt zu einer Krümmung
des Penis während der Erektion und kann Schmerzen sowie sexuelle Funktionsstörungen
verursachen. Die gezielte Bestrahlung des betroffenen Gewebes kann dabei helfen, die
Verhärtungen zu reduzieren, Entzündungen zu verringern, die Krümmung zu verbessern
sowie Schmerzen zu lindern und die sexuelle Funktion wiederherzustellen. Die
Strahlentherapie bei IPP wird in der Regel über mehrere Wochen in einer Serie von
Bestrahlungen durchgeführt, wobei die genaue Dosis und Anzahl der Behandlungen
individuell angepasst werden, um optimale Ergebnisse zu erzielen.</p>
        <p>Die Radioonkologie wird bei einer Vielzahl von Tumorerkrankungen eingesetzt, darunter
Prostatakrebs, Blasenkrebs, Lungenkrebs, Brustkrebs und Hirntumoren (Stereotaxie). Sie
kann als alleinige Behandlungsmethode oder in Kombination mit chirurgischen Eingriffen
und/oder medikamentöser Therapie eingesetzt werden.</p>
        <p>Moderne Bestrahlungsmethoden wie Protonen- und Schwerionentherapie ermöglichen eine
präzisere und gezieltere Bestrahlung von Tumoren, wodurch das umliegende gesunde
Gewebe noch besser geschont werden kann. Diese fortschrittlichen Techniken kommen vor
allem bei Tumoren in empfindlichen Bereichen wie dem Gehirn oder bei Kindern zum
Einsatz.</p>
        <p>Die Radioonkologie arbeitet eng mit anderen Fachgebieten zusammen, wie der Urologie. In
einigen Fällen kann eine chirurgische Entfernung des Tumors vor oder nach der
Strahlentherapie erforderlich sein. Zusätzlich werden neue medikamentöse Behandlungen
wie zielgerichtete Therapien und Immuntherapien in Kombination mit der Strahlentherapie
eingesetzt, um die Wirksamkeit der Behandlung zu erhöhen.</p>
        <p>Als Radioonkologe und Urologe ist es mir ein besonderes Anliegen, meinen Patienten mit
Tumorerkrankungen eine umfassende Betreuung zu bieten. Ich arbeite eng mit
Radioonkologen und Strahlenzentren zusammen und weise Sie als meinen Patienten
individuell zu den entsprechenden Zentren zu, um Ihnen die bestmögliche Therapieoption zu
gewährleisten. Zudem betreue ich Sie während des gesamten Behandlungsprozesses. Mein
Ziel ist es Ihnen eine vertrauensvolle und unterstützende Umgebung vor, während und nach
der Behandlung, sowie im Sinne der Nachsorge zu bieten, in der sie sich wohl und gut
betreut fühlen.</p>
        <p>Die Radioonkologie hat in den letzten Jahren große Fortschritte gemacht, und ich halte mich
über die neuesten Entwicklungen und Technologien auf dem Laufenden, um meinen
Patienten Zugang zu modernsten und effektiven Behandlungsmethoden zu bieten.
Gemeinsam mit meinem Team arbeite ich daran, die Lebensqualität meiner Patienten zu
verbessern und ihnen Hoffnung und Heilung zu schenken.</p>

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