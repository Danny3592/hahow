import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { exampleImg, pickClassImg } from '../../../util/home-img';
import PickClassPop from '../../components/PickClassPop';
import ClassTag from '../../components/Class/ClassTag';
import StarEvaluate from '../../components/StarEvaluate';
import ClassDuration from '../../components/Class/ClassDuration';
import ClassPeople from '../../components/Class/ClassPeople';
import ClassPrice from '../../components/Class/ClassPrice';
import PickClassCard from '../../components/Card/PickClassCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const PickClass = () => {
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
    <section className="pick-class ">
      <div className="pick-class-box">
        <SectionTitle
          mainTitle="Hahow精選好課程"
          subTitle="每周真誠推薦"
          isMore={false}
        />

        <div className="pick-class__cards">
          <div className="swiper-container">
            <Swiper
              initialSlide={1}
              modules={[Navigation]}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              spaceBetween={0}
              slidesPerView={3.2}
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
                <PickClassCard
                  classProps="pick-class"
                  score="3.2"
                  count="7"
                  time="8"
                  people="332"
                  price="1,170"
                  getWhat={[
                    '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
                    '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
                    '更從容不迫地進行提報、說服客戶買單',
                  ]}
                  title="行銷提案實戰：讓你的想法被一次買單"
                  img="https://images.hahow.in/images/66f3869961f430e24401c1b0"
                  text="2025/02 全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。"
                />
              </SwiperSlide>

              <SwiperSlide>
                <PickClassCard
                  classProps="pick-class"
                  score="3.2"
                  count="7"
                  time="8"
                  people="332"
                  price="1,170"
                  getWhat={[
                    '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
                    '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
                    '更從容不迫地進行提報、說服客戶買單',
                  ]}
                  title="行銷提案實戰：讓你的想法被一次買單"
                  img="https://images.hahow.in/images/66f3869961f430e24401c1b0"
                  text="2025/02 全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。"
                />
              </SwiperSlide>

              <SwiperSlide>
                <PickClassCard
                  classProps="pick-class"
                  score="3.2"
                  count="7"
                  time="8"
                  people="332"
                  price="1,170"
                  getWhat={[
                    '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
                    '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
                    '更從容不迫地進行提報、說服客戶買單',
                  ]}
                  title="行銷提案實戰：讓你的想法被一次買單"
                  img="https://images.hahow.in/images/66f3869961f430e24401c1b0"
                  text="2025/02 全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。"
                />
              </SwiperSlide>

              <SwiperSlide>
                <PickClassCard
                  classProps="pick-class"
                  score="3.2"
                  count="7"
                  time="8"
                  people="332"
                  price="1,170"
                  getWhat={[
                    '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
                    '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
                    '更從容不迫地進行提報、說服客戶買單',
                  ]}
                  title="行銷提案實戰：讓你的想法被一次買單"
                  img="https://images.hahow.in/images/66f3869961f430e24401c1b0"
                  text="2025/02 全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PickClassCard
                  classProps="pick-class"
                  score="3.2"
                  count="7"
                  time="8"
                  people="332"
                  price="1,170"
                  getWhat={[
                    '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
                    '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
                    '更從容不迫地進行提報、說服客戶買單',
                  ]}
                  title="行銷提案實戰：讓你的想法被一次買單"
                  img="https://images.hahow.in/images/66f3869961f430e24401c1b0"
                  text="2025/02 全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。"
                />
              </SwiperSlide>
              <SwiperSlide>
                <PickClassCard
                  classProps="pick-class"
                  score="1.2"
                  count="13"
                  time="22"
                  people="55"
                  price="1,780"
                  getWhat={[
                    '了解 SEO 流量從何而來',
                    '了解搜尋引擎的運作邏輯',
                    '了解如何找到有價值的關鍵字',
                    '了解如何撰寫出一篇 SEO friendly 的文章',
                    '了解 SEO 如何幫助你的品牌及網站',
                  ]}
                  title="SEO 白話文：不懂程式也能學會的 SEO 秘密"
                  img="https://images.hahow.in/images/67bed569d7495476a7af5c5c"
                  text="2025/02 更新內容！最好懂的 SEO 課程之一，幫助你建構 SEO 的運作自己的網站跟品牌中。"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="pick-class__desktop">
            <PickClassCard
              classProps="pick-class"
              score="3.2"
              count="7"
              time="8"
              people="332"
              price="1,170"
              getWhat={[
                '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
                '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
                '更從容不迫地進行提報、說服客戶買單',
              ]}
              title="行銷提案實戰：讓你的想法被一次買單"
              img="https://images.hahow.in/images/66f3869961f430e24401c1b0"
              text="2025/02 全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。"
            />

            <PickClassCard
              classProps="pick-class"
              score="1.2"
              count="13"
              time="22"
              people="55"
              price="1,780"
              getWhat={[
                '了解 SEO 流量從何而來',
                '了解搜尋引擎的運作邏輯',
                '了解如何找到有價值的關鍵字',
                '了解如何撰寫出一篇 SEO friendly 的文章',
                '了解 SEO 如何幫助你的品牌及網站',
              ]}
              title="SEO 白話文：不懂程式也能學會的 SEO 秘密"
              img="https://images.hahow.in/images/67bed569d7495476a7af5c5c"
              text="2025/02 更新內容！最好懂的 SEO 課程之一，幫助你建構 SEO 的運作自己的網站跟品牌中。"
            />

            <PickClassCard
              classProps="pick-class"
              score="3.2"
              count="7"
              time="8"
              people="332"
              price="1,170"
              getWhat={[
                '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
                '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
                '更從容不迫地進行提報、說服客戶買單',
              ]}
              title="提升邏輯思維 - 王介安的 GAS 溝通力"
              img="https://images.hahow.in/images/60bece541f6b5625831b0c1b"
              text="課程循序漸進，觀念解析 → 技巧探討 → 職場應用 → 延伸思考，如何成功地應用在溝通、協商，甚至談判當中。"
            />
          </div>
        </div>
      </div>

      {/* <PickClassCard
            classProps="pick-class"
            score="3.2"
            count="7"
            time="8"
            people="332"
            price="1,170"
            getWhat={[
              '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
              '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
              '更從容不迫地進行提報、說服客戶買單',
            ]}
            title="行銷提案實戰：讓你的想法被一次買單"
            img="https://images.hahow.in/images/66f3869961f430e24401c1b0"
            text="2025/02 全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。"
          />
          

          <PickClassCard
            classProps="pick-class"
            score="1.2"
            count="13"
            time="22"
            people="55"
            price="1,780"
            getWhat={[
              '了解 SEO 流量從何而來',
              '了解搜尋引擎的運作邏輯',
              '了解如何找到有價值的關鍵字',
              '了解如何撰寫出一篇 SEO friendly 的文章',
              '了解 SEO 如何幫助你的品牌及網站',
            ]}
            title="SEO 白話文：不懂程式也能學會的 SEO 秘密"
            img="https://images.hahow.in/images/67bed569d7495476a7af5c5c"
            text="2025/02 更新內容！最好懂的 SEO 課程之一，幫助你建構 SEO 的運作自己的網站跟品牌中。"
          />

          <PickClassCard
            classProps="pick-class"
            score="3.2"
            count="7"
            time="8"
            people="332"
            price="1,170"
            getWhat={[
              '更精準找到客戶痛點/需求點/癢點，成為行動讀心機',
              '更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率',
              '更從容不迫地進行提報、說服客戶買單',
            ]}
            title="提升邏輯思維 - 王介安的 GAS 溝通力"
            img="https://images.hahow.in/images/60bece541f6b5625831b0c1b"
            text="課程循序漸進，觀念解析 → 技巧探討 → 職場應用 → 延伸思考，如何成功地應用在溝通、協商，甚至談判當中。"
          /> */}

      {/* <div className="creators__cards">
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
      </div> */}
    </section>
  );
};

export default PickClass;
