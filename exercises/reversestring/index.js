// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*
  #1
  const arr = str.split('').reverse().join('')
  return arr*/

  /*const lenth = str.length;
  var result = '';
  for (var i=lenth-1; i>-1;i--){
    result = result+ str[i]
  } 
  return result
  */

  /** 
  let result = '';
  for(let character of str){
    result = character+result;
  }
  return result
  */

    return str.split('').reduce(
      (reversed, character)=> character + reversed
    ,'');

}

module.exports = reverse;
