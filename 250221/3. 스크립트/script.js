// 사용자에게 문자를 받아 보려고 한다.
// const string = prompt("사용자에게 입력 값을 주세요"); //첫번재 문자열만 대 문자로 바꾸고 싶다.

// const firstCh = string[0].toLocaleLowerCase();
// const remainStr = string.slice(1);
// const result = firstCh + remainStr;

// 문자열을 받아서  첫번째 값만 대문자로 한다

// split() => 문자열을 배열로 바꿔주는 역할을 한다   => [....]
// join() => 배열을 문자열로 바꿔저는 역할을 한다.
// conscat() => 서로 다른 두개의 배열 혹은 유사배열을 1개의 배열로 합칠 때, => 전개 연산자 구분을 사용한다. [...] 무엇가를 풀어 헤치는 역할을 한다.

const result = [string[0].toUpperCase(), ...string.slice(1)].join(""); //배열은 메서드 함수들이 많다.
document.write(result);

// {/* <title>문자열과 & 배열</title> */}
