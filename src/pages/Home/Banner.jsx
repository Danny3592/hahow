import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 900 ? 1 : 1.5
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 900 ? 1 : 1.5);
    };

    window.addEventListener('resize',()=>{
      
      handleResize()
    } );

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);









  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <header className="header">
      <div className="swiper-container">
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          spaceBetween={20}
          slidesPerView={slidesPerView}


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
                src="https://images.hahow.in/images/67c0751d2f273b08a7b53cdc?width=1400"
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
                src="https://images.hahow.in/images/67c074ffc023bd2c13b0a63e?width=1400"
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
                src="https://images.hahow.in/images/67c6b6c41dddb9ff6f5eaab6?width=1400"
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
