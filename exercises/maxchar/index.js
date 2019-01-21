// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const arr = {}
   

    for (let character of str){
        if(character in arr){
            arr[character] ++
        }else{
            arr[character] = 1
        }
    }

let  max = 0;
let  maxChar = '';

    for(let char in arr){
        if(arr[char]> max){
            max = arr[char];
            maxChar = char;
        }
    }
    return maxChar
}

module.exports = maxChar;
