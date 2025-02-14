const newBook = {
  title: "ja",
  page: 360,
  price: 32000,
  author: "박세진",
  published: "2025-04-22",

  auestion: function () {
    console.log(`${this.author}의 따끈한 신간 도서입니다.`);
  },
};

// newBook.question();

//생성자 함수 특정한 객체를 찍어 내기 위한 함수 생성자 함수는 첫 글자를 대문자로 시작을 한다.
function Book(title, page, price, author, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.question = function () {
    console.log(`${this.author}님의 따끈한 신간 도서입니다.`);
  };
}

//생성자 함수를 만들고 나서 해당 생성자 함수를 사용하고자 할때에는 반드시 new 라는 예약어를 사용한다.
const book1 = new Book("jabascript", "360", "320000", "박세진", "2025-04-22");

console.log(book1);
book1.question();
