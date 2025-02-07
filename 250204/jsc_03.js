const open = document.querySelector("#open");
const modalbox = document.querySelector("#modal_box");

// clsoe 버튼
const closebtn = document.querySelector("#close");

open.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalbox.classList.add("active");
});

closebtn.addEventListener("click", function () {
  open.classList.remove("btnActive");
  modalbox.classList.remove("active");
});
