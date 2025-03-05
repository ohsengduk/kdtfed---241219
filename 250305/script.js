const quotesURL = "https://dummyjson.com/quotes";
const result = document.querySelector("#result");
// console.log(result);

// ((err)=>console.log(err);)  ==    (console.log)  생략이 가능하다. 동일 하다면
fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //내장 객체에서 함수를 사용할 때 가능하다.

    const random = Math.floor(Math.random() * 30);
    result.querySelector(".auote").innerText = data.qutes[random].quote;
    result.querySelector(
      ".author"
    ).innerText = `- ${data.qutes[random].quothor}`;
  })
  .catch(console.log);
