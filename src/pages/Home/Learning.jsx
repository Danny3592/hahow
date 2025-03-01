import { exampleImg, mainImg } from '../../../util/home-img';
import ChatFrame from '../../components/ChatFrame';

const Learning = () => {
  return (
    <section className="learning">
      <div className="learning-box">
        <div className="learning__chat">
          <div className="learning__img-box--main">
            <img src={mainImg} alt="" className="learning__img--main" />
          </div>
          <div className="learning__chat-box">
            <ChatFrame>
              <p className="learning__text">Hi Danny xiao，又看到你真好</p>
              <div className="learning__text">繼續上次的進度吧～</div>
            </ChatFrame>
          </div>
          <div className="learning__link">
            <a href="">
              我的學習<i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>

        <div className="learning__cards">
          <div className="learning__card learning__card--1">
            <div className="u-flex u-gap-sm">
              <div className='learning__img-box'>
                <img
                  className="learning__img learning__img--1"
                  src={exampleImg}
                  alt=""
                />
              </div>
              <div className="u-flex u-flex-col ">
                <div className="learning__title">
                  動畫互動網頁程式入門 (HTML/CSS/JS)
                </div>
                <div className="learning__stage">
                  <div className="learning__progress"></div>
                  <span className="learning__percentage">79%</span>
                </div>
              </div>
            </div>
            <div className="learning__stage-text">
              <i class="fa-solid fa-caret-right"></i>
              1-1 最新公告區(2016/1/26)-點擊"講義"查看最新課程消息
            </div>
          </div>
          <div className="learning__card learning__card--2">
            <div className="u-flex u-gap-sm">
              <img
                className="learning__img learning__img--1"
                src={exampleImg}
                alt=""
              />
              <div className="u-flex u-flex-col ">
                <div className="learning__title">
                  動畫互動網頁程式入門 (HTML/CSS/JS)
                </div>
                <div className="learning__stage">
                  <div className="learning__progress"></div>
                  <span className="learning__percentage">79%</span>
                </div>
              </div>
            </div>
            <div className="learning__stage-text">
              <i class="fa-solid fa-caret-right"></i>
              1-1 最新公告區(2016/1/26)-點擊"講義"查看最新課程消息
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
