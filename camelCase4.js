function processData(input) {
  let [operation, type, word] = input.split(";");
  console.log(operation, type, word);
  if (operation === "S") {
    let word1 = word.split("()");
    word1 = word1[0].split();
    const regex = /([A-Z])/g;
    word1 = word1[0].split(regex);
    word1[1] = word1[1].toLowerCase();
    console.log(`${word1[0]} ${word1[1]}${word1[2]}`);
  } else {
  }
}

processData("S;V;pictureFrame");
