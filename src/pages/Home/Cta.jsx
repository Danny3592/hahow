import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { ctaBg } from '../../../util/home-img';

const Cta = () => {
  return (
    <div className="cta">
      <div className="cta-box">
        <div className="cta__left">
          <div className="cta__text">
            <img
              src="	https://hahow.in/static/media/img-slogan-s.7000e53e5e140efc6dd2179b9b63b1a2.svg"
              alt=""
            />
          </div>
          <div className="cta__cards">
            <div className="cta__card cta__card--1">
              <img src={ctaBg} alt="" className="cta__card-bg" />
              <div className="cta__card-text">
                下載手機版<i class="fa-solid fa-caret-right"></i>
                <span>隨時隨地學習不間斷</span>
              </div>
              <img
                src="https://hahow.in/static/media/img-mobile@2x.90177e4ee714ee043492.png"
                alt=""
                className="cta__card-img"
              />
            </div>
            <div className="cta__card cta__card--1">
              <img src={ctaBg} alt="" className="cta__card-bg" />
              <div className="cta__card-text">
                下載手機版<i class="fa-solid fa-caret-right"></i>
                <span>隨時隨地學習不間斷</span>
              </div>
              <img
                src="https://hahow.in/static/media/img-mobile@2x.90177e4ee714ee043492.png"
                alt=""
                className="cta__card-img"
              />
            </div>
            <div className="cta__card cta__card--1">
              <img src={ctaBg} alt="" className="cta__card-bg" />
              <div className="cta__card-text">
                下載手機版<i class="fa-solid fa-caret-right"></i>
                <span>隨時隨地學習不間斷</span>
              </div>
              <img
                src="https://hahow.in/static/media/img-mobile@2x.90177e4ee714ee043492.png"
                alt=""
                className="cta__card-img"
              />
            </div>
          </div>
        </div>
        <div className="cta__right">
          <div className="cta__card-photo">
            <img
              src="https://hahow.in/static/media/img-brand.de21523e9510a4df1859.png"
              alt=""
            />
            <div className="cta__card-photo-border"></div>
            <img
              src="https://hahow.in/static/media/img-deco-right.5eec1fdf8864095871355b9a740aae0d.svg"
              alt=""
              className='cta__decoration'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
