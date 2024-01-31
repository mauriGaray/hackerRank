function lonelyinteger(a) {
  let lonely = 0;
  for (let i = 0; i < a.length; i++) {
    let array = a.filter((item) => {
      return item === a[i];
    });
    if (array.length === 1) {
      lonely = a[i];
    }
  }

  console.log(lonely);
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
