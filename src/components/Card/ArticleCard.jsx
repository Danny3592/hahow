import React from 'react';

const ArticleCard = ({
  classProps,
  img,
  title,
  text,
  date,
  views,
  tags,
  author,
  authorImg
}) => {
  return (
    <>
      <div className={`${classProps}__card`}>
        <div className={`${classProps}__card--top`}>
          <div className={`${classProps}__info`}>
            <div className={`${classProps}__status`}>
              <div className={`${classProps}__author`}>
                <img src={authorImg} alt="" />
                <span>{author}</span>
              </div>
              <div className={`${classProps}__date`}>{date}</div>
              <div className={`${classProps}__views`}>{views}</div>
            </div>
            <h2 className={`${classProps}__title`}>{title}</h2>
            <div className={`${classProps}__text`}>{text}</div>
          </div>
          <div className={`${classProps}__img-box`}>
            <img src={img} alt="" className={`${classProps}__img`} />
          </div>
        </div>
        <div className={`${classProps}__card--bottom`}>
          <div className={`${classProps}__caregory`}>
            {tags?.map((item,index) => (
              <div className={`${classProps}__tag`} key={index}>
                <span>#</span>
                {item}
              </div>
            ))}
          </div>
          <div className={`${classProps}__bookmark`}>
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
