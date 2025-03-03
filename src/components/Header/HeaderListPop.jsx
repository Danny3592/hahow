import React, { useEffect, useState } from 'react';
import { exploreData2 } from '../../../util/header-data';

const HeaderPop = () => {
  // console.log('exploreData2 = ', exploreData2);

  // const [list1, setList1] = useState('');
  // const [list2, setList2] = useState('');
  // const [list3, setList3] = useState('');
  // const [list4, setList4] = useState('');

  // useEffect(() => {
  //   setList1(exploreData2);
  // }, [exploreData2]);

  // useEffect(() => {}, [list1]);

  return (
    <div className="header-list-pop">
    {  /*
      <div className="header-list-pop__content">
        <ul className="header-list-pop__list header-list-pop__list--1">
          {list1?.map((item, index) => {
            return (
              <li
                key={index}
                onMouseEnter={() => {
                  setList1(item?.title);
                }}
                onMouseLeave={() => {
                  setList1(null);
                }}
              >
                <p>{item?.title}</p>
              </li>
            );
          })}
        </ul>
        <ul className="header-list-pop__list header-list-pop__list--2">2</ul>
        <ul className="header-list-pop__list header-list-pop__list--3">3</ul>
        <ul className="header-list-pop__list header-list-pop__list--4">4</ul>
      </div>
      */ }
    </div>
  );
};

export default HeaderPop;
