import React from 'react';

const StarEvaluate = ({ score, count }) => {
  return (
    <div className="star-evaluate">
      <i class="fa-solid fa-star"></i>
      {score} <span style={{color:'#D2D2D2'}}> {`(${count})`}</span>
    </div>
  );
};

export default StarEvaluate;
