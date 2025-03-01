import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { exampleImg } from '../../../util/home-img';

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
                  <div className="popular__card">
                    <img
                      src="https://hahow.in/static/media/rank-1.1fa4e2a6fe31e6ae77d5c5ed570ea186.svg"
                      alt=""
                      className="popular__number"
                    />

                    <div className="popular__item-box">
                      <div className="popular__img-box">
                        <img src={exampleImg} alt="" className="popular__img" />
                      </div>
                      <div className="popular__info">
                        <div className="popular__title">
                          沙發上的插畫課｜用 iPad 畫出你的可愛風格
                        </div>
                        <div className="popular__author">by Nuomi</div>
                        <div className="popular__people">4,139</div>
                        <div className="popular__price-box">
                          <div className="popular__price">NT$ 4,328</div>
                          <div className="popular__origin-price">NT$ 39,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="popular__item">
                  <div className="popular__card">
                    <img
                      src="https://hahow.in/static/media/rank-1.1fa4e2a6fe31e6ae77d5c5ed570ea186.svg"
                      alt=""
                      className="popular__number"
                    />

                    <div className="popular__item-box">
                      <div className="popular__img-box">
                        <img src={exampleImg} alt="" className="popular__img" />
                      </div>
                      <div className="popular__info">
                        <div className="popular__title">
                          沙發上的插畫課｜用 iPad 畫出你的可愛風格
                        </div>
                        <div className="popular__author">by Nuomi</div>
                        <div className="popular__people">4,139</div>
                        <div className="popular__price-box">
                          <div className="popular__price">NT$ 4,328</div>
                          <div className="popular__origin-price">NT$ 39,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="popular__item">
                  <div className="popular__card">
                    <img
                      src="https://hahow.in/static/media/rank-1.1fa4e2a6fe31e6ae77d5c5ed570ea186.svg"
                      alt=""
                      className="popular__number"
                    />
                    <div className="popular__item-box">
                      <div className="popular__img-box">
                        <img src={exampleImg} alt="" className="popular__img" />
                      </div>
                      <div className="popular__info">
                        <div className="popular__title">
                          沙發上的插畫課｜用 iPad 畫出你的可愛風格
                        </div>
                        <div className="popular__author">by Nuomi</div>
                        <div className="popular__people">4,139</div>
                        <div className="popular__price-box">
                          <div className="popular__price">NT$ 4,328</div>
                          <div className="popular__origin-price">NT$ 39,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="popular__item">
                  <div className="popular__card">
                    <img
                      src="https://hahow.in/static/media/rank-1.1fa4e2a6fe31e6ae77d5c5ed570ea186.svg"
                      alt=""
                      className="popular__number"
                    />

                    <div className="popular__item-box">
                      <div className="popular__img-box">
                        <img src={exampleImg} alt="" className="popular__img" />
                      </div>
                      <div className="popular__info">
                        <div className="popular__title">
                          沙發上的插畫課｜用 iPad 畫出你的可愛風格
                        </div>
                        <div className="popular__author">by Nuomi</div>
                        <div className="popular__people">4,139</div>
                        <div className="popular__price-box">
                          <div className="popular__price">NT$ 4,328</div>
                          <div className="popular__origin-price">NT$ 39,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="popular__item">
                  <div className="popular__card">
                    <img
                      src="https://hahow.in/static/media/rank-1.1fa4e2a6fe31e6ae77d5c5ed570ea186.svg"
                      alt=""
                      className="popular__number"
                    />

                    <div className="popular__item-box">
                      <div className="popular__img-box">
                        <img src={exampleImg} alt="" className="popular__img" />
                      </div>
                      <div className="popular__info">
                        <div className="popular__title">
                          沙發上的插畫課｜用 iPad 畫出你的可愛風格
                        </div>
                        <div className="popular__author">by Nuomi</div>
                        <div className="popular__people">4,139</div>
                        <div className="popular__price-box">
                          <div className="popular__price">NT$ 4,328</div>
                          <div className="popular__origin-price">NT$ 39,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
feature/home-popular