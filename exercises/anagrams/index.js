// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    strA = stringA.replace(/[^\w]/g,"").toLowerCase();
    strB = stringB.replace(/[^\w]/g,"").toLowerCase();
    listA = {};
    listB = {};
    for(let element of stringA){
        if(element in listA){
            listA[element]++;
        }else{
            listA[element] = 1;
        }
    }
    for(let element of stringB){
        if(element in listB){
            listB[element]++;
        }else{
            listB[element] = 1;
        }
    }

    for(let element in listA){
        if(element in listB){
          if(listA[element] !== listB[element]){
            return false
          }
        }else{
          return false
        }
      }
  
    for(let element in listB){
        if(element in listA){
          if(listA[element] !== listB[element]){
            return false
          }
        }else{
          return false
        }
      }

    return true
}

module.exports = anagrams;
