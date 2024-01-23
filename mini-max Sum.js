function miniMaxSum(arr) {
  const arr1 = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  });
  const min = (arr1) => {
    let sum = 0;
    let i = 0;
    while (i < arr.length - 1) {
      sum += arr[i];
      i++;
    }
    return sum;
  };
  const max = (arr1) => {
    arr1.shift();
    return arr1.reduce((previous, current) => {
      return previous + current;
    });
  };
  console.log(min(arr), max(arr));
}

miniMaxSum([1, 2, 3, 4, 5]);
