// 중복되는 값을 허용할 것인가, 허용하지 않은 것인가!!
// Map() => 값을 추가하고자 할때, set()
// Map => 객체와 배열의 장점만을 추출을 해 왔음
// Set => 배열처럼 단일 값으로만 내부 요소를 정의!!!

const numSet1 = new Set();

numSet1.add("one").add("two").add("three");

console.log(numSet1.has("four"));
console.log(numSet1.has("three"));
console.log(numSet1.size);

console.log(numSet1.keys());
console.log(numSet1.values());
console.log(numSet1.entries());

numSet1.delete("three");
console.log(numSet1);

numSet1.clear();
console.log(numSet1);
