// 지금 내가 제어하고자 하는 내용이 무엇인지 부터 작성해 보기!!!

// 주어동사목적어 논리적이라서!!

// 내가 구현하고자 하는 기능을 대략적이지만, 말로 표현하지 못한 다면... 100% 코딩은 불가하다!!

const circle = document.querySelector("#circle");
// console.log(cyberspace);
const articles = circle.querySelectorAll("article");
console.log(circle, articles);

// 화살표 함수 = function  디스할때는 못사용한다. 그래서 익명함수
// 콜백함수 화살표형태의 함수안에 함수 형태로 들어와 있음.
// console.log(circle);
articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
