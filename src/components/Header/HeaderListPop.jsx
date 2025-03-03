import React, { useEffect, useState } from 'react';
import { exploreData2 } from '../../../util/header-data';
import HeaderPopMenu from './HeaderPopMenu'

const HeaderPop = () => {
  return (
    <>
      <HeaderPopMenu  data={exploreData2}/>
    </>
  );
};

export default HeaderPop;
