const charater = document.querySelector(".charater");
// console.log(charater);

let degree = 0;

const loop = () => {
  const rotation = degree * (Math.PI / 180);
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  //코사인 값 이동 : 위드
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation); //사인 값 이동 : 높이값

  charater.style.left = `${targetX}px`; // X값이동
  charater.style.top = `${targetY}px`; //위치 값 이동

  degree += 1; //1도씩 무한으로 움직이다.

  requestAnimationFrame(loop);
};

loop();
