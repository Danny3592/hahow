import React from 'react';
import { exploreData2 } from '../../util/header-data';
import CategoryMenu from './HeaderPopMenu';

const HeaderPop = () => {
  return (
    <div className="header-pop">
      <div className="header-pop__content">
        <CategoryMenu data={exploreData2} />
      </div>
    </div>
  );
};

export default HeaderPop;
