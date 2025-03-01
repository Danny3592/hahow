import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { exampleImg } from './../../../util/home-img';

const LiveActivity = () => {
  return (
    <div className="live u-box">
      <SectionTitle
        hasMore={true}
        mainTitle="直播活動"
        subTitle="即時互動零距離"
      />
      <div className="live__card">
        <div className="live__img-box">
          <img src={exampleImg} alt="" className="live__img" />
        </div>
        <div className="live__content">
          <div>
            <div className="live__title">
              <span className="live__tag">直播</span>
              英文多聽就會懂？免費直播，破解英文聽力學習迷思！
            </div>
            <div className="live__status">
              <span className="live__replay">可重播</span>
              <span className="live__date">02-19(六)</span>
              <span className="live__people">2,567</span>
            </div>
            <div className="live__author">by Hahow 好學校</div>
          </div>

          <div className="live__free">免費</div>
        </div>
      </div>
    </div>
  );
};

export default LiveActivity;
