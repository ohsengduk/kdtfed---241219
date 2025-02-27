/*
문자열

substring(), slice() => 문자열 안에 있는 문자를 추출하고자 할때, 사용가능한 메서드 함수 공통점: 인자값은 해당 문자열 내 시작하는 문자의 인덱스 의미 
두번째 인자값은 찾아고자 하는 문자열의 인덱스 +1 => 차이점 : slice()는 문자열의 뒤에서부터 문자를 찾아 올수 있도록 하는 - =음수값을 사용 할수 있었음.  substring() 음수 사용 불가!!! 



*/

const subjects = ["html", "css", "js", "ts", "react"];
console.log(subjects.splice(2.3)); // 원본 값의 데이터를 같이 바꾼다.

const colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2)); //원본 값을 건들지 않고 추출한다.
