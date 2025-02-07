/*
//함수 형태 사용하는 방법을 할 것이다.
//지금까지는 함수 선언식을했다.

// 변천사: 1번
function sum(a, b) {
  // console.log("나는 나비!!!");
  return a + b;
}
//함수 안에서 연산되어진 것을 쓰고 싶은것이다.
// test();
Sub(10, 20);

//변천사: 2번 function sum = num = function 축약형
const num = function (a, b) {
  return a + b;
};

console.log(num(10, 20));

//변천사:  3번 화살표 함수 표현식
const num01 = (a, b) => {
  return a + b;
};

console.log(num01(10, 20));

// 선언 & 호출 x => 선언 즉시 실행이 가능 익명함수선언을 하고"즉시실행함수"

(function (a, b) {
  let result = a + b;
  console.log(`함수 실행결과값 : ${result}`);
})(100, 200);


//자바스크립 실행문 이면서 표현식 문이기 때문에 가능하다.
const hi = () => {
  return "안녕하세요!";
};

//이렇게도 가능하다.
const hi = () => "안녕하세요!";


//call(*호출)의 제어를 자유롭게 할 수 있는 함수와 제어를 받는 함수 (*콜백함수)
cosnt btn = document.querySelector("button");

btn.addEventListener("click", function display(){
  alert("클릭했습니다");

})

// 화살표 함수로 가능하다
btn.addEventListener("click",() => {
}

//// 화살표 함수로 가능하다
btn.addEventListener("click",() => {
  console.log('클릭');

  //콜백함수 지옥을 하루 있다.
  return() => {
    console.log("클릭클릭!!");
    return() => {
      console.log("클릭클릭클릭!!");
      return() => {
        conslo.log("이제그만!");
      };
     };
  };
});


const showDate = (name, age) => {
  alert(`안녕하세요 ${name}님 ${age}살 이시군요`);
};

cosnt getData = (callback) =>{
  const userName = prompt("이름을 입력하세요");
  const userAge = prompt("이름을 입력하세요");

  callback(userName,userAge );
  
};

getDate(showDate);

*/

/* 
자바스크립트 언어 - 함수
자바스크립트 함수 => 1급 시민
자바스크립트에서 함수가 다이나믹하다.


1. 변수에 함수를 담을 수 있음: 원래는 전통적으로 함수 선언식으로만  함수를 호출했었는데, 익명함수 등장하면서 함수를 보다 편리하게 작성 할 수 있게 됨


2. 다른 함수의 매개변수로 등장할 수 있음 : 콜백함수라른 스타일 형식을 창조해 낼 수 있게 됨


3. 다른 함수의 반환값(*return)으로 함수가 등장 할 수 있음.