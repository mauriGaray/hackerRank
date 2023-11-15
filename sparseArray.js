function matchingStrings(strings, queries) {
  let result = [];
  queries.map((item) => {
    if (strings.includes(item)) {
      let index = queries.indexOf(item);
      result[index]++;
    }
  });
}
