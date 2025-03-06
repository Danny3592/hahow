import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { ctaBg } from '../../../util/home-img';
import CtaCard from '../../components/Card/CtaCard';

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
            <CtaCard
              classProps="cta"
              img="https://hahow.in/static/media/img-mobile@2x.90177e4ee714ee043492.png"
              title="下載手機版"
              text="隨時隨地學習不間斷"
              index={1}
            />

            <CtaCard
              classProps="cta"
              img="https://hahow.in/static/media/img-giftcard.c64192d5a52205800eb9.png"
              title="贈送禮物卡"
              text="把學習的快樂與更多人分享"
              index={2}
            />
            <CtaCard
              classProps="cta"
              img="	https://hahow.in/static/media/img-h4b.5762fd25e7e945b0b28d.png"
              title="Hahow for Business"
              text="企業版超過 700+ 堂無限學"
              index={3}
            />
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
              className="cta__decoration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
