import { useEffect, useState } from "react";

// 遞迴選單組件
const RecursiveMenu = ({ categories, currentLayer, setLayerCount }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // 當滑鼠進入這層選單時，設定當前層數
    setLayerCount(currentLayer);
  }, [activeCategory]);

  return (
    <ul className="menu">
      {categories.map((category, index) => (
        <li
          key={index}
          className="menu__item"
          onMouseEnter={() => setActiveCategory(category.name)}
          onMouseLeave={() => {
            if (!category.subCategories) setLayerCount(currentLayer - 1);
          }}
        >
          {category.name} {category.subCategories && ">"}
          
          {/* 如果有子分類，則遞迴渲染下一層 */}
          {activeCategory === category.name && category.subCategories && (
            <div className={`submenu header-pop__list header-pop__list--${currentLayer}`}>
              <RecursiveMenu
                categories={category.subCategories}
                currentLayer={currentLayer + 1} // 讓下一層知道自己是第幾層
                setLayerCount={setLayerCount}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

// 主選單組件
const CategoryMenu = ({ data }) => {
  const [layer, setLayer] = useState(1); // 記錄當前顯示的巢狀層數

  return (
    <div className="category-menu">
      <h3>當前顯示層數: {layer}</h3>
      <RecursiveMenu
        categories={data[0].content[0].subCategories}
        currentLayer={1} // 初始化為第一層
        setLayerCount={setLayer}
      />
    </div>
  );
};

export default CategoryMenu;
