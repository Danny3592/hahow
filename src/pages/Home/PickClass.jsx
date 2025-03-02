import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { exampleImg, pickClassImg } from '../../../util/home-img';
import PickClassPop from '../../components/PickClassPop';
import ClassTag from '../../components/Class/ClassTag';
import StarEvaluate from '../../components/StarEvaluate';
import ClassDuration from '../../components/Class/ClassDuration';
import ClassPeople from '../../components/Class/ClassPeople';
import ClassPrice from '../../components/Class/ClassPrice';

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
            <div className="pick-class__pop">
              <PickClassPop>
                <ClassTag type="class" />
                <div className="pick-class__pop-box">
                  <div className="pick-class__class-status">
                    <span className="pick-class__star">
                      <StarEvaluate score="4.8" count="5" />
                    </span>
                    <span className="pick-class__duration"></span>
                    <ClassDuration time="12.5" />
                    <ClassPeople people="305" />
                  </div>
                  <ClassPrice price="3,500" />
                  <div className="pick-class__pop-content">
                    <div className="pick-class__pop-title">
                      你可以學到的東西
                    </div>
                    <p className="pick-class__pop-list">
                      <span className="pick-class__pop-item">
                        1. 更精準找到客戶痛點/需求點/癢點，成為行動讀心機
                      </span>
                      <span className="pick-class__pop-item">
                        2.
                        更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率
                      </span>
                      <span className="pick-class__pop-item">
                        3. 更從容不迫地進行提報、說服客戶買單
                      </span>
                    </p>
                  </div>
                  <div className="pick-class__pop-button">瞭解課程內容</div>
                </div>
              </PickClassPop>
            </div>
            <div className="pick-class__img-box">
              <img className="pick-class__img" src={exampleImg} alt="class" />
            </div>

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
            <div className="pick-class__pop">
              <PickClassPop>
                <ClassTag type="class" />
                <div className="pick-class__pop-box">
                  <div className="pick-class__class-status">
                    <span className="pick-class__star">
                      <StarEvaluate score="4.8" count="5" />
                    </span>
                    <span className="pick-class__duration"></span>
                    <ClassDuration time="12.5" />
                    <ClassPeople people="305" />
                  </div>
                  <ClassPrice price="3,500" />
                  <div className="pick-class__pop-content">
                    <div className="pick-class__pop-title">
                      你可以學到的東西
                    </div>
                    <p className="pick-class__pop-list">
                      <span className="pick-class__pop-item">
                        1. 更精準找到客戶痛點/需求點/癢點，成為行動讀心機
                      </span>
                      <span className="pick-class__pop-item">
                        2.
                        更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率
                      </span>
                      <span className="pick-class__pop-item">
                        3. 更從容不迫地進行提報、說服客戶買單
                      </span>
                    </p>
                  </div>
                  <div className="pick-class__pop-button">瞭解課程內容</div>
                </div>
              </PickClassPop>
            </div>
            <div className="pick-class__img-box">
              <img className="pick-class__img" src={exampleImg} alt="class" />
            </div>

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
            <div className="pick-class__pop">
              <PickClassPop>
                <ClassTag type="class" />
                <div className="pick-class__pop-box">
                  <div className="pick-class__class-status">
                    <span className="pick-class__star">
                      <StarEvaluate score="4.8" count="5" />
                    </span>
                    <span className="pick-class__duration"></span>
                    <ClassDuration time="12.5" />
                    <ClassPeople people="305" />
                  </div>
                  <ClassPrice price="3,500" />
                  <div className="pick-class__pop-content">
                    <div className="pick-class__pop-title">
                      你可以學到的東西
                    </div>
                    <p className="pick-class__pop-list">
                      <span className="pick-class__pop-item">
                        1. 更精準找到客戶痛點/需求點/癢點，成為行動讀心機
                      </span>
                      <span className="pick-class__pop-item">
                        2.
                        更有效率的發想、製作行銷提案企劃，省時間的同時更提高命中率
                      </span>
                      <span className="pick-class__pop-item">
                        3. 更從容不迫地進行提報、說服客戶買單
                      </span>
                    </p>
                  </div>
                  <div className="pick-class__pop-button">瞭解課程內容</div>
                </div>
              </PickClassPop>
            </div>
            <div className="pick-class__img-box">
              <img className="pick-class__img" src={exampleImg} alt="class" />
            </div>

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
