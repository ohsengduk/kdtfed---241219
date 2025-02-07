const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
// console.log(author);
const booklist = document.querySelector("#booklist"); // 가져와서 변수에 넣는다

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("테스트야 preventDefaul가 적용되었는지 확인 하는거야 ");

  // console.log(title.Value, author.value);   //undefined뜸 물어보기

  if (title.value === "" || author.value === "");
  else {
    // alert("정보를 입력해주세요!"); //예외 조항 처리
    const liItem = document.createElement("li");
    liItem.innerHTML = `${title.value} -${author.value}<span>삭제</span>`;

    booklist.appendChild(liItem);

    title.value = "";
    author.value = "";

    const delButtons = document.querySelectorAll("span");
    delButtons.forEach((delButton) => {
      delButton.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    });
  }
});
