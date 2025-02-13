const playButton = document.querySelector(".play-pause");
const player = document.querySelector("#music-player");

const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
const volumeBar = document.querySelector("input[type='range']");
const fullButton = document.querySelector(".fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");

// console.log(player); 잘 찾아 왔는지 확인

const play = () => {
  playButton.innerText = " || ";
  video.play();
};

const pause = () => {
  playButton.innerText = " ► ";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

const formatting = (time) => {
  // 1시간 60분
  // 1분 60초
  // 1초
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth;
  // console.log(newPosition);
  progressPointer.style.left = `${newPosition}px`;
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

//함수 선언 const player = document.querySelector("#music-player");
const videoPoint = (e) => {
  console.log(e.pageX);
  console.log(player.offsetLeft); // 문서 전체어시 비디오의 값위치 2개의 값을 알려줌
  const mouseX = e.pageX - player.offsetLeft;
  // console.log(mouseX);

  const progressBarWidth = progressCover.clientWidth; // 좌표값
  const duration = video.duration; //전체 영상의 총 길이
  const clickedTime = (mouseX / progressBarWidth) * duration;

  video.currentTime = clickedTime; //영상의 현재 시간때로 변경해 준다.
};

playButton.addEventListener("click", togglePlay);
// video.addEventListener("click", togglePlay); //fullscreen시 해지를 해 줬야지 된다.
video.addEventListener("pointerdown", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", videoPoint);
rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});
fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});

// fullscreen
document.addEventListener("fullscreenchange", () => {
  // console.log(document.fullscreenElement);
  if (document.fullscreenElement) {
    document.addEventListener("pointerdown", togglePlay);
  } else {
    document.removeEventListener("pointerdown", togglePlay);
    video.addEventListener("pointerdown", togglePlay); //브라우져 호환
  }
});
