import React from 'react';
import { exampleImg, pickClassImg } from '../../../util/home-img';
import ClassTag from '../Class/ClassTag';
import StarEvaluate from '../StarEvaluate';
import ClassDuration from '../Class/ClassDuration';
import ClassPeople from '../Class/ClassPeople';
import ClassPrice from '../Class/ClassPrice';
import PickClassPop from '../PickClassPop';

const PickClassCard = ({
  classProps,
  score,
  count,
  time,
  people,
  price,
  getWhat,
  title,
  img,
  text,
}) => {
  return (
    <div className={`${classProps}__card ${classProps}__card--1`}>
      <div className={`${classProps}__pop`}>
        <PickClassPop>
          <ClassTag type="class" />
          <div className={`${classProps}__pop-box`}>
            <div className={`${classProps}__class-status`}>
              <span className={`${classProps}__star`}>
                <StarEvaluate score={score} count={count} />
              </span>
              <span className={`${classProps}__duration`}></span>
              <ClassDuration time={time} />
              <ClassPeople people={people} />
            </div>
            <ClassPrice price={price} />
            <div className={`${classProps}__pop-content`}>
              <div className={`${classProps}__pop-title`}>你可以學到的東西</div>
              <p className={`${classProps}__pop-list`}>
                {getWhat?.map((item, index) => (
                  <span key={index} className={`${classProps}__pop-item`}>
                    {index+1}. {item}
                  </span>
                ))}
              </p>
            </div>
            <div className={`${classProps}__pop-button`}>瞭解課程內容</div>
          </div>
        </PickClassPop>
      </div>
      <div className={`${classProps}__img-box`}>
        <img className={`${classProps}__img`} src={img} alt="class" />
      </div>

      <div className={`${classProps}__card--bottom`}>
        <div>
          <div className={`${classProps}__title`}>{title}</div>
          <div className={`${classProps}__content`}>
            <img src={pickClassImg} alt="" className={`${classProps}__icon`} />

            <div className={`${classProps}__text`}>{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickClassCard;
