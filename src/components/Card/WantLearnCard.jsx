import React from 'react';
import StarEvaluate from '../StarEvaluate';
import ClassDuration from '../Class/ClassDuration';
import ClassPeople from '../Class/ClassPeople';
import ClassPrice from '../Class/ClassPrice';
import ClassTag from '../Class/ClassTag';
import ClassAuthor from '../Class/ClassAuthor';

const WantLearnCard = ({
  classProps,
  src,
  author,
  score,
  count,
  time,
  price,
  people,
  title,
}) => {
  return (
    <div className={`${classProps}__card ${classProps}__card--1`}>
      <div className={`${classProps}__img-box`}>
        <div className={`${classProps}__tag`}>
          <ClassTag type="class" />
        </div>
        <img src={src} alt="" className={`${classProps}__img`} />
      </div>
      <div className={`${classProps}__info-box`}>
        <div className={`${classProps}__title`}>{title}</div>
        <ClassAuthor author={author} />
        <div className={`${classProps}__status`}>
          <div>
            <StarEvaluate score={score} count={count} />
          </div>
          <div>
            <ClassDuration time={time} />
          </div>
          <div>
            <ClassPeople people={people} />
          </div>
        </div>
        <div>
          <ClassPrice price={price} />
        </div>
      </div>
    </div>
  );
};

export default WantLearnCard;
