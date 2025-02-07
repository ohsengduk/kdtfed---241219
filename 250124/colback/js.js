/*
//콜백 지옥 => 콜백 함수를 계속 이어서 작성하는 형식
//settimeout 첫번째 매개변수로는
setTimeout(() => {
  let coffeeName = "에스프레소";

  console.log(coffeeName);
  setTimeout(() => {
    coffeeName = "카페라떼";
    console.log(coffeeName);

    setTimeout(() => {
      coffeeName = "카페모카";
      console.log(coffeeName);

      setTimeout(() => {
        coffeeName = "카페모카";
        console.log(coffeeName);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);



let coffeeName = "";

//2초 후에 콜백함수가 실행이 될 것이다.

const addLatee = (name) = >{
  coffeeName += `,${name}`;
  console.log(coffeeName);
  setTimeout(addMoccha, 2000, "카페모카");
};


const addEspress = (name) = >{
  coffeeName += name;
  console.log(coffeeName);
  setTimeout(addLatee, 2000, "카페라떼");
};
setTimeout(addEspress, 2000, "에스프레소");

*/

// 약속 = promise
// 만약에 어떤데이터를 가져오는데 문제가 없으면 a를 출력해줘, 그런데 만약에 문제가 생겨서 오류가 및 에러가 발생하면 b를 출력해줘라고 약속하는 것이다.
// 약속실행문을 지켜본다. ->실행을 해준다.

//선언 매개변수
const addCoffee = (name) => {
  //변수에 담수를 담을수 있다. 함수의 반환값에 함수가 올수 있다. return()

  //또다른 매개변수를 반환하는 값으로 사용할 예정임
  return (prevName) => {
    //new 예약어 자바스크립트에서 클래스객체 통해서 만들어진 객채 = 선언한 객체
    return new Promise((resolve) => {
      //프로토타입함수 Promise 반환함
      setTimeout(() => {
        let newName = ProvName ? ProvName + "," + name : name;
        console.log(newName);
        resolve(newName);
      }, 2000);
    });
  };
};

addCoffee("에스프레소")
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라테"))
  .then(addCoffee("아메리카노"));

//호출 인자값 입력

// let arr1= new Array();

// arr1[0 = 1];
// arr1[0 = 1];
