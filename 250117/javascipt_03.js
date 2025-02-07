//변수

//자료형
//자동 형태변환

/*
const one = "20";
const two = 25;

const result = one - two;

console.log(typeof result);
// 자동형태변환 - => 숫자로 인식한다
// + => 문자로 인식 "3" + 3

//-----수동형변환

// const str = "20";
// const str = Number("20");
//parseInt(정수) parseFloat

const str = parseInt("20");
console.log(typeof str);
*/

// const str = parseFloat("20");
// console.log(typeof str);

// const unm99 = "17.8";

// console.log(Number(num99));
// console.log(parseInt(num99));
// 정수값만 반환한다
// console.log(parseFloat(num99));
// 실수 값까지 필요할 경우

console.log(Number(true));
console.log(parseInt(true));

//문자형 변환 toString() // String()

const num77 = 77;
console.log(typeof num77.toString());

//null & undefined => 문자열
console.log(typeof String(num77));

//논리형boolean 으로 형 변환이 가능하다  true || false
console.log(Boolean("hello!"));
console.log(Boolean(undefined));
