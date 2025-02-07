/*
//함수는 선언과 호출이 항상 있어야 한다.

//이게 함수를 선언한 것이다. code라는 이름의 함수를 선언한것이다.
function code() {
  console.log("오늘은 목요일 입니다.");
}

//호출이 일어나려면 함수를 호출해야한다.

code(); //<== 메서드가 아님 호출

// 메서드 함수 특정 함수 키 안에 들어가 있는 함수 어떤 기능을 구현하기 위한 목적이 함수 이다.

//숫자를 더하고 싶다.라는 목적이 있다. 함수의 이름은 최대한 직관적으로 써야한다.
function calcSum() {
  //1~10까지 더하고 싶다. 값을 담을 공간이 필요하다

  //변수에 담을 그릇을 만들고
  let sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += i; //블락변수라고 한다.
    //변수에 값이 변해서 담을 그릇이 필요하다.
  }
  console.log(`1부터~10까지 ${sum}입니다.`);
}

//스스로 만들고 싶은 사고와 논리적 근거 무엇이 필요하지 어디서 부터시작해야하기~
calcSum();

//매개변수(무엇가가 작동되게 해 주는 매개체 역할을 하는것이 매개변수이다),블락변수,지역변수,일반변수 함수 구현에 있어서 영향을 미칠수 있는 변수를 만들 수 있다.


//매개변수는 함수의 선언부에서 필요하다. a와b의 값을 받기로 했음
function sum(a, b) {
  const result = a + b;
  console.log(result);
}

//인수=인자값이라고한다. 오락실의 코인 =>매개변수 역할을 한다. a+b 오락실에 오락기를 돌릴수 있는 a,b 라고 생각하면 된다.
sum(10, 20);


const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요"));

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum; //반환 return 문
  //console.log(`1부터~10까지 ${sum}입니다.`);
}
calcSum(10); // 확장성을 가지게 되었다. 아까는 고정이 었다.
//피봇:업그레이드 됨

console.log(`1부터 ${num} 더하면 ${calcSum(num)}`);
//템플릿 리터얼 문자와 변수의 연결생긴것은 함수이지만 변수다 호출을 함수의 형태지만 변수를 반환하기 때문에 변수라고 할수 있다.

//함수의 재활용성 업그이드를 손쉽게 할 수 있다.


//c = 10 기본 매개변수 기본값이 없을 경우 대기 조로서 대기를 하고 있다가 값을 받는것이다.

function multiple(a, b = 0, c = 0) {
  return a + b + c;
}

console.log(multiple(2, 4, 8));
console.log(multiple(2, 4));
console.log(multiple(2));


//const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요"));

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
}
console.log(`1부터 ${n}까지 더한 결과 값은 ${sum}입니다`);

calcSum(10);


//스코프: 업무의 범위 
// 전역 스코프 var 이다. 전역변수이다.

// 전역스코프 사용사례 1번
var hi = "hello";

function greeting() {
  console.log(hi);
}
greeting();


// 전역스코프 사용 사례 2번 재 선언 재 할당 모두 가능하다.
var hi = "hello";
console.log(hi);

function greeting() {
  hi = "bye"; //전역변수 재 할당이 됨 덮어 씌워워짐
  console.log(hi);
}
greeting();


// 전역스코프 사용사례 3번째 사례
function greeting() {
  hi = "hello"; //var가 생략된 사례
}
greeting();
console.log(hi);
//var 사용하거나 혹은 어떤 키워도 존재하지 않을 경우 전역에서 사용가능한 변수가 된다 => 경우 전역에서 사용가능한 변수가된다 =>함수내부에서도 사용가능!!!

// 블록스코프
const factor = 5;

function calc() {
  return num * factor;
}

//블락안에서만 쓸수 있다 블락에서만 쓸수 있다. 블락스코프
{
  const num = 10;
  let result = calc();
  console.log(`result : ${result}`);
}

*/

//스크립트 스코프 변수다
function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

var num = 5;
// const num = 5;
console.log(`1부터 ${num}까지 더한 결과 값은 ${calcSum(num)}입니다`);

//var-> 노드= 글로벌/ 윈도우= 전역을 의미한다

//매개변수
//전역변수
//지역변수
//스코프변수
//블록변수
//참조변수 함수안함수 앞에 있는 참조를 한다. = 실기능은 매개변수 역할을 한다.  감싸안는 함수를 참조하여 변수의 역할을 한다.
