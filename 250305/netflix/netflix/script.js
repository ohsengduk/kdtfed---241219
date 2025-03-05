import { API_KEY } from "./env.js";

// Document Items
const nowplayingUl = document.querySelector(".nowplaying ul");
const upcomingUl = document.querySelector(".upcoming ul");
const topratedUl = document.querySelector(".toprated ul");

// Common URL
const tmdbCommand = "https://api.themoviedb.org/3";

// Create Element
const createElement = (movie, index, category) => {
  console.log(movie);
  const {
    adult,
    genre_ids,
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  const li = document.createElement("li");
  const moviePoster = document.createElement("div");
  const movieTitle = document.createElement("div");
  const movieDesc = document.createElement("div");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const ageLimit = document.createElement("span");
  const movieNum = document.createElement("span");
  const release = document.createElement("span");
  const vote = document.createElement("span");

  moviePoster.className = "moviePoster";
  movieTitle.className = "movieTitle";
  movieDesc.className = "movieDesc";

  let adultKo = adult === false ? "ALL" : "18";
  ageLimit.innerText = adultKo;
  movieNum.innerText = index + 1;

  release.innerText = release_date;
  vote.innerText = `⭐️${parseFloat(vote_average).toFixed(2)}`;

  li.className = id;
  li.setAttribute("data-category", category);

  moviePoster.append(img, ageLimit, movieNum);
  movieTitle.innerText = title;
  movieDesc.append(release, vote);
  li.append(moviePoster, movieTitle, movieDesc);

  if (category === "nowplaying") {
    nowplayingUl.appendChild(li);
  } else if (category === "upcoming") {
    upcomingUl.appendChild(li);
  } else if (category === "toprated") {
    topratedUl.appendChild(li);
  }
};

// NowPlaying DB
const nowPlaying = async () => {
  const url = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// UpComing DB
const upComing = async () => {
  const url = `${tmdbCommand}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// TopRated DB
const topRated = async () => {
  const url = `${tmdbCommand}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// Promise DBs
const getMovies = async () => {
  const [nowPlayingMovie, upComingMovie, topRatedMovie] = await Promise.all([
    nowPlaying(),
    upComing(),
    topRated(),
  ]);

  // Movie Items
  nowPlayingMovie.forEach((movie, index) => {
    createElement(movie, index, "nowplaying");
  });

  upComingMovie.forEach((movie, index) => {
    createElement(movie, index, "upcoming");
  });

  topRatedMovie.forEach((movie, index) => {
    createElement(movie, index, "toprated");
  });

  // Item slider
  // 전체 총 영화 아이템 개수 : 20개
  // 한번에 보여지는 영화 갯수는 : 5개
  // 좌 혹은 우측 슬라이드 버튼 클릭시 : 5개 이동
  // 한번에 보여지는 공간  900
  // (160 * 25) *4 160 => 20개의 영화 아이템을 가지고 있는 UI태그가 슬라이드 버튼 클릭시 이동해야하는 거리
  // 15~19번째 인텍스 영화 아이템 + 20개의 영화 아이켐 + 0~4번째 인덱스 영화 아이템
  // 1 2 3 4 5
  // 6 7 8 9 10
  // 11 12 13 14 15
  // 16 17 18 19 20

  //공통 반복사용 함수로 구현
  const initializeSlider = (
    SliderSelector,
    rightArrowselector,
    leftArrowselector
  ) => {
    const slider = document.querySelector(SliderSelector);
    console.log(slider);
    const slides = slider.querySelectorAll("li");
    const slideToShow = 5;
    const slideWidth = 160;
    const slideMargin = 25;
    let currentIndex = 0;
    let inTransitioning = false;

    const firstClones = slides.slice(0, slideToShow);
    console.log(firstClones);
  };

  initializeSlider(
    ".nowplaying ul",
    "#nowPlayingRightArrow",
    "#nowPlayingLeftArrow"
  );
  initializeSlider(".upcoming ul", "#upcomingLeftArrow", "#upcomingRightArrow");
  initializeSlider(".toprated ul", "#topRatedLeftArrow", "#topRatedRightArrow");

  // Main Slider
  const mainSlider = document.querySelector(".mainSlider");

  nowPlayingMovie.forEach((movie) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}">`;
    mainSlider.appendChild(figure);
  });

  // Fade Effect
  const figures = mainSlider.querySelectorAll("figure");
  let currentIndex = 0;

  const showNextSlide = () => {
    figures[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % figures.length;
    figures[currentIndex].classList.add("active");
  };

  figures[currentIndex].classList.add("active");

  setInterval(showNextSlide, 3000);
};

getMovies();

// GNB li Event
const naviLis = document.querySelectorAll(".gnb > ul > li");
const submenus = document.querySelectorAll(".submenu");
const menuBg = document.querySelector(".menu-bg");

naviLis.forEach((naviLi) => {
  naviLi.addEventListener("mouseover", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "300px";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "320px";
    });
  });

  naviLi.addEventListener("mouseout", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0";
    });
  });
});

// Accordion Event
const contents = document.querySelectorAll(".accordion .content");
contents[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    contents.forEach((item) => {
      item.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });
    const content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// Search Modal
const searchBtn = document.querySelector(".search-box .fa-magnifying-glass");
const closeBtn = document.querySelector(".close");
const modalSearch = document.querySelector(".modal-search");

searchBtn.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});
