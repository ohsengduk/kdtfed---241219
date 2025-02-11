const btns = document.querySelector(".controls");
const preBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();
};

makeClone();
setTimeout

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;

  // 왼쪽으로 5번 || 오른쪽으로 5번
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    //5번씩 눌렀다는 얘기임

    // 클릭시 왼쪽으로 갔다가 오른쪽으로 갔다가
    setTimeout(() => {
      //setTimeout 2개의 인자 값을 받는다고 하는데...
      slides.classList.remove("animete");
      slides.style.left = "0px";

      currentIdx = 0;
    }, 500); // 0.5초
  }

  setTimeout(() => {
    slides.classList.add("animete");
  }, 300); // 0.3초
};

// 버튼 값
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

preBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

//자동으로 플래이 될 수 있도록...
let timer = undefined; //값이 들어가 있지 않은 값에 대한 변수 선언

const autoSlide = () => {
  if(timer === undefined) {
    timer = setInterval=(()=>{

   }
  },300);
}
};

autoSlide();

const stopSlide = () =>{
  clearInterval(timer);
  timer = undefined;
};



/*===== 슬라이더 ======*/ 
slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});


/*===== 버튼 ======*/ 
btns.addEventListener("mouseenter", () => {
  stopSlide();
});

btns.addEventListener("mouseleave", () => {
  autoSlide();
});