const buttons = document.querySelectorAll("button");
const userChoice = document.querySelector(".you-choice");
const computerchoice = document.querySelector(".computer-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];

const show = (user, computer, message) => {
  computerchoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
};

let message;

const game = (user, computer, message) => {
  if (user === computer) {
    message = "무승부";

    // console.log("무승부");
  } else {
    switch (user + computer) {
      case "가위보":
      case "보바위":
      case "바위가위":
        message = "사용자 승리!!";
        // console.log("사용자 승리!!");
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!!";
      // console.log("컴퓨터 승리!!");
    }
  }

  show(user, computer, message);
};

/*
// console.log(button);

//querySelectorAll 배열의 자료 형태로 가져오고 있다.forEach  콜백에 콜백에 콜백을 사용하고 있다. 
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText);
  });
});

*/

//상단을 간결하게 만들기 전역이 내부로 들어 왔다가 밖으로 나가는 상황이 생길 수 있다. 콜백을 밖으로 꺼낸다 "리 팩토리" 를 한다. 함수를 밖으로 만들어 놓는다.

const play = (evnet) => {
  // console.log(event.target.innerText);
  const user = evnet.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  console.log(user, computer);

  //콜백함수
  game(user, computer);

  // Math.random() *3
  // const computer = result[]
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
