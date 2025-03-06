import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import CooperatorCard from '../../components/Card/CooperatorCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const Cooperators = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState({
    figCount: window.innerWidth <= 370 ? 2 : window.innerWidth <= 730 ? 3 : 4,
  });
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(() => {
        return {
          figCount:
            window.innerWidth <= 370 ? 2 : window.innerWidth <= 730 ? 3 : 4,
        };
      });
    };
    window.addEventListener('resize', () => {
      handleResize();
    });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="cooperators">
      <div className="cooperators__left">
        <SectionTitle
          mainTitle="合作單位"
          subTitle="提供知識內容的專業合作單位"
          hasMore={false}
        />
        <ul className="cooperators__list">
          <div className="swiper-container">
            <Swiper
              initialSlide={1}
              modules={[Navigation]}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              spaceBetween={10}
              slidesPerView={slidesPerView.figCount}
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
                <CooperatorCard src="https://images.hahow.in/images/64a5245476a96db618614cba" />
              </SwiperSlide>
              <SwiperSlide>
                <CooperatorCard src="https://images.hahow.in/images/64a522b96781ae5210131d04" />
              </SwiperSlide>
              <SwiperSlide>
                <CooperatorCard src="https://images.hahow.in/images/64a5245476a96db618614cba" />
              </SwiperSlide>
              <SwiperSlide>
                <CooperatorCard src="https://images.hahow.in/images/64a52291d3eed826e7678747" />
              </SwiperSlide>
              <SwiperSlide>
                <CooperatorCard src="https://images.hahow.in/images/64a522b96781ae5210131d04" />
              </SwiperSlide>
              <SwiperSlide>
                <CooperatorCard src="https://images.hahow.in/images/64a52291d3eed826e7678747" />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <CooperatorCard src="https://images.hahow.in/images/64a52283a56552fe089ef588" />
          <CooperatorCard src="https://images.hahow.in/images/64a522b96781ae5210131d04" />
          <CooperatorCard src="https://images.hahow.in/images/64a5245476a96db618614cba" />
          <CooperatorCard src="https://images.hahow.in/images/64a52291d3eed826e7678747" /> */}
        </ul>
      </div>
      <div className="cooperators__right">
        <div className="cooperators__join">
          <div className="cooperators__icon">
            <i class="fa-solid fa-hat-cowboy"></i>
          </div>
          <div className="cooperators__text">
            加入 Hahow 創作者的行列<span>列 用你的知識產生影響力</span>
          </div>
          <div className="cooperators__button">我要開課</div>
        </div>
      </div>
    </div>
  );
};

export default Cooperators;
