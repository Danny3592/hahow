import React from 'react';
import { exampleImg } from '../../../util/home-img';
import SectionTitle from './../../components/SectionTitle';
import StarEvaluate from '../../components/StarEvaluate';
import ClassPeople from '../../components/Class/ClassPeople';
import ClassDuration from '../../components/Class/ClassDuration';
import ClassAuthor from '../../components/Class/ClassAuthor';
import ClassPrice from '../../components/Class/ClassPrice';
import ClassTag from '../../components/Class/ClassTag';
import WantLearnCard from '../../components/Card/WantLearnCard';

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
          <WantLearnCard
            classProps="want-learn"
            src={exampleImg}
            author="彭其捷"
            score="2.0"
            count="30"
            time="18"
            price="2,300"
            people="48"
            title="資料變決策！Excel x AI 升級職場數據分析力"
          />
          <WantLearnCard
            classProps="want-learn"
            src={exampleImg}
            author="彭其捷"
            score="2.0"
            count="30"
            time="18"
            price="2,300"
            people="48"
            title="資料變決策！Excel x AI 升級職場數據分析力"
          />
          <WantLearnCard
            classProps="want-learn"
            src={exampleImg}
            author="彭其捷"
            score="2.0"
            count="30"
            time="18"
            price="2,300"
            people="48"
            title="資料變決策！Excel x AI 升級職場數據分析力"
          />

          <WantLearnCard
            classProps="want-learn"
            src={exampleImg}
            author="彭其捷"
            score="2.0"
            count="30"
            time="18"
            price="2,300"
            people="48"
            title="資料變決策！Excel x AI 升級職場數據分析力"
          />
        </div>
      </div>
    </section>
  );
};

export default WantLearn;
