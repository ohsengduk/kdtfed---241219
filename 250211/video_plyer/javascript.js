const playButton = document.querySelector(".play-pause");
// console.log(playButton);

const video = document.querySelector("video");

const progressCover = document.querySelector(".progress");
// console.log(progressCover); //bar

const volumBar = document.querySelector("input[type='range']");
// console.log(volumBar); //

//전체 화면
const full = document.querySelector(".fullscreenBtn");
// console.log(full);

const rateBtn = document.querySelectorAll(".rate");
// console.log(rateBtn);

const play = () => {
  playButton.innerHTML = " || "; //변경했을 때 || 변경됨
  video.play();
};
const pause = () => {
  playButton.innerHTML = " ▶ "; //다시금 돌아간다.
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause(); //삼항연산자
};

const formatting = (time) => {
  // 1시간 60분
  // 1분 60초
  // 1초
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600); //초로된 값을 시간값으로 나둘때 구했던 [60분 * 60초:단위로움직임 = 3600]

  sec = sec < 10 ? `0${sec}` : sec; //0 숫자사 바뀌어도 덜컹거리지 말라고 해줌.
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updatetime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
  // console.log(current, duration);
  // duration.innerHTML = video.duration;
};

//함수 정의:볼륨에 대한 정의를 할수 있음
const setVolume = (e) => {
  // console.log(e);
  // console.log(video);
  video.volume = e.target.value;
};

const updateProgress = () => {
  const duration = video.duration;
  const ProgressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle"); //원따라가기
  const currentTime = video.currentTime;
  const Percent = (currentTime / duration) * 100; //분자를 분모로 나누기 위해서 총 전체 시간에서 100으로 곱하고
  ProgressBar.style.width = `${Percent}%`;

  const ProgressBarwidth = progressCover.clientWidth; //전체 너비 값을 찾아 온다.
  // console.log(clientWidth);

  const newPosition = (currentTime / duration) * ProgressBarwidth; // 100분율로 만들기 전체 총 넓이의 % 계산하기 전체 총 시간 중에서 현재 경과하고 있는 시간
  //시간에 경과함에 따라 전체 총 시간이 함께 가는...
  // console.log(newPosition);
  progressPointer.style.left = `${newPosition}px`;
};

const setRate = (e) => {
  const { rate } = e.target.dataset; // 객체명과 같은 값으면 구조분배 할당으로 줄 수 있다.
  // console.log(rate);
  video.playbackRate = rate; // 값이 data-rate값을 관여한다.
};

playButton.addEventListener("click", togglePlay); //매개변수 인자 값을 받을 수 없음
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updatetime); //해당 동영상 업데이트
video.addEventListener("timeupdate", updateProgress);

//

rateBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

// 볼륨
volumBar.addEventListener("change", setVolume);

//Fullscreen
full.addEventListener("click", () => {
  video.requestFullscreen();
});
