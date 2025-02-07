/* 전개 연산자 구문
const fruits = ["사과", "하나나", "포토"]; //반복문 이터러블한 객채이다 배열은 참조 타입의 변수 주소값을 을 참조해서 값을 가져온다.

console.log(fruits);
console.log(...fruits); // 새로운 값으로 만들어 낸다. 전개 연산자 구분 스프래드 오퍼래이터 함수에서도 전개 연산자 구분이 사용이 되어 진다.



// 쇼핑몰 만들때 필수 값과 비 필수 값 이름 패스워드 아이디 이벤트 결혼기념일 생일 넣어도 되고 안 넣는 사람에게 혜택 없음 사용자의 정보를 만들어 내는 함수를 만들고 싶다. 필수 값에 대한 갯수를 알수 없을때 사용이 되어 진다. 정보를 넣고 안 넣고에 대한 차이를 때문에 이거를 만드는 것이다. 정보를 정확하게 알수 없을 경우
const addNum = (...numbers) => {
  console.log(typeof numbers, numbers);

  let sum = 0;

  // numbers.forEach((number) => {
  //   sum += number;
  // });

  for (let number of numbers) {
    sum += number;
  }

  // return a + b;
};
console.log(addNum(1, 3, 5, 7));

*/
//const displayFavorites = (first, ...fruits) => {
//SyntaxError: Rest parameter must be last formal parameter 에러 창이 뜬다. 그러면 작동이 되지 않음

const displayFavorites = (first, ...fruits) => {
  const str = `내가 가장 좋아하는 과일은 ${first}입니다.`;
  return str;
};

console.log(displayFavorites("사과", "포토", "토마토"));
