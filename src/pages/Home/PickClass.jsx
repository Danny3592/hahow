import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { exampleImg, pickClassImg } from '../../../util/home-img';

const PickClass = () => {
  return (
    <section className="pick-class ">
      <div className="pick-class-box u-box">
        <SectionTitle
          mainTitle="Hahow精選好課程"
          subTitle="每周真誠推薦"
          isMore={false}
        />
        <div className="pick-class__cards">
          <div className="pick-class__card pick-class__card--1">
            <img className="pick-class__img" src={exampleImg} alt="class"></img>
            <div className="pick-class__card--bottom">
              <div>
                <div className="pick-class__title">
                  行銷提案實戰：讓你的想法被一次買單
                </div>
                <div className="pick-class__content">
                  <img src={pickClassImg} alt="" className="pick-class__icon" />

                  <div className="pick-class__text">
                    2025/02
                    全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pick-class__card pick-class__card--1">
            <img className="pick-class__img" src={exampleImg} alt="class"></img>
            <div className="pick-class__card--bottom">
              <div>
                <div className="pick-class__title">
                  行銷提案實戰：讓你的想法被一次買單
                </div>
                <div className="pick-class__content">
                  <img src={pickClassImg} alt="" className="pick-class__icon" />

                  <div className="pick-class__text">
                    2025/02
                    全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pick-class__card pick-class__card--1">
            <img className="pick-class__img" src={exampleImg} alt="class"></img>
            <div className="pick-class__card--bottom">
              <div>
                <div className="pick-class__title">
                  行銷提案實戰：讓你的想法被一次買單
                </div>
                <div className="pick-class__content">
                  <img src={pickClassImg} alt="" className="pick-class__icon" />

                  <div className="pick-class__text">
                    2025/02
                    全新內容！行銷提案實戰整理傑哥多年的提案經驗，透過關鍵溝通找對真正問題，並在提案中精準回應客戶需求。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickClass;
