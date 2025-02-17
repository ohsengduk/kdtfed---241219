// const str = " ab cd ef ";

// console.log(str.trim());

let str = "Good Morning.";
// console.log(str.toUpperCase()); //모든 문자열을 대문자로 변경해줌
// console.log(str.toLowerCase()); //모든 문자열을 소문자로 변경해줌

console.log(str.substring(5)); //말그대로 substring 메인스트링이 아닌, 그래서 띄어쓰기 기준으로 2번째 단어부터 찾아 온다.
console.log(str.substring(0)); //말그대로 substring 만약 0이면 맨 앞에서 값을 찾아 온다.
console.log(str.substring(0, 4)); // 본인의 인자 값보다 바로 앞에 인자 값을 찾아 온다. 빈 문자열 앞까지 3번째 까지 찾아 온다.

// const str = " ab cd ef ";

// console.log(str.trim());

// let str = "Good Morning.";
// console.log(str.toUpperCase()); //모든 문자열을 대문자로 변경해줌
// console.log(str.toLowerCase()); //모든 문자열을 소문자로 변경해줌

// console.log(str.substring(5)); //말그대로 substring 메인스트링이 아닌, 그래서 띄어쓰기 기준으로 2번째 단어부터 찾아 온다.
// console.log(str.substring(0)); //말그대로 substring 만약 0이면 맨 앞에서 값을 찾아 온다.
// console.log(str.substring(0, 4)); // 본인의 인자 값보다 바로 앞에 인자 값을 찾아 온다. 빈 문자열 앞까지 3번째 까지 찾아 온다.

// 🎈slice  ---------------------
let str = "Good Morning.";
// console.log(str.slice(5));
// console.log(str.slice(0, 4));
console.log(str.slice(8, 12));
console.log(str.slice(-5, 12));
console.log(str.substring(-5, 12));
