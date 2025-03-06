import React from 'react';

const ClassTag = ({ type }) => {
  if (type === 'class') {
    return <span className="class-green-tag">課程</span>;
  }
  if (type === 'hot') {
    return (
      <div className="class-hot-tag">
        <i class="fa-solid fa-fire"></i>熱門課程
      </div>
    );
  }
};

export default ClassTag;
