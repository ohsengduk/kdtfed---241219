const email = document.querySelector("input[type='email']");
const button = document.querySelector("input[type='button']");
// // console.log(button);
// // console.log(email);

const result = document.querySelector("#result");

// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (email.value !== "") {
//     //문자열 자체를 의미한다
//     let userName = email.value.split("@")[0];
//     userName = userName.slice(0, 3); // 3개의 문자열만 찾아오세요~~ 해서
//     let domain = email.value.split("@")[1];

//     result.innerText = `${userName}*** @${domain}`; // 값을 임의로 넣음    }*** @$ 임의 값으로 감추다
//   }
// });

// ===========================
button.addEventListener("click", () => {
  // e.preventDefault();
  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let domain = email.value.split("@")[1];

    let half = userName.length / 2;
    userName = userName.slice(0, userName.length - half);

    // console.log(userName, domain);
    result.innerText = `${userName}*** @${domain}`;
    email.value = "";
  }
});
