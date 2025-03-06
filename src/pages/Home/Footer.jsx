import React from 'react';
import { qrCode } from '../../../util/home-img';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-box">
        <div className="footer__list footer__list--about">
          <div className="footer__title">關於</div>
          <ul>
            <li>
              <a href="">關於我們</a>
            </li>
            <li>
              <a href="">加入 Hahow</a>{' '}
            </li>
            <li>
              <a href="">新聞媒體中心</a>
            </li>
            <li>
              <a href="">校園方案</a>
            </li>
            <li>
              <a href="">使用者條款</a>
            </li>
            <li>
              <a href="">服務契約</a>
            </li>
            <li>
              <a href="">隱私權政策</a>
            </li>
          </ul>
        </div>
        <div className="footer__list footer__list--help">
          <div className="footer__title">幫助</div>
          <ul>
            <li>
              <a href="">Hahow 會員制度</a>{' '}
            </li>
            <li>
              <a href="">課程許願</a>
            </li>
            <li>
              <a href="">常見問題</a>
            </li>
            <li>
              <a href="">兌換多人同行課程</a>
            </li>
            <li>
              <a href="">線上課程禮物卡</a>
            </li>
            <li>
              <a href="">填課前問卷拿優惠</a>
            </li>
            <li>
              <a href="">我要開課</a>
            </li>
            <li>
              <a href="">影音製作服務</a>
            </li>
            <li>
              <a href="">異業合作洽談</a>
            </li>
          </ul>
        </div>
        <div className="footer__action">
          <div className="footer__follow">
            <div className="footer__title">追蹤動態</div>
            <ul className="footer__list--action">
              <li className="footer__icon">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="footer__icon">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="footer__icon">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="footer__icon">
                <i class="fa-brands fa-facebook"></i>
              </li>
            </ul>
          </div>
          <div className="footer__download">
            <div className="footer__title">下載App</div>
            <div className="footer__download-box">
              <div className="footer__download--left">
                <img
                  src="https://hahow.in/static/media/app-store-badge.a18384418c14c9e1df0bb530ee15f84b.svg"
                  alt=""
                  className="footer__app-story"
                />

                <img
                  src="https://hahow.in/static/media/app-store-badge.a18384418c14c9e1df0bb530ee15f84b.svg"
                  alt=""
                  className="footer__google-play"
                />
              </div>
              <div className="footer__download--right">
                <img src={qrCode} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__input">
          <select name="address" className="footer__input--address">
            <option selected disabled>
              輸入地點
            </option>
            <option disabled>將顯示對應幣別</option>
            <option value="TW">TW 台灣 新台幣（TWD）</option>
            <option value="HK">HK 香港 港幣（HKD）</option>
            <option value="MY">MY 馬來西亞 林吉特（MYR）</option>
            <option value="US">US 美國 美元（USD）</option>
          </select>
          <select name="language" className="footer__input--address">
            <option value="trad">繁體中文</option>
            <option value="simple">簡體中文</option>
          </select>
          <div className="footer__copyright">
            Hahow 好學校 © All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
