import React, { useEffect, useRef, useState } from 'react';
import HeaderPop from '../components/Header/HeaderPop';
import { exampleImg, mainImg } from '../../util/home-img';
import LearningCard from '../components/Header/LearningCard';
import ClassTag from '../components/Class/ClassTag';
import HeaderListPop from '../components/Header/HeaderPopMenu';
import { exploreData2 } from '../../util/header-data';

const MainNav = () => {
  const [showBar, setShowBar] = useState(false);

  const [showSearch, setShowSearch] = useState(
    window.innerWidth > 982 ? true : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setShowSearch(window.innerWidth > 982 ? true : false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="nav-phone"
        style={{
          height: showBar ? '100vh' : '0',
        }}
      >
        <div className="nav-phone__tab">
          <button className="nav-phone__explore">探索</button>
          <button className="nav-phone__about">
            <img
              src="../src//assets/images/user.jpeg"
              alt=""
              className="nav-phone__photo"
            />
            關於我
          </button>
        </div>
        <div className="nav-phone__title">
          領域分類<span>大家都在學的領域</span>
        </div>
        <ul className="nav-phone__list nav-phone__list--1">
          <li className="nav-phone__item">
            <span>生活品味</span>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li className="nav-phone__item">
            <span>職場技能</span>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li className="nav-phone__item">
            <span>設計</span>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li className="nav-phone__item">
            <span>語言</span>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li className="nav-phone__item">
            <span>其他領域</span>
            <i class="fa-solid fa-angle-right"></i>
          </li>
        </ul>
        <div className="nav-phone__title">
          內容形式<span>選擇適合你的學習形式</span>
        </div>
        <ul className="nav-phone__list nav-phone__list--2">
          <li className="nav-phone__item">
            <span>影音課程</span>
          </li>
          <li className="nav-phone__item">
            <span>直播</span>
          </li>
          <li className="nav-phone__item">
            <span>文章</span>
          </li>
          <li className="nav-phone__item">
            <span>組合</span>
          </li>
        </ul>

        <div className="nav-phone__business-plan">
          <i class="fa-solid fa-suitcase"></i>企業方案
        </div>

        <div className="nav-phone__advert">
          <img
            src="https://images.hahow.in/images/67bfcaea2c0016caf681534e"
            alt=""
          />
        </div>
      </div>

      <div className="nav-box">
        <nav className="nav">
          <div className="nav__logo-box">
            <img
              src="./src/assets/images/logo.svg"
              alt=""
              className="nav__logo"
            />
          </div>

          <div className="category">
            <button className="category__button">
              探索
              <i class="fa-solid fa-caret-down category__icon "></i>
            </button>
            <div className="category__pop">
              <HeaderListPop data={exploreData2} />
            </div>

          </div>

          {showSearch ? (
            <div className="search">
              <div className="search__icon-box">
                <i class="fa-solid fa-magnifying-glass search__icon"></i>
              </div>
              <input
                type="text"
                className="search__input"
                placeholder="搜尋影音課程、文章、直播、組合..."
              />

              <button className="search__button">
                <i
                  class="fa-brands fa-searchengin"
                  title="使用Hahow智慧搜尋"
                ></i>
              </button>
            </div>
          ) : (
            <i class="fa-solid fa-magnifying-glass search__icon"></i>
          )}

          <div className="discount">
            <img
              className="discount__img"
              src="https://images.hahow.in/images/67bfcaea2c0016caf681534e"
              alt="discount img"
            />
          </div>

          <div className="user-nav">
            <div className="user-nav__learning">
              <span>我的學習</span>
              <HeaderPop
                rootPositon={-2}
                blockPosition={-30}
                backgroundColor="white"
                type="learning"
              >
                <div className="learning-pop__learning-list">
                  <div className="learning-pop__continue">
                    <p>繼續上課</p>
                    <LearningCard
                      classProp="learning-pop"
                      src={exampleImg}
                      title="動畫互動網頁程式入門(HTML/CSS/JS)"
                      progress={79}
                      type="課程"
                      isRecent={false}
                    />
                  </div>
                  <div className="learning-pop__recent">
                    <p
                      style={{
                        borderBottom: '1px solid black',
                        paddingBottom: '1rem',
                      }}
                    >
                      最近學習
                    </p>
                    <LearningCard
                      classProp="learning-pop"
                      src={exampleImg}
                      title="動畫互動網頁程式入門(HTML/CSS/JS)"
                      progress={79}
                      type="課程"
                      isRecent={true}
                    />
                    <LearningCard
                      classProp="learning-pop"
                      src={exampleImg}
                      title="動畫互動網頁程式入門(HTML/CSS/JS)"
                      progress={79}
                      type="課程"
                      isRecent={true}
                    />
                    <LearningCard
                      classProp="learning-pop"
                      src={exampleImg}
                      title="動畫互動網頁程式入門(HTML/CSS/JS)"
                      progress={79}
                      type="課程"
                      isRecent={true}
                    />
                  </div>
                </div>
              </HeaderPop>
            </div>

            <div className="user-nav__icon-box">
              <div className="user-nav__cart">
                <span className="user-nav__notification-i">1</span>
                <i class="fa-solid fa-cart-shopping user-nav__icon"></i>
                <HeaderPop
                  rootPositon={-4}
                  blockPosition={-30}
                  backgroundColor="white"
                  type="cart"
                >
                  <div className="cart-pop__card">
                    <div className="cart-pop__img-box">
                      <div className="cart-pop__tag">
                        <ClassTag type="class" />
                      </div>

                      <img src={exampleImg} alt="" className="cart-pop__img" />
                    </div>

                    <div className="cart-pop__info">
                      <div className="cart-pop__title">
                        Processing - 讓程式碼說設計語言
                      </div>
                      <div className="cart-pop__price">NT$1,200</div>
                    </div>
                  </div>

                  {/* <div className="cart-pop__button-box">
                <button className="cart-pop__button">前往我的學習</button>
              </div> */}
                </HeaderPop>
              </div>
            </div>

            <div className="user-nav__icon-box ">
              <div className="user-nav__notification">
                <span className="user-nav__notification-i">1</span>
                <i class="fa-regular fa-bell user-nav__icon"></i>

                <HeaderPop
                  rootPositon={-4}
                  blockPosition={-30}
                  backgroundColor="#EFF2F6"
                >
                  <div className="notification-pop__header">
                    全部標記為已讀<i class="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="notification-pop__card">
                    <div className="notification-pop__img-box">
                      <img
                        src="https://hahow.in/static/media/notification-profile-default.4c8399e674f9273e094a.png"
                        alt=""
                        className="notification-pop__img"
                      />
                    </div>
                    <div className="notification-pop__text">
                      課程「產品設計實戰：用Figma打造絕佳UI/UX」發佈了一篇新消息「【AAPD
                      第二屆產品設計挑戰賽】｜早鳥優惠最後一天 🔥🔥🔥！」
                    </div>
                    <div className="notification-pop__date">五個月</div>
                  </div>
                  <div className="notification-pop__card">
                    <div className="notification-pop__img-box">
                      <img
                        src="https://hahow.in/static/media/notification-profile-default.4c8399e674f9273e094a.png"
                        alt=""
                        className="notification-pop__img"
                      />
                    </div>
                    <div className="notification-pop__text">
                      課程「產品設計實戰：用Figma打造絕佳UI/UX」發佈了一篇新消息「【AAPD
                      第二屆產品設計挑戰賽】｜早鳥優惠最後一天 🔥🔥🔥！」
                    </div>
                    <div className="notification-pop__date">五個月</div>
                  </div>
                  <div className="notification-pop__card">
                    <div className="notification-pop__img-box">
                      <img
                        src="https://hahow.in/static/media/notification-profile-default.4c8399e674f9273e094a.png"
                        alt=""
                        className="notification-pop__img"
                      />
                    </div>
                    <div className="notification-pop__text">
                      課程「產品設計實戰：用Figma打造絕佳UI/UX」發佈了一篇新消息「【AAPD
                      第二屆產品設計挑戰賽】｜早鳥優惠最後一天 🔥🔥🔥！」
                    </div>
                    <div className="notification-pop__date">五個月</div>
                  </div>
                </HeaderPop>
              </div>
            </div>
            <div
              className="user-nav__hamburger-box"
              onClick={() => {
                console.log('pass');
                setShowBar((prev) => !prev);
              }}
            >
              <div className="user-nav__hamburger"></div>
            </div>

            <div className="user-nav__photo-box">
              <img
                src="./src/assets/images/user.jpeg"
                alt=""
                className="user-nav__photo"
              />
              <i class="fa-solid fa-caret-down user-nav__arr"></i>
              <HeaderPop
                rootPositon={-4}
                blockPosition={-30}
                backgroundColor="#EFF2F6"
              >
                <div className="photo-pop__user">
                  <div className="photo-pop__first-box">
                    <div className="photo-pop__user-info">
                      <div className="photo-pop__photo">
                        <img src="../src/assets/images/user.jpeg" alt="" />
                      </div>
                      <div className="photo-pop__user">
                        <div className="photo-pop__name">Danny Xiao</div>
                        <div className="photo-pop__level">青銅旅行者</div>
                      </div>
                    </div>
                    <div className="photo-pop__arrow">
                      <i class="fa-solid fa-angle-right"></i>
                    </div>
                  </div>

                  <div className="photo-pop__second-box">
                    <div className="photo-pop__levelup">
                      <p>會員等級提升啦</p>
                      <p>
                        查看詳情 <i class="fa-solid fa-angle-right"></i>
                      </p>
                    </div>
                    <div className="photo-pop__levelup-img">
                      <img src={mainImg} alt="" />
                    </div>
                  </div>

                  <div className="photo-pop__third-box">
                    <div className="photo-pop__list">
                      <ul>
                        <div className="photo-pop__item--1">
                          <li className="photo-pop__item">個人檔案</li>
                          <li className="photo-pop__item">我的收藏</li>
                          <li className="photo-pop__item photo-pop__account">
                            <span>帳號設定</span>
                            <span>尚未完成</span>
                          </li>
                        </div>

                        <div className="photo-pop__item--2">
                          <li className="photo-pop__item photo-pop__point">
                            <span>Hahow Point</span>
                            <span>360HP</span>
                          </li>
                          <li className="photo-pop__item photo-pop__point">
                            <span>Money Point</span>
                            <span>0MP</span>
                          </li>
                        </div>

                        <div className="photo-pop__item--3">
                          <li className="photo-pop__item">訂單紀錄</li>
                          <li className="photo-pop__item">我的折扣</li>
                        </div>

                        <div className="photo-pop__item--4">
                          <li className="photo-pop__item">邀請朋友</li>
                          <li className="photo-pop__item">享回饋金</li>
                        </div>

                        <li className="photo-pop__item">登出</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="notification-pop__button-box">
                <button className="notification-pop__button">前往我的學習</button>
              </div> */}
              </HeaderPop>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MainNav;
