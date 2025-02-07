//내장 함수 시간관 관련된 함수가 많다. 일정 시간에 따라 행동하게 끔하는 것이다.

//시간과 관련있는 자바스크립트의 내장 함수

/*

일정 시간 마다 반복하는 함수 = setInterval()
반복적인 실행을 멈추게 하는 함수 =  clearInterval()
특정시간 경과 후 무언가를 실행시키게 하는 함수 = setTimeout()

//밀리초 ->1초 1000밀리초

const hell = () => {
  console.log("hello World");
};
// }, 3000);
setInterval(hello, 3000);



//clearInterval()
let counter = 0;

let timer = setInterval(() => {
  console.log("hello ww");
  counter++;

  if (counter === 5) {
    clearInterval(timer);
  }
}, 2000);

// console.log(timer);
*/

// setTimeout() 시간이 경과 이후에 작동이 되어지는 원리

setTimeout(() => {
  console.log("안녕하세요");
}, 3000); //3초 이후에 작동이 된다.
