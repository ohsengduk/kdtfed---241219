//이벤트에 트리거 대샹이 되는것은
const btn = document.querySelector("button");
// console.log(btn);
btn.addEventListener("click", function () {
  const nav = document.querySelector("nav");
  this.classList.toggle("active");
  nav.classList.toggle("active");
});
