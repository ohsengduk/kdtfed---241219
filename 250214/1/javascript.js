/*
let obj1 = new Object();

console.log(obj1);

obj1.name = "David";

console.log(obj1);

obj1["gender"] = "male"; 
console.log(obj1);

delete obj1.name; 
console.log(obj1); 


const student = {
  name: "juliet",
  score: {
    // 중첩의 기능 객체 안에 객체를 쓸수 있다. 변수처럼 쓸 수 있다.
    history: 85,
    science: 94,
    average: function () {
      //익명함수일 경우 키 값이 함수명 처럼 작동한다.
      return (this.history + this.science) / 2;
    },
  },
};

student.score.average(); //온점표기법을 통해서 (값에. 값에. 값에. 값)

//객체 안에 들어오는 메서드 함수
console.log(student.score.average());
*/

const book3 = {
  title: "누구나 처음은 있다.",
  page: 350,
  buy: function () {
    console.log("이책을 구입했습니다.!");
  },
};

book3.price = 20000;
console.log(book3);
