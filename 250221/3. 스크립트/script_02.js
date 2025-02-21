// 1) 배열을 생성하는 방법
// const season = [];
// season[0] = "spring";
// season[1] = "summer";

// console.log(season);

// 2) 배열을 생성하는 방법
// const pets = ["dog", "cat", "mouse"];

// 3) 배열은 생성하는 방법 Array를 가지고 있다.
// const fruits = new Array("사과", "복숭아", "포도");

// console.log(fruits);

// 배열의 아이템에 접근 후 값을 변경!!
// pets[2] = "hamster";
// console.log(pets);

// for 문은 배열의 전유물이다. 이터러블한 객체 이기 때문에 가능하다
const colors = ["red", "green", "blue", "white", "black"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for Each
// 콜백 함수 내 인자값이 1~3개까지 입력!!
// 1개 : 배열 내 개별 아이템
// 2개 : 개별아이템, 인덱스
// 3개 : 개별아이템, 인텍스, 배열 그 자체
// array.forEach((element) => {});

const animals = ["lion", "bdear", "bird"];

animals.forEach((animal, index, array) => {
  console.log(`[${array}] [${index}]: ${animal}`);
});

// 배열이 가지고 있는 주요 메서드 함수 시리즈
// 1. concat() : 서로 다른 배열 혹은 유사배열을 하나의 배열로 합치고자 할때 사용 할 수 있는 메서드 함수

// const vergetable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];

// const meatBurger = vergetable.concat(meat);
// console.log(meatBurger);

// const meatBurger = [vergetable, meat];
// console.log(meatBurger);

// const meatBurger = [...vegetable, ...meat, "빵"];
// console.log(meatBurger);

// 2. reverse() : 현재의 배열 아이템 순서를 역순으로 배치하고자 할때 사용하는 메서드 함수

const numbers = [6, 9, 3, 21, 18];
console.log(numbers);
console.log(numbers.reverse()); // 역순 재생 메서드 함수이다.

// 3. sort() : 배열 안에 있는 아이템들의 값을 정렬하고자 할때 사용 하는 메서드 함수
// 기본적으로 작은 값부터 큰 값으로 정렬하는 오름차순의 형태를 띄고 있다.!!
// a-z // 1-9  작은 값에서 큰 값으로 간다는 의미를 가지고 있다.

const week = ["sun", "mon", "tue"];
console.log(week.sort());

const values = [5, 20, 3, 4, 15, 11];
// 배열안에 들어가 아이들은 값이  문자열로 데이터를 가져와서 2진법을 활용해서 가져온다 그래서 앞 자리 아이들만 가져온다. 그래서 커스텀이 필요하다. 내부에 커스텀 함수가 필요하다

console.log(
  values.sort((a, b) => {
    // if (a > b) return 1;
    // if (a < b) return -1;
    // if (a === 0) return 0;

    // return b - a; // 내림차순 [ ===  -(a - b) ]
    return b - a; // 현재 값에서 반대가 된다는 것은 음수값을 부여한다고 생각
  })
);

// 가중 치를 줬서 정리를 하는 것

// 4. pop(), push() : 배열 안에 맨 뒤쪽부터 값을 제거하거나 혹은 추가 하고자 할 때 사용가능한 메서드 함수
const animal = ["lion", "bear", "bird"];

console.log(animal);
console.log(animal.pop()); // 배열에 뒷쪽의 값부터 제거를 한다
console.log(animal);

console.log("tiger");
console.log(animal);

// 5. sift(), unshift() : 배열안에 맨 앞쪽부터 값을 제거하거나 혹은 추가하고자 할때 사용가능한 메서드 함수
animal.shift(); // 배열 안에 앞쪽에 값부터 제거를 하고자 할때
console.log(animal);

animal.unshift("dog"); // 배열 안에 앞쪽에 값부터 제거를 하고자 할때 배열은 인덱스라는 순서를 가지고 있어서 순번이 있기 때문에 가능하다.  무조거순서를  따라한다. 배열의 스텍 구조    &&  연결 리스트 : 흐허져 있을 것을 가져다가 쓸수 있다.
console.log(animal);

// 6. splice(위치, 개수 ); 배열 내 특정 위치에 있는 아이템 값을 추가하거나 제거하고자 할때 사용 가능한 메서드 함수 스플라이스 원본 배열의 값을 바꾼다.
const subjects = ["html", "css", "js", "tx", "react"];
console.log(subjects.splice(2));

console.log(test);
console.log(subjects.splice(1, 2));

// 7.slice()   원본 배열의 값을 바꾸지 않는다.
const test = subjects.splice(2.2); // 해당 위치 부터 기본적으로 제거한다.
