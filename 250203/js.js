// console.log(document.querySelector("#order-name").value);

const fuitItems = document.querySelector("#items");
// console.log(fuitItems);

const dispalyfruit = () => {
  // console.log("과일선택");

  const selectedText = fruitItems.options[fuitItems.selectedIndex].innerText;
  alert(``);
};

fuitItems.addEventListener("change", dispalyfruit);
