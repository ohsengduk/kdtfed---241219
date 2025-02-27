const bag = new Map();
bag.set("color", "red");
bag.set("price", "30000");

// Method Chinining- 기법 : 감아서 사용한다. 하나의 문장으로 줄여서 쓸 수 있다.

bag.set("color", "red").set("price", "30000");
bag.delete("color");
bag.clear();

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup.keys());
const myCupIte = myCup.keys();
console.log(myCupIte);

myCupIte.forEach((item) => {
  console.log(item, typeof item);
});

// 이터러블   : 반복 순회 할수 있는 (*형용사) = 이터러블
// 이터레이터 : 이터러블한 객체가 된 요소!!! (*터로끝나는 명사  ) 맵이라는 자료 구조인데 이터러블한 객체
