const articles = document.querySelectorAll("article");
// console.log(articles);

// 들어온다
articles.forEach((article) => {
  article.addEventListener("mouseenter", (event) => {
    event.target.querySelector("video").play();
    console.log("video");
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(event);
  });

  //떠난다.
  article.addEventListener("mouseleave", (event) => {
    event.target.querySelector("video").pause();
    console.log("video");
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(event);
  });
});
/*

마우스 오버 - 마우스 엔터 : 이벤트가 똑같이 일어남

이벤트 버블링 : 이벤트가 버블이 거품이 위로 올라감 언제 필요함 네이버 뮤직 플레이 리스트  할 경우 사용됨.
이벤트 드릴링 : 밑을 뚫고 들어감 

이벤트가 5번씩 뜀 마우스 오버하니~  문제가 생겼을 경우


*/
