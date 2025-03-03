import { useEffect, useState } from 'react';

// 遞迴選單組件
const RecursiveMenu = ({ categories, currentLayer, setLayerCount }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null); // 追蹤目前 hover 的項目

  useEffect(() => {
    // 當滑鼠進入這層選單時，設定當前層數
    setLayerCount(currentLayer);
  }, [activeCategory]);

  return (
    <ul className={`menu header-pop__list header-pop__list--${currentLayer}`}>
      {categories.map((category, index) => {
        console.log(category);
        return (
          <li
            key={index}
            className={`header-pop__item ${
              hoveredItem === index ? 'hovered' : ''
            }`}
            onMouseEnter={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setActiveCategory(category.name);
                setHoveredItem(index);
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setHoveredItem(null);
                if (!category.subCategories) setLayerCount(currentLayer - 1);
              }
            }}
          >
            <h4>
              {category.name} {category.subCategories && '>'}
            </h4>

            {category.description ? category.description : ''}
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
    <RecursiveMenu
      categories={data[0].content[0].subCategories}
      currentLayer={1} // 初始化為第一層
      setLayerCount={setLayer}
    />
  );
};

export default CategoryMenu;
