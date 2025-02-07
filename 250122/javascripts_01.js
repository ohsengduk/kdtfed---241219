/*
// of~ 중에~ 여려개들 중에 하나~ 전치사   [배열만 되고, 객체에서는 사용할수 없다.]
// ~in 안에                             [객체에서 사용이 되고 배열에서는 사용이 안된다.]

// 참조하겠다는 뜻을 포함한다. s 붙히는 유중에 하나 참조하겠다는 의미르 지니고 있기 때문에 of라는 전치사가 있어서........
for (let marvel of marvels) {
  console.log(marvel);
}

*/

const marvels = ["ironman", "spiderman", "thore", "tranger"];

//jsBook 객체 객체 안에 키와 벨류 값이 있고 그거를 프로퍼티라고 부른다
const jsBook = {
  title: "재미있는 자바스트립트", // 한줄을 프로퍼티(키:밸류)
  pubDate: "2025.01.01",
  pages: 270,
  finished: true,

  //참조타입 = 메서드라고 한다. 참조타입 안에 함수가 들어 있음
  review: function () {
    console.log("겁나 재미었어요");
  },
};

// jsbook 중에서 key 값 중에 하나
for (let key in jsbook) {
  console.log(`${key} : ${jsBook[key]}<br/>`);
}

/*
let start = parseInt(prompt("별의개수: "));

while (start > 0) {
  document.write(" * ");
  start--;
}
*/
