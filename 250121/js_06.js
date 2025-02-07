/*
객체지향 언어 = C || java => 객체지향언어
=> 어떠한 함수가 실행되고, 처리해야할 자료가 발생되면 기본적으로 객체라는 자료구조의 형태로 변환해서 관리 ,저정 보관한다

this 객체를 가지고 있음 => 주인이 누구야? 객체 지향 언어의 특징
디스 바인딩<- 이 함수가 가르키는게 머야? 어떤 함수 혹은 속성값이 실행된 함수 및 속성의 주인이 누구인지를 효율적으로 가르켜서 쉽게 찾아 올 수 있게 해주는 역할!!!



1.js를 활용해서 함수 선언 => 호출하는 순간-> " 실행 컨텍스트 " 실행
2. "실행 컨텐스트" => call stack 공간에서 먼저 실행
3. 그 다음에 호출된 함수가 그 위로 쌓이게 된는 구조
4. 실행 컨텍스트 =  객채 => 어떠한 정보로 구성되었는가?
5.
variableEnvironment (*환경변수)
스냅샵:최초 함수가 실행 되기 전에 스냅샵의 형태로 가지고 있음 최초의 초기값 형태로 박제를 시킨다. 해당 함수가 가지고 있는 내부함수는 무엇이 있는지 함수 내에 사용중인 변수는 무엇인지 알고 있음

아웃터 인바이럴 먼트 : 해당 함수가 참조하고 있는 매개변수 || 인자 값이 외부에서 들어온 경우, 어느 경로에서 유입되었는지에 대한 전반적인 정보

LexicalEnvironment (*사전전환경정보)<-- 계속하여 체크를 한다. 리턴



ThisBinding(*)디스바인딩 주인이 누구인지 체크를 한다. -


- Scope 스코푸 = 유효범위 
유효범이 함수가 어디에서 어디까지를 커버해야하는지 결정
전역에서 쓰는 함수 인지 지역에서 사용해야 하는지를 가르킴

- 스코푸 체인 = 유효범위내 요소를  하나하나를 검색해 나가는 프로세스
- 현재 호출된 함수의 과거 선언 당시의 LexicalEnvironment(렉시컬인바이럴 먼트) 정보까지 참조해 온다.
- 지금 필요한 함수와 지금 필요하지 않은 함수를 찾아서 구분해 놓는다.

this
1. 자바스크립트 내 전역공간에서 this는 무조건 전역객체를 말한다.
(모든것을 커버 할 수 있다.)객체!!
>자바스크립트틑 웹 브라우져에서 사용하기 위해서 만들어 졌다. 웹 브라우져 윈도우 = this 이다.
>node.js덕분에 윈도우가 글로벌이라는 이름을 찾아 온다.

인터넷에 검색어 :about:blank 개발자 도구 window this 치며 나온다, 

객체 안에 있는 것을 표현할때  . 으로 표현을 한다.
const obj {
  a: 1
  
  };
  
  obj.a

  window가 가르키는 것이 this 이다 근데 왜?
  windowr갈 길어질 수도 있다.
  자바=윈도우

 

const func = function (x) {
  console.log(this, x);
};
func(1);

const obj = {
  method: func,
};

obj.method(2);

const obg_{

  method:function(x){

    close.;log(this, x);
  };

  inner: {
    obg.method(1);
MediaKeyMessage

  }
};

obg.method(1);
obg["method]"](2);
//함수를 독립적으로 실행 시킬 때에는 디스를 전역객체로 윈도우를 가르킨다

// 함수가 특정 객체의 속성 메서로 실행될 때에는 해당 객체를 가르키나드

//내가 호출하는 객체를 전역 인지 그럼 전역 개체이루잇ㄷ
// 내가 지금 함수를 독립적으로 호출한 사황에서는 소ㅑㄴ느 윈도우임
//특정 속성중ㅇ세 매서드를 활용해서 디스를 요청했다 한느 경우는 해ㅌ당 계ㅔ이다.


//메서드는 = method = 객체안에 있는 함수
// 독립함수 객체안에 함수 외부에서 그냥 움직이는 함수

// const obj1{

//   outer: function(){


//     console.log(this);
//     const innerFunc = function(){

//       console.log(this);
//     }
//     innerFunc();
//   },
// };

// obj1.outer();

 */

// 디스 바인딩이 있어야 전역 객체야 내 위에 를 확인 할수 있는 상위스코프에 내용을 그대로 받는다.
// => 콜백 함수(화살표 함수) 디스 바운딩 값을 상속받지 않는다.

// const obj = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };
// obj.outer();

// const arr = [1, 2, 3, 4];

// arr.forEach(function (num) {
//   console.log(this, num);
// });

// 모듈
// setTimeout(function () {
//   console.log(this);
// }, 300);

/*
document.body.innerHTML += "<button id='a'>클릭</button>";
document.body.querySelector("#a").addEventListener("click", function () {
  console.log(this);
});
//defer  돔을 제어할 경우에 
*/

// const obj1 = {
//   outer: function () {
//     console.log(this);

//     const innerFunc1 = function () {
//       console.log(this);
//     };
//     innerFunc1();

//     const self = this; // outer 를 가르키게 된다. 엄청 많이 사용이 되어진다.
//     const innerFunc2 = function () {
//       console.log(self);
//     };
//     innerFunc2();
//     //this를 윈도우 obj1 를 가르치고 있다. 메서드 함수 내에서 this를 우회에서 찾아 온다. 독립함수 이기때문이다.
//   },
// };

// obj1.outer();



//화살표 함수는 제약이 있음 호이팅이 되지 않음

const test1= {
  tt:function(){
  console.log(this);
  const test2:function = () =>{
  };

test2.();
  }; 
};

test1.tt.()

