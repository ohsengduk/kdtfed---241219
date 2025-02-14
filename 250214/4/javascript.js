/* 
사용자에게 지름 & 높이의 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요.
원기둥의 부피를 구하는 공식 = 밑면적 * 높이
밑면적 = Math.PI * R *R 
Radius = 반지름

어떤 원기둥을 예상하더라도 해당 결과 값이 출력이 될수 있도록 생성자 함수를 활용하여 코드를 구현!

const diameter = document.querySelector(".cyl-diameter"); //위에 값 선택하기
const diameter = document.querySelector(".cyl-height"); //위에 선택하기


parseInt
const but1 = diameter/diameter * // 값을 받아서지름과 높이를 나눈다.



const button(); // 버튼을 클릭하여 출력하기

class Book {
  constructor(   ,   ,  ) {
    this.title = title;
    this.page = page;
    this.price = price;
    
  }
  question() {
    console.log(`${this.}님의 따끈한 신간 도서입니다.`);
  }
}

const book1 = new Book("jabascript", "360", "320000", "박세진", "2025-04-22");
console.log(book1);
book1.question();
*/

const button = document.querySelector("input[type='button']");
// console.log(button);
const result = document.querySelector("#result");

//새성자 함수에 대한 정의
function Cylinder(cylinderDiameter, cylindeHeight) {
  this.diameter = cylinderDiameter;
  this.height = cylindeHeight;
  this.getVolume = function () {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  // console.log(diameter, height);

  //예외조항저리
  if (diameter === "" || height === "") {
    result.innerHTML = "지금과 높이 값을 입력하세요!!";
  } else {
    const Cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
  }
});
