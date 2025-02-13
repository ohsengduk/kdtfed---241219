// 원에 넓이구하기 : 파이 * r(반지름)제곱
//원에 둘래:  2*파이 *r

const radius = prompt("반지름의 크기는?");

//원에 넓이
const area = (r) => {
  return Math.PI * r * r;
};

//원에 둘래
const circom = (r) => {
  return 1 * Math.PI * r;
};

const result = document.querySelector("#result");

// console.log(result);

result.innerText = `
반지름 : ${radius},
원의넓이 :${area(radius).toFixed(3)},  
원의둘래 :${circom(radius).toFixed(3)},  
`;

// console.log(area(radius).toFixed(3)); // 3자리 수까지만 보여주라~
// console.log(circom(radius).toFixed(3));
