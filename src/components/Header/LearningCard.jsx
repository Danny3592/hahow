import React from 'react';

const LearningCard = ({ src, title, progress, type, isRecent,classProp }) => {
  return (
    <>
      <div
        className={`${classProp}__card`}
        style={{
          borderBottom: isRecent && '1px solid black',
          paddingBottom: isRecent && '1rem',
        }}
      >
        <img src={src} className={`${classProp}__img`} alt="" />
        <div className={`${classProp}__info`}>
          <div className={`${classProp}__title`}>{title}</div>
          <div className={`${classProp}__status`}>
            <div className={`${classProp}__progress`}>上課進度 {progress}%</div>
            <div className={`${classProp}__type`}>{type}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningCard;
