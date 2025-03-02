import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { exampleImg } from '../../../util/home-img';
import ClassTag from '../../components/Class/ClassTag';
// import ImageBox from './ImgBox';

const NewClass = () => {
  return (
    <section className="new-class">
      <div className="new-class-box">
        <SectionTitle
          mainTitle="最新募資課程"
          subTitle="募資加入最優惠"
          hasMore={true}
        />

        <div className="new-class__cards">
          <div className="new-class__card new-class__card--1">
            <div className="new-class__img-box">
              <i class="fa-solid fa-bookmark new-class__bookmark"></i>
              <span className="new-class__promote">限時優惠</span>
              <img src={exampleImg} alt="" className="new-class__img" />
            </div>

            {/* <span className="class-img__promote">限時優惠</span> */}

            <div className="new-class__title">
              <ClassTag type="class" /> 資料變決策！Excel x AI
              升級職場數據分析力
            </div>
            <div className="new-class__author">by 彭其捷</div>
            <div className="new-class__status">
              <div className="new-class__day">倒數募資33天</div>
              <div className="new-class__percentage">417%</div>
            </div>
            <div className="new-class__progressbar"></div>
            <div>
              <span className="new-class__price">NT$2,780</span>
              <span className="new-class__origin-price">NT$4,100</span>
            </div>
            <div className="new-class__hot">
              <ClassTag type="hot" />
            </div>
          </div>
          <div className="new-class__card new-class__card--1">
            <div className="new-class__img-box">
              <i class="fa-solid fa-bookmark new-class__bookmark"></i>
              <span className="new-class__promote">限時優惠</span>
              <img src={exampleImg} alt="" className="new-class__img" />
            </div>
            <div className="new-class__title">
              <ClassTag type="class" /> 資料變決策！Excel x AI
              升級職場數據分析力
            </div>
            <div className="new-class__author">by 彭其捷</div>
            <div className="new-class__status">
              <div className="new-class__day">倒數募資33天</div>
              <div className="new-class__percentage">417%</div>
            </div>
            <div className="new-class__progressbar"></div>
            <div>
              <span className="new-class__price">NT$2,780</span>
              <span className="new-class__origin-price">NT$4,100</span>
            </div>
            <ClassTag type="hot" />
          </div>
          <div className="new-class__card new-class__card--1">
            <div className="new-class__img-box">
              <i class="fa-solid fa-bookmark new-class__bookmark"></i>

              <span className="new-class__promote">限時優惠</span>
              <img src={exampleImg} alt="" className="new-class__img" />
            </div>
            <div className="new-class__title">
              <ClassTag type="class" />
              資料變決策！Excel x AI 升級職場數據分析力
            </div>
            <div className="new-class__author">by 彭其捷</div>
            <div className="new-class__status">
              <div className="new-class__day">倒數募資33天</div>
              <div className="new-class__percentage">417%</div>
            </div>
            <div className="new-class__progressbar"></div>
            <div>
              <span className="new-class__price">NT$2,780</span>
              <span className="new-class__origin-price">NT$4,100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewClass;
