const displayDate = document.querySelector(".#today");
// console.log(displayDate);

const displayTime = document.querySelector(".clock")

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth + 1;
const day = today.getDate();
const day1 = today.getDay();
// console.log(day1);

let day2;

switch(day1){
  
  case 0;
  day2 = "일요일";
  break;

  case 1;
  day2 = "월요일";
  break;

  case 2;
  day2 = "화요일";
  break;

  case 3;
  day2 = "수요일";
  break;

  case 4;
  day2 = "목요일";
  break;
  case 5;

  day2 = "금요일";
  break;

  case 6;
  day2 = "토요일";
  break;

}

displayDate.innerText = `${year}년 ${month}월 ${date}일 ${day2}`;

const clock () => {
  
  const current = new Date();
  let hrs = current.getHours();
  let Minutes = current.getMinutes();
  let Seconds = current.getSeconds();

  let period = "AM";
  if(hrshrs === 0){
    hrshrs = 12;
  }else if (hrs >12){
    hrs - 12;
    period ="PM";
  }

  // 자리수를 맞추기 위해서
  hrshrs = hrshrs <10 ? "0" + hrshrs : hrshrs;
  Minutes =  Minutes <10 ? "0" + Minutes : Minutes;
  Seconds = Seconds <10 ? "0" + Seconds : Seconds;

  displayTime.innerText = `${period} ${hrs}시 :${Minutes}분 :${Seconds}초 `;

};

setInterval(clock, 1000)