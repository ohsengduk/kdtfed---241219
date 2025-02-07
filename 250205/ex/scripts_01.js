//console.log(document.querySelectorAll("p")[1]);
const orderBtn = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
// console.log("#orderInfo");

orderBtn.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const txtNode = document.createTextNode(title.innerText);

  // console.log(title);

  newH.style.fontSize = "5rem";
  newH.style.color = "skyblue";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");

  srcNode.value =
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b24c79dc-427b-4722-9e0c-2ca66c064ecf/G.T.+HUSTLE+3+EP+OLY.png";

  newImg.setAttributeNode(srcNode); //위치 순서가 중요함

  newH.appendChild(txtNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});

const title = document.querySelector("#title");
// console.log(title);

title.addEventListener("click", function () {
  this.parentNode.removeChild(this);
  // console.log(this.parentNode);
  // this.removeChild(this);
  // this.remove();
});
