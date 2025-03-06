import React from 'react';

const CtaCard = ({ classProps, img, title, text, index }) => {
  return (
    <div className={`${classProps}__card ${classProps}__card--${index}`}>
      <div className={`${classProps}__card-text`}>
        {title}
        <i class="fa-solid fa-caret-right"></i>
        <span>{text}</span>
      </div>
      <img src={img} alt="" className={`${classProps}__card-img`} />
    </div>
  );
};

export default CtaCard;
