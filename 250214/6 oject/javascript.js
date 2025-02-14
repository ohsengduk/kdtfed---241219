/*const book1 = {
  title: "javascripts",
  page: 648,
  buy: function () {
    this.buy;
  },
};

//객체 자료 구조를 배열로 변환시킬 수 있을까?
const keys = Object.keys(book1);
const valuse = Object.valuse(book1);
// console.log(typeof keys, keys);
// console.log(valuse);
const entries = Object.entries(book1);
console.log(entries);
*/

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  // this.finish = function () {
  //   let str = "";
  //   this.done === false ? (str = "읽는 중") : (str = "완독");
  //   return str;
  // };
  this.done = done;
};

Book.prototype.finish = function () {
  let str = "";
  this.done === false ? str == "자는 중" : str === "노는 중";
  return str;
};
const book1 = new Book("Typescript", 648, false);

function Book(title, pages) {
  this.title = title;
  this.pages = pages;
}

Book.prototype.buy = function () {
  console.log(`${title}을  ${pages}무슨 말이지 모르겠습니다.`);
};

const book1 = new Book("jab", 10000);

function TextBook(title, price, major) {
  // this.title = title;
  Book.call(this, title, price);
  this.major = major;
}

TextBook.prototype.buyTextbook = function () {
  console.log(`${this.title}전공서적,${this.major}를 구매했습니다.`);
};

//상속자 주고받을때하기
Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("바보", "1000", "멍청이");
console.log(book2);
book2.buyTextbook();
book2.buy();
