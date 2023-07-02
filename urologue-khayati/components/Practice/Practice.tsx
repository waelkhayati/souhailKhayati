import React from 'react'
import styles from './practice.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

export default function Practice() {
  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      className={styles.swiper}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}

    >
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/office1.jpg"/>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/office2.jpg"/>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/office3.jpg"/>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/office4.jpg"/>
      </SwiperSlide>
    </Swiper>
  </>
  )
}
