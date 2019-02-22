// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// This does not solve solution. It just sorts our letters into a key and tracks the number of times the number repeats in the keys value
// Solution 1:
// 
// Solution 2:
// function maxChar(str) {
//     const string = 'Hello There!';
//     const letters = {};
//     for (let letter in letters) {
//         letters[letter] = letters[letter] + 1 || 1;
//     }
//     return letters;
// }

// function maxChar(str) {
//     const listOfLetters = {};
//     let maxNum = 0;
//     let currentLetter = '';

//     for (let letter of str) {
//         if (listOfLetters[letter]) {
//             listOfLetters[letter]++;
//         } else {
//             listOfLetters[letter] = 1;
//         }
//     }

//     for (let letter in listOfLetters) {
//         if (listOfLetters[letter] > maxNum) {
//             maxNum = listOfLetters[letter];
//             currentLetter = letter;
//         }
//     }
//     return currentLetter;
// }

function maxChar(str) {

    let obj = {};
    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1;
        } else {
            obj[str[i]] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] > temp) {
            temp = key;
        }
    }

    return temp;
}
console.log(maxChar('ab1c1d1e1f1g1'));

module.exports = maxChar;

