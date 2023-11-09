function processData(input) {
  //Enter your code here
  const lines = input.trim().split("\n");
  for (let line of lines) {
    const [operation, type, value] = line.split(";");
    if (operation === "S") {
      if (type === "M" || type === "C" || type === "V") {
        let words = value
          .split(/(?=[A-Z])/)
          .map((word) => word.toLowerCase())
          .join(" ");
        console.log(words);
      }
    } else if (operation === "C") {
      const words = value.split(" ");
      let result = "";
      if (type === "V") {
        result = words
          .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
          .join("");
      } else if (type === "C") {
        result = words
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("");
      } else if (type === "M") {
        result = words[0].charAt(0).toLowerCase() + words[0].slice(1);
        result += words
          .slice(1)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("");
        result += "()";
      }
      console.log(result);
    }
  }
}
processData("S;C;LargeSoftwareBook");
