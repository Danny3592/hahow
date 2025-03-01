import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const Cooperators = () => {
  return (
    <div className="cooperators u-box">
      <div className="cooperators__left">
        <SectionTitle
          mainTitle="合作單位"
          subTitle="提供知識內容的專業合作單位"
          hasMore={false}
        />

        <ul className="cooperators__list">
          <li className="cooperators__item">
            <img
              className="cooperators__img"
              src="https://images.hahow.in/images/64a522b96781ae5210131d04"
              alt=""
            />
          </li>
          <li className="cooperators__item">
            <img
              className="cooperators__img"
              src="https://images.hahow.in/images/64a522b96781ae5210131d04"
              alt=""
            />
          </li>
          <li className="cooperators__item">
            <img
              className="cooperators__img"
              src="https://images.hahow.in/images/64a522b96781ae5210131d04"
              alt=""
            />
          </li>
          <li className="cooperators__item">
            <img
              className="cooperators__img"
              src="https://images.hahow.in/images/64a522b96781ae5210131d04"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="cooperators__right">
        <div className="cooperators__join">
          <div className="cooperators__icon">
            <i class="fa-solid fa-hat-cowboy"></i>
          </div>
          <div className="cooperators__text">
            加入 Hahow 創作者的行列<span>列 用你的知識產生影響力</span>
          </div>
          <div className="cooperators__button">我要開課</div>
        </div>
      </div>
    </div>
  );
};

export default Cooperators;
