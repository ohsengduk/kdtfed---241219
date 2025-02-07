const board = document.querySelector(".board");

// console.log(board);
const h1 = document.createElement("h1");
h1.innerText = "컴퓨터와 가위,바위,보. 맞추기 게임!";

board.appendChild(h1);
const itemimg = document.createElement("img");
const resultimg = document.createElement("img");

const userChoice = prompt("가위,바위,보 중에 하나를 선택하세요!", "가위");
// 기본 디폴트 값으로 가위를 넣었음3

//이미지에 숫자를 담을수 있는
let gameNem;

switch (userChoice) {
  case "가위":
    gameNem = 1;
    break;

  case "바위":
    gameNem = 2;
    break;

  case "보":
    gameNem = 3;
    break;

  default:
    alert("잘못선택하셨습니다.");
    location.reload();
}

//console.log(gameNem);

//자바 스크립트 내장 객체 수학 매스맥티 Math.

//Math.random();
// random 함수 실수의 값을 ->난수의 값으로 반환을 한다(실수의 형태를 가지고 있는 정해지지 않은 값(난수)으로 반환을 한다. 0보다 크고 1보다는 작다 그럼 0.00000 ~ 0.999999 사이의 값이 나온다.) 숫자를 올릴 수가 있다. 

let comChoice = Math.ceil(Math.random() * 3);
itemimg.src = `./img/math_img_${comChoice}.jpg`;
// console.log(com);

if (gameNem === comChoice) {
  resultimg.src = `./img/game_1.jpg`;
} else {
  resultimg.src = `./img/game_2.jpg`;
}

// iteimg.src = `./img/math_img_${comChoice}.jpg`;
board.append(h1, itemimg, resultimg);
