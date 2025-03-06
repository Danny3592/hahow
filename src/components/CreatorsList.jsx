import React from 'react';
import CreatorsCard from './Card/CreatorsCard';

const CreatorsList = () => {
  return (

    {Array(3).fill.map((index)=>(
<CreatorsCard
      classProps="creators"
      creator="莫彩曦｜知名YouTuber"
      text="Hailey
              莫彩曦深愛台灣，將文化融入美國，讓更多人沉浸在台灣的美麗與魅力中。"
      coruseName="跟 YouTuber 莫彩曦學美國道地的說話習慣"
    />
    ))}

    


  );
};

export default CreatorsList;
