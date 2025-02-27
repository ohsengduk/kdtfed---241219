import { API_KEY } from "./env.js";

// Common URL
const tmdbCommand = "https://api.themoviedb.org/3";

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

// 아코디언 이벤트 [전체]
const Contents = document.querySelectorAll(".accordion .content");
// console.log(Content);

Contents[0].style.display = "block";

const titles = document.querySelectorAll(".title");
// console.log(titles);

// titles.forEach  노드 리스틑 필터를 사용 할수 없다.
// title.for of

// 전체가 보인다.
titles.forEach((title) => {
  title.addEventListener("click", () => {
    Contents.forEach((item) => {
      // 아코디언 메뉴의 원리
      item.style.display = "none"; // 선택 받지 못한 것에 대한 none;으로 가능하다.
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });

    //단일 요소
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

//serch Modal
const serchBtn = document.querySelector("search-box .fa-magnifying-glass");
// console.log(serchBtn);  값이 찾아오는지 확인
const modaSearch = document.querySelector(".modal-search");
// console.log(modaSearch);

const closeBtn = document.querySelector(".close");
// console.log(closeBtn);

serchBtn.addEventListener("click", () => {
  modaSearch.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modaSearch.classList.remove("active");
});
