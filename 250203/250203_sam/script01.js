const button = document.querySelector("#btn");
// console.log(button);

const showPrice = () => {
  // console.log("할인가격");
  const originPrice = Number(document.querySelector("#origin-price").value);
  const rate = Number(document.querySelector("#rate").value);

  // console.log(originPrice, rate);

  const savedPrice = originprice * (rate / 100);
  const resultPrice = originPrice - savedPrice;

  // console.log(resultPrice);

  document.querySelector(
    "#result"
  ).innerText = `할인된 금액은 ${resultPrice}입니다.`;
};
button.addEventListener("click", showPrice);
