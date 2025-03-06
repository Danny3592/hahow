import React from 'react';
import { exampleImg } from '../../../util/home-img';

const PopularCard = ({
  classProps,
  img,
  numberImg,
  title,
  author,
  people,
  price,
  originPrice,
}) => {
  return (
    <div className={`${classProps}__card`}>
      <img src={numberImg} alt="" className={`${classProps}__number`} />
      <div className={`${classProps}__item-box`}>
        <div className={`${classProps}__img-box`}>
          <img src={img} alt="" className={`${classProps}__img`} />
        </div>
        <div className={`${classProps}__info`}>
          <h2 className={`${classProps}__title`}>{title}</h2>
          <div className={`${classProps}__author`}>by {author}</div>
          <div className={`${classProps}__people`}>
            <i class="fa-solid fa-person"></i>
            {people}
          </div>
          <div className={`${classProps}__price-box`}>
            <div className={`${classProps}__price`}>NT$ {price}</div>
            <div className={`${classProps}__origin-price`}>
              NT$ {originPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
