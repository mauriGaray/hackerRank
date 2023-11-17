function flippingBits(n) {
  // Write your code here
  let value = n.toString(2).padStart(32, 0);
  let chain = value.split("");
  let result = chain.map((item) => {
    return item === "0" ? (item = "1") : (item = "0");
  });

  console.log(parseInt(result.join(""), 2));
}

flippingBits(3);
