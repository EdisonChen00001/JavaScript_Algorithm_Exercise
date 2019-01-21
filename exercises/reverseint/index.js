// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if(n == 0){
      return 0
  }
  if (n > 0) {
    let result1 = n
      .toString()
      .split("")
      .reverse()
      .join("")
    result1 = parseInt(result1);
    return result1;
  } else if(n <0){
    n = n*(-1);
    let result2 = n
      .toString()
      .split("")
      .reverse()
      .join("");
    result2 = parseInt(result2);
    result2 = result2 * -1;
    return result2;
  }
}

module.exports = reverseInt;
