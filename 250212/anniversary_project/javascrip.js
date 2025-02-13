const now = new Date();
const firstDay = new Date("2024-12-19");

const toNow = now.getTime();
// console.log(toNow);
const toFirst = firstDay.getTime();
// console.log(tofirst);
const passedTime = toNow - toFirst;
// console.log(passedTime);
const passDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); //일을 의미한다.
// console.log(passDay);

document.querySelector(".accent > span").innerText = `${passDay}일`;
// console.log(passDay);

const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  // console.log(someday);

  let year = someday.getFullYear();
  let month = someday.getMonth() + 1; //월에 값은 반드시 +1을 해 줘야 한다.
  let date = someday.getDate();

  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
