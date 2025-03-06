import React from 'react';

const ClassDuration = ({time}) => {
  return (
    <div className="class-duration">
      <i class="fa-solid fa-clock" style={{marginRight:'0.5rem'}}></i>{time}小時
    </div>
  );
};

export default ClassDuration;
