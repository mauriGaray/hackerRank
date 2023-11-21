function diagonalDifference(arr) {
  // Write your code here
  let l = arr.length;
  let diff = 0;
  for (let i = 0; i < l; i++) {
    diff += arr[i][i] - arr[i][l - i - 1];
  }
  console.log(Math.abs(diff));
}

diagonalDifference([
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
]);
