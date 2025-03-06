import React from 'react';

const HeaderPopButton = ({ type }) => {
  return (
    <>
      {type === 'cart' && (
        <div className="header-pop__button-box">
          <div className="header-pop__cart-items">
            <span className="header-pop__cart-item">總計1項商品</span>
            <span className="header-pop__cart-price">NT$1,200</span>
            <span className="header-pop__cart-i">i</span>
          </div>
          <button className="header-pop__button">前往購物車</button>
        </div>
      )}
      {type === 'learning' && (
        <div className="header-pop__button-box">
          <div className="header-pop__cart-items">
          </div>
          <button className="header-pop__button">前往我的學習</button>
        </div>
      )}
    </>
  );
};

export default HeaderPopButton;
