const input = document.querySelector(".number-input");
// console.log(input);

const min = Number(input.getAttribute("data-min"));
// console.log(min);
const max = Number(input.getAttribute("data-max"));
const step = Number(input.getAttribute("data-step"));

let value = Number(input.getAttribute("data-value"));
// console.log(typeof value);

const number = document.querySelector(".number");
number.innerText = value;

const buttons = document.querySelectorAll("button");
// console.log(buttons);

buttons.forEach((button) => {
  //증가 버튼에 대한 이벤트
  button.addEventListener("click", (e) => {
    // console.log(e);

    if (e.target.innerText === "add") {
      if (max) {
        if (value < max && value + step <= max) {
          value += step;
        }
      } else {
        value += step; // data-max="" 수량 제한을 할수 있다. 빈값이면 없으므로 표현하기
      }

      // 양수의 경우
      input.style.transform = "rotateY(20deg)";
      setTimeout(() => {
        input.style.transform = "rotateY(0deg)";
      }, 150);

      number.innerText = value;
    }
  });

  // 감소 버튼에 대한 이벤트
  button.addEventListener("click", (e) => {
    // console.log(e);

    if (e.target.innerText === "add") {
      if (min) {
        if (value > min && value - step >= min) {
          value -= step;
        }
      } else {
        value -= step; // data-max="" 수량 제한을 할수 있다. 빈값이면 없으므로 표현하기
      }

      // 음수 일 경우: 효과
      input.style.transform = "rotateY(-20deg)";
      setTimeout(() => {
        input.style.transform = "rotateY(0deg)";
      }, 150);
      number.innerText = value;
    }
  });
});
