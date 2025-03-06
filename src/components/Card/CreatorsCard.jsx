import React from 'react';

const CreatorsCard = ({ classProps, creator, text, coruseName, index }) => {
  return (
    <>
      <div className={`${classProps}__card ${classProps}__card--${index}`}>
        <img
          src="	https://hahow.in/static/media/img-deco-left.410e62a093a044accaff61354a57c1a8.svg"
          alt=""
          className={`${classProps}__decoration ${classProps}__decoration--1`}
        />
        <img
          src="https://hahow.in/static/media/img-deco-right.461bb1bb6670a15ccbe11c746bae35b4.svg"
          alt=""
          className={`${classProps}__decoration ${classProps}__decoration--2`}
        />
        <div className={`${classProps}__info`}>
          <div className={`${classProps}__creator`}>{creator}</div>
          <div className={`${classProps}__text`}>{text}</div>
          <div className={`${classProps}__class-box`}>
            <div className={`${classProps}__class`}>
              <div className={`${classProps}__tag-box`}>
                <span className={`${classProps}__tag`}>課程</span>
              </div>

              <div className={`${classProps}__class-name`}>{coruseName}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorsCard;
