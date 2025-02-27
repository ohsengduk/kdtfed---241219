const member1 = ["HTML", "CSS"],
  member2 = ["CSS", "JAVASCRIPT", "React"],
  member3 = ["JAVASCRIPT", "TYPESCRIPT"];

const subjects = [...member1, ...member2, ...member3];
// console.log(subjects);
resultList = new Set();

subjects.forEach((subjects) => {
  resulteList.add(subjects);
});

// console.log(resultList);

const result = document.querySelector("#result");
result.innerHTML = `
   <ul>
      ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
   </ul>
`;
