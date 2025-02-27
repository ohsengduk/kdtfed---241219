//기본 매개변수 정의를 할 수 있다.
/*
const hello = (name, message = "안녕하세요") => {
  console.log(`${name}님 ${message}`);
};

// hello("슛돌이");

const addNum = (...numbers) => {
  let sum = 0;
  numbers.forEach((numbers) => {
    sum += numbers;
  });
  return console.log(sum);
};

addNum(1, 2);
addNum(1, 3);
addNum(1, 2, 3, 4, 5);

const animal = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"];

console.log(animal.concat(fruits));
console.log([...animal, ...fruits]);

const mine = fruits;
console.log(mine, fruits);

mine[1] = "orange";
console.log(mine, fruits);

//전개 연산자 구분을 사용하는 방법 꼭!!!!!!!
const mine = [...fruits];
console.log(mine, fruits);

mine[1] = "orange";
console.log(mine, fruits);
*/

//객체 프로퍼티
//객체 내 프로로티 값을 추가하고 싶을때, 온점 표기법 & 대괄호 표기법
const box = {
  title: "javascripts",
  page: 500,
};

console.log(book);

book.published = "2025-03";
console.log(book);

const mysybol = Symbol();
const mysybol_02 = Symbol();

console.log(mysybol === mysybol_02); //라이브 러리나 클래스 만들 때 사용하면 좋다.
