// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution #1
function reverse(str) {

//Takes a string and uses the split method to split each character into an array, reverse the order, and joins the result back together.
  return str.split("").reverse().join("");

}

// Solution #2
function reverse2(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// Solution #3
function reverse3(str) {
  return str.split('').reduce(function(reversed, character) {
    return character + reversed;
  }, '');
}

// or
// function reverse3(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }



module.exports = reverse;
module.exports = reverse2;
module.exports = reverse3;
