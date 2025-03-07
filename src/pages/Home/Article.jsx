import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import ArticleCard from '../../components/Card/ArticleCard';

const Article = () => {
  return (
    <div className="article">
      <div className="article-box">
        <SectionTitle
          mainTitle="精選文章"
          subTitle="每周為你嚴選系列文章"
          hasMore={true}
        />

        <div className="article__cards">
          <ArticleCard
            classProps="article"
            img="https://images.hahow.in/images/658e24db25305847ebb73512?width=300"
            title="零基礎入門網頁前端，了解如何持續精進網頁設計能力！"
            text="對前端網頁設計有興趣，想成為前端網頁設計師，或是想往前端工程師邁進，但相關的課程百百種，卻不知道學習該從哪裡開始？"
            date="2021/05/25"
            views="36,714"
            tags={['學程式', '網站前端']}
            author="小娃"
            authorImg="	https://images.api.hahow.in/images/623ac161f42cbb00072138f9"
          />
          <ArticleCard
            classProps="article"
            img="https://images.hahow.in/images/60a72421328ad062c9d99fda?width=300"
            title="產品經理 PM 的成長：掌握 PM 工作內容，順暢職涯發展"
            text="每天都在喬事情、趕死線？身為產品經理（PM，Product Manager）
                  的你是否在夜深人靜時，突然覺得我真的在做 PM 嗎？想成為真 PM
                  ，先來看產品經理的職涯路徑！"
            date="2021/05/25"
            views="36,714"
            tags={['職場必備技能', '找工作']}
            author="商業思維學院"
            authorImg="https://images.api.hahow.in/images/60a4706576d34bc3b4a018a2"
          />

          <ArticleCard
            classProps="article"
            img="https://images.hahow.in/images/62e8e2e4a2bf710007b30dcf?width=300"
            title="Notion 筆記軟體教學 6 – 資料庫進階編輯（切換顯示、篩選器、分組顯示）"
            text="了解 Notion 資料庫建置方法後，可以透過切換顯示、篩選器和分組顯示讓使用更順暢，一起來學習 Notion 資料庫進階編輯的方法吧！"
            date="2020/08/25"
            views="22,714"
            tags={['職場必備技能', '效率提稱']}
            author="人生雞湯罐 LCS"
            authorImg="https://images.api.hahow.in/images/62a38c4e4b6fc80006a8e12c"
          />

          <ArticleCard
            classProps="article"
            img="https://images.hahow.in/images/658e24db25305847ebb73512?width=300"
            title="零基礎入門網頁前端，了解如何持續精進網頁設計能力！"
            text="對前端網頁設計有興趣，想成為前端網頁設計師，或是想往前端工程師邁進，但相關的課程百百種，卻不知道學習該從哪裡開始？"
            date="2021/05/25"
            views="36,714"
            tags={['學程式', '網站前端']}
            author="小娃"
            authorImg="	https://images.api.hahow.in/images/623ac161f42cbb00072138f9"
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
