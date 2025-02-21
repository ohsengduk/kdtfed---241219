// const regexp = /\d{3}/;
// regexp.test("Hello");
// console.log(typeof regexp);

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("Hello"));
// console.log(regexp.test("123"));

// const str = "ES2025 is poserful";
// const pattern = /ES2025/;

// console.log(str.match(/ES6/));
// console.log(str.match(pattern));
// console.log(str.replace(pattern, "Love"));

// const str = "Love is Power7";
// const pattern = /love/i;

// patern.test(str);
// console.log(pattern.test(str));

// const pattern = /Power\d\d\d/;
// const pattern = /Power\d{3}/;

// console.log(str.match(pattern));

// const hello = "helo, everyone.";
// const pattern = /com$/i;

// // console.log(pattern.test(hello));
// console.log(/one.$/.test(hello)); //$끝나는....
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

// const str = "ES2025";

// console.log(str.match(/^[0-9]/g)); // 정규표현식으로 들어온 값을 찾아 오는 것을 말한다.

// const str = "Ooo3ooops";

// console.log(str.match(/o{2,4}/i));

const number = /^[0-9]+$/;                      // $끝나는 것 $로 표현하고 0~9까지의 숫자

const positive = /^[1-9]\d*$/;                 //양의 정수^  * 반복 $종결을 의미한다.
const nagative = /^\-[1-9]\d*$/;               //연결 연산자로써의 지정 \ 범위가 아닌 -로 인식을한다.
const nagative = /^-[1-9]\d*$/;               //로 시작하는...

const engword = /^[a-zA-Z]+$/;                //0번 이상의 반복적인 패턴으로 끝나야 한다. 범위와 범위를 구분 지을때 ,로 하지 않는다.

const engandword = /^[a-zA-Z0-9]/+$/;          // 띄어쓰기가 없다.              ,도 없다
const korean = /^[가.힝]+$/;                      //시작과 끝, 자음의 시작과 모음끝을 표현하겠다는 의미를 갖는다.

const koreanandenglish = /^[가.힣a-zA-Z]+$/;      // 

///////////========================기본 chat gpt에 많이 나와있다. 정규 표현식을 직접 만드는 경우는 없지만 알고는 있어야 한다.