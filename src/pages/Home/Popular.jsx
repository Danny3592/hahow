import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { exampleImg } from '../../../util/home-img';
import PopularCard from '../../components/Card/PopularCard';

const Popular = () => {
  return (
    <section className="popular">
      <div className="popular-box">
        <div className="popular__left">
          <div className="popular__content">
            <SectionTitle
              mainTitle="近期熱門課程"
              subTitle="大家都在學這些"
              hasMore={false}
            />
            <div className="popular__list-box">
              <ul className="popular__list">
                <li className="popular__item">
                  <PopularCard
                    classProps="popular"
                    img='https://images.hahow.in/images/674ead23ee38f07749dce454?width=600'
                    numberImg="https://hahow.in/static/media/rank-1.1fa4e2a6fe31e6ae77d5c5ed570ea186.svg"
                    title="沙發上的插畫課｜用 iPad 畫出你的可愛風格"
                    author="Nuomi"
                    people="4,139"
                    price="4,328"
                    originPrice="39,00"
                  />
                </li>
                <li className="popular__item">
                  <PopularCard
                    classProps="popular"
                    img='https://images.hahow.in/images/67176681a5891df4ddcbc9a3?width=600'
                    numberImg="https://hahow.in/static/media/rank-2.470e6a9c561b9d51544a549ad7fd6df8.svg"
                    title="日常生活的榮格心理學｜開啟生命潛能Ｘ活出完整人生"
                    author="鄧惠文"
                    people="436"
                    price="4,890"
                    originPrice="59,00"
                  />
                </li>

                <li className="popular__item">
                  <PopularCard
                    classProps="popular"
                    img='https://images.hahow.in/images/66506510f13db08d6312dc7e?width=600'
                    numberImg="https://hahow.in/static/media/rank-3.b4fd2eff721bfee1079ef8d67d00fb89.svg"
                    title="找回身體最佳狀態｜動力鏈：人人必修的身體使用說明書"
                    author="啾c物理治療師"
                    people="2,199"
                    price="3,828"
                    originPrice="39,00"
                  />
                </li>
                <li className="popular__item">
                  <PopularCard
                    classProps="popular"
                    img='https://images.hahow.in/images/677740274159d89ae784a95e?width=600'
                    numberImg="https://hahow.in/static/media/rank-4.da644b19daa63eb6cfec059110a97e96.svg"
                    title="11 週打造插畫週邊Ｘ客訂商品：用 Procreate 創造第二收入！"
                    author="插畫觀測室"
                    people="1,139"
                    price="8,328"
                    originPrice="99,00"
                  />
                </li>
                <li className="popular__item">
                  <PopularCard
                    classProps="popular"
                    img='https://images.hahow.in/images/5fe017b7435a4b181ca6cefd?width=600'
                    numberImg="	https://hahow.in/static/media/rank-5.3af82256b2cb2e4b9988959cffb9d5be.svg"
                    title="掌握鉤針編織邏輯：五種針法自造生活小物"
                    author="Mu/s Craft毛線球牧場"
                    people="2,139"
                    price="3,328"
                    originPrice="39,00"
                  />
                </li>
              </ul>
              <div className="popular__more">
                更多熱門課程<i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="popular__right"></div>
        <div className="popular__right-block"></div>
      </div>
    </section>
  );
};

export default Popular;
