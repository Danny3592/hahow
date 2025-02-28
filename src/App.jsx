const CATEGORY_DATA = [
  {
    name: '領域分類',
    desctiption: '選擇你有興趣的領域',
    category: [
      {
        categoryName: '所有領域',
        content: [
          {
            title: '沙發上的插畫課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
          {
            title: '沙發上的插畫課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
          {
            title: '沙發上的插畫課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
        ],
      },
      {
        categoryName: '音樂',
        content: [
          {
            title: '沙灘上的鋼琴課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
          {
            title: '沙灘上的鋼琴課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
          {
            title: '沙灘上的鋼琴課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
        ],
      },
    ],
  },
  {
    name: '學習形式',
    desctiption: '選擇適合你的學習形式',
    category: [
      {
        categoryName: '直播',
        content: [
          {
            title: '沙發上的插畫課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
          {
            title: '沙發上的插畫課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
          {
            title: '沙發上的插畫課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
        ],
      },
      {
        categoryName: '文章',
        content: [
          {
            title: '沙灘上的鋼琴課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
          {
            title: '沙灘上的鋼琴課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
          {
            title: '沙灘上的鋼琴課',
            image:
              'https://unsplash.com/photos/red-blue-and-white-flowers-5TK1F5VfdIk',
            author: 'Danny',
            time: 3,
            price: 3280,
            numOfPeople: 4128,
          },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <>
      <div className="nav-box">
        <nav className="nav">
          <div className="nav__logo-box">
            <img
              src="./src/assets/images/logo.svg"
              alt=""
              className="nav__logo"
            />
          </div>

          <div className="category">
            <button className="category__button">
              探索<i class="fa-solid fa-caret-down category__icon "></i>
            </button>

            <div className="category__board">
              <div className="category__list category__list--1">
                <ul>
                  <li className="category__item">
                    <p>
                      領域分類
                      <span>選擇你有興趣的領域</span>
                    </p>
                    <i class="fa-solid fa-angle-right"></i>
                  </li>
                  <li className="category__item">
                    <p>
                      內容形式 <span>選擇適合你的學習形式</span>
                    </p>
                    <i class="fa-solid fa-angle-right"></i>
                  </li>
                  <li></li>
                </ul>
              </div>
              <div className="category__list category__list--2">
                <ul>
                  <li className="category__item">
                    <p>領域分類</p>
                    <i class="fa-solid fa-angle-right"></i>
                  </li>
                  <li className="category__item">
                    <p>所有領域</p>
                  </li>
                </ul>
              </div>
              <div className="category__list category__list--3"></div>
            </div>
          </div>

          <div className="search">
            <div className="search__icon-box">
              <i class="fa-solid fa-magnifying-glass search__icon"></i>
            </div>
            <input
              type="text"
              className="search__input"
              placeholder="搜尋影音課程、文章、直播、組合..."
            />
            <button className="search__button">
              <i class="fa-brands fa-searchengin" title="使用Hahow智慧搜尋"></i>
            </button>
          </div>

          <div className="discount">
            <img
              className="discount__img"
              src="https://images.hahow.in/images/67bfcaea2c0016caf681534e"
              alt="discount img"
            />
          </div>

          <div className="user-nav">
            <div className="user-nav__learning">我的學習</div>
            <div className="user-nav__icon-box">
              <span className="user-nav__notification">1</span>
              <i class="fa-solid fa-cart-shopping user-nav__icon"></i>
            </div>
            <div className="user-nav__icon-box ">
              <span className="user-nav__notification">60</span>
              <i class="fa-regular fa-bell user-nav__icon"></i>
            </div>

            <div className="user-nav__photo-box">
              <img
                src="./src/assets/images/user.jpeg"
                alt=""
                className="user-nav__photo"
              />
              <i class="fa-solid fa-caret-down user-nav__arr"></i>
            </div>
          </div>
        </nav>
      </div>
      <header className="header"></header>
      <div className="learning"></div>
      <div className="new-class"></div>
      <div className="want-learn"></div>
      <div className="explore"></div>
      <div className="pick"></div>
      <div className="live"></div>
      <div className="popular"></div>
      <div className="article"></div>
      <div className="creators"></div>
      <div className="cooperators"></div>
      <div className="cta"></div>
    </>
  );
};

export default App;
