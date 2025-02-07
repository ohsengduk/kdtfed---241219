// alert("테스트");
// 사용자가 스크롤을 내렸을때, header 배경 컬러  // banner height를 변경 => 가상 클랙스 적용
// 사용자가 지금 스크롤을 내렸어
// 사용자가 스크롤을 내렸으닌깐은
// 빨리 엑티브라는 클래스를 적용시켜
// 해더가 누군데? 그러면 어디서 스크롤 내렸어~
// 해더는 html 안에서 header라는 태그를 사용하고 있는 아이야
// 스크롤은 오른쪽에 있음 스크롤이라는 아이는 브라우져가 갖고 있는 요소야~브라우저만 스크롤의 상태를 알고 있다.
// 그러면 스크롤상태를 브라우져에게 물어봐야한다.
//  엉 하고 응답이 와야한다.

window.addEventListener("scroll", () => {
  // alert("안녕!나는 스크롤이야~");

  if (window.scrollY > 50) {
    document.querySelector("header").classList.all("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});
