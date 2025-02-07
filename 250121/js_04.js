/* 
반복문을 잘 해야한다.

어떤 경우에 배열을 쓸거이냐?
자료구조와 알고리즘을 통해서 배운다
반복하게 할것이냐?
시간 복잡도 계산을 한다.
어떤 자료구조가 현 문제를 해결하는데 효율

빅오(가장긴시간해결), 빅세타(50% <->), 빅오메가(최단시간에 해결)

기본형의 반복문-for문(전치사~동안에~/목격부사~위하여)
우리가 쓰는거는 천치사로 ~동안에~라를 쓴다.

최기값을 기준으로 참 실행 최기값을 증가
다시 참인지 확인 후 증감문을 실행 시킨다
 
       1     2  
for(초기값; 조건식; 증감문){
    3 반복문 실행
}

반드시 자바스크립트는 내 이터러블 객체=index 약자 i 사용한다. (이터래이터=제러래이터(생성))하다 객체 사용가능
배열
유사 배열- 태생은 배열은 아니지만, 

const students = ["park", "kim", "Lee"];

for (let i = 0; i <= students.length; i++) {
  console.log(students[i]);
}
// for(let i = 0; i  < 3)





*/

// 참인 경우에만 실행시키는 것이다.
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='led'>" + i + "</p>");
  } else if (i % 5 !== 0 && i % 7 === 0) {
  }
}

const reds = document.querySelectorAll(".red");
// console.log(red);
reds.forEach((red) => {
  red.style.color = "red";
});

const greens = document.querySelectorAll(".green");
// console.log(red);
reds.forEach((green) => {
  red.style.color = "green";
});
