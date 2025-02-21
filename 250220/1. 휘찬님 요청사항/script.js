const eyeIcon = document.querySelector(".main i");
// console.log(eyeIcon);
const input = document.querySelector("input");
// console.log(input);

// 토글 효과
eyeIcon.addEventListener("click", () => {
  input.classList.toggle("active");

  if (input.classList.contains("active")) {
    input.type = "text";
    eyeIcon.className = "fas fa-eye-slash";
  } else {
    input.type = "passsword";
    eyeIcon.className = "fas fa-eye";
  }
});
