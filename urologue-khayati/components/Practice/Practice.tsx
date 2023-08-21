import React from 'react'
import styles from './practice.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  EffectFade, Autoplay } from "swiper";
import { Stack } from '@mui/material';
import 'swiper/css/effect-fade';
import Image from 'next/image'

export default function Practice() {
  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      className={styles.swiper}
      modules={[EffectFade, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1000}
      centeredSlides={true}
      effect={'fade'}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <Image width={2000} height={450} loading='lazy' src="/assets/office1.jpg" alt='Bürobild'/>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image width={2000} height={450} loading='lazy' src="/assets/office2.jpg" alt='Bürobild'/>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image width={2000} height={450} loading='lazy' src="/assets/office3.jpg" alt='Bürobild'/>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image width={2000} height={450} loading='lazy' src="/assets/office4.jpg" alt='Bürobild'/>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image width={2000} height={450} loading='lazy' src="/assets/office5.jpg" alt='Bürobild'/>
      </SwiperSlide>
    </Swiper>
    <Stack className={styles.text}>
        <h1>Was ist ein Wahlarzt?</h1>
        <p>Als Wahlarzt für Urologie, Andrologie, Radioonkologie und Strahlentherapie stehe ich in <b>keinem Vertragsverhältnis</b> mit den gemäß §2 Kassenordinationen oder privaten Krankenkassen. In der Behandlung unterliege ich als Wahlarzt keinen von den Sozialversicherungsträgern auferlegten Einschränkungen und Kontingentierungen. Sie erhalten nach jeder Ordination eine separate Honorarnote mit Auflistung der getätigten Untersuchungen. Diese <b>Honorarnote</b> können Sie bei Ihrer Krankenkasse einreichen, wo <b>bis zu 80% der Kosten</b> ersetzt werden. Sprechen Sie mit Ihrer Krankenkassa, denn als Patient steht Ihnen nach österreichischer Rechtslage eine Kostenrückerstattung zu. Sollten Sie über eine private Krankenversicherung verfügen, können Sie je nach Vertrag den Differenzbetrag von Ihrer Zusatzversicherung rückfordern.</p>
        <br />
        <p>Warum zu einem Wahlarzt?</p>
        <p>Als Wahlarzt kann ich Ihnen jene Zeit und Aufmerksamkeit bieten, die Sie vielleicht in einer überfüllten Kassenordination nicht erhalten können. Zudem entstehen Ihnen durch eine rasche und direkte Terminvereinbarung keine unnötigen Wartezeiten. Sie können sich mit Ihren Fragen und Problemen direkt an mich wenden. Dabei ist es mir ein großes Anliegen, dass Sie sich bei mir gut aufgehoben fühlen.</p>
        <br />
        <p>Vorteile im Überblick:</p>
        <ul>
          <li>Flexible und schnelle Terminvereinbarung</li>
          <li>Keine Wartezeiten</li>
          <li>Ausreichend Zeit für vertrauliche Gespräche, Diagnostik und Therapie</li>
          <li>Persönliche Betreuung - keine Vertretungsärzte</li>
          <li>Bei Bedarf rasche Anbindung an die Uniklinik-Graz oder LKH Hochsteiermark Standort Leoben mit eventuell Organisation einer bevorstehenden Operation</li>
          <li>Vorsorge, Therapie und Nachsorge aus einer Hand</li>
        </ul>
        <br />
        <p>Benötige ich eine Überweisung?</p>
        <p>Nein. Eine Überweisung des Hausarztes oder von einem anderen Facharzt ist nicht unbedingt erforderlich. Sollten Sie jedoch eine haben, dann nehmen Sie sie bitte mit, da wertvolle Informationen zu Ihren Beschwerden gelegentlich aufgelistet sind.</p>
        <br />
        <p>Bekomme ich von Ihnen Rezepte?</p>
        <p>Selbstverständlich! Als Wahlarzt habe ich eine Rezepturbefugnis und kann Ihnen ein Wahlarztrezept mit Stempel ausstellen. Dieses können Sie wie ein Kassenrezept nach Bezahlung der Rezeptgebühr (<b>aktuell 6,85 Euro</b>) in jeder Apotheke einlösen.</p>

        <p><b>Sollten Sie noch weitere Fragen haben, so steht Ihnen das freundliche Rezeptionspersonal in der Ordination oder ich persönlich via Email gerne zur Verfügung.</b></p>
    </Stack>
  </>
  )
}
