// 1도 = 파이/180
// 12 / 360도 = 각 30도씩 유지

const nums = document.querySelectorAll(".number");
// console.log(nums);

for (let i = 0; i < nums.length; i++) {
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

  const angle = (i + 1) * (Math.PI / 6); //30도 2*3 60도
  const x =
    132 - nums[i].offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2)); //사인
  const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2)); // abs 절대값:   cos 코사인

  if (i + 1 > 6) {
    nums[i].style.right = `${x}px`;
  } else {
    nums[i].style.left = `${x}px`;
  }

  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3)) {
    nums[i].style.top = `${y}px`;
  } else {
    nums[i].style.bottom = `${y}px`;
  }
}

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secoundPointer = document.querySelector("#secound");
// console.log(hourPointer, minutePointer, secoundPointer);

const clock = () => {
  const currentTime = new Date();

  // 초
  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  // 분
  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  // 시
  let hour = currentTime.getHours();
  let hourAngle = hour * 30 + (minute / 60) * 30;
  let hourAngleVamue = `rotate(${hourAngle}deg)`;

  secoundPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleVamue;
};

setInterval(clock, 1000);
