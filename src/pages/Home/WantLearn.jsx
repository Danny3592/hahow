import React from 'react';
import { exampleImg } from '../../../util/home-img';
import SectionTitle from './../../components/SectionTitle';
import StarEvaluate from '../../components/StarEvaluate';
import ClassPeople from '../../components/Class/ClassPeople';
import ClassDuration from '../../components/Class/ClassDuration';
import ClassAuthor from '../../components/Class/ClassAuthor';
import ClassPrice from '../../components/Class/ClassPrice';
import ClassTag from '../../components/Class/ClassTag';

{
  /* <i class="fa-solid fa-bookmark new-class__bookmark"></i> */
}

const WantLearn = () => {
  return (
    <section className="want-learn">
      <div className="want-learn-box">
        <SectionTitle
          mainTitle="猜你想學"
          subTitle="與你心電感應"
          hasMore={false}
        />
        <div className="want-learn__cards">
          <div className="want-learn__card want-learn__card--1">
            <div className="want-learn__img-box">
              <i class="fa-solid fa-bookmark want-learn__bookmark"></i>
              <img src={exampleImg} alt="" className="want-learn__img" />
            </div>
            <div className="want-learn__title">
              <ClassTag type="class" />
              資料變決策！Excel x AI 升級職場數據分析力
            </div>
            <ClassAuthor author="彭其捷" />
            <div className="want-learn__status">
              <div>
                <StarEvaluate score="2.0" count='30' />
              </div>
              <div>
                <ClassDuration time="18" />
              </div>
              <div>
                <ClassPeople people="48" />
              </div>
            </div>
            <div>
              <ClassPrice price="2,300" />
            </div>
          </div>
          <div className="want-learn__card want-learn__card--1">
            <div className="want-learn__img-box">
              <i class="fa-solid fa-bookmark want-learn__bookmark"></i>
              <img src={exampleImg} alt="" className="want-learn__img" />
            </div>
            <div className="want-learn__title">
              <ClassTag type="class" />
              資料變決策！Excel x AI 升級職場數據分析力
            </div>
            <ClassAuthor author="彭其捷" />
            <div className="want-learn__status">
              <div>
                <StarEvaluate score="2.0" count='30' />
              </div>
              <div>
                <ClassDuration time="18" />
              </div>
              <div>
                <ClassPeople people="48" />
              </div>
            </div>
            <div>
              <ClassPrice price="2,300" />
            </div>
          </div>
          <div className="want-learn__card want-learn__card--1">
            <div className="want-learn__img-box">
              <i class="fa-solid fa-bookmark want-learn__bookmark"></i>
              <img src={exampleImg} alt="" className="want-learn__img" />
            </div>
            <div className="want-learn__title">
              <ClassTag type="class" />
              資料變決策！Excel x AI 升級職場數據分析力
            </div>
            <ClassAuthor author="彭其捷" />
            <div className="want-learn__status">
              <div>
                <StarEvaluate score="2.0" count='30' />
              </div>
              <div>
                <ClassDuration time="18" />
              </div>
              <div>
                <ClassPeople people="48" />
              </div>
            </div>
            <div>
              <ClassPrice price="2,300" />
            </div>
          </div>
          <div className="want-learn__card want-learn__card--1">
            <div className="want-learn__img-box">
              <i class="fa-solid fa-bookmark want-learn__bookmark"></i>
              <img src={exampleImg} alt="" className="want-learn__img" />
            </div>
            <div className="want-learn__title">
              <ClassTag type="class" />
              資料變決策！Excel x AI 升級職場數據分析力
            </div>
            <ClassAuthor author="彭其捷" />
            <div className="want-learn__status">
              <div>
                <StarEvaluate score="2.0" count='30' />
              </div>
              <div>
                <ClassDuration time="18" />
              </div>
              <div>
                <ClassPeople people="48" />
              </div>
            </div>
            <div>
              <ClassPrice price="2,300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WantLearn;
