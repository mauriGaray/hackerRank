function processData(input) {
  let lines = input.trim().split("\n");
  let output = "";

  for (let line of lines) {
    let [operation, type, words] = line.split(";");

    switch (operation) {
      case "S":
        output += splitCamelCase(words) + "\n";
        break;
      case "C":
        output += combineCamelCase(words, type) + "\n";
        break;
    }
  }

  function splitCamelCase(input) {
    let parts = input.match(/[a-z]+|[A-Z][a-z]*/g);
    console.log(parts);
    return parts.map((word) => word.toLowerCase()).join(" ");
  }

  function combineCamelCase(input, type) {
    let words = input.split(" ");
    console.log(words);
    if (type === "V" || type === "M") {
      let firstWord = words.shift();
      return (
        firstWord +
        words
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("") +
        (type === "M" ? "()" : "")
      );
    } else {
      return words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    }
  }
  console.log(output.trim());
}
let input = `
C;V;can of coke
S;M;sweatTea()
S;V;epsonPrinter
C;M;santa claus
C;C;mirror
`;

let output = processData(input);
