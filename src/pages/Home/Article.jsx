import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { exampleImg } from '../../../util/home-img';

const Article = () => {
  return (
    <div className="article">
      <div className="article-box u-box">
        <SectionTitle
          mainTitle="精選文章"
          subTitle="每周為你嚴選系列文章"
          hasMore={true}
        />

        <div className="article__cards">
          <div className="article__card">
            <div className="article__card--top">
              <div className="article__info">
                <div className="article__status">
                  <div className="article__author">
                    <img src="../src/assets/images/user.jpeg" alt="" />
                    <span>商業思維學院</span>
                  </div>
                  <div className="article__date">2021/05/25</div>
                  <div className="article__views">36,714</div>
                </div>
                <div className="article__title">
                  產品經理 PM 的成長：掌握 PM 工作內容，順暢職涯發展
                </div>
                <div className="article__text">
                  每天都在喬事情、趕死線？身為產品經理（PM，Product Manager）
                  的你是否在夜深人靜時，突然覺得我真的在做 PM 嗎？想成為真 PM
                  ，先來看產品經理的職涯路徑！
                </div>
              </div>
              <div className="article__img-box">
                <img src={exampleImg} alt="" className="article__img" />
              </div>
            </div>
            <div className="article__card--bottom">
              <div className="article__caregory">
                <div className="article__tag">
                  <span>#</span>職場必備技能
                </div>
                <div className="article__tag">
                  <span>#</span>找工作
                </div>
              </div>
              <div className="article__bookmark">
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="article__card">
            <div className="article__card--top">
              <div className="article__info">
                <div className="article__status">
                  <div className="article__author">
                    <img src="../src/assets/images/user.jpeg" alt="" />
                    <span>商業思維學院</span>
                  </div>
                  <div className="article__date">2021/05/25</div>
                  <div className="article__views">36,714</div>
                </div>
                <div className="article__title">
                  產品經理 PM 的成長：掌握 PM 工作內容，順暢職涯發展
                </div>
                <div className="article__text">
                  每天都在喬事情、趕死線？身為產品經理（PM，Product Manager）
                  的你是否在夜深人靜時，突然覺得我真的在做 PM 嗎？想成為真 PM
                  ，先來看產品經理的職涯路徑！
                </div>
              </div>
              <div className="article__img-box">
                <img src={exampleImg} alt="" className="article__img" />
              </div>
            </div>
            <div className="article__card--bottom">
              <div className="article__caregory">
                <div className="article__tag">
                  <span>#</span>職場必備技能
                </div>
                <div className="article__tag">
                  <span>#</span>找工作
                </div>
              </div>
              <div className="article__bookmark">
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="article__card">
            <div className="article__card--top">
              <div className="article__info">
                <div className="article__status">
                  <div className="article__author">
                    <img src="../src/assets/images/user.jpeg" alt="" />
                    <span>商業思維學院</span>
                  </div>
                  <div className="article__date">2021/05/25</div>
                  <div className="article__views">36,714</div>
                </div>
                <div className="article__title">
                  產品經理 PM 的成長：掌握 PM 工作內容，順暢職涯發展
                </div>
                <div className="article__text">
                  每天都在喬事情、趕死線？身為產品經理（PM，Product Manager）
                  的你是否在夜深人靜時，突然覺得我真的在做 PM 嗎？想成為真 PM
                  ，先來看產品經理的職涯路徑！
                </div>
              </div>
              <div className="article__img-box">
                <img src={exampleImg} alt="" className="article__img" />
              </div>
            </div>
            <div className="article__card--bottom">
              <div className="article__caregory">
                <div className="article__tag">
                  <span>#</span>職場必備技能
                </div>
                <div className="article__tag">
                  <span>#</span>找工作
                </div>
              </div>
              <div className="article__bookmark">
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="article__card">
            <div className="article__card--top">
              <div className="article__info">
                <div className="article__status">
                  <div className="article__author">
                    <img src="../src/assets/images/user.jpeg" alt="" />
                    <span>商業思維學院</span>
                  </div>
                  <div className="article__date">2021/05/25</div>
                  <div className="article__views">36,714</div>
                </div>
                <div className="article__title">
                  產品經理 PM 的成長：掌握 PM 工作內容，順暢職涯發展
                </div>
                <div className="article__text">
                  每天都在喬事情、趕死線？身為產品經理（PM，Product Manager）
                  的你是否在夜深人靜時，突然覺得我真的在做 PM 嗎？想成為真 PM
                  ，先來看產品經理的職涯路徑！
                </div>
              </div>
              <div className="article__img-box">
                <img src={exampleImg} alt="" className="article__img" />
              </div>
            </div>
            <div className="article__card--bottom">
              <div className="article__caregory">
                <div className="article__tag">
                  <span>#</span>職場必備技能
                </div>
                <div className="article__tag">
                  <span>#</span>找工作
                </div>
              </div>
              <div className="article__bookmark">
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
