function capToFront(str) {
  let arr = str.split("");
  let resultCapital = [];
  let resultLower = [];
  arr.forEach((w) => {
    if (w === w.toUpperCase()) {
      resultCapital.push(w);
    } else {
      resultLower.push(w);
    }
  });

  return resultCapital.concat(resultLower).join("");
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
