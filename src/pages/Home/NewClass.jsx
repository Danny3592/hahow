import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import NewClassCard from '../../components/Card/NewClassCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const NewClass = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [slidesPerView, setSlidesPerView] = useState({
    figCount:
      (window.innerWidth <= 930 && window.innerWidth >= 665 ? 2 : 3) ||
      window.innerWidth <= 665 ||
      1,
  });

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(() => {
        let figCount = window.innerWidth <= 930 ? 2 : 3;
        if (window.innerWidth <= 465) {
          figCount = 1;
        }

        return {
          figCount: figCount,
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
    <section className="new-class">
      <div className="new-class-box">
        <SectionTitle
          mainTitle="最新募資課程"
          subTitle="募資加入最優惠"
          hasMore={true}
        />

        <div className="new-class__cards">
          <div className="swiper-container">
            <Swiper
              initialSlide={1}
              modules={[Navigation]}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              spaceBetween={20}
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
                <NewClassCard
                  classProps="new-class"
                  isPromote={true}
                  src="https://images.hahow.in/images/67bd859fa19a9614492d57f4"
                  title="PS 合成 x AI 生成視覺建構法典｜高效極速！精準打造專業級設計v"
                  author="二棲知學 Motioner"
                  day={33}
                  percentage={417}
                  price="2,780"
                  originPrice="4,100"
                  isHot={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewClassCard
                  classProps="new-class"
                  isPromote={true}
                  src="https://images.hahow.in/images/67abfc2b2ef47631ff71745f"
                  title="資料變決策！Excel x AI
              升級職場數據分析力"
                  author="彭其捷"
                  day={18}
                  percentage={226}
                  price="2,110"
                  originPrice="3,100"
                  isHot={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewClassCard
                  classProps="new-class"
                  isPromote={true}
                  src="https://images.hahow.in/images/678626ca980a253fdf5cfbe1"
                  title="安心育兒之旅：治療師專為爸媽設計！0-3 歲寶寶引導技巧課"
                  author="兒語日常"
                  day={23}
                  percentage={177}
                  price="1,830"
                  originPrice="4,100"
                  isHot={false}
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewClassCard
                  classProps="new-class"
                  isPromote={true}
                  src="https://images.hahow.in/images/67abfc2b2ef47631ff71745f"
                  title="資料變決策！Excel x AI
              升級職場數據分析力"
                  author="彭其捷"
                  day={18}
                  percentage={226}
                  price="2,110"
                  originPrice="3,100"
                  isHot={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewClassCard
                  classProps="new-class"
                  isPromote={true}
                  src="https://images.hahow.in/images/67abfc2b2ef47631ff71745f"
                  title="資料變決策！Excel x AI
              升級職場數據分析力"
                  author="彭其捷"
                  day={18}
                  percentage={226}
                  price="2,110"
                  originPrice="3,100"
                  isHot={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewClassCard
                  classProps="new-class"
                  isPromote={true}
                  src="https://images.hahow.in/images/67abfc2b2ef47631ff71745f"
                  title="資料變決策！Excel x AI
              升級職場數據分析力"
                  author="彭其捷"
                  day={18}
                  percentage={226}
                  price="2,110"
                  originPrice="3,100"
                  isHot={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewClassCard
                  classProps="new-class"
                  isPromote={true}
                  src="https://images.hahow.in/images/67abfc2b2ef47631ff71745f"
                  title="資料變決策！Excel x AI
              升級職場數據分析力"
                  author="彭其捷"
                  day={18}
                  percentage={226}
                  price="2,110"
                  originPrice="3,100"
                  isHot={true}
                />
              </SwiperSlide>
            </Swiper>
            <div ref={prevRef} className="custom-swiper__custom--prev">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div ref={nextRef} className="custom-swiper__custom--next">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewClass;
