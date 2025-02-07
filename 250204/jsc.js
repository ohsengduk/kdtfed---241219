//window.onclick = alert("안녕하세요");
//window.onload = () => {};
/*
const button = document.querySelector("button");

console.log("button");
// alert("바보 똥 멍청이");

button.onclick = function () {
  document.body.style.backgroundColor = "green";
};

button.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});
*/

document.body.addEventListener("keydown", (event) => {
  document.querySelector(
    "#result"
  ).innerText = `code : ${event.code}, key : ${event.key}`;
});

console.log();
