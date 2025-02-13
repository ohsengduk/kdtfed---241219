const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");

const btn =document.querySelector("#btn";)

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const age = document.querySelector("#age");

// console.log(age);

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 
${today.getHours()}시  ${today.getMinutes()}분 현재 🎃`;



btn.addEventListener("click", (e) => {
  e.preventDefault();

  // const myyear = birthYear.Value;
  const birthYear = new Date(
    birthYear.valueOf, 
    birthMonth.value -1, 
    birthDate.value
  );

  const passed = today.getTime() - birtDay.getTime();
  const passedDays = Math.floor(passed/ (24 * 60 *60 * 1000));
  const passdHours = Math.floor(passed / (24 * 60 *60 * 1000));
  const passdage = Math.floor(passed / (24 * 60 *60 * 1000)/365) +1;

  resultDays.innerText = `날짜로는 ${passedDays}일이 흐르고`
  resultHours.innerText = `시간으로는 ${passedDays}시간이 흐르고`
  age.innerText = `제 나이는 ${passedDays}세 입니다`
});
