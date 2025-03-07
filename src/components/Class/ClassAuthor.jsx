import React from 'react';

const ClassAuthor = ({author}) => {
  return (
    <div
      style={{
        fontSize: '1.2rem',
        color: '#B7B7B7',
      }}
    >
      by {author}
    </div>
  );
};

export default ClassAuthor;
