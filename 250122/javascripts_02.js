//do..... while 와일 앞에 do가 먼저 온다.

let start = parseInt(prompt("별의개수: "));

//do : 무엇가를 실행하다 무조건 해라 그리고 조건식을 판단해라~ 라는 뜻을 가지고 있다.

do {
  document.write("*");
  start--;
} while (start > 0);
