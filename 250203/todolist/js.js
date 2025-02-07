/*

const accept = document.querySelector("input[type='submit']");
 // console.log(accept);

 accept.addEventListener("click", (event) => {
   event.preventDefault();
   console.log("click");
 });

 */

const form = document.querySelector("form");
const userInput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");

let todos = [];
const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;
  target.remove();

  // console.log("삭제");
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    const delItem = (envet) => {
      const target = envet.target.parentElement;
      todos = todos.filter((todo) => todo.id != target.id);
      const test = todos.forEach((todo) => typeof todo.id);
      // console.log(typeof target.id);

      save();
      target.remove();
    };

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.append(span, button);
    li.id = todo.id;
    ul.append(li);
  }
};

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: userInput.value,
  };

  // userInput.value;
  todos.push(todo);
  addItem(todo);

  save();
  userInput.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();
form.addEventListener("submit", handler);

// window.localStorage.setItem("hello", "world");
// const myData = localStorage.getItem("hello");
