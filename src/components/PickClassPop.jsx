import React from 'react';
import ChatFrame from './ChatFrame';

const PickClassPop = ({ children }) => {
  return (
    <div className="pick-pop">
      {children}
      <div className="pick-pop__root"></div>
    </div>
  );
};

export default PickClassPop;
