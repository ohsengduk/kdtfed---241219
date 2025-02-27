// alert("dfdf");

const productInfo = "./db/json";

fetch(productInfo)

//제이슨 데이터를 찾아옮
  .then((response) => console.log(response))
  .then((date) => {
    let idCounter = Date.now();
    console.log(idCounter
      const products = {
        data: date.date.map((item)=>{{
        ...item,
        id: idCounter++,
        }}),
      }
    );
    console.log(products);

    // 찾아온 제이슨 데이터를 활용해서 원하는 Dom 만들기 함수 생성
    const createItem = () =>{};


    //제이슨 데이터 찾아온 후 DOM 생성 및 브라우져 출력
    const importDate = () => { 
      products.data.map((product)=> {
        createItem(product);
      })
    }

    importDate()
  });
