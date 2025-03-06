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

          <div className="learning__chat-box-phone">
            <p className="learning__text">Hi Danny xiao，又看到你真好</p>
            <div className="learning__text">繼續上次的進度吧～</div>
          </div>

          <div className="learning__chat-box">
            <ChatFrame color="white">
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
              <div className="learning__img-box">
                <i class="fa-solid fa-caret-right"></i>
                <img
                  className="learning__img learning__img--1"
                  src={exampleImg}
                  alt=""
                />
              </div>
              <div className="learning__info-box">
                <h4 className="learning__title">
                  動畫互動網頁程式入門 (HTML/CSS/JS)
                </h4>
                <div className="learning__stage">
                  <div className="learning__progress learning__progress--1"></div>
                  <span className="learning__percentage">79%</span>
                </div>
              </div>
            </div>
            <div className="learning__stage-text">
              <i class="fa-solid fa-caret-right"></i>
              1-1 最新公告區(2016/1/26)-點擊"講義"查看最新課程消息
            </div>
          </div>
          <div className="learning__card learning__card--1">
            <div className="u-flex u-gap-sm">
              <div className="learning__img-box">
                <i class="fa-solid fa-caret-right"></i>
                <img
                  className="learning__img learning__img--2"
                  src="https://images.hahow.in/images/5b85f1a8297df5001efb0150"
                  alt=""
                />
              </div>
              <div className="learning__info-box">
                <h4 className="learning__title">
                  動畫互動網頁特效入門（JS/CANVAS）
                </h4>
                <div className="learning__stage">
                  <div className="learning__progress learning__progress--2"></div>
                  <span className="learning__percentage">39%</span>
                </div>
              </div>
            </div>
            <div className="learning__stage-text">
              <i class="fa-solid fa-caret-right"></i>
              3-6 函數 模組化應用
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
