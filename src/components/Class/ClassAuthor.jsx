import React from 'react';

const ClassAuthor = ({author}) => {
  return (
    <div
      style={{
        padding: '1rem 0',
        fontSize: '1.6rem',
        color: '#B7B7B7',
      }}
    >
      by {author}
    </div>
  );
};

export default ClassAuthor;
