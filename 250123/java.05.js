/*마우스 오버
 */
let o = 0;

const overoutOut = document.querySelector("div.out.overout");
// console.log(overoutOut);

overoutOut.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  // console.log(pItems);

  pItems[0].innerText = "mouseover";
  pItems[3].innerText = ++o;
});

// let o = 0;
const overoutIn = document.querySelector("div.in.overout");
overoutIn.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover";
  pItems[1].innerText = ++o;
});

let e = 0;

const enterleaveOut = document.querySelector("div.out.enterleave");
enterleaveOut.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");

  pItems[0].innerText = "mouseenter";
  pItems[3].innerText = ++e;
});

const enterleaveIn = document.querySelector("div.in.enterleave");
enterleaveIn.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
});
