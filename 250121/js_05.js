/*

for (let i = 1; i < 10; i++) {
  if (i === 6) break; //만나는 순간 종결
  document.write(i, "<br/>");
}

  

//무한 루프에 빠지만 i를 1로 주면 그렇게 된다. 메모리를 다 쓰면 그때가 되어서야 끝난다.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  document.write(i, "<br/>");
}


// for() 행을 만들지 부터 생각을 해야한다.중첩 for을 활용한 행과 열
// 선언 증감 조건
for (let i = 1; i <= 3; i++) {
  //행
  for (let k = 1; k <= 2; k++) {
    //열
    document.write(`${i}행 ${k}열`, "<br/>");
  }
  document.write("<br/>");
}
  


// forEach() 자주 쓰인다. 배열의 전유물이다.
const marvels = ["iroman", "hulk", "captin", "stranger"];

for (let i = 0; i <= marvels.length; i++) {
  console.log(marvels[i]);
}
*/
const marvels = ["iroman", "hulk", "captin", "stranger"];

//함수안에 또 다른 함수가 들어오면 "콜백" 함수라고 부른다. forEach(function()) "call back=콜택시"
//         콜     실행해 ()인자값 매계변수 값을 받는곳
marvels.forEach(function (marvel, index, array) {
  console.log(marvel, index, array);
});

//유사배열
