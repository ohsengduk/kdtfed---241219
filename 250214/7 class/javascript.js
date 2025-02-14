class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매함`);
  }
}

const book1 = new BookC("자료구조", 150000);
book1.buy();

class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  buyTextBook() {
    console.log(`${this.major} 서적, ${this.title} 피곤하다`);
  }
}

const book2 = new TextBookC("인공지공", 5000, "졸린데");
console.log(book2);
book2.buyTextBook(); // ✅ 올바른 메서드 호출
book2.buy(); // 부모 클래스 메서드 호출
