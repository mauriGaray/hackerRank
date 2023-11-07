function breakingRecords(scores) {
  let max = 0;
  let min = 0;
  let maximo = scores[0];
  let minimo = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maximo) {
      max++;
      maximo = scores[i];
    }
    if (scores[i] < minimo) {
      min++;
      minimo = scores[i];
    }
  }

  console.log([max, min]);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
