import React from 'react';
import { listImg } from '../../../util/home-img';

const Explore = () => {
  return (
    <section className="explore">
      <div className="explore-box">
        <div className="explore__left"></div>
        <div className="explore__left-block"></div>
        <div className="explore__right">
          <div className="explore__decoration">
            <div className="explore__text">
              從興趣到專業<span>12大領域盡情探索</span>
            </div>
            <img
              src="https://hahow.in/static/media/wa.f48b10dead0df62c473e.png"
              alt="img"
            />
          </div>
          <div className="explore__list">
            <ul>
              <li>
                <a href="">
                  <div className="explore__item">
                    <div className="test">職場</div>
                  </div>
                </a>

                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">生活 品味</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">投資 理財</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">語言</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">程式</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">程式</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">程式</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">程式</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">程式</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">投資 理財</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">投資 理財</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
              <li>
                <div className="explore__item">投資</div>
                <img src={listImg} alt="" className="explore__img" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
