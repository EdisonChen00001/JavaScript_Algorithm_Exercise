// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*
  soultion 1 
  len = str.length;
  result = "";
  for (var i = len - 1; i > -1; i--) {
    result += str[i];
  }
  return result;
  */

  /*
  soultion    into array -> reverse() --> join("") array
  str = str.split("").reverse().join("")
  return str
  */

  /*
  soultion 3
  result = ""
  for (let character of str){

    result = character + result
  }
  return result
  */

  /*reduce way*/
  const reducer = (a , b) => b+a
  str = str.split("").reduce(reducer)
  return str
}

module.exports = reverse;
