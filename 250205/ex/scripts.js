//console.log(document.querySelectorAll("p")[1]);

const newP = document.createElement("p");
const textNode = document.createTextNode("typescript");

newP.appendChild(textNode);

document.body.appendChild(newP);
