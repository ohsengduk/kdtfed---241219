//사용자에게 어떤 숫자를 받을 예정 입니다.
//그 숫자가 소수인지 아닌지를 판별하는 프로그램 제작!!
//소수 => 소수점 x / 1과 본인 자신만 나눌 수 있는 숫자 = 소수

const number = parseInt(prompt("자연수를 입력하세요!"));
let isprime; 

if (!isNaN(number)) {
  // console.log("숫자입니다.");
  if (number === 0 || number === 1) {
    alert(`${number}는 소수도 합성수도 아닙니다.`);
    location.reload();
  }
  isprime.reload();
} else if (number === 2) {
  // console.log("숫자가 아닙니다.");
  alert(`${number}는 소수가입니다.`);
}else{
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      isprime = false;
      break;

      // alert("소수아님 나눠서 떨어지는 것이 없어서");
    }else{
      isprime = true;
      // alert("소수");
    }
      alert(`${number}소수입니다.`);
    }
  }


  if(isprime){
    alert(`${number}는 소수입니다`);
  }else{
    alert(`${number}는 소수가 아닙니다`);
  } else {
  alert("숫자가 아닙니다.");
  location.reload();
}



// console.log(number, typeof number);
