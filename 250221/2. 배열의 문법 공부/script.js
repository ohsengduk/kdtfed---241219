const str = "hoool, everyone";

// 1. 문자열을 배열로 변환하는 방법
// console.log(str.split(" "));

// 2. 전개 연산자 구문 문자열을 배열로 변환하는 방법
// console.log([...str]);

// 3. 유사배열 문자열도 유사 배열이다.
console.log(Array.from(str));
