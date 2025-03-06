import React from 'react';

const CooperatorCard = ({src}) => {
  return (
    <li className="cooperators__item">
      <img
        className="cooperators__img"
        src={src}
        alt=""
      />
    </li>
  );
};

export default CooperatorCard;
