function processData(input) {
  let [operation, type, word] = input.split(";");
  console.log(word);
  if (operation === "S") {
    if (type === "M") {
      word = word.split("()").join(" ");
    }
    let words = word
      .split(/(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join(" ");
    console.log(words);
  } else {
  }
}

processData("S;C;OrangeHighlighter");
