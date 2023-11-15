function lonelyinteger(a) {
  // Write your code here
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    let array = a.filter((num) => {
      return num === a[i];
    });
    if (array.length === 1) {
      result = a[i];
    }
  }
  if (condition) {
  }
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
