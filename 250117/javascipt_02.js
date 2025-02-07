let a = 10;
let b = a;

console.log(a, b);

let obj1 = {
  c: 10,
  d: "ddd",
};

let obj2 = {
  c: 40,
  d: "ddd",
};

// let obj2 = obj1;

console.log(obj1, obj2);

b = 15;
obj2.c = 20; //리딩 안됨 이해 안됨
console.log(a, b);
console.log(obj1, obj2);

//변수에 영역과 데이터를 넣을 영역을 따로 생성한다.?? 무슨말이지 모겠음 ㅠㅠ

const fuitis = ["apple", "bananan", "cherry"];
// const favorit = fuitis;
const favorit = [...fuitis];

console.log(favorit);

favorit[1] = "grape";

console.log(fuitis, favorit);
