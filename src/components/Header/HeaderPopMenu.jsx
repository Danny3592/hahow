import { useEffect, useState } from 'react';

// 遞迴選單組件
const RecursiveMenu = ({ categories, currentLayer, setLayerCount }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null); // 追蹤目前 hover 的項目

  useEffect(() => {
    // 當滑鼠進入這層選單時，設定當前層數
    setLayerCount(currentLayer);
    console.log('activeCategory = ', activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    // 當滑鼠進入這層選單時，設定當前層數
    console.log(currentLayer);
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
              activeCategory === category.name ? 'header-pop-menu__active' : ''
            }`}
            onMouseEnter={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setActiveCategory(category.name);
              }
            }}
            onMouseLeave={(e) => {
              // setActiveCategory(null)
              //  console.log('e.relatedTarget = ',e.relatedTarget);
              //  console.log('e.currentTarget = ',e.currentTarget);
              // if (!e.currentTarget.contains(e.relatedTarget)) {
              //   if (!category.subCategories) setLayerCount(currentLayer - 1);
              // }
            }}
          >
            <h4>
              {category.name} {category.subCategories && '>'}
            </h4>

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
          categories={data[0].content[0].subCategories}
          currentLayer={1} // 初始化為第一層
          setLayerCount={setLayer}
        />
      </div>
    </div>
  );
};

export default CategoryMenu;
