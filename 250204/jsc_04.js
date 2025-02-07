const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
  console.log(e); //개발자 도구에서 들어가서 값을 확인 할 수 있다.
  // alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
});
