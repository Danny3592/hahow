import { useEffect, useState } from 'react';
import WantLearnCard from '../Card/WantLearnCard';

// 遞迴選單組件
const RecursiveMenu = ({ categories, currentLayer, setLayerCount }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // 當滑鼠進入這層選單時，設定當前層數
    setLayerCount(currentLayer);
  }, [activeCategory]);

  useEffect(() => {
    if (currentLayer === 1 ) {
      setActiveCategory(categories[0].name);
    }
    
  }, [currentLayer]);

  return (
    <ul
      className={`header-pop-menu__list header-pop-menu__list--${currentLayer}`}
    >
      {categories.map((category, index) => {
        return (
          <li
            key={index}
            className={`header-pop-menu__item ${
              category.name
                ? activeCategory === category?.name
                  ? 'header-pop-menu__active'
                  : ''
                : activeCategory === category?.cardTitle
                ? 'header-pop-menu__active'
                : ''
            }`}
            onMouseEnter={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setActiveCategory(() => {
                 return category.name ? category.name : category.cardTitle;
                });
              }
            }}
            onMouseLeave={(e) => {
              setActiveCategory(null);
              if (!e.currentTarget.contains(e.relatedTarget)) {
                if (!category.subCategories) setLayerCount(currentLayer - 1);
              }
            }}
          >
            {category.name && (
              <h4>
                {category.name} {category.subCategories && '>'}
              </h4>
            )}

            {category?.src && (
              <WantLearnCard
                classProps="want-learning-card"
                src={category?.src}
                author={category?.author}
                score={category?.score}
                count={category?.count}
                time={category?.time}
                price={category?.price}
                people={category?.people}
                title={category?.cardTitle}
              />
            )}

            {category.description ? <p>{`${category.description}`}</p> : ''}
            {activeCategory === category.name && category.subCategories && (
              <RecursiveMenu
                categories={category.subCategories}
                currentLayer={currentLayer + 1}
                setLayerCount={setLayerCount}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

// 主選單組件
const CategoryMenu = ({ data }) => {
  const [layer, setLayer] = useState(0); // 記錄當前顯示的巢狀層數
  return (
    <div className="header-pop-menu">
      <div className="header-pop-menu__content">
        <RecursiveMenu
          categories={data[0]?.content[0]?.subCategories}
          currentLayer={1} // 初始化為第一層
          setLayerCount={setLayer}
        />
      </div>
    </div>
  );
};

export default CategoryMenu;
