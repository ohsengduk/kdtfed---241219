const ullia = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

// console.log(photo);
// console.log(ullia);

console.log("chaimg");
ullia.forEach((lia) => {
  lia.addEventListener("mouseenter", function () {
    // console.log("hover");

    const chaimg = this.getAttribute("data-image");

    photo.style.backgroundImage = `url("${chaimg}")`;
  });

  lia.addEventListener("mouseeleave", function () {
    photo.style.backgroundImage = ``;
  });
});
