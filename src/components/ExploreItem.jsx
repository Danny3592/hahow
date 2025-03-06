import React from 'react';

const ExploreItem = ({ icon, text }) => {
  return (
    <li>
      <a href="">
        <div className="explore__item">{text}</div>
        <img src={icon} alt="" className="explore__img" />
      </a>
    </li>
  );
};

export default ExploreItem;
