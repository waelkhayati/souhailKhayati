import React, { useRef, useState } from 'react'
import style from './contact.module.css'
import { Stack, Box, Button, TextField, useMediaQuery, AlertColor, Alert } from '@mui/material'
import { I18nContext } from '../../pages/_app'
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';

const schema = z.object({
  name: z.string().min(1, "please_enter_your_name"),
  email: z.string().min(1, "please_enter_your_email").email("invalid_email"),
  phone: z.string().min(1, "please_enter_your_phone_number"),
  message: z.string().min(1, "please_write_your_message"),
});

export default function Contact() {

  const i18n = React.useContext(I18nContext);
  const mobile = useMediaQuery('(max-width: 786px)');

 
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [snackOpen, setSnackOpen] = useState(false)

  const onSubmit = async (data: any) => {
    // Manually validate the data using the Zod schema
    try {
      schema.parse(data);
  
      // If validation succeeds, proceed with sending the email
      if (formRef.current) {
        await emailjs.sendForm('service_3im0rvj', 'template_ysueh9o', formRef.current, 'uehMzW-i4ZMBt8lLc')
          .then((result) => {
            console.log(result.text);
            reset(); // Reset the form after successful submission
            setSnackOpen(true)
          })
          .catch((error) => {
            console.log(error.text);
          });
      }
    } catch (validationError) {
      if (validationError instanceof ZodError) {
        console.log(validationError.message);
        // Handle validation error, you could update your error state here
        setError("name", {
          type: "manual",
          message: "please_enter_your_name"
        });
        setError("email", {
          type: "manual",
          message: "please_enter_your_email"
        });
        
        setError("phone", {
          type: "manual",
          message: "please_enter_your_phone_number"
        });
        setError("message", {
            type: "manual",
            message: "please_write_your_message"
        });
      }
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  return (
    <>
    
      <Box className={style.container}>
      
        <Stack className={style.mapContainer}>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.504865389473!2d15.5050420761614!3d46.99105903028104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476fb48318ca6e37%3A0x23a180f8aee5ebe1!2sMarktpl.%204%2F1%2C%208071%20Hausmannst%C3%A4tten%2C%20Austria!5e0!3m2!1sen!2stn!4v1684680200515!5m2!1sen!2stn'
            width="100%" 
            height="100%" 
            loading='lazy'
            frame-border={0}
            margin-height={0} 
            margin-width={0} 
            className={style.map}
          />
        </Stack>
        <Stack className={style.details}>
           <h1>{i18n.email}</h1>
           <p>ordination@urologe-khayati.at</p>
           <h1>{i18n.address}</h1>
           <p>Marktplatz 4, 1. Stock, 8071 Hausmannstätten</p>
           <h1>{i18n.phone}</h1>
           <p>+43 664 1441636 </p>
           <h1>{i18n.our_work_hours}</h1>
           <p >{i18n.our_work_hours_2}</p> 
        </Stack>

        
      </Box>

      <h1 className={style.title}>{i18n.make_an_appointment}</h1>

        <Stack className={style.container2}>
        {/* <Stack className={style.image}>
          <img src="/assets/ordination.jpg" alt=""/>
        </Stack> */}
        
        <form ref={formRef} className={style.form} onSubmit={handleSubmit(onSubmit)}>
        
          <TextField
            {...register("name")} id="name" name="name" label={i18n.name} variant="standard" fullWidth
            error={errors.name !== undefined}
            helperText={errors.name?.message && i18n[errors.name.message]}   
          />

          <TextField
            {...register("email")} id="email" name="email" label={i18n.email} variant="standard" fullWidth
            error={errors.email !== undefined}
            helperText={errors.email?.message && i18n[errors.email.message]}       
          />
  

          <TextField
            {...register("phone")} id="phone" name="phone" label={i18n.phone} variant="standard" fullWidth
            error={errors.phone !== undefined}
            helperText={errors.phone?.message && i18n[errors.phone.message]}
          />
       
          <TextField
            {...register("message")} id="message" name="message" label={i18n.message}
            placeholder={i18n.write_your_message_here} multiline rows={8} variant="standard" fullWidth
            error={errors.message !== undefined}
            helperText={errors.message?.message && i18n[errors.message.message]}
          />
          <Stack sx={{ marginLeft: 'auto' }}>
            <Button 
              type="submit"
              sx={{ paddingX:"35px", 
                background:"var(--primary)", 
                color:"white", 
                "&:hover": {
                  background: "transparent",
                  color: "var(--primary)",
                },}}
            >
              {i18n.send}   
            </Button>
          </Stack>

        </form>
        </Stack>

      <Stack className={style.imprint}>
          <h3>{i18n.imprint_and_legal_information}</h3>
          <p><b>Informationen und Offenlegung gemäß § 25 MedienG, §5 (1) ECG § 63 GewO und § 14 UGB</b></p><br />
          <p><b>Betreiber der Webseite: </b>Dr. Souhail Khayati</p><br />
          <p><b>Anschrift: </b>Marktplatz 4, 8071, Hausmannstätten, Österreich</p><br />
          <p><b>Kontaktdaten: </b></p>
          <p>Telefon: +43 664 1441636</p>
          <p>Email: <a href="mailto:ordination@urologe-khayati.at">ordination@urologe-khayati.at</a>  </p><br />
          <p><b>Anwendbare Rechtsvorschrift: </b> <a href="www.ris.bka.gv.at">www.ris.bka.gv.at</a></p><br />
          <p><b>Berufsbezeichnung: </b>Wahlarztordination</p><br />
          <p><b>Online Streitbeilegung: </b>Verbraucher mit einer Niederlassung in Österreich oder einem sonstigen Vertragsstaat der ODR-VO, haben die Möglichkeit bei Problemen hinsichtlich des entgeltlichen Kaufs von Waren oder Dienstleistungen die Online-Streitbelegung der Europäischen Kommission über folgende Plattform in Anspruch zu nehmen <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a></p><br />
          <p><b>Urheberrecht: </b>Die auf dieser Webseite zur Verfügung gestellten Inhalte unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Eine Verwendung oder Verbreitung von bereitgestelltem Material, bedarf der schriftlichen Zustimmung des Webseitenbetreibers.</p><br />
          <p><b>Haftungsausschluss: </b>Der Betreiber dieser Webseite hat alle Inhalte sowie ausgehende Links mit größtmöglichem Sorgfaltsmaßstab kontrolliert und ausgewählt. Trotzdem wird keine Haftung für den Inhalt externer Webseiten übernommen. Für diesen ist ausschließlich deren jeweiliger Betreiber verantwortlich. Für den Fall, dass Sie auf ausgehende Links aufmerksam werden, welche auf eine Seite mit rechtswidriger Tätigkeit oder rechtswidrigem Inhalt verweisen, ersuchen wir um entsprechenden Hinweis an die obig angeführte Email-Adresse, um betroffene Inhalt umgehend nach § 17 (2) ECG zu entfernen. </p><br />
          <p>Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, ersuchen wir auch um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen wird der Webseitenbetreiber den betroffenen Inhalt umgehend entfernen.</p>
          <br />
          <h3>Datenschutzerklärung</h3>
          <p>In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003). </p><br />
          <p>Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO. </p><br />
          <p><b>Kontakt mit uns</b></p>
          <p>Wenn Sie uns, entweder über unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren, dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.</p><br />
          <p><b>Cookies</b></p>    
          <p>Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.</p><br />
          <p><b>Google Maps</b></p>
          <p>Unsere Website verwendet Funktionen des Webkartendienstes „Google Maps“. Der Dienstanbieter dieser Funktion ist: </p>
          <p><ul><li>Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland. Tel: +353 1 543 1000</li></ul></p>
          <p>Im Zuge der Nutzung von Google Maps ist es notwendig Ihre IP-Adresse zu speichern und zu verarbeiten. Google überträgt in der Regel an einen Server in den USA und speichert die Daten dort. Die Verarbeitung geschieht durch den Diensteanbieter (oben genannt), der Betreiber dieser Homepage hat keinen Einfluss auf die Übertragung der Daten.</p><br />
          <p>Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit f (berechtigtes Interesse) der DSGVO. Die Nutzung von Google Maps erhöht die Auffindbarkeit der Orte, welche auf unserer Webseite bereitgestellt werden. </p><br />
          <p>Weitere Informationen über den Umgang mit Nutzerdaten des Diensteanbieters „Google“ können Sie der Datenschutzerklärung entnehmen: </p><br />
          <a href="https://policies.google.com/privacy?hl=de">https://policies.google.com/privacy?hl=de</a><br />
          <p>Google verarbeitet die Daten auch in den USA, hat sich jedoch dem EU-US Privacy-Shield unterworfen. </p><br />
          <a href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework </a><br />
          <p><b>Google Fonts</b></p>
          <p>Unsere Website verwendet Schriftarten von „Google Fonts“. Der Dienstanbieter dieser Funktion ist: </p>
          <p><ul><li>Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland </li></ul></p>
          <p>Tel: +353 1 543 1000 </p><br />
          <p>Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und speichert diese in den Cache. Da Sie, als Besucher der Webseite, Daten des Dienstanbieters empfangen kann Google unter Umständen Cookies auf Ihrem Rechner setzen oder analysieren. </p><br />
          <p>Die Nutzung von „Google-Fonts“ dient der Optimierung unserer Dienstleistung und der einheitlichen Darstellung von Inhalten. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. </p><br />
          <p>Weitere Informationen zu Google Fonts erhalten Sie unter folgendem Link:</p>
          <p><ul><li><a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a></li></ul></p>
          <p>Weitere Informationen über den Umgang mit Nutzerdaten von Google können Sie der Datenschutzerklärung entnehmen:</p>
          <p><ul><li><a href="https://policies.google.com/privacy?hl=de">https://policies.google.com/privacy?hl=de</a></li></ul></p>
          <p>Google verarbeitet die Daten auch in den USA, hat sich jedoch dem EU-US Privacy-Shield unterworfen.</p><br />
          <a href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</a><br />
          <p><b>Server-Log Files</b></p>
          <p>Diese Webseite und der damit verbundene Provider erhebt im Zuge der Webseitennutzung automatisch Informationen im Rahmen sogenannter „Server-Log Files“. Dies betrifft insbesondere: </p>
          <p>
          <ul>
            <li>IP-Adresse oder Hostname </li>
            <li>den verwendeten Browser </li>
            <li>Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit </li>
            <li>aufgerufene Seiten der Webseite </li>
            <li>Spracheinstellungen und Betriebssystem </li>
            <li>&quotLeaving-Page&quot (auf welcher URL hat der Benutzer die Webseite verlassen) </li>
            <li>ISP (Internet Service Provider) </li>
          </ul>
          </p>
          <p>Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder mit personenbezogenen Daten in Verbindung gebracht. </p><br />
          <p>Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu überprüfen. </p><br />
          <p><b>Ihre Rechte als Betroffener</b></p>
          <p>Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein Recht auf:</p>
          <p>
          <ul>
            <li>Auskunft</li>
            <li>Löschung der Daten</li>
            <li>Berichtigung der Daten</li>
            <li>Übertragbarkeit der Daten</li>
            <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
            <li>Einschränkung</li>
          </ul>
          </p>
          <p>Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns (<a href="mailto:ordination@urologe-khayati.at">ordination@urologe-khayati.at</a>) oder der Datenschutzbehörde zu beschweren.</p><br />
          <p><b>Sie erreichen uns unter folgenden Kontaktdaten:</b></p>
          <p><b>Webseitenbetreiber: </b>Dr. Souhail Khayati</p>
          <p><b>Telefonnummer: </b>0664 4028584</p>
          <p><b>Email: </b>ordination@urologe-khayati.at</p>
      </Stack>

      <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}
