const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const container = document.querySelector("#container");
//console.log(container); // 값을 가져오는지 확인 할 수 있다.

const arrows = document.querySelectorAll(".arrow");
// console.log("arrows");

const newvideo = document.createElement("video");
//const widthVideo = document.createAttribute("width");
//const heightVideo = document.createAttribute("height");

const srcVideo = document.createAttribute("src");
const autoVideo = document.createAttribute("autoplay");

//widthVideo.value = "700";
//heightVideo.value = "400";

//newvideo.setAttributeNode(widthVideo);
//newvideo.setAttributeNode(heightVideo);

srcVideo.value = `./${videos[0]}`;
newvideo.setAttributeNode(srcVideo);
newvideo.setAttributeNode(autoVideo);
container.appendChild(newvideo);

newvideo.addEventListener("click", function () {
  if (this.paused) this.play(); //참, 거짓의 속성
  else this.pause(); //메서드 함수 실행의 함수
});

let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    // console.log(e);

    if (e.target.id === "left") {
      i--;

      //중첩if 조건문
      if (i < 0) {
        i = videos.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    }
    srcVideo.value = `./${videos[i]}`;
  });
});
