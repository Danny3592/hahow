import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <header className="header">
      <div className="swiper-container">
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          spaceBetween={20}
          slidesPerView={1.5}
          loop={true}
          centeredSlides={true}
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
            console.log(swiper.realIndex);

            setActiveIndex(swiper.realIndex);
          }}
          className="custom-swiper"
        >
          <SwiperSlide>
            <div
              className={`${
                activeIndex === 1 ? 'active' : ''
              } custom-swiper__img-box`}
            >
              <img
                src="https://images.hahow.in/images/67ac43d128ce26aec20f3f47?width=1400"
                alt="course"
                className="custom-swiper__img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-swiper__img-box">
              <img
                src="https://images.hahow.in/images/67ac43d128ce26aec20f3f47?width=1400"
                alt="course"
                className="custom-swiper__img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-swiper__img-box">
              <img
                src="https://images.hahow.in/images/67ac43d128ce26aec20f3f47?width=1400"
                alt="course"
                className="custom-swiper__img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-swiper__img-box">
              <img
                src="https://images.hahow.in/images/67ac43d128ce26aec20f3f47?width=1400"
                alt="course"
                className="custom-swiper__img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-swiper__img-box">
              <img
                src="https://images.hahow.in/images/67ac43d128ce26aec20f3f47?width=1400"
                alt="course"
                className="custom-swiper__img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="custom-swiper__img-box">
              <img
                src="https://images.hahow.in/images/67ac43d128ce26aec20f3f47?width=1400"
                alt="course"
                className="custom-swiper__img"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div ref={prevRef} className="custom-swiper__custom--prev">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div ref={nextRef} className="custom-swiper__custom--next">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </header>
  );
};

export default Banner;
