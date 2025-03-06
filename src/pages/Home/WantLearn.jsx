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
            src='https://images.hahow.in/images/646f108f4e0b5901a02a9e94'
            author="PolaKidsPLAY"
            score="8.0"
            count="18"
            time="13"
            price="2,880"
            people="27"
            title="玩 Minecraft 學程式：第二部-進擊的迴圈！"
            tagInTitle={true}
          />
          <WantLearnCard
            classProps="want-learn"
            src='https://images.hahow.in/images/5e7c28757fb77c0026b8ffd3'
            author="鄭皓文haowen"
            score="3.2"
            count="44"
            time="23"
            price="1,320"
            people="53"
            title="薩克斯風 - 13 堂基本功吹出專輯的美聲"
            tagInTitle={true}
          />
          <WantLearnCard
            classProps="want-learn"
            src='https://images.hahow.in/images/6347c1014284ae00078ea0e4'
            author="廣原武豪"
            score="2.8"
            count="18"
            time="39"
            price="2,140"
            people="71"
            title="日本傳統樂器：津輕三味線入門課程"
            tagInTitle={true}
          />
          <WantLearnCard
            classProps="want-learn"
            src="https://images.hahow.in/images/5bac7e116dd8b9001f4d66c0"
            author="彭其捷"
            score="3.7"
            count="16"
            time="5"
            price="2,380"
            people="17"
            title="三步驟學會即興演奏爵士樂"
            tagInTitle={true}
          />
        </div>
      </div>
    </section>
  );
};

export default WantLearn;
