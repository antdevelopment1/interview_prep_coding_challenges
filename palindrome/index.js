// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Solution 1:
// function palindrome(str) {

//     const rev = str.split('').reverse().join('');
   
//     return str === rev;
// }

// Solution 2:
// Strings dont have access to the every helper function. That is only arrays.
// With .every just like .map or filter was can pass an index value as the second parameter.
function palindrome(str) {
   return str.split('').every((letter, index) => {
        return letter === str[str.length - index - 1];
    }); 
}
module.exports = palindrome;
