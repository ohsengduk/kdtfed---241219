window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  // console.log(hashlist);
  const scrolly = window.scrollY;
  // console.log(scrolly);

  if (scrolly > 268) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

//touch event
const hashcontent = document.querySelector(".hashcontent");
// console.log(hashcontent);

const listClientWidth = hashcontent.clientWidth;
// console.log(listClientWidth); // 586 width 값을 찾아 온다.
const listScrollWidht = hashcontent.clientWidth + 226; // 226 공간을 임의로 넓이 값을 잡아 놓음
// console.log(listScrollWidht); 812의 전체 공간 확보함  586+226 더한 값

// 최초
let startX = 0;

// 이동한 한 만큼 거리 알기
let nowX = 0;

// 손 가락이 떨어진 지점과 떨어진 지점 동안의 실 움직임 거리를 알아야 한다.
let endx = 0;

//2번째 체그 좌표
let listX = 0;

const getClientX = (e) => {
  console.log(e.teouches);

  // 삼항 조건 연산자
  return e.touches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  // console.log(getComputedStyle(hashcontent).transform.split(/[^\-0-9]+/g)[5]);
  // return getComputedStyle(hashcontent).transform;
  return parseInt(
    getComputedStyle(hashcontent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashcontent.computedStyleMap.transform = `translateX(${x}px)`;
};

const onscrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX); // 최초 값을 + 해주지 않으면 다시금 reset이 된다.
};

const onscrollEnd = (e) => {
  endx = getClientX(e);
  listX = getTranslateX();
  // console.log(listX);
  if (listX > 0) {
    setTranslateX(0);
    hashcontent.computedStyleMap.transition = `all 0.1s ease`;
    listX = 0;
  }else if{
    (listX < listClientWidth - listScrollWidht) {
      setTranslateX(listClientWidth-listScrollWidht);
      hashcontent.computedStyleMap.transition = `all 0.1s ease`;
      listX = listClientWidth - listScrollWidht
    }
  }

  hashcontent.addEventListener("teuchstart", onscrollStart);
  hashcontent.addEventListener("mousedown", onscrollStart);

  window.addEventListener("touchmove", onscrollMove);
  window.addEventListener("mousemove", onscrollMove);

  window.addEventListener("touchend", onscrollEnd);
  window.addEventListener("mouseup", onscrollEnd);

};

// //
// const onscrollStart = (e) => {
//   startX = getClientX(e);
//   // console.log(startX);  //위치 지점 알기

//   window.addEventListener("touchmove", onscrollMove);
//   window.addEventListener("mousemove", onscrollMove);

//   window.addEventListener("touchend", onscrollEnd);
//   window.addEventListener("mouseup", onscrollEnd);
// };

// hashcontent.addEventListener("teuchstart", onscrollStart);
// hashcontent.addEventListener("mousedown", onscrollStart);
