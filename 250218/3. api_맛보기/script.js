const frame = document.querySelector("section");
// console.log(fram);
const lists = frame.querySelectorAll("article");
// console.log(lists);

const deg = 45;

let i = 0;

lists.forEach((list) => {
  const pic = document.querySelector(".pic");
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");
  const load = document.querySelector(".load");

  list.style.transform = `rotate(${i * deg}deg) translateY(-100vh)`;
  //                    i 단위로 증가   deg 0 45 90 45도

  const pic = list.querySelector(".pic");
  // console.log(pic);
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  i++;

  load.addEventListener("click", (e) => {
    e.currentTarget.closet("article").querySelector(".pic").classList.add("on");
  });

  play.addEventListener("click", (e) => {
    e.currentTarget.closet("article").querySelector(".pic").classList.add("on");
    //              가장가까이에 있는

    e.currentTarget.closet("article").querySelector("audio").load();
    e.currentTarget.closet("article").querySelector("audio").play();
  });
});
