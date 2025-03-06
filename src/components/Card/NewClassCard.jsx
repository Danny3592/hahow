import React from 'react';
import ClassTag from '../Class/ClassTag';

const NewClassCard = ({
  classProps,
  isPromote,
  src,
  title,
  author,
  day,
  percentage,
  price,
  originPrice,
  isHot,
}) => {

  return (
    <div className={`${classProps}__card ${classProps}__card--1`}>
      <div className={`${classProps}__img-box`}>
        <i className={`fa-solid fa-bookmark ${classProps}__bookmark`}></i>
        {isPromote && (
          <span className={`${classProps}__promote`}>限時優惠</span>
        )}
        <img
          src={src}
          alt=""
          className={`${classProps}__img`}
        />
      </div>
      <div className={`${classProps}__title`}>
        <ClassTag type="class" />
        {title}
      </div>
      <div className={`${classProps}__author`}>by {author}</div>
      <div className={`${classProps}__status`}>
        <div className={`${classProps}__day`}>倒數募資{day}天</div>
        <div className={`${classProps}__percentage`}>{percentage}%</div>
      </div>
      <div className={`${classProps}__progressbar`}></div>
      <div>
        <span className={`${classProps}__price`}>NT${price}</span>
        <span className={`${classProps}__origin-price`}>NT${originPrice}</span>
      </div>
      {isHot && (
        <div className={`${classProps}__hot`}>
          <ClassTag type="hot" />
        </div>
      )}
    </div>
  );
};

export default NewClassCard;
