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
    let joinStrA = stringA.split(" ").join("").toLowerCase();
    let joinStrB = stringB.split(" ").join("").toLowerCase();

    const objA = {};

    if (joinStrA.length !== joinStrB.length) {
        return false;
    }

    for (let i = 0; i < joinStrA.length; i++) {
        letter = joinStrA[i];
        if (objA[letter]) {
            objA[letter] += 1;
        } else {
            objA[letter] = 1;
        }
    }

    for (let i = 0; i < joinStrB.length; i++) {
        letter = joinStrB[i];
        if (!objA[letter]) {
            return false;
        } else {
            objA[letter] -= 1;
        }
    }
    return true;

}

// console.log(anagrams('Rail safety', 'Faary tales'));

module.exports = anagrams;
