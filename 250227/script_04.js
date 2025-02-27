const button = document.querySelector("button"),
  result = document.querySelector("#result");

// console.log(button, result);

function* train() {
  yield "판교";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "세종대왕릉";
  yield "여주";
}

const gyeonggang = train();

button.addEventListener("click", () => {
  let.current = gyeonggang.next();

  // console.log(current);

  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점";
    button.setAttribute("disabled", "disabled");
  }
});
