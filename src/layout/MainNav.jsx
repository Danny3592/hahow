import React from 'react';

const MainNav = () => {
  return (
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
            探索<i class="fa-solid fa-caret-down category__icon "></i>
          </button>

          <div className="category__board">
            <div className="category__list category__list--1"></div>
            <div className="category__list category__list--2"></div>
            <div className="category__list category__list--3"></div>
          </div>
        </div>

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
            <i class="fa-brands fa-searchengin" title="使用Hahow智慧搜尋"></i>
          </button>
        </div>

        <div className="discount">
          <img
            className="discount__img"
            src="https://images.hahow.in/images/67bfcaea2c0016caf681534e"
            alt="discount img"
          />
        </div>

        <div className="user-nav">
          <div className="user-nav__learning">我的學習</div>
          <div className="user-nav__icon-box">
            <span className="user-nav__notification">1</span>
            <i class="fa-solid fa-cart-shopping user-nav__icon"></i>
          </div>
          <div className="user-nav__icon-box ">
            <span className="user-nav__notification">60</span>
            <i class="fa-regular fa-bell user-nav__icon"></i>
          </div>

          <div className="user-nav__photo-box">
            <img
              src="./src/assets/images/user.jpeg"
              alt=""
              className="user-nav__photo"
            />
            <i class="fa-solid fa-caret-down user-nav__arr"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
