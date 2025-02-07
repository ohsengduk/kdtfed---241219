/* 변수 안에 담을 수 있는 값을 => 자료형이라고 한다.


1.원시 타입 = primitive type
number = 숫자
string= 문자열
----> truthy 한 값 실체가 있는 값 

boolean = 논리형
>2015 Templete Literal 템플릿 리털얼 문법이 생김 변수와 문자열을 동시에 같이 사용하고자 할 때, 굳이 번거롭게 연산자를 사용하지 않을 수 있어도록 만들어 놓은 문법 자료형이 아니다.
문법이다.

nudefined = 미정
>falsy한 값 부정적 값이  실체가 없는

null = '유효하지 않다!'라는 것 조차로 값이라고 할 수 있다.
> 아예 값을 주지 않은 것을 정의하고자 할 때

Symbol = 유일 무이한 값 왜?

2.참조 타입 = Reference type
array = 배열
function = 함수
object = 객체
반복실행가능하다.

regexp= 정규 표현식
Map = 맵데이터
Set= 셋데이터


*/

const num = 7;
const str = "7";
const bool = true;
const bool2 = false;

// const age = prompt("당신의 나이를 입력하세요");
// console.log(age);
// console.log(typeof age);

console.log(typeof bool);
console.log(typeof bool2);

const userName = "현빈";
const movieTitle = "하얼빈";

// const result = userName + "배우가 출연한 최근 영화는 " + movieTitle + "입니다.";

//-----------탬블릿 리털얼 사용법
const result = `${userName} 배우가 출연한 최근 영화는 ${movieTitle} 입니다.`;
console.log(result);

//----------nudefined, null
let hobby;
console.log(hobby);

let weekend = null;
console.log(weekend);

// 언디파인과 눌 둘다 너거 티브한 느낌으 뤼양스를 가지고 있다.
// 언디파인 시기상 들어오지 않았다.
// 눌은 없어 시점상 안들어 온것이 아니라 그냥 없다 돔을 관리 하는 상황에서는 라는 의미 값을 없애버린다.

//--------symbol
const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();

const member365 = {
  name: "jack",
  [id]: "ezen",
};

console.log(member365);

// -----------------------------------------------------------------
/*
2.참조 타입 = Reference type
array = 배열 (객체의 자신 돌연변이라고 보면 된다.)
function = 함수
object = 객체(친절하게 알려준다.)
반복실행가능하다.

regexp= 정규 표현식
Map = 맵데이터
Set= 셋데이터
*/

let arr = [1, 2, 3];
// const arr = [1, 2, 3];  상관없다 왜? 참조타입이므로
const strArr = ["park", "kim", "lee"];
const boolArr = [true, false];

// 이터러블 객채 반복문을 얼마나 적소적재하게 쓸수 있느야? 각각의 아이디 값에 순번을 했기때문에 가능한 것이다.
// 배열안에 매서드 객체 함수를 얼마나 잘 사용 할수 있느냐?

console.log(arr);

console.log(`${arr[2]}은 arr배열의 ${arr.lastIndexOf(arr[0])}번째 값입니다`);
//이터러블 객채에 각각의 아이디 값에 순번을 했기때문에 가능한 것  -2하면 순번째를 찾아 올 수 있다.

alert(arr);
// console.log(`${arr[2]}은 arr배열의 ${arr.length - 2}번째 값입니다`);

console.log(typeof arr);

arr[3] = 7;
//2번까지만 있으니 추가로 3번째로 추가하고 값을 7로 준것이다.
console.log(arr);
//반복순회할수 있는 객채= 이터러블하다

const obj = {
  firstNum: 1,
  secondNumber: 2,
  finalNumber: 3,
};

console.log(obj);

const frontendClass = {
  tutor: "David",
  students: 16,
  major: "language",
};

// 온점 표기법
console.log(frontendClass.tutor);
//대괄호 표기법
console.log(frontendClass["students"]);

frontendClass.attitude = "the best";
console.log(frontendClass);

//function = 함수 기능

//선언을 했고 호출을 했다.
function hello() {
  console.log("hello World");
}

console.log(typeof hello);
hello();
