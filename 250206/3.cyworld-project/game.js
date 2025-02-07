const form = document.querySelector(".word-text > form");
// console.log(form);
const none = document.querySelector(".game-lotto-nmber");

const gameStart = (e) => {
  e.preventDefault();
  // console.log("gameStart");

  const word = document.querySelector("#word").innerText;
  const myword = document.querySelector("#myword").value;
  // console.log(word, myword);

  const luckyNumber = {
    digiCount: 6,
    maxNuber: 45,
  };

  const startlotto = () => {
    const { digiCount, maxNuber } = luckyNumber;
  };

  const lastword = word[word.length - 1];
  const firstword = myword[0];
  // console.log(myword[0]);

  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다 🥰";
    document.querySelector("#word").innerText = myword; //새롭게 입력하는값
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다. 😫";
    document.querySelector("#word").innerText = myword; //새롭게 입력하는값
  }
};

form.addEventListener("submit", gameStart);

/* ===== 로또게임 ==== */

const lotobtn = document.querySelector(".lotto-btn");
// console.log(lotobtn);

const startlotto = () => {
  const digiCount = 6;
  const maxNuber = 45;

  let myNemBer = new Set(); //값이 나오는 동안 배열식으로 값을 받겠다. 재 할당을 해야하믄로 let을 사용한다.

  //난수 == 랜던 값 나오는
  //Math. 실수의 값을 가지고 있다. 소수점을 붙지 않게 하려면 소수점을 버리게 하는 함수를 써야 한다. Math.floor 바닥을 의미하는 거를 써서 버리게 만든다.

  //6번의 반복 실행문
  for (let i = 0; i < digiCount; i++) {
    //한복하는 동안에

    //push.를 쓸수 없다.  .add
    myNemBer.add(Math.floor(Math.random() * maxNuber) + 1);
  }

  //new Set();은 배열에서 길이 같는 lenth를 쓸수 없다.  그래서 .size 로 대신해야한다.
  if (myNemBer.size === 6) {
    // document.querySelector(".game-lotto-nmber").innerText = `${[...myNemBer]}`;
    none.innerText = `${[...myNemBer]}`;
  } else {
    none.innerText = "재 추천하겠습니다 🤔";
  }
};

lotobtn.addEventListener("click", startlotto);
