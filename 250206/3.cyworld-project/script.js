//버튼 이벤트
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");

// console.log(menuHome, menuGame, menuJukebox);

const constFrame = document.querySelector("#contentFrame");

const getChaet = () => {
  constFrame.setAttribute("src", "./game.html");
  menuGame.style = "background:#fff; color:#000";
  menuJukebox.style = "background:#55b2es; color:#fff";
  menuHome.style = "background:#55b2es; color:#fff";
};

const jukebox = () => {
  constFrame.setAttribute("src", "./jukebox.html");
  menuJukebox.style = "background:#fff; color:#000";
  menuGame.style = "background:#55b2es; color:#fff";
  menuHome.style = "background:#55b2es; color:#fff";
};

const Homegogo = () => {
  constFrame.setAttribute("src", "./home.html");
  menuHome.style = "background:#fff; color:#000";
  menuJukebox.style = "background:#55b2es; color:#fff";
  menuGame.style = "background:#55b2es; color:#fff";
};

menuGame.addEventListener("click", getChaet);
menuJukebox.addEventListener("click", jukebox);
menuHome.addEventListener("click", Homegogo);

//카운트 이벤트: 쿠키는 기본적으로 날짜 정보데이터가 필요하다
//날짜 생성함수
const getfromatedDate = () => {
  const date = new Date();
  // console.log(date);

  const year = date.getFullYear();
  // console.log(year);

  const month = "0" + (date.getMonth() + 1);
  // console.log(month); //배열의 값으로 1월이 0월로 인식을 한다. 그래서 + 1을 해 줬야지만 정확한 날짜 값을 인식할 수 있다.

  const day = "0" + date.getDate();
  console.log(day);

  // console.log(year, month, day);

  return `${year}-${month}-${day}`;
};

const todayDate = getfromatedDate();
// console.log(todayDate);

const dailyCookiName = `pageHit_${todayDate}`; // 이게 쿠키의 값이 됨

const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);
const expireDatestring = expireDate.toGMTString();

const cookieval = (cookiName) => {
  const thisCookie = document.cookie.split(";");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookiName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};
//하루
let dailyHitCt = parseInt(cookieval(dailyCookiName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
dailyHitCt++;

document.cookie = `${dailyCookiName}=${dailyHitCt}; expires=${expireDatestring}`;

document.querySelector(".zero").innerText = dailyHitCt;
expires = `${expireDatestring}`;

//토탈
let totalH = parseInt(cookieval("totalpage"));
if (isNaN(totalH)) {
  totalH = 0;

  totalH++;
  document.cookie = `totalpage =${totalH}; expores=fri 31 Dec 999999 23:59:59 GMT`;
}

document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = dailyHitCt;

/*
쿠키값은 어떻게 생겼을까?

      "쿠키네임=쿠키값; expires=만료날짜"
"pageHit_2025-02-07=5; expires=2025-02-08"
*/

// console.log(dailyCookiName);
// console.log(expireDatestring);
