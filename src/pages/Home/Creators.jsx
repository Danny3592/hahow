import { useEffect, useRef, useState } from 'react';
import SectionTitle from './../../components/SectionTitle';
import CreatorsCard from '../../components/Card/CreatorsCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Creators = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="creators">
      <SectionTitle
        mainTitle="熱門創作者"
        subTitle="備受喜愛的知識分享者們"
        hasMore={false}
      />

      <div className="creators__cards">
        <div className="swiper-container">
          <Swiper
            initialSlide={0}
            modules={[Navigation]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            spaceBetween={50}
            slidesPerView={4}
            loop={true}
            centeredSlides={false}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="custom-swiper"
          >
            <SwiperSlide>
              <CreatorsCard
                classProps="creators"
                creator="莫彩曦｜知名YouTuber"
                text="Hailey
              莫彩曦深愛台灣，將文化融入美國，讓更多人沉浸在台灣的美麗與魅力中。"
                coruseName="跟 YouTuber 莫彩曦學美國道地的說話習慣"
                index={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CreatorsCard
                classProps="creators"
                creator="王梓沅｜創勝文教共同創辦人"
                text="擁有哥倫比亞、賓州大學語言學習科學背景，改革英語教育，協助台灣學生有效學習英文技巧。"
                coruseName="王梓沅的 3D 英文筆記術：打造最強「說」「寫」英語資料庫"
                index={3}
              />
            </SwiperSlide>

            <SwiperSlide>
            <CreatorsCard
                classProps="creators"
                creator="王梓沅｜創勝文教共同創辦人"
                text="擁有哥倫比亞、賓州大學語言學習科學背景，改革英語教育，協助台灣學生有效學習英文技巧。"
                coruseName="王梓沅的 3D 英文筆記術：打造最強「說」「寫」英語資料庫"
                index={3}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CreatorsCard
                classProps="creators"
                creator="莫彩曦｜知名YouTuber"
                text="Hailey
              莫彩曦深愛台灣，將文化融入美國，讓更多人沉浸在台灣的美麗與魅力中。"
                coruseName="跟 YouTuber 莫彩曦學美國道地的說話習慣"
                index={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CreatorsCard
                classProps="creators"
                creator="吳哲宇｜生成式藝術家"
                text="墨雨設計創辦人，紐約大學數位媒體碩士，帶領學生進入互動與藝術領域的無限可能。"
                coruseName="動畫互動網頁程式入門 (HTML/CSS/JS)"
                index={2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CreatorsCard
                classProps="creators"
                creator="王梓沅｜創勝文教共同創辦人"
                text="擁有哥倫比亞、賓州大學語言學習科學背景，改革英語教育，協助台灣學生有效學習英文技巧。"
                coruseName="王梓沅的 3D 英文筆記術：打造最強「說」「寫」英語資料庫"
                index={3}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Creators;
