'use client';

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Scrollbar,
} from 'swiper/modules';
import Image from 'next/image';
import FirstBanner from '@/images/banner/first.jpg';
import SecondBanner from '@/images/banner/second.jpg';
import ThirdBanner from '@/images/banner/third.jpg';

import styles from './heroSlider.module.scss';

export const HeroSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSliderChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        scrollbar={{ draggable: true }}
        style={{ width: '100%', height: 400, borderRadius: '2rem' }}
        autoplay={{ delay: 4000 }}
        onSlideChange={handleSliderChange}
      >
        <SwiperSlide>
          <Image
            className={styles.slide__img}
            src={SecondBanner}
            width={1080}
            height={500}
            alt='airMax banner'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.slide__img}
            src={FirstBanner}
            width={1080}
            height={500}
            alt='airMax banner'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ThirdBanner}
            className={styles.slide__img}
            width={1080}
            height={500}
            alt='Video Banner'
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.slider__circles}>
        <button
          className={`${styles.slider__circle} ${
            activeIndex === 0 ? styles.active : ''
          }`}
        ></button>
        <button
          className={`${styles.slider__circle} ${
            activeIndex === 1 ? styles.active : ''
          }`}
        ></button>
        <button
          className={`${styles.slider__circle} ${
            activeIndex === 2 ? styles.active : ''
          }`}
        ></button>
        {/* <button
          className={`${styles.slider__circle} ${
            activeIndex === 3 ? styles.active : ''
          }`}
        ></button> */}
      </div>
    </div>
  );
};
