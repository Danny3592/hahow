import HeaderPopButton from './HeaderPopButton';

const HeaderPop = ({
  children,
  rootPositon,
  blockPosition,
  backgroundColor,
  type,
}) => {
  return (
    <div className="header-pop-box">
      <div
        className="header-pop"
        style={{
          left: `${blockPosition}rem `,
          backgroundColor: `${backgroundColor}`,
        }}
      >
        {children}
      </div>
      <div
        className="header-pop__root"
        style={{ left: `${rootPositon}rem ` }}
      ></div>
      <HeaderPopButton type={type} />
    </div>
  );
};

export default HeaderPop;
