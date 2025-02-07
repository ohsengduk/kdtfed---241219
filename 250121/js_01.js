// const userInput = window.prompt("입력하세요");

// console.log(typeof userInput);

//값이 없음 null 빈 문자열 나옮. 어떤한 조건식 실행하기에 앞서서 조건 자체가 성립될수 없는 값이 들어 온다면, 더 이상의 조건문을 실행시키지 않는 조치 => 메모리 효율 때문에 [예외조항처리]를 한다.

/*

//둘중에 하나라도 참이라 라면 값이 없습니다라고 나타나도록하기
if (userInput === "" || userInput === null) {
  console.log("값이 없습니다.");
  //조건문을 할때는 항상 예외 조항 값을 항상 주어서 진행을 하는것이 좋다.
} else {
  alert(`${userInput}님 좋은 아침입니다.`);
}

const score = prompt("내 인생 점수");

if (score !== "" || score !== null) {
  if (Number(score) >= 90) {
    alert("나름 잘 살았다.");
  } else if (Number(score) >= 80) {
    alert("이 정도면 괜찮아");
  } else {
    alert("지금부터 열심ㅎ 살자");
  }
  //중첩if 조건문
}



//짝수 홀수를 구분하는 if 조건문!!
let userNumber = prompt("숫자를 입력하세요!");

if (userNumber !== "" || userNumber !== null) {

userNumber = parseInt(userNumber);
if (userNumber % 2 === 0) {
  alert(`${userNumber}는 짝수 입니다.`);
  } else {
    alert(`${userNumber}는 홀수 입니다.`);
}
}


//삼항 조건 연산자를 항상 기억해라let
let userNumber = prompt("숫자를 입력하세요!");

if (userNumber !== "" || userNumber !== null) {

  userNumber % 2 === 0
    ? alert(`${userNumber}는 짝수 입니다.`)
    : alert(`${userNumber}는 홀수 입니다.`);
}

*/

//switch문 : 여러가지의 선택자를 제공하고 해당 선택지 가운데에서 어떤 한 가지를 선택했을 때 실행 결과 값 도출!!
// 사용자에게 무언가를 요구할것임

const webpage = prompt(
  "네이버, 구글, 다음 중 즐겨 사용하는 사이트는 어디인가요?"
);

// 변수 지역 전역선언
let url;

switch (webpage) {
  case "네이버":
    url = "https://www.naver.com";
    break;
  case "구글":
    url = "https://www.google.com";
    break;
  case "다음":
    url = "https://www.daum.com";
    break;
  default:
    alert("보기 중에 존재하지 않는 사이트 입니다.");
}

if (url) {
  window.location.href = url;
}
