function divisibleSumPairs(n, k, ar) {
  if (
    typeof n !== "number" ||
    typeof k !== "number" ||
    !Array.isArray(ar) ||
    !ar.every(Number.isInteger)
  ) {
    throw new Error("Invalid input parameters");
  }

  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        result++;
      }
    }
  }
  console.log(result);
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
